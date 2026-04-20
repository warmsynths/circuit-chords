import { get as getVoicing } from '@tonaljs/voicing';
import { Note, Scale } from 'tonal';
import type { ParsedChord } from '../components/chord-input';

/** Grid display mode for note assignment. */
export type ScaleMode = 'collapsed' | 'chromatic';
/** Visual state of pad according to chord/root membership. */
export type PadState = 'dim' | 'lit' | 'active';
/** Chord voicing strategy for selecting playable pad subset. */
export type VoicingMode = 'triad' | 'seventh' | 'spread';
/** Root anchor behavior for mapping pad notes. */
export type PadAnchorMode = 'key' | 'chord';

/**
 * User-selected grid mapping configuration.
 */
export interface GridConfig {
  /** Project key used as mapping anchor or fallback root. */
  key: string;
  /** Selected scale used for collapse mode and in-scale metadata. */
  scale: string;
  /** Active pad mode. */
  mode: ScaleMode;
  /** Defines whether root follows project key or active chord tonic. */
  anchorMode: PadAnchorMode;
}

/**
 * Full visual and musical metadata for one pad in the 4x8 grid.
 */
export interface CircuitPad {
  /** Sequential pad index from 0..31. */
  index: number;
  /** Zero-based row coordinate. */
  row: number;
  /** Zero-based column coordinate. */
  col: number;
  /** Relative melodic offset used for candidate sorting. */
  offset: number;
  /** Pitch class mapped to this pad. Empty string for disabled keyboard slot. */
  note: string;
  /** Display label shown on the pad. */
  label: string;
  /** Visual state for rendering. */
  state: PadState;
  /** Whether mapped note is part of active chord tones. */
  inChord: boolean;
  /** Whether mapped note is current anchor root. */
  isRoot: boolean;
  /** Whether mapped note belongs to selected scale. */
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
const KEYBOARD_BOTTOM_OFFSETS = [0, 2, 4, 5, 7, 9, 11, 12];
const KEYBOARD_TOP_OFFSETS: Array<number | null> = [null, 1, 3, null, 6, 8, 10, null];

/**
 * Minimal pad descriptor for actionable chord voicing recipe.
 */
export interface ChordRecipePad {
  /** Pitch class assigned to selected recipe pad. */
  note: string;
  /** Zero-based row coordinate. */
  row: number;
  /** Zero-based column coordinate. */
  col: number;
  /** Absolute grid index. */
  index: number;
}

/**
 * Builds complete 32-pad grid model for current chord and config.
 *
 * @param chord Active parsed chord or null when no chord selected.
 * @param config Grid mapping configuration.
 * @returns Array of 32 pads with mapped note and visual metadata.
 */
export function buildCircuitGrid(chord: ParsedChord | null, config: GridConfig): CircuitPad[] {
  const anchoredRoot = config.anchorMode === 'chord' ? chord?.tonic ?? config.key : config.key;
  const root = normalizePitchClass(anchoredRoot) ?? 'C';
  const rootIndex = CHROMATIC_NOTES.indexOf(root);
  const scaleNotes = getScalePitchClasses(config.key, config.scale);
  const orderedScale = buildOrderedScale(root, scaleNotes);
  const chordNotes = new Set((chord?.notes ?? []).map((note) => normalizePitchClass(note)).filter(isDefined));

  return Array.from({ length: 32 }, (_, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    const collapsedOffset = col + row * COLLAPSED_ROW_STRIDE;
    const chromaticOffset = col + row * CHROMATIC_ROW_STRIDE;
    const offset = config.mode === 'collapsed'
      ? collapsedOffset
      : chromaticOffset;
    const note = config.mode === 'collapsed'
      ? orderedScale[offset % orderedScale.length]
      : getChromaticKeyboardNote(rootIndex, row, col);
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
      label: note || ' ',
      state,
      inChord,
      isRoot,
      inScale,
    };
  });
}

/**
 * Selects ordered pad targets used to play requested chord voicing.
 *
 * @param chord Active parsed chord.
 * @param pads Current grid model used for candidate search.
 * @param voicing Requested voicing mode.
 * @param maxPads Maximum number of targets to return.
 * @returns Ordered list of pads representing suggested finger presses.
 */
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

/**
 * Derives chord note targets from voicing engine or interval fallback.
 *
 * @param chord Parsed chord data.
 * @param voicing Desired voicing mode.
 * @returns Ordered pitch classes used for recipe selection.
 */
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

