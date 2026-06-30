import { describe, it, expect } from 'vitest';
import { ChordInput } from './chord-input';

describe('ChordInput progression parsing & normalization', () => {
  it('correctly normalizes and parses C#Dim and other capitalized/mixed-case chords', () => {
    const chordInput = new ChordInput();
    const parseProgression = (chordInput as any).parseProgression.bind(chordInput);

    const testProgression = 'C#Dim C#dim C#DIM C#Dim7 C#o C#o7 C#Maj C#Min C#Maj7 C#Min7 C#Aug C#Sus4 C#mMaj7 C#mmaj7';
    const result = parseProgression(testProgression);

    const symbols = result.map((c: any) => c.symbol);
    expect(symbols).toEqual([
      'C#dim',
      'C#dim',
      'C#dim',
      'C#dim7',
      'C#o',
      'C#o7',
      'C#maj',
      'C#min',
      'C#Maj7',
      'C#min7',
      'C#aug',
      'C#sus4',
      'C#mMaj7',
      'C#mMaj7',
    ]);
  });

  it('correctly normalizes capitalized B flat accidentals to lowercase b', () => {
    const chordInput = new ChordInput();
    const parseProgression = (chordInput as any).parseProgression.bind(chordInput);

    const testProgression = 'BBm7 EB7 C/EB BB';
    const result = parseProgression(testProgression);

    const symbols = result.map((c: any) => c.symbol);
    expect(symbols).toEqual([
      'Bbm7',
      'Eb7',
      'C/Eb',
      'Bb',
    ]);
  });
});
