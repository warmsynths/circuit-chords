import { describe, it, expect } from 'vitest';
import {
  buildCircuitGrid,
  normalizePitchClass,
  SCALE_OPTIONS,
} from './music-grid';
import { Scale } from 'tonal';
import type { GridConfig } from './music-grid';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns expected pitch classes for a given key + scale name via Tonal. */
function expectedPitchClasses(key: string, scaleName: string): string[] {
  const scale = Scale.get(`${key} ${scaleName}`);
  return scale.notes.map((n) => normalizePitchClass(n)).filter((n): n is string => n !== null);
}

/** Builds a minimal GridConfig for testing. */
function makeConfig(overrides: Partial<GridConfig> = {}): GridConfig {
  return {
    key: 'C',
    scale: 'major',
    mode: 'collapsed',
    ...overrides,
  };
}

// ─── normalizePitchClass ──────────────────────────────────────────────────────

describe('normalizePitchClass', () => {
  it('returns null for empty / null input', () => {
    expect(normalizePitchClass('')).toBeNull();
    expect(normalizePitchClass(null)).toBeNull();
    expect(normalizePitchClass(undefined)).toBeNull();
  });

  it('strips octave numbers from note names', () => {
    expect(normalizePitchClass('C4')).toBe('C');
    expect(normalizePitchClass('A#3')).toBe('A#');
    expect(normalizePitchClass('Bb5')).toBe('A#');
  });

  it('normalizes enharmonic equivalents to sharp form', () => {
    expect(normalizePitchClass('Db')).toBe('C#');
    expect(normalizePitchClass('Eb')).toBe('D#');
    expect(normalizePitchClass('Gb')).toBe('F#');
    expect(normalizePitchClass('Ab')).toBe('G#');
    expect(normalizePitchClass('Bb')).toBe('A#');
  });
});

// ─── collapsed mode: only scale notes on pads ────────────────────────────────

