import { Chord } from 'tonal';

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
  /** Concrete pitch classes that form the chord. */
  notes: string[];
  /** Interval structure reported by Tonal. */
  intervals: string[];
  /** Known aliases for the parsed chord. */
  aliases: string[];
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
