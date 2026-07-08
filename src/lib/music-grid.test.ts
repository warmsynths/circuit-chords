import { describe, it, expect } from 'vitest';
import {
  buildCircuitGrid,
  normalizePitchClass,
  SCALE_OPTIONS,
  KEY_OPTIONS,
} from './music-grid';
import { Note, Scale } from 'tonal';
import type { GridConfig, CircuitPad } from './music-grid';
import type { ParsedChord } from './chord-parser';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function expectedPitchClasses(key: string, scaleName: string): string[] {
  const scale = Scale.get(`${key} ${scaleName}`);
  return scale.notes.map((n) => normalizePitchClass(n)).filter((n): n is string => n !== null);
}

function makeConfig(overrides: Partial<GridConfig> = {}): GridConfig {
  return { key: 'C', scale: 'major', mode: 'collapsed', ...overrides };
}

function makeChord(tonic: string, notes: string[], quality = 'Major'): ParsedChord {
  return { symbol: tonic, tonic, quality, notes, intervals: [], aliases: [] };
}

/**
 * Simulates the recipe-pad lookup logic from circuit-chord-forge.ts
 * so we can unit-test it independently of the LitElement.
 *
 * Given a set of grid pads and a list of MIDI offsets relative to a chord root,
 * finds the best-matching pad for each note by MIDI number (with octave-up fallback).
 */
function resolveRecipePads(
  pads: ReturnType<typeof buildCircuitGrid>,
  rootMidi: number,
  offsets: number[]
): Array<{ note: string; row: number; col: number; index: number } | null> {
  return offsets.map(offset => {
    const targetMidi = rootMidi + offset;
    let pad = pads.find(p => p.midiNote ? Note.midi(p.midiNote) === targetMidi : false);
    if (!pad) {
      pad = pads.find(p => p.midiNote ? Note.midi(p.midiNote) === targetMidi + 12 : false);
    }
    if (pad) return { note: pad.note, row: pad.row, col: pad.col, index: pad.index };
    return null;
  });
}

// ─── normalizePitchClass ──────────────────────────────────────────────────────

describe('normalizePitchClass', () => {
  it('returns null for empty string', () => {
    expect(normalizePitchClass('')).toBeNull();
  });

  it('returns null for null', () => {
    expect(normalizePitchClass(null)).toBeNull();
  });

  it('returns null for undefined', () => {
    expect(normalizePitchClass(undefined)).toBeNull();
  });

  it('strips octave numbers', () => {
    expect(normalizePitchClass('C4')).toBe('C');
    expect(normalizePitchClass('A#3')).toBe('A#');
    expect(normalizePitchClass('G5')).toBe('G');
  });

  it('normalizes Db → C#', () => expect(normalizePitchClass('Db')).toBe('C#'));
  it('normalizes Eb → D#', () => expect(normalizePitchClass('Eb')).toBe('D#'));
  it('normalizes Gb → F#', () => expect(normalizePitchClass('Gb')).toBe('F#'));
  it('normalizes Ab → G#', () => expect(normalizePitchClass('Ab')).toBe('G#'));
  it('normalizes Bb → A#', () => expect(normalizePitchClass('Bb')).toBe('A#'));

  it('normalizes Db4 (with octave) → C#', () => expect(normalizePitchClass('Db4')).toBe('C#'));
  it('normalizes Bb5 (with octave) → A#', () => expect(normalizePitchClass('Bb5')).toBe('A#'));

  it('passes through natural notes unchanged', () => {
    for (const n of ['C', 'D', 'E', 'F', 'G', 'A', 'B']) {
      expect(normalizePitchClass(n)).toBe(n);
    }
  });

  it('passes through sharp notes unchanged', () => {
    for (const n of ['C#', 'D#', 'F#', 'G#', 'A#']) {
      expect(normalizePitchClass(n)).toBe(n);
    }
  });
});

// ─── buildCircuitGrid — basics ────────────────────────────────────────────────

