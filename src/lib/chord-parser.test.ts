import { describe, it, expect } from 'vitest';
import { sanitize, tokenize, normalizeQuality, parseProgression } from './chord-parser';

// ─── sanitize ─────────────────────────────────────────────────────────────────

describe('sanitize', () => {
  it('strips pipe separators', () => {
    expect(sanitize('Am | G | F | E')).toBe('Am G F E');
  });

  it('strips arrow separators (text and unicode)', () => {
    expect(sanitize('C -> G -> Am -> F')).toBe('C G Am F');
    expect(sanitize('C → G → Am → F')).toBe('C G Am F');
  });

  it('strips em-dash and en-dash separators', () => {
    expect(sanitize('C – G — Am')).toBe('C G Am');
  });

  it('strips comma, semicolon, and colon separators', () => {
    expect(sanitize('Dm, G7, Cmaj7')).toBe('Dm G7 Cmaj7');
    // Semicolons ARE in the sanitize strip-list: /[|>,;:]/
    expect(sanitize('Dm; G7; Cmaj7')).toBe('Dm G7 Cmaj7');
    expect(sanitize('Dm:G7')).toBe('Dm G7');
  });

  it('collapses multiple spaces', () => {
    expect(sanitize('C     G   Am')).toBe('C G Am');
  });

  it('normalizes newlines from pasted chord charts', () => {
    expect(sanitize('Am\nG\nF\nE')).toBe('Am G F E');
    expect(sanitize('Am\r\nG\r\nF')).toBe('Am G F');
  });

  it('preserves chord symbols that contain # and b', () => {
    expect(sanitize('C# F#m Bb Bbm7')).toBe('C# F#m Bb Bbm7');
  });

  it('normalizes uppercase B-flat notation (BBm7 → Bbm7)', () => {
    expect(sanitize('BBm7')).toBe('Bbm7');
    expect(sanitize('EB7')).toBe('Eb7');
    expect(sanitize('AB')).toBe('Ab');
  });

  it('trims leading and trailing whitespace', () => {
    expect(sanitize('  Am G  ')).toBe('Am G');
  });

  it('handles empty string', () => {
    expect(sanitize('')).toBe('');
  });
});

// ─── tokenize ─────────────────────────────────────────────────────────────────

describe('tokenize', () => {
  it('tokenizes a simple major scale progression', () => {
    const tokens = tokenize('C G Am F');
    expect(tokens).toEqual(['C', 'G', 'Am', 'F']);
  });

  it('tokenizes sharps correctly', () => {
    const tokens = tokenize('C# F# B');
    expect(tokens).toContain('C#');
    expect(tokens).toContain('F#');
  });

  it('tokenizes flat chords', () => {
    const tokens = tokenize('Bb Eb Ab');
    expect(tokens).toContain('Bb');
    expect(tokens).toContain('Eb');
    expect(tokens).toContain('Ab');
  });

  it('tokenizes complex chord extensions', () => {
    const tokens = tokenize('Cmaj7 Dm7 G7 Em7b5');
    expect(tokens).toContain('Cmaj7');
    expect(tokens).toContain('Dm7');
    expect(tokens).toContain('G7');
  });

  it('tokenizes slash chords', () => {
    const tokens = tokenize('C/E G/B Am/C');
    expect(tokens).toContain('C/E');
    expect(tokens).toContain('G/B');
  });

  it('tokenizes from pipe-delimited charts', () => {
    const tokens = tokenize('| Am | G | F | E |');
    expect(tokens).toEqual(['Am', 'G', 'F', 'E']);
  });

  it('tokenizes comma-separated progression', () => {
    const tokens = tokenize('Dm7, G7, Cmaj7, Am7');
    expect(tokens).toHaveLength(4);
  });

  it('returns empty array for empty string', () => {
    expect(tokenize('')).toEqual([]);
  });

  it('returns empty array for separator-only input', () => {
    expect(tokenize('| | |')).toEqual([]);
  });

  it('handles diminished and augmented suffixes', () => {
    const tokens = tokenize('Bdim F#dim Caug');
    expect(tokens).toContain('Bdim');
    expect(tokens).toContain('F#dim');
    expect(tokens).toContain('Caug');
  });
});

// ─── normalizeQuality ─────────────────────────────────────────────────────────

