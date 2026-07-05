import { Note, Scale, Interval } from 'tonal';
import type { ParsedChord } from './chord-parser';

/** Grid display mode for note assignment. */
export type ScaleMode = 'collapsed' | 'chromatic';
/** Visual state of pad according to chord/root membership. */
export type PadState = 'dim' | 'lit' | 'active' | 'scale';
/** Chord voicing strategy for selecting playable pad subset. */
export type VoicingMode =
  | 'closed'
  | 'open-triad'
  | 'drop2'
  | 'drop3'
  | 'spread'
  | 'octave'
  | 'shell-dominant'
  | 'altered-dominant';

/**
 * User-selected grid mapping configuration.
 */
export interface GridConfig {
  /** Project key used as mapping anchor or fallback root. */
  key: string;
  /** Selected scale used for collapse mode and in-scale metadata. */
  scale: string;
  /** Active pad mode. 'collapsed' = only scale notes; 'chromatic' = keyboard layout. */
  mode: ScaleMode;
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
  /** Full note name with octave for synth playback. */
  midiNote: string;
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

// Scale display labels mapped to Tonal.js scale names
export const SCALE_DISPLAY_NAMES: Record<string, string> = {
  'minor':            'Natural Minor',
  'major':            'Major',
  'dorian':           'Dorian',
  'phrygian':         'Phrygian',
  'mixolydian':       'Mixolydian',
  'melodic minor':    'Melodic Minor',
  'harmonic minor':   'Harmonic Minor',
  'bebop dorian':     'Bebop Dorian',
  'blues':            'Blues',
  'minor pentatonic': 'Minor Pent.',
  'hungarian minor':  'Hungarian Minor',
  'ukrainian dorian': 'Ukrainian Dorian',
  'marva':            'Marva',
  'todi':             'Todi',
  'whole tone':       'Whole Tone',
  'chromatic':        'Chromatic',
};

// Ordered exactly as Circuit Tracks hardware (rows 3+4, left-to-right)
export const SCALE_OPTIONS = [
  'minor',
  'major',
  'dorian',
  'phrygian',
  'mixolydian',
  'melodic minor',
  'harmonic minor',
  'bebop dorian',
  'blues',
  'minor pentatonic',
  'hungarian minor',
  'ukrainian dorian',
  'marva',
  'todi',
  'whole tone',
  'chromatic',
];

export const KEY_OPTIONS = CHROMATIC_NOTES;
export const VOICING_OPTIONS: VoicingMode[] = [
  'closed',
  'open-triad',
  'drop2',
  'drop3',
  'spread',
  'octave',
  'shell-dominant',
  'altered-dominant',
];

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
  // Always anchor to the project key — matches Circuit Tracks hardware behavior.
  const root = normalizePitchClass(config.key) ?? 'C';
  const rootIndex = CHROMATIC_NOTES.indexOf(root);
  const scaleNotes = getScalePitchClasses(config.key, config.scale);
  const orderedScale = buildOrderedScale(root, scaleNotes);
  const chordNotes = new Set((chord?.notes ?? []).map((note) => normalizePitchClass(note)).filter(isDefined));

  // Base octave for MIDI note generation
  const baseOctave = 4;

  // Precompute scale notes with octaves for collapsed mode
  const scaleNotesWithOctaves: string[] = [];
  let currentOctave = baseOctave;
  let prevSemi = -1;
  for (let i = 0; i < 32; i++) {
    const pc = orderedScale[i % orderedScale.length];
    const semi = CHROMATIC_NOTES.indexOf(pc);
    if (prevSemi !== -1 && semi < prevSemi) {
      currentOctave++;
    }
    scaleNotesWithOctaves.push(`${pc}${currentOctave}`);
    prevSemi = semi;
  }

  return Array.from({ length: 32 }, (_, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;

    // Invert row vertically for physical note mapping.
    // row = 0 (top of screen) -> physicalRow = 3 (highest pitches).
    // row = 3 (bottom of screen) -> physicalRow = 0 (lowest pitches).
    const physicalRow = 3 - row;

    const collapsedOffset = col + physicalRow * COLLAPSED_ROW_STRIDE;
    const chromaticOffset = col + physicalRow * CHROMATIC_ROW_STRIDE;
    const offset = config.mode === 'collapsed'
      ? collapsedOffset
      : chromaticOffset;

    let note = '';
    let midiNote = '';

    if (config.mode === 'collapsed') {
      const scaleMidi = scaleNotesWithOctaves[offset % scaleNotesWithOctaves.length] ?? '';
      midiNote = scaleMidi;
      note = normalizePitchClass(Note.pitchClass(scaleMidi)) ?? '';
    } else {
      // Chromatic mode keyboard band alignment
      // screen row 3 (physicalRow 0) -> mappedRow 1 (Octave 0 Naturals)
      // screen row 2 (physicalRow 1) -> mappedRow 0 (Octave 0 Accidentals)
      // screen row 1 (physicalRow 2) -> mappedRow 3 (Octave 1 Naturals)
      // screen row 0 (physicalRow 3) -> mappedRow 2 (Octave 1 Accidentals)
      const mappedRow = (row + 2) % 4;

      const band = Math.floor(mappedRow / 2);
      const octaveOffset = band * 12;
      const inTopRow = mappedRow % 2 === 0;
      const keyboardOffset = inTopRow ? KEYBOARD_TOP_OFFSETS[col] : KEYBOARD_BOTTOM_OFFSETS[col];

      if (keyboardOffset !== null && rootIndex !== -1) {
        const semitoneShift = keyboardOffset + octaveOffset;
        const transposedMidi = Note.transpose(`${root}${baseOctave}`, Interval.fromSemitones(semitoneShift));
        midiNote = transposedMidi;
        note = normalizePitchClass(Note.pitchClass(transposedMidi)) ?? '';
      }
    }

    const inChord = chordNotes.has(note);
    const isRoot = note === root;
    const inScale = scaleNotes.includes(note);
    let state: PadState = 'dim';

    if (isRoot) {
      state = 'active';
    } else if (inChord) {
      state = 'lit';
    } else if (inScale) {
      state = 'scale';
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
      midiNote,
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
export function normalizePitchClass(note: string | null | undefined): string | null {
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
