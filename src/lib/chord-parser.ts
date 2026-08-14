import { Chord, Note } from 'tonal';
import type { ProgressionStep } from './pad-plot';

/**
 * Normalized musical metadata extracted from a chord symbol.
 */
export interface ParsedChord {
  /** Chord symbol as entered by the user (for example, Am7 or D/F#). */
  symbol: string;
  /** Chord tonic pitch class reported by Tonal, if present. */
  tonic: string | null;
  /** Tonal quality string (major, minor, diminished, etc.). */
  quality: string;
  /** Human MIDI core type. */
  core?: string;
  /** Human MIDI modifier. */
  modifier?: string;
  /** Concrete pitch classes that form the chord. */
  notes: string[];
  /** Interval structure reported by Tonal. */
  intervals: string[];
  /** Known aliases for the parsed chord. */
  aliases: string[];
  /** Optional array of exact MIDI notes received from shared state. */
  exactMidiNotes?: number[];
}

/**
 * Normalizes capitalization issues in the chord quality/suffix so that Tonal
 * can correctly identify the chord.
 *
 * @param quality The raw chord quality/extension suffix.
 * @returns Case-normalized quality string.
 */
export function normalizeQuality(quality: string): string {
  let q = quality;

  // Normalize generic qualities case-insensitively to the formats Tonal expects
  q = q.replace(/diminished/gi, 'diminished');
  q = q.replace(/dim/gi, 'dim');
  q = q.replace(/minor/gi, 'minor');
  q = q.replace(/min/gi, 'min');
  q = q.replace(/major/gi, 'major');
  q = q.replace(/maj/gi, 'maj');
  q = q.replace(/aug/gi, 'aug');
  q = q.replace(/sus/gi, 'sus');
  q = q.replace(/dom/gi, 'dom');

  // Specific minor-major overrides (must happen after general maj/min normalization)
  q = q.replace(/minmaj/gi, 'mMaj');
  q = q.replace(/mmaj/gi, 'mMaj');

  return q;
}

/**
 * Strips separator characters from the source string, normalising them
 * all to spaces so the chord regex only sees clean chord tokens.
 *
 * Handled separators: | > → -> – — , ; : and newlines.
 * Characters that are part of chord names (# b / + ° Δ) are left intact.
 *
 * @param source Raw user input.
 * @returns Cleaned string with separators replaced by spaces.
 */
export function sanitize(source: string): string {
  // Normalize capitalized B flat accidentals (e.g. BBm7 -> Bbm7, EB7 -> Eb7)
  const normalized = source.replace(/([A-G])(B+)/g, (match, note, flats) => note + 'b'.repeat(flats.length));

  return normalized
    .replace(/->|→|–|—/g, ' ')        // text/unicode arrows and dashes
    .replace(/[|>,;:]/g, ' ')          // bars, greater-than, commas, colons
    .replace(/[\r\n]+/g, ' ')          // newlines (pasted chord charts)
    .replace(/\s+/g, ' ')              // collapse multiple spaces
    .trim();
}

/**
 * Captures chord-like symbols while ignoring separators such as | and commas.
 *
 * @param source Freeform progression text.
 * @returns Tokenized chord-like strings suitable for Tonal parsing.
 */