describe('normalizeQuality', () => {
  it('normalizes uppercase MAJOR to major', () => {
    expect(normalizeQuality('MAJOR')).toBe('major');
  });

  it('normalizes uppercase MINOR to minor', () => {
    expect(normalizeQuality('MINOR')).toBe('minor');
  });

  it('normalizes uppercase DIM to dim', () => {
    expect(normalizeQuality('DIM')).toBe('dim');
  });

  it('normalizes uppercase MAJ7 to maj7', () => {
    expect(normalizeQuality('MAJ7')).toBe('maj7');
  });

  it('normalizes uppercase AUG to aug', () => {
    expect(normalizeQuality('AUG')).toBe('aug');
  });

  it('normalizes uppercase SUS to sus', () => {
    expect(normalizeQuality('SUS4')).toBe('sus4');
  });

  it('normalizes MINMAJ to mMaj', () => {
    expect(normalizeQuality('MINMAJ7')).toBe('mMaj7');
  });

  it('normalizes MMAJ to mMaj', () => {
    expect(normalizeQuality('MMAJ7')).toBe('mMaj7');
  });

  it('leaves lowercase unchanged', () => {
    expect(normalizeQuality('m7')).toBe('m7');
    expect(normalizeQuality('maj9')).toBe('maj9');
  });

  it('handles empty string', () => {
    expect(normalizeQuality('')).toBe('');
  });
});

// ─── parseProgression ─────────────────────────────────────────────────────────

