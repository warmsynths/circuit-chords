import { get as getVoicing } from '@tonaljs/voicing';
import { Note, Scale } from 'tonal';
import type { ParsedChord } from '../components/chord-input';

export type ScaleMode = 'collapsed' | 'chromatic';
export type PadState = 'dim' | 'lit' | 'active';
export type VoicingMode = 'triad' | 'seventh' | 'spread';
export type PadAnchorMode = 'key' | 'chord';

export interface GridConfig {
  key: string;
  scale: string;
  mode: ScaleMode;
  anchorMode: PadAnchorMode;
}

export interface CircuitPad {
  index: number;
  row: number;
  col: number;
  offset: number;
  note: string;
  label: string;
  state: PadState;
  inChord: boolean;
  isRoot: boolean;
  inScale: boolean;
}

const CHROMATIC_NOTES = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

export const SCALE_OPTIONS = [
  'major',
  'minor',
  'dorian',
  'mixolydian',
  'lydian',
  'phrygian',
  'locrian',
  'harmonic minor',
  'melodic minor',
  'major pentatonic',
  'minor pentatonic',
  'blues',
];

export const KEY_OPTIONS = CHROMATIC_NOTES;
export const VOICING_OPTIONS: VoicingMode[] = ['triad', 'seventh', 'spread'];
export const PAD_ANCHOR_OPTIONS: PadAnchorMode[] = ['key', 'chord'];

const CHROMATIC_ROW_STRIDE = 5;
const COLLAPSED_ROW_STRIDE = 3;

export interface ChordRecipePad {
  note: string;
  row: number;
  col: number;
  index: number;
}

export function buildCircuitGrid(chord: ParsedChord | null, config: GridConfig): CircuitPad[] {
  const anchoredRoot = config.anchorMode === 'chord' ? chord?.tonic ?? config.key : config.key;
  const root = normalizePitchClass(anchoredRoot) ?? 'C';
  const scaleNotes = getScalePitchClasses(config.key, config.scale);
  const orderedScale = buildOrderedScale(root, scaleNotes);
  const chordNotes = new Set((chord?.notes ?? []).map((note) => normalizePitchClass(note)).filter(isDefined));

  return Array.from({ length: 32 }, (_, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    const offset = config.mode === 'collapsed'
      ? col + row * COLLAPSED_ROW_STRIDE
      : col + row * CHROMATIC_ROW_STRIDE;
    const note = config.mode === 'collapsed'
      ? orderedScale[offset % orderedScale.length]
      : getChromaticNote(root, offset);
    const inChord = chordNotes.has(note);
    const isRoot = note === root;
    const inScale = scaleNotes.includes(note);
    let state: PadState = 'dim';

    if (isRoot) {
      state = 'active';
    } else if (inChord) {
      state = 'lit';
    }

    return {
      index,
      row,
      col,
      offset,
      note,
      label: note,
      state,
      inChord,
      isRoot,
      inScale,
    };
  });
}

export function buildChordRecipe(
  chord: ParsedChord | null,
  pads: CircuitPad[],
  voicing: VoicingMode,
  maxPads = 4
): ChordRecipePad[] {
  if (!chord) {
    return [];
  }

  const uniqueTargets = getVoicingTargets(chord, voicing);

  return uniqueTargets
    .map((target, position) => selectPadForVoicing(target, position, pads, voicing))
    .filter((pad): pad is CircuitPad => Boolean(pad))
    .slice(0, maxPads)
    .map((pad) => ({
      note: pad.note,
      row: pad.row,
      col: pad.col,
      index: pad.index,
    }));
}

function getVoicingTargets(chord: ParsedChord, voicing: VoicingMode): string[] {
  const voicedTargets = getVoicingTargetsFromEngine(chord, voicing);
  if (voicedTargets.length > 0) {
    return voicedTargets;
  }

  const degreeToNote = new Map<number, string>();
  const orderedUnique: string[] = [];

  for (let index = 0; index < chord.notes.length; index += 1) {
    const normalized = normalizePitchClass(chord.notes[index]);
    if (!normalized) {
      continue;
    }

    if (!orderedUnique.includes(normalized)) {
      orderedUnique.push(normalized);
    }

    const degree = parseDegree(chord.intervals[index]);
    if (degree !== null && !degreeToNote.has(degree)) {
      degreeToNote.set(degree, normalized);
    }
  }

  const degreePrefs: Record<VoicingMode, number[]> = {
    triad: [1, 3, 5],
    seventh: [1, 3, 5, 7],
    spread: [1, 5, 7, 3],
  };

  const targetCounts: Record<VoicingMode, number> = {
    triad: 3,
    seventh: 4,
    spread: 4,
  };

  const preferred = degreePrefs[voicing]
    .map((degree) => degreeToNote.get(degree))
    .filter((note): note is string => Boolean(note));

  const merged = Array.from(new Set([...preferred, ...orderedUnique]));
  return merged.slice(0, targetCounts[voicing]);
}