/**
 * Attempts voicing extraction through Tonal voicing resolver.
 *
 * @param chord Parsed chord data.
 * @param voicing Desired voicing mode.
 * @returns Pitch classes returned by voicing engine, normalized for grid use.
 */
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

/**
 * Picks best pad candidate for one target note according to voicing strategy.
 *
 * @param target Desired pitch class.
 * @param position Position of target within voicing.
 * @param pads Current grid pads.
 * @param voicing Active voicing mode.
 * @returns Selected pad candidate or undefined if note not present.
 */
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

/**
 * Parses interval degree number from Tonal interval string.
 *
 * @param interval Interval string like 3M or 7m.
 * @returns Degree number, or null if not parseable.
 */
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

/**
 * Resolves scale pitch classes for selected key and scale name.
 *
 * @param key Project key.
 * @param scaleName Scale name from option list.
 * @returns Unique pitch classes in scale (fallback C major set if unresolved).
 */
function getScalePitchClasses(key: string, scaleName: string): string[] {
  const scale = Scale.get(`${key} ${scaleName}`);
  const normalized = scale.notes.map((note) => normalizePitchClass(note)).filter(isDefined);

  if (normalized.length === 0) {
    return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  }

  return Array.from(new Set(normalized));
}

/**
 * Computes chromatic note at semitone offset from root.
 *
 * @param root Root pitch class.
 * @param offset Semitone offset.
 * @returns Pitch class at offset.
 */
function getChromaticNote(root: string, offset: number): string {
  const sequence = buildChromaticSequence(root);
  return sequence[offset % sequence.length];
}

/**
 * Computes keyboard-style chromatic pad note for given row/column.
 *
 * @param rootIndex Index of root in chromatic note array.
 * @param row Zero-based row coordinate.
 * @param col Zero-based column coordinate.
 * @returns Pitch class for active slot or empty string for disabled slot.
 */
function getChromaticKeyboardNote(rootIndex: number, row: number, col: number): string {
  const band = Math.floor(row / 2);
  const octaveOffset = band * 12;
  const inTopRow = row % 2 === 0;
  const keyboardOffset = inTopRow ? KEYBOARD_TOP_OFFSETS[col] : KEYBOARD_BOTTOM_OFFSETS[col];

  if (keyboardOffset === null || rootIndex === -1) {
    return '';
  }

  const semitone = (rootIndex + keyboardOffset + octaveOffset) % 12;
  return CHROMATIC_NOTES[semitone];
}

/**
 * Rotates chromatic sequence so it begins on provided root.
 *
 * @param root Root pitch class.
 * @returns Root-anchored chromatic sequence.
 */
function buildChromaticSequence(root: string): string[] {
  const rootIndex = CHROMATIC_NOTES.indexOf(root);
  if (rootIndex === -1) {
    return CHROMATIC_NOTES;
  }

  return rotate(CHROMATIC_NOTES, rootIndex);
}

/**
 * Orders scale notes from root upward for collapsed mode traversal.
 *
 * @param root Root pitch class.
 * @param scaleNotes Unordered scale pitch classes.
 * @returns Root-first ordered scale cycle.
 */
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

/**
 * Computes ascending semitone distance of note from root index.
 *
 * @param note Pitch class to measure.
 * @param rootIndex Root pitch class index in chromatic array.
 * @returns Distance in semitones or large sentinel when invalid.
 */
function distanceFromRoot(note: string, rootIndex: number): number {
  const noteIndex = CHROMATIC_NOTES.indexOf(note);
  if (noteIndex === -1 || rootIndex === -1) {
    return Number.MAX_SAFE_INTEGER;
  }

  return (noteIndex - rootIndex + 12) % 12;
}

/**
 * Returns rotated copy of an array with given start index.
 *
 * @param items Source array.
 * @param startIndex Rotation start index.
 * @returns New rotated array.
 */
function rotate<T>(items: T[], startIndex: number): T[] {
  return [...items.slice(startIndex), ...items.slice(0, startIndex)];
}

/**
 * Normalizes note to enharmonic pitch class used by grid note palette.
 *
 * @param note Any note string (with or without octave).
 * @returns Supported pitch class or null when conversion fails.
 */
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

/**
 * Type guard that removes nulls from arrays.
 *
 * @param value Candidate value.
 * @returns True when value is non-null.
 */
function isDefined<T>(value: T | null): value is T {
  return value !== null;
}