describe('buildCircuitGrid — basics', () => {
  it('always produces exactly 32 pads', () => {
    for (const key of KEY_OPTIONS) {
      for (const mode of ['collapsed', 'chromatic'] as const) {
        const pads = buildCircuitGrid(null, makeConfig({ key, mode }));
        expect(pads, `key=${key} mode=${mode}`).toHaveLength(32);
      }
    }
  });

  it('pad indices are 0..31 in order', () => {
    const pads = buildCircuitGrid(null, makeConfig());
    pads.forEach((pad, i) => expect(pad.index).toBe(i));
  });

  it('pad row/col coordinates are consistent with index', () => {
    const pads = buildCircuitGrid(null, makeConfig());
    for (const pad of pads) {
      expect(pad.row).toBe(Math.floor(pad.index / 8));
      expect(pad.col).toBe(pad.index % 8);
    }
  });

  it('every pad has a state of dim, lit, active, or scale', () => {
    const pads = buildCircuitGrid(null, makeConfig());
    const valid = new Set(['dim', 'lit', 'active', 'scale']);
    for (const pad of pads) {
      expect(valid.has(pad.state), `Invalid state: ${pad.state}`).toBe(true);
    }
  });
});

// ─── buildCircuitGrid — collapsed mode ───────────────────────────────────────

