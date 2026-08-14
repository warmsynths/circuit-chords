import { describe, it, expect } from 'vitest';
import {
  NOTE_NAMES,
  QUALS,
  DEGREES,
  getPitchName,
  getChordLabel,
  isNoteInKey,
  calculateVoicing,
  buildGridCells,
  calculateLitPads
} from './pad-plot';

describe('pad-plot core library', () => {
  it('formats pitch names correctly across octaves', () => {
    expect(getPitchName(60)).toBe('C4');
    expect(getPitchName(48)).toBe('C3');
    expect(getPitchName(61)).toBe('C#4');
    expect(getPitchName(71)).toBe('B4');
  });

  it('formats chord labels properly', () => {
    expect(getChordLabel({ root: 0, q: 'maj7' })).toBe('Cmaj7');
    expect(getChordLabel({ root: 9, q: 'min' })).toBe('Am');
    expect(getChordLabel({ root: 2, q: 'm7' })).toBe('Dm7');
    expect(getChordLabel({ root: 7, q: '7' })).toBe('G7');
    expect(getChordLabel({ root: 0, q: 'maj' })).toBe('C');
  });

  it('determines in-key status for major and minor keys', () => {
    // C Major: C D E F G A B
    expect(isNoteInKey(0, 0, 'major')).toBe(true);  // C
    expect(isNoteInKey(4, 0, 'major')).toBe(true);  // E
    expect(isNoteInKey(1, 0, 'major')).toBe(false); // C#
    expect(isNoteInKey(6, 0, 'major')).toBe(false); // F#

    // A Minor: A B C D E F G
    expect(isNoteInKey(9, 9, 'minor')).toBe(true);  // A
    expect(isNoteInKey(0, 9, 'minor')).toBe(true);  // C
    expect(isNoteInKey(1, 9, 'minor')).toBe(false); // C#
  });

  it('computes 4-note voicings for seventh chords', () => {
    const tones = calculateVoicing({ root: 0, q: 'maj7' }, 3);
    // C3 (48), E3 (52), G3 (55), B3 (59)
    expect(tones).toHaveLength(4);
    expect(tones[0]).toEqual({ midi: 48, iv: 0, isRoot: true, order: 0 });
    expect(tones[1]).toEqual({ midi: 52, iv: 4, isRoot: false, order: 1 });
    expect(tones[2]).toEqual({ midi: 55, iv: 7, isRoot: false, order: 2 });
    expect(tones[3]).toEqual({ midi: 59, iv: 11, isRoot: false, order: 3 });
  });

  it('generates 32 grid cells in chromatic layout', () => {
    const cells = buildGridCells('chromatic', 3, 0, 'major');
    expect(cells).toHaveLength(32);
    // Row 1 Col 1 should be C3 (midi 48)
    const r1c1 = cells.find(c => c.row === 1 && c.col === 1);
    expect(r1c1?.midi).toBe(48);
    // Row 1 Col 8 should be C4 (midi 60)
    const r1c8 = cells.find(c => c.row === 1 && c.col === 8);
    expect(r1c8?.midi).toBe(60);
    // Row 2 Col 1 should be null (empty accidental slot)
    const r2c1 = cells.find(c => c.row === 2 && c.col === 1);
    expect(r2c1?.midi).toBeNull();
    // Row 2 Col 2 should be C#3 (midi 49)
    const r2c2 = cells.find(c => c.row === 2 && c.col === 2);
    expect(r2c2?.midi).toBe(49);
  });

  it('maps Cmaj7 chord tones to physical pad coordinates', () => {
    const result = calculateLitPads({ root: 0, q: 'maj7' }, 3, 'chromatic', 0, 'major');
    expect(result.litMap.size).toBe(4);
    expect(result.missingTones).toHaveLength(0);

    const litEntries = Array.from(result.litMap.values());
    const refs = litEntries.map(e => e.ref);
    expect(refs).toContain('R1C1'); // C3
    expect(refs).toContain('R1C3'); // E3
    expect(refs).toContain('R1C5'); // G3
    expect(refs).toContain('R1C7'); // B3
  });

  it('detects off-plate tones when octave is too high', () => {
    // Octave 6 + add9 extends above the chromatic grid (C#8 is off plate)
    const result = calculateLitPads({ root: 11, q: 'add9' }, 6, 'chromatic', 0, 'major');
    expect(result.missingTones.length).toBeGreaterThan(0);
  });
});