function getVoicingTargetsFromEngine(chord: ParsedChord, voicing: VoicingMode): string[] {
  let voiced: string[] = [];

  try {
    const resolved = getVoicing(chord.symbol);
    voiced = Array.isArray(resolved) ? resolved : [];
  } catch {
    voiced = [];
  }

  if (voiced.length === 0 && chord.tonic && chord.quality) {
    try {
      const resolved = getVoicing(`${chord.tonic}${chord.quality}`);
      voiced = Array.isArray(resolved) ? resolved : [];
    } catch {
      voiced = [];
    }
  }

  const pitchClasses = voiced
    .filter((note): note is string => typeof note === 'string')
    .map((note) => normalizePitchClass(note))
    .filter(isDefined);

  const unique = Array.from(new Set(pitchClasses));
  if (unique.length === 0) {
    return [];
  }

  if (voicing === 'triad') {
    return unique.slice(0, 3);
  }

  if (voicing === 'seventh') {
    return unique.slice(0, 4);
  }

  // Spread uses same voiced tones but wider priority order.
  const spreadOrder = [0, 2, 3, 1];
  const spread = spreadOrder
    .map((index) => unique[index])
    .filter((note): note is string => Boolean(note));

  return Array.from(new Set(spread)).slice(0, 4);
}

function selectPadForVoicing(
  target: string,
  position: number,
  pads: CircuitPad[],
  voicing: VoicingMode
): CircuitPad | undefined {
  const candidates = pads
    .filter((pad) => pad.note === target)
    .sort((left, right) => left.offset - right.offset);

  if (candidates.length === 0) {
    return undefined;
  }

  if (voicing === 'spread') {
    const spreadIndex = Math.min(position, candidates.length - 1);
    return candidates[spreadIndex];
  }

  return candidates[0];
}

function parseDegree(interval: string | undefined): number | null {
  if (!interval) {
    return null;
  }

  const match = interval.match(/^(\d+)/);
  if (!match) {
    return null;
  }

  const parsed = Number.parseInt(match[1], 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function getScalePitchClasses(key: string, scaleName: string): string[] {
  const scale = Scale.get(`${key} ${scaleName}`);
  const normalized = scale.notes.map((note) => normalizePitchClass(note)).filter(isDefined);

  if (normalized.length === 0) {
    return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  }

  return Array.from(new Set(normalized));
}

function getChromaticNote(root: string, offset: number): string {
  const sequence = buildChromaticSequence(root);
  return sequence[offset % sequence.length];
}

function buildChromaticSequence(root: string): string[] {
  const rootIndex = CHROMATIC_NOTES.indexOf(root);
  if (rootIndex === -1) {
    return CHROMATIC_NOTES;
  }

  return rotate(CHROMATIC_NOTES, rootIndex);
}

function buildOrderedScale(root: string, scaleNotes: string[]): string[] {
  const rootIndex = CHROMATIC_NOTES.indexOf(root);
  const ordered = scaleNotes
    .slice()
    .sort((left, right) => distanceFromRoot(left, rootIndex) - distanceFromRoot(right, rootIndex));

  if (ordered.length === 0) {
    return buildChromaticSequence(root);
  }

  if (!ordered.includes(root)) {
    return [root, ...ordered];
  }

  return rotate(ordered, ordered.indexOf(root));
}

function distanceFromRoot(note: string, rootIndex: number): number {
  const noteIndex = CHROMATIC_NOTES.indexOf(note);
  if (noteIndex === -1 || rootIndex === -1) {
    return Number.MAX_SAFE_INTEGER;
  }

  return (noteIndex - rootIndex + 12) % 12;
}

function rotate<T>(items: T[], startIndex: number): T[] {
  return [...items.slice(startIndex), ...items.slice(0, startIndex)];
}

function normalizePitchClass(note: string | null | undefined): string | null {
  if (!note) {
    return null;
  }

  const pitchClass = Note.pitchClass(note);
  if (!pitchClass) {
    return null;
  }

  const enharmonic = Note.enharmonic(pitchClass);
  return CHROMATIC_NOTES.includes(enharmonic) ? enharmonic : pitchClass;
}

function isDefined<T>(value: T | null): value is T {
  return value !== null;
}