describe('buildCircuitGrid — collapsed mode', () => {
  it('all pad notes belong to the selected scale (C major)', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePCs = expectedPitchClasses('C', 'major');

    for (const pad of pads) {
      if (pad.note !== '') {
        expect(scalePCs).toContain(pad.note);
      }
    }
  });

  it('all pad notes belong to the selected scale (A minor)', () => {
    const config = makeConfig({ key: 'A', scale: 'minor', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePCs = expectedPitchClasses('A', 'minor');

    for (const pad of pads) {
      if (pad.note !== '') {
        expect(scalePCs).toContain(pad.note);
      }
    }
  });

  it('all pad notes belong to the selected scale (F# dorian)', () => {
    const config = makeConfig({ key: 'F#', scale: 'dorian', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePCs = expectedPitchClasses('F#', 'dorian');

    for (const pad of pads) {
      if (pad.note !== '') {
        expect(scalePCs).toContain(pad.note);
      }
    }
  });

  it('all pad notes belong to the selected scale (D blues)', () => {
    const config = makeConfig({ key: 'D', scale: 'blues', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePCs = expectedPitchClasses('D', 'blues');

    for (const pad of pads) {
      if (pad.note !== '') {
        expect(scalePCs).toContain(pad.note);
      }
    }
  });

  it('first pad note (bottom-left, index 24) is the root note', () => {
    const config = makeConfig({ key: 'G', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    // row 3 col 0 = index 24 = physicalRow 0 = offset 0 = root
    const bottomLeftPad = pads.find((p) => p.index === 24);
    expect(bottomLeftPad?.note).toBe('G');
  });

  it('produces exactly 32 pads', () => {
    const pads = buildCircuitGrid(null, makeConfig());
    expect(pads).toHaveLength(32);
  });

  it('every scale name in SCALE_OPTIONS (except chromatic) produces only in-scale notes', () => {
    const key = 'C';
    const nonChromatic = SCALE_OPTIONS.filter((s) => s !== 'chromatic');

    for (const scaleName of nonChromatic) {
      const config = makeConfig({ key, scale: scaleName, mode: 'collapsed' });
      const pads = buildCircuitGrid(null, config);
      const scalePCs = expectedPitchClasses(key, scaleName);

      if (scalePCs.length === 0) continue; // skip unresolvable scales

      for (const pad of pads) {
        if (pad.note !== '') {
          expect(scalePCs, `Scale "${scaleName}" — unexpected note ${pad.note}`).toContain(pad.note);
        }
      }
    }
  });
});

// ─── chromatic mode: all 12 notes present ────────────────────────────────────

describe('buildCircuitGrid — chromatic mode', () => {
  it('produces pads with empty slots (keyboard black-key gaps) when chromatic', () => {
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const emptyPads = pads.filter((p) => p.note === '');
    // 4 empty slots per octave band (null positions in KEYBOARD_TOP_OFFSETS)
    expect(emptyPads.length).toBeGreaterThan(0);
  });

  it('all 12 chromatic pitch classes appear across pads', () => {
    const config = makeConfig({ key: 'C', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const noteSet = new Set(pads.map((p) => p.note).filter((n) => n !== ''));
    const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    for (const pc of chromatic) {
      expect(noteSet, `Missing chromatic note: ${pc}`).toContain(pc);
    }
  });

  it('root note pads have state "active"', () => {
    const config = makeConfig({ key: 'A', scale: 'chromatic', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const rootPads = pads.filter((p) => p.note === 'A');
    expect(rootPads.length).toBeGreaterThan(0);
    expect(rootPads.every((p) => p.state === 'active')).toBe(true);
  });
});

// ─── Scale selection drives mode ──────────────────────────────────────────────

describe('Scale selection → mode contract', () => {
  it('collapsed mode never shows notes outside the C major scale', () => {
    const nonScaleNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    for (const pad of pads) {
      expect(nonScaleNotes).not.toContain(pad.note);
    }
  });

  it('collapsed minor scale excludes sharps not in A natural minor', () => {
    // A natural minor = A B C D E F G (no sharps)
    const config = makeConfig({ key: 'A', scale: 'minor', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const sharpNotes = ['A#', 'C#', 'D#', 'F#', 'G#'];
    for (const pad of pads) {
      expect(sharpNotes, `Unexpected sharp "${pad.note}" in A minor collapsed grid`).not.toContain(pad.note);
    }
  });

  it('whole tone scale has exactly 6 unique notes on pads', () => {
    const config = makeConfig({ key: 'C', scale: 'whole tone', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const uniqueNotes = new Set(pads.map((p) => p.note).filter((n) => n !== ''));
    expect(uniqueNotes.size).toBe(6);
  });

  it('minor pentatonic has exactly 5 unique notes on pads', () => {
    const config = makeConfig({ key: 'A', scale: 'minor pentatonic', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const uniqueNotes = new Set(pads.map((p) => p.note).filter((n) => n !== ''));
    expect(uniqueNotes.size).toBe(5);
  });
});

// ─── Pad state correctness ────────────────────────────────────────────────────

describe('buildCircuitGrid — pad state', () => {
  it('root note pads in collapsed mode have state "active"', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const rootPads = pads.filter((p) => p.note === 'C');
    expect(rootPads.length).toBeGreaterThan(0);
    expect(rootPads.every((p) => p.state === 'active')).toBe(true);
  });

  it('non-root in-scale pads have state "scale" when no chord active', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'collapsed' });
    const pads = buildCircuitGrid(null, config);
    const scalePads = pads.filter((p) => p.note !== 'C' && p.note !== '');
    expect(scalePads.every((p) => p.state === 'scale')).toBe(true);
  });

  it('out-of-scale pads in chromatic mode have state "dim" (no chord)', () => {
    const config = makeConfig({ key: 'C', scale: 'major', mode: 'chromatic' });
    const pads = buildCircuitGrid(null, config);
    const nonScalePCs = ['C#', 'D#', 'F#', 'G#', 'A#'];
    const outOfScalePads = pads.filter((p) => nonScalePCs.includes(p.note));
    expect(outOfScalePads.every((p) => p.state === 'dim')).toBe(true);
  });
});