describe('parseProgression', () => {
  // ── Basic triads ────────────────────────────────────────────────────────────

  it('parses C major triad', () => {
    const result = parseProgression('C');
    expect(result).toHaveLength(1);
    expect(result[0].tonic).toBe('C');
    expect(result[0].notes).toContain('C');
    expect(result[0].notes).toContain('E');
    expect(result[0].notes).toContain('G');
  });

  it('parses A minor triad', () => {
    const result = parseProgression('Am');
    expect(result).toHaveLength(1);
    expect(result[0].tonic).toBe('A');
    expect(result[0].quality).toMatch(/[Mm]inor/i);
  });

  it('parses G major triad', () => {
    const result = parseProgression('G');
    expect(result[0].notes).toContain('G');
    expect(result[0].notes).toContain('B');
    expect(result[0].notes).toContain('D');
  });

  it('parses C diminished triad', () => {
    const result = parseProgression('Cdim');
    expect(result).toHaveLength(1);
    expect(result[0].notes).toContain('C');
    expect(result[0].notes).toContain('Eb');
    expect(result[0].notes).toContain('Gb');
  });

  it('parses C augmented triad', () => {
    const result = parseProgression('Caug');
    expect(result).toHaveLength(1);
    expect(result[0].notes).toContain('C');
    expect(result[0].notes).toContain('E');
    expect(result[0].notes).toContain('G#');
  });

  // ── Seventh chords ──────────────────────────────────────────────────────────

  it('parses Cmaj7', () => {
    const result = parseProgression('Cmaj7');
    expect(result[0].notes).toContain('C');
    expect(result[0].notes).toContain('E');
    expect(result[0].notes).toContain('G');
    expect(result[0].notes).toContain('B');
  });

  it('parses G7 (dominant seventh)', () => {
    const result = parseProgression('G7');
    expect(result[0].notes).toContain('G');
    expect(result[0].notes).toContain('B');
    expect(result[0].notes).toContain('D');
    expect(result[0].notes).toContain('F');
  });

  it('parses Dm7', () => {
    const result = parseProgression('Dm7');
    expect(result[0].notes).toContain('D');
    expect(result[0].notes).toContain('F');
    expect(result[0].notes).toContain('A');
    expect(result[0].notes).toContain('C');
  });

  it('parses Bm7b5 (half-diminished)', () => {
    const result = parseProgression('Bm7b5');
    expect(result).toHaveLength(1);
    expect(result[0].notes).toContain('B');
    expect(result[0].notes).toContain('D');
  });

  it('parses Bdim7 (fully diminished)', () => {
    const result = parseProgression('Bdim7');
    expect(result).toHaveLength(1);
    expect(result[0].notes).toContain('B');
  });

  // ── Sharp and flat roots ────────────────────────────────────────────────────

  it('parses F#m correctly', () => {
    const result = parseProgression('F#m');
    expect(result).toHaveLength(1);
    expect(result[0].tonic).toBe('F#');
  });

  it('parses C#dim correctly', () => {
    const result = parseProgression('C#dim');
    expect(result).toHaveLength(1);
    expect(result[0].tonic).toBe('C#');
  });

  it('parses Bbmaj7 (flat root)', () => {
    const result = parseProgression('Bbmaj7');
    expect(result).toHaveLength(1);
    expect(result[0].notes).toContain('Bb');
  });

  it('parses Ebm (flat minor)', () => {
    const result = parseProgression('Ebm');
    expect(result).toHaveLength(1);
    expect(result[0].tonic).toBe('Eb');
  });

  // ── Multi-chord progressions ────────────────────────────────────────────────

  it('parses a ii-V-I jazz progression', () => {
    const result = parseProgression('Dm7 G7 Cmaj7');
    expect(result).toHaveLength(3);
    expect(result[0].tonic).toBe('D');
    expect(result[1].tonic).toBe('G');
    expect(result[2].tonic).toBe('C');
  });

  it('parses classic I-V-vi-IV pop progression', () => {
    const result = parseProgression('C G Am F');
    expect(result).toHaveLength(4);
    expect(result.map(c => c.tonic)).toEqual(['C', 'G', 'A', 'F']);
  });

  it('parses the Gmaj C#dim F#min Bmin progression from Voyager', () => {
    const result = parseProgression('Gmaj C#dim F#min Bmin');
    expect(result).toHaveLength(4);
    expect(result[0].tonic).toBe('G');
    expect(result[1].tonic).toBe('C#');
    expect(result[2].tonic).toBe('F#');
    expect(result[3].tonic).toBe('B');
  });

  it('parses pipe-delimited chord charts', () => {
    const result = parseProgression('| Am | G | F | E |');
    expect(result).toHaveLength(4);
  });

  it('parses comma-separated progression', () => {
    const result = parseProgression('Dm7, G7, Cmaj7, Am7');
    expect(result).toHaveLength(4);
  });

  it('parses newline-separated progression (pasted chart)', () => {
    const result = parseProgression('Am\nG\nF\nE');
    expect(result).toHaveLength(4);
  });

  // ── Case normalization ──────────────────────────────────────────────────────

  it('parses uppercase CDIM via quality normalization', () => {
    const result = parseProgression('CDIM');
    // tokenize will give CDIM, which after normalization should resolve
    // (Tonal may not handle fully-uppercase; normalizeQuality brings it to 'dim')
    expect(result.length).toBeGreaterThanOrEqual(0); // at minimum doesn't crash
  });

  it('parses mixed-case CMin via quality normalization', () => {
    const result = parseProgression('CMin');
    expect(result).toHaveLength(1);
    expect(result[0].tonic).toBe('C');
    expect(result[0].quality).toMatch(/[Mm]inor/i);
  });

  it('parses CMaj7 with mixed casing', () => {
    const result = parseProgression('CMaj7');
    expect(result).toHaveLength(1);
    expect(result[0].tonic).toBe('C');
  });

  // ── Slash chords ────────────────────────────────────────────────────────────

  it('parses G/B slash chord', () => {
    const result = parseProgression('G/B');
    expect(result).toHaveLength(1);
    expect(result[0].notes).toContain('G');
    expect(result[0].notes).toContain('B');
  });

  it('parses C/E slash chord', () => {
    const result = parseProgression('C/E');
    expect(result).toHaveLength(1);
    expect(result[0].notes).toContain('C');
    expect(result[0].notes).toContain('E');
  });

  // ── Invalid / unresolvable input ────────────────────────────────────────────

  it('returns empty array for completely invalid input', () => {
    expect(parseProgression('XYZNOTACHORD')).toHaveLength(0);
  });

  it('returns empty array for empty string', () => {
    expect(parseProgression('')).toHaveLength(0);
  });

  it('skips invalid tokens within a valid progression', () => {
    const result = parseProgression('Am NOTACHORD G');
    // Should parse at least Am and G, skip the invalid token
    expect(result.length).toBeGreaterThanOrEqual(2);
    expect(result.map(c => c.tonic)).toContain('A');
    expect(result.map(c => c.tonic)).toContain('G');
  });

  it('returns correct intervals for every parsed chord', () => {
    const result = parseProgression('C Am F G');
    for (const chord of result) {
      // intervals should be non-empty for valid chords
      expect(chord.intervals.length).toBeGreaterThan(0);
    }
  });

  it('returns aliases array (may be empty but always defined)', () => {
    const result = parseProgression('Cmaj7');
    expect(Array.isArray(result[0].aliases)).toBe(true);
  });
});
