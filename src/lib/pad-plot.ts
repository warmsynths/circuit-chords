export const NOTE_NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'] as const;
export type NoteName = typeof NOTE_NAMES[number];

export interface ChordQuality {
  id: string;
  label: string;
  iv: number[]; // semitone intervals from root
}

export const QUALS: ChordQuality[] = [
  { id: 'maj',  label: 'maj',  iv: [0, 4, 7] },
  { id: 'min',  label: 'min',  iv: [0, 3, 7] },
  { id: 'maj7', label: 'maj7', iv: [0, 4, 7, 11] },
  { id: 'm7',   label: 'm7',   iv: [0, 3, 7, 10] },
  { id: '7',    label: '7',    iv: [0, 4, 7, 10] },
  { id: 'm7b5', label: 'm7♭5', iv: [0, 3, 6, 10] },
  { id: 'dim',  label: 'dim',  iv: [0, 3, 6] },
  { id: 'aug',  label: 'aug',  iv: [0, 4, 8] },
  { id: 'sus2', label: 'sus2', iv: [0, 2, 7] },
  { id: 'sus4', label: 'sus4', iv: [0, 5, 7] },
  { id: '6',    label: '6',    iv: [0, 4, 7, 9] },
  { id: 'add9', label: 'add9', iv: [0, 4, 7, 14] }
];

export const DEGREES: Record<number, string> = {
  0: 'root',
  2: '2nd',
  3: '♭3rd',
  4: '3rd',
  5: '4th',
  6: '♭5th',
  7: '5th',
  8: '♯5th',
  9: '6th',
  10: '♭7th',
  11: 'maj7',
  14: '9th'
};