export function tokenize(source: string): string[] {
  const cleaned = sanitize(source);
  const chordTokenRegex = /[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g;
  const matches = cleaned.match(chordTokenRegex);
  return matches ? matches.map((token) => token.trim()) : [];
}

/**
 * Uses regex tokenization first, then Tonal chord parsing for musical data.
 *
 * @param source Freeform progression text.
 * @returns Parsed chord collection in original order.
 */
export function parseProgression(source: string): ParsedChord[] {
  const tokens = tokenize(source);
  const parsed: ParsedChord[] = [];

  for (const symbol of tokens) {
    let chord = Chord.get(symbol);

    // If Tonal couldn't parse it directly, try normalizing casing in the quality/suffix
    if (chord.empty || chord.notes.length === 0) {
      const [root, quality, bass] = Chord.tokenize(symbol);
      if (root) {
        const normalizedQuality = normalizeQuality(quality);
        const normalizedSymbol = root + normalizedQuality + (bass ? '/' + bass : '');
        const normalizedChord = Chord.get(normalizedSymbol);
        if (!normalizedChord.empty && normalizedChord.notes.length > 0) {
          chord = normalizedChord;
        }
      }
    }

    if (chord.empty || chord.notes.length === 0) {
      continue;
    }

    parsed.push({
      symbol: chord.symbol || symbol,
      tonic: chord.tonic,
      quality: chord.quality,
      notes: chord.notes,
      intervals: chord.intervals,
      aliases: chord.aliases,
    });
  }

  return parsed;
}

/**
 * Maps a ParsedChord to a ProgressionStep ({ root: 0..11, q: string }).
 * Maps any standard chord quality, extension, or alteration to one of the 12
 * qualities supported by the Circuit Pad Plot grid.
 *
 * @param chord Parsed chord metadata from Tonal.
 * @returns ProgressionStep with pitch class root (0..11) and quality id.
 */
export function parsedChordToStep(chord: ParsedChord): ProgressionStep {
  const root = chord.tonic
    ? (Note.chroma(chord.tonic) ?? ((Note.midi(chord.tonic + '4') ?? 60) % 12))
    : 0;

  const symbol = chord.symbol || '';
  const [, rawSuffix] = Chord.tokenize(symbol);
  const suffix = (rawSuffix || '').trim();
  const quality = (chord.quality || '').toLowerCase();

  let q = 'maj';

  if (/m7b5|min7b5|m7-5|half|ø/i.test(suffix) || quality.includes('half-diminished')) {
    q = 'm7b5';
  } else if (/dim|°/i.test(suffix) || quality.includes('diminished')) {
    q = 'dim';
  } else if (/aug|\+/i.test(suffix) || quality.includes('augmented')) {
    q = 'aug';
  } else if (/sus2/i.test(suffix)) {
    q = 'sus2';
  } else if (/sus4|sus/i.test(suffix)) {
    q = 'sus4';
  } else if (/add9|add2/i.test(suffix)) {
    q = 'add9';
  } else if (/^(?:6|add6|maj6)$/i.test(suffix)) {
    q = '6';
  } else if (
    /maj7|maj9|maj11|maj13|Δ|ma7/i.test(suffix) ||
    suffix.includes('M7') ||
    suffix.includes('M9') ||
    suffix.includes('M11') ||
    suffix.includes('M13') ||
    (quality === 'major' && (chord.aliases?.some(a => /maj7|M7|Δ/i.test(a)) ?? false))
  ) {
    q = 'maj7';
  } else if (
    /^(?:m7|min7|-7|m9|min9|-9|m11|min11|m13|min13|m6|min6)$/i.test(suffix) ||
    (quality === 'minor' && (chord.intervals?.includes('10m') || chord.intervals?.includes('10d') || /7|9|11|13/.test(suffix)))
  ) {
    q = 'm7';
  } else if (/^(?:7|9|11|13|dom|dom7|7b9|7#9|7b5|7#5|7alt)$/i.test(suffix) || (quality === 'major' && /7|9|11|13/.test(suffix))) {
    q = '7';
  } else if (quality === 'minor' || /^(?:m|min|-)$/i.test(suffix)) {
    q = 'min';
  } else if (quality === 'major' || /^(?:maj|m)?$/i.test(suffix)) {
    q = 'maj';
  }

  return { root, q };
}

/**
 * Parses freeform progression text directly into an array of ProgressionStep objects
 * (capped at 16 steps for Circuit Tracks hardware compatibility).
 *
 * @param source Freeform progression text (e.g. from query string "Cmaj7 Am7 Dm7 G7").
 * @returns Array of ProgressionStep objects.
 */
export function parseProgressionToSteps(source: string): ProgressionStep[] {
  const parsed = parseProgression(source);
  return parsed.map(parsedChordToStep).slice(0, 16);
}