describe('buildCircuitGrid — collapsed mode', () => {
  it('all pad notes belong to C major', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePCs = expectedPitchClasses('C', 'major');
    for (const pad of pads) {
      if (pad.note !== '') expect(scalePCs).toContain(pad.note);
    }
  });

  it('all pad notes belong to A minor', () => {
    const config = makeConfig({ key: 'A', scale: 'minor', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePCs = expectedPitchClasses('A', 'minor');
    for (const pad of pads) {
      if (pad.note !== '') expect(scalePCs).toContain(pad.note);
    }
  });

  it('all pad notes belong to F# dorian', () => {
    const config = makeConfig({ key: 'F#', scale: 'dorian', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePCs = expectedPitchClasses('F#', 'dorian');
    for (const pad of pads) {
      if (pad.note !== '') expect(scalePCs).toContain(pad.note);
    }
  });

  it('all pad notes belong to D blues', () => {
    const config = makeConfig({ key: 'D', scale: 'blues', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePCs = expectedPitchClasses('D', 'blues');
    for (const pad of pads) {
      if (pad.note !== '') expect(scalePCs).toContain(pad.note);
    }
  });

  it('bottom-left pad (index 24) is the root note for any key', () => {
    for (const key of KEY_OPTIONS) {
      const config = makeConfig({ key, scale: 'major', mode: 'collapsed' });
      const pads = buildCircuitGrid(null, config);
      const bottomLeft = pads.find(p => p.index === 24)!;
      expect(bottomLeft.note, `key=${key}`).toBe(key);
    }
  });

  it('every scale in SCALE_OPTIONS (except chromatic) produces only in-scale notes', () => {
    const nonChromatic = SCALE_OPTIONS.filter(s => s !== 'chromatic');
    for (const scaleName of nonChromatic) {
      const config = makeConfig({ key: 'C', scale: scaleName, mode: 'collapsed' });
      const pads = buildCircuitGrid(null, config);
      const scalePCs = expectedPitchClasses('C', scaleName);
      if (scalePCs.length === 0) continue;
      for (const pad of pads) {
        if (pad.note !== '') {
          expect(scalePCs, `Scale "${scaleName}" — unexpected note ${pad.note}`).toContain(pad.note);
        }
      }
    }
  });

  it('collapsed C major has no sharps or flats', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const nonScaleNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
    for (const pad of pads) expect(nonScaleNotes).not.toContain(pad.note);
  });

  it('collapsed A minor has no sharps', () => {
    const config = makeConfig({ key: 'A', scale: 'minor', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const sharpNotes = ['A#', 'C#', 'D#', 'F#', 'G#'];
    for (const pad of pads) {
      expect(sharpNotes, `Unexpected sharp "${pad.note}"`).not.toContain(pad.note);
    }
  });

  it('whole tone scale has exactly 6 unique notes', () => {
    const config = makeConfig({ key: 'C', scale: 'whole tone', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const uniqueNotes = new Set(pads.map(p => p.note).filter(n => n !== ''));
    expect(uniqueNotes.size).toBe(6);
  });

  it('minor pentatonic has exactly 5 unique notes', () => {
    const config = makeConfig({ key: 'A', scale: 'minor pentatonic', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const uniqueNotes = new Set(pads.map(p => p.note).filter(n => n !== ''));
    expect(uniqueNotes.size).toBe(5);
  });

  it('midiNote is set for all non-empty pads', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    for (const pad of pads) {
      if (pad.note !== '') {
        expect(pad.midiNote).toBeTruthy();
      }
    }
  });

  it('note order is ascending pitch across rows (higher row index = higher notes)', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    // In collapsed mode pads[0] is top row (high pitches), pads[24] is bottom row (low)
    const firstNoteMidi = Note.midi(pads.find(p => p.note !== '')?.midiNote ?? 'C4') ?? 0;
    const lastNoteMidi = Note.midi([...pads].reverse().find((p: CircuitPad) => p.note !== '')?.midiNote ?? 'C5') ?? 0;
    expect(firstNoteMidi).toBeGreaterThanOrEqual(lastNoteMidi);
  });
});

// ─── buildCircuitGrid — chromatic mode ───────────────────────────────────────

describe('buildCircuitGrid — chromatic mode', () => {
  it('produces empty-note pads (black-key gaps)', () => {
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const emptyPads = pads.filter(p => p.note === '');
    expect(emptyPads.length).toBeGreaterThan(0);
  });

  it('all 12 chromatic pitch classes appear for C key', () => {
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const noteSet = new Set(pads.map(p => p.note).filter(n => n !== ''));
    const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    for (const pc of chromatic) {
      expect(noteSet, `Missing chromatic note: ${pc}`).toContain(pc);
    }
  });

  it('all 12 chromatic pitch classes appear for G key', () => {
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const noteSet = new Set(pads.map(p => p.note).filter(n => n !== ''));
    const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    for (const pc of chromatic) {
      expect(noteSet, `G key — Missing: ${pc}`).toContain(pc);
    }
  });

  it('root note pads have state "active" for A key', () => {
    const config = makeConfig({ key: 'A', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootPads = pads.filter(p => p.note === 'A');
    expect(rootPads.length).toBeGreaterThan(0);
    expect(rootPads.every(p => p.state === 'active')).toBe(true);
  });

  it('each key produces a different bottom-left pad note', () => {
    const keys = ['C', 'D', 'F#', 'G#'];
    const bottomLeftNotes = keys.map(key => {
      const config = makeConfig({ key, scale: 'chromatic', mode: 'chromatic' });
      const pads = buildCircuitGrid(null, config);
      return pads[24]?.note; // row 3, col 0 — bottom-left
    });
    // Each key should have the key note itself as bottomLeft
    keys.forEach((key, i) => expect(bottomLeftNotes[i]).toBe(key));
  });

  it('chromatic mode produces exactly 6 empty pads (3 null slots × 2 keyboard bands)', () => {
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const emptyPads = pads.filter(p => p.note === '');
    // KEYBOARD_TOP_OFFSETS [null, 1, 3, null, 6, 8, 10, null] has 3 nulls × 2 bands = 6
    expect(emptyPads.length).toBe(6);
    // The remaining 26 pads should all have notes
    const nonEmptyPads = pads.filter(p => p.note !== '');
    expect(nonEmptyPads.length).toBe(26);
  });

  it('out-of-scale notes have state "dim" when a scale filter is applied', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const nonScalePCs = ['C#', 'D#', 'F#', 'G#', 'A#'];
    const outOfScalePads = pads.filter(p => nonScalePCs.includes(p.note));
    expect(outOfScalePads.every(p => p.state === 'dim')).toBe(true);
  });
});

// ─── buildCircuitGrid — pad state with chord ─────────────────────────────────

describe('buildCircuitGrid — pad state with active chord', () => {
  it('root note pads in collapsed mode have state "active"', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const rootPads = pads.filter(p => p.note === 'C');
    expect(rootPads.every(p => p.state === 'active')).toBe(true);
  });

  it('non-root in-scale pads have state "scale" when no chord active', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePads = pads.filter(p => p.note !== 'C' && p.note !== '');
    expect(scalePads.every(p => p.state === 'scale')).toBe(true);
  });

  it('chord tone pads (non-root) have state "lit" when a chord is active', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    // C major triad: C E G — E and G should be "lit"
    const chord = makeChord('C', ['C', 'E', 'G']);
    const pads = buildCircuitGrid(chord, config);
    const ePads = pads.filter(p => p.note === 'E');
    const gPads = pads.filter(p => p.note === 'G');
    expect(ePads.length).toBeGreaterThan(0);
    expect(ePads.every(p => p.state === 'lit')).toBe(true);
    expect(gPads.every(p => p.state === 'lit')).toBe(true);
  });

  it('root note remains "active" even when chord is active', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const chord = makeChord('C', ['C', 'E', 'G']);
    const pads = buildCircuitGrid(chord, config);
    const rootPads = pads.filter(p => p.note === 'C');
    expect(rootPads.every(p => p.state === 'active')).toBe(true);
  });

  it('inChord flag is true for all chord tone pads', () => {
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const chord = makeChord('C', ['C', 'E', 'G']);
    const pads = buildCircuitGrid(chord, config);
    const ePads = pads.filter(p => p.note === 'E');
    expect(ePads.every(p => p.inChord)).toBe(true);
  });

  it('isRoot flag is true only for pads matching the key root', () => {
    const config = makeConfig({ key: 'G', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const rootPads = pads.filter(p => p.isRoot);
    expect(rootPads.every(p => p.note === 'G')).toBe(true);
    expect(rootPads.length).toBeGreaterThan(0);
  });

  it('inScale flag is set for notes belonging to the configured scale', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const cMajorNotes = new Set(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
    const inScalePads = pads.filter(p => cMajorNotes.has(p.note));
    expect(inScalePads.every(p => p.inScale)).toBe(true);
  });

  it('handles a diminished chord — all notes get lit state', () => {
    // C#DIM = C# E G, in G chromatic scale context
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const chord = makeChord('C#', ['C#', 'E', 'G']);
    const pads = buildCircuitGrid(chord, config);
    const ePads = pads.filter(p => p.note === 'E');
    const cSharpPads = pads.filter(p => p.note === 'C#');
    expect(ePads.every(p => p.inChord)).toBe(true);
    expect(cSharpPads.every(p => p.inChord)).toBe(true);
  });

  it('handles a flat chord tone with enharmonic normalization', () => {
    // Chord with Bb — should normalize to A#
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const chord = makeChord('F', ['F', 'A', 'C', 'Eb']); // Fmaj7 with Eb
    const pads = buildCircuitGrid(chord, config);
    // Eb should be normalized to D# and pads for D# should be inChord
    const dSharpPads = pads.filter(p => p.note === 'D#');
    expect(dSharpPads.every(p => p.inChord)).toBe(true);
  });
});

// ─── Recipe pad lookup (the bug we fixed) ────────────────────────────────────

describe('Recipe pad lookup — enharmonic and octave resolution', () => {
  /**
   * This tests the logic from circuit-chord-forge's render() method that was
   * previously broken for chords containing notes below the grid's base octave
   * (e.g., C#DIM in key G: notes C#4, E4, G4 but grid starts at G4).
   */

  it('resolves G note from C#DIM in G key chromatic mode', () => {
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootMidi = Note.midi('C#4')!; // 61
    const offsets = [0, 3, 6]; // C#4=61, E4=64, G4=67
    const results = resolveRecipePads(pads, rootMidi, offsets);
    const gResult = results[2]; // offset 6 = G
    expect(gResult).not.toBeNull();
    expect(gResult?.note).toBe('G');
  });

  it('resolves E note (octave up fallback) from C#DIM in G key', () => {
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootMidi = Note.midi('C#4')!; // 61
    const offsets = [0, 3, 6]; // E4=64 is below G4=67 grid base
    const results = resolveRecipePads(pads, rootMidi, offsets);
    const eResult = results[1]; // offset 3 = E
    expect(eResult).not.toBeNull();
    expect(eResult?.note).toBe('E');
  });

  it('resolves C# note (enharmonic Db + octave up) from C#DIM in G key', () => {
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootMidi = Note.midi('C#4')!; // 61
    const offsets = [0, 3, 6]; // C#4=61 is below G4=67 — needs octave up → C#5=73
    const results = resolveRecipePads(pads, rootMidi, offsets);
    const cSharpResult = results[0]; // offset 0 = C#
    expect(cSharpResult).not.toBeNull();
    expect(cSharpResult?.note).toBe('C#');
  });

  it('resolves all 3 notes from C#DIM in G key — none are null', () => {
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootMidi = Note.midi('C#4')!;
    const offsets = [0, 3, 6];
    const results = resolveRecipePads(pads, rootMidi, offsets);
    expect(results.every(r => r !== null)).toBe(true);
  });

  it('resolves all notes from a Bb chord (flat root, below G key base)', () => {
    // Bb4 = 70, below G4 = 67... actually above. Just test Bb in D key
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootMidi = Note.midi('Bb3')!; // 58 — below C4=60
    const offsets = [0, 3, 7]; // Bb, Db, F
    const results = resolveRecipePads(pads, rootMidi, offsets);
    // All should resolve via octave-up fallback
    expect(results.every(r => r !== null)).toBe(true);
  });

  it('resolves F#MIN chord (root below G key base) — F#4=66 < G4=67', () => {
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootMidi = Note.midi('F#4')!; // 66
    const offsets = [0, 3, 7]; // F#=66, A=69, C#=73
    const results = resolveRecipePads(pads, rootMidi, offsets);
    // F#4 (66) is one semitone below G4 (67), so needs octave up
    const fSharpResult = results[0];
    expect(fSharpResult).not.toBeNull();
    expect(fSharpResult?.note).toBe('F#');
  });

  it('notes in the correct grid octave resolve without fallback', () => {
    // G key, C major chord: C5=72 > G4=67 so these are already in range
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootMidi = Note.midi('C5')!; // 72
    const offsets = [0, 4, 7]; // C=72, E=76, G=79
    const results = resolveRecipePads(pads, rootMidi, offsets);
    expect(results.every(r => r !== null)).toBe(true);
    expect(results[0]?.note).toBe('C');
    expect(results[1]?.note).toBe('E');
    expect(results[2]?.note).toBe('G');
  });

  it('BMIN chord in G key resolves all 3 notes', () => {
    // BMIN from Voyager state: midiNotes [62, 66, 71] = D4, F#4, B4
    // In G key: G4=67, so D4(62) and F#4(66) are below range
    const config = makeConfig({ key: 'G', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootMidi = Note.midi('B4')!; // 71 — Voyager sends B4 as root
    const offsets = [62 - 71, 66 - 71, 71 - 71]; // [-9, -5, 0]
    const results = resolveRecipePads(pads, rootMidi, offsets);
    expect(results.every(r => r !== null)).toBe(true);
  });

  it('returns null for notes that do not exist anywhere on the grid', () => {
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    // offset of +100 would be MIDI 160+, which is way beyond any grid note
    const rootMidi = 60;
    const results = resolveRecipePads(pads, rootMidi, [100]);
    expect(results[0]).toBeNull();
  });
});

// ─── KEY_OPTIONS completeness ─────────────────────────────────────────────────

describe('KEY_OPTIONS', () => {
  it('contains all 12 chromatic notes', () => {
    const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    for (const note of chromatic) {
      expect(KEY_OPTIONS).toContain(note);
    }
  });

  it('has exactly 12 entries', () => {
    expect(KEY_OPTIONS).toHaveLength(12);
  });
});

// ─── SCALE_OPTIONS completeness ───────────────────────────────────────────────

describe('SCALE_OPTIONS', () => {
  it('includes chromatic', () => expect(SCALE_OPTIONS).toContain('chromatic'));
  it('includes major', () => expect(SCALE_OPTIONS).toContain('major'));
  it('includes minor', () => expect(SCALE_OPTIONS).toContain('minor'));
  it('includes blues', () => expect(SCALE_OPTIONS).toContain('blues'));
  it('includes whole tone', () => expect(SCALE_OPTIONS).toContain('whole tone'));
  it('includes minor pentatonic', () => expect(SCALE_OPTIONS).toContain('minor pentatonic'));
  it('has at least 16 entries', () => expect(SCALE_OPTIONS.length).toBeGreaterThanOrEqual(16));
});