export const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];
export const MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10];
export const DIA_MAJ_QUALS = ['maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'm7b5'];
export const DIA_MIN_QUALS = ['m7', 'm7b5', 'maj7', 'm7', 'm7', 'maj7', '7'];
export const ROMAN_MAJ = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'];
export const ROMAN_MIN = ['i', 'ii', 'III', 'iv', 'v', 'VI', 'VII'];

export const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export interface ScaleDefinition {
  id: string;
  label: string;
  iv: number[]; // semitone intervals from root
}

// All 16 scales on Circuit Tracks, in hardware order
export const SCALES: ScaleDefinition[] = [
  { id: 'natminor', label: 'nat minor',   iv: [0, 2, 3, 5, 7, 8, 10] },
  { id: 'major',    label: 'major',       iv: [0, 2, 4, 5, 7, 9, 11] },
  { id: 'dorian',   label: 'dorian',      iv: [0, 2, 3, 5, 7, 9, 10] },
  { id: 'phrygian', label: 'phrygian',    iv: [0, 1, 3, 5, 7, 8, 10] },
  { id: 'mixo',     label: 'mixolydian',  iv: [0, 2, 4, 5, 7, 9, 10] },
  { id: 'melmin',   label: 'mel minor',   iv: [0, 2, 3, 5, 7, 9, 11] },
  { id: 'harmmin',  label: 'harm minor',  iv: [0, 2, 3, 5, 7, 8, 11] },
  { id: 'bebop',    label: 'bebop dorian',iv: [0, 2, 3, 4, 5, 7, 9, 10] },
  { id: 'blues',    label: 'blues',       iv: [0, 3, 5, 6, 7, 10] },
  { id: 'minpent',  label: 'min pent',    iv: [0, 3, 5, 7, 10] },
  { id: 'hungmin',  label: 'hung minor',  iv: [0, 2, 3, 6, 7, 8, 11] },
  { id: 'ukrdom',   label: 'ukr dominant',iv: [0, 2, 3, 6, 7, 9, 10] },
  { id: 'marva',    label: 'marva',       iv: [0, 1, 4, 6, 7, 9, 11] },
  { id: 'todi',     label: 'todi',        iv: [0, 1, 3, 6, 7, 8, 11] },
  { id: 'wholetone',label: 'whole tone',  iv: [0, 2, 4, 6, 8, 10] },
  { id: 'chromatic',label: 'chromatic',   iv: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
];

export function getScaleDefinition(scaleIdOrMode: string): ScaleDefinition {
  const norm = scaleIdOrMode === 'minor' ? 'natminor' : scaleIdOrMode;
  return SCALES.find(s => s.id === norm) || SCALES[1]; // default major
}

export interface ScaleChord {
  root: number;
  q: string;
  roman: string; // Roman numeral e.g. "I", "ii"
  label: string; // Chord symbol e.g. "C", "Dm", "Bdim"
}

// Triads built dynamically by stacking scale steps — works for any of the 16 scales
export function getScaleChords(keyRoot: number, keyScale: string): ScaleChord[] {
  const scDef = getScaleDefinition(keyScale);
  const sc = scDef.iv;
  const n = sc.length;
  if (n < 5 || scDef.id === 'chromatic') return [];
  const at = (i: number) => sc[i % n] + 12 * Math.floor(i / n);

  const chords: ScaleChord[] = [];
  for (let i = 0; i < n; i++) {
    const r = at(i);
    const third = at(i + 2) - r;
    const fifth = at(i + 4) - r;
    let q: string | null = null;
    if (third === 4 && fifth === 7) q = 'maj';
    else if (third === 3 && fifth === 7) q = 'min';
    else if (third === 3 && fifth === 6) q = 'dim';
    else if (third === 4 && fifth === 8) q = 'aug';
    else if (third === 5 && fifth === 7) q = 'sus4';
    else if (third === 2 && fifth === 7) q = 'sus2';

    if (q) {
      const num = ROMAN[i] || `${i + 1}`;
      const upper = q === 'maj' || q === 'aug' || q === 'sus4' || q === 'sus2';
      const roman = upper ? num : num.toLowerCase();
      const chordRoot = (keyRoot + sc[i]) % 12;
      const rootName = NOTE_NAMES[chordRoot];
      const qual = getChordQuality(q);
      const qSuffix = q === 'maj' ? '' : q === 'min' ? 'm' : qual.label;
      const chordSymbol = `${rootName}${qSuffix}`;

      chords.push({
        root: chordRoot,
        q,
        roman,
        label: chordSymbol
      });
    }
  }
  return chords;
}

export const NAT = [0, 2, 4, 5, 7, 9, 11, 12];
export const ACC = [null, 1, 3, null, 6, 8, 10, null];

export interface ProgressionStep {
  root: number; // 0..11
  q: string;    // 'maj', 'm7', etc.
}

export interface VoicedTone {
  midi: number;
  iv: number;
  isRoot: boolean;
  order: number;
}

export interface GridCell {
  midi: number | null;
  row: number; // 1..4 (1 = bottom row, 4 = top row)
  col: number; // 1..8
}

export interface PadLitInfo extends VoicedTone {
  ref: string; // e.g. "R1C1"
}

export function midiFromOctaveAndSemi(octave: number, semi: number): number {
  return (octave + 1) * 12 + semi;
}

export function getPitchName(midi: number): string {
  const noteName = NOTE_NAMES[midi % 12];
  const oct = Math.floor(midi / 12) - 1;
  return `${noteName}${oct}`;
}

export function getChordQuality(id: string): ChordQuality {
  return QUALS.find(q => q.id === id) || QUALS[0];
}

export function getChordLabel(step: ProgressionStep): string {
  const rootName = NOTE_NAMES[step.root];
  const q = getChordQuality(step.q);
  const qSuffix = step.q === 'maj' ? '' : step.q === 'min' ? 'm' : q.label;
  return `${rootName}${qSuffix}`;
}

export function isNoteInKey(pitchClass: number, keyRoot: number, keyScale: string): boolean {
  const scale = getScaleDefinition(keyScale).iv;
  return scale.some(deg => (keyRoot + deg) % 12 === (pitchClass % 12 + 12) % 12);
}

export function calculateVoicing(step: ProgressionStep, octave: number): VoicedTone[] {
  const qual = getChordQuality(step.q);
  const baseMidi = midiFromOctaveAndSemi(octave, step.root);
  return qual.iv.map((interval, index) => ({
    midi: baseMidi + interval,
    iv: interval,
    isRoot: index === 0,
    order: index
  }));
}

/**
 * Builds the 32-pad grid (top row = 4, bottom row = 1).
 */
export function buildGridCells(layout: 'chromatic' | 'in-key', octave: number, keyRoot: number, keyScale: string): GridCell[] {
  const cells: GridCell[] = [];
  if (layout === 'chromatic') {
    const rows = [
      ACC.map(o => o === null ? null : midiFromOctaveAndSemi(octave + 1, o)),
      NAT.map(o => midiFromOctaveAndSemi(octave + 1, o)),
      ACC.map(o => o === null ? null : midiFromOctaveAndSemi(octave, o)),
      NAT.map(o => midiFromOctaveAndSemi(octave, o))
    ];
    rows.forEach((r, ri) => {
      r.forEach((m, ci) => {
        cells.push({ midi: m, row: 4 - ri, col: ci + 1 });
      });
    });
  } else {
    const sc = getScaleDefinition(keyScale).iv;
    const n = sc.length;
    for (let ri = 3; ri >= 0; ri--) {
      for (let ci = 0; ci < 8; ci++) {
        const idx = ri * 8 + ci;
        const m = midiFromOctaveAndSemi(octave + Math.floor(idx / n), keyRoot + sc[idx % n]);
        cells.push({ midi: m, row: ri + 1, col: ci + 1 });
      }
    }
  }
  return cells;
}

export interface LitResult {
  cells: GridCell[];
  tones: VoicedTone[];
  litMap: Map<number, PadLitInfo>; // cell index -> LitInfo
  missingTones: VoicedTone[];
}

export function calculateLitPads(
  step: ProgressionStep,
  octave: number,
  layout: 'chromatic' | 'in-key',
  keyRoot: number,
  keyScale: string
): LitResult {
  const cells = buildGridCells(layout, octave, keyRoot, keyScale);
  const tones = calculateVoicing(step, octave);
  const litMap = new Map<number, PadLitInfo>();
  const missingTones: VoicedTone[] = [];

  tones.forEach((t) => {
    const hitIndex = cells.findIndex(c => c.midi === t.midi);
    if (hitIndex >= 0 && !litMap.has(hitIndex)) {
      const cell = cells[hitIndex];
      litMap.set(hitIndex, {
        ...t,
        ref: `R${cell.row}C${cell.col}`
      });
    } else {
      missingTones.push(t);
    }
  });

  return { cells, tones, litMap, missingTones };
}
