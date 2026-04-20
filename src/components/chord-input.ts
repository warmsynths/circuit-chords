import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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
 * Payload emitted when a progression is parsed from free text.
 */
export interface ChordInputParsedEventDetail {
  /** Ordered list of successfully parsed chord objects. */
  progression: ParsedChord[];
  /** Original progression source text as typed by user. */
  source: string;
}

/**
 * Parses a freeform progression string and emits normalized chord data.
 *
 * Event emitted: `progression-parsed`
 * detail: { progression: ParsedChord[]; source: string }
 */
@customElement('chord-input')
export class ChordInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Segoe UI', sans-serif;
      color: #dbe7f7;
    }

    .wrap {
      display: grid;
      gap: 0.75rem;
    }

    label {
      font-size: 0.875rem;
      font-weight: 600;
    }

    input {
      border: 1px solid #394a61;
      border-radius: 10px;
      padding: 0.75rem 0.875rem;
      font: inherit;
      outline: none;
      background: #0f1724;
      color: #e2ebf9;
    }

    input:focus {
      border-color: #2dd4bf;
      box-shadow: 0 0 0 2px rgb(45 212 191 / 0.2);
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    button {
      border: none;
      border-radius: 10px;
      padding: 0.6rem 0.9rem;
      font: inherit;
      font-weight: 600;
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      color: #f0fdfa;
      cursor: pointer;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .hint {
      font-size: 0.8rem;
      color: #93a9c5;
    }

    .error {
      font-size: 0.8rem;
      color: #b42318;
    }
  `;

  @property({ type: String })
  /** Current raw text in the progression input field. */
  value = '';

  @state()
  /** Inline parse error shown under input when no valid chords are found. */
  private error = '';

  /**
   * Renders progression input form and parse action controls.
   *
   * @returns Lit template for parser UI.
   */
  render() {
    return html`
      <div class="wrap">
        <label for="chord-progression">Chord progression</label>
        <input
          id="chord-progression"
          type="text"
          .value=${this.value}
          placeholder="Am7 D9 Gmaj7"
          @input=${this.onInput}
          @keydown=${this.onKeydown}
        />

        <div class="actions">
          <button ?disabled=${!this.value.trim()} @click=${this.parseAndEmit}>Parse</button>
          <span class="hint">Press Enter to parse</span>
        </div>

        ${this.error ? html`<div class="error">${this.error}</div>` : null}
      </div>
    `;
  }

  /**
   * Handles input edits and clears stale error state.
   *
   * @param event Native input event from text box.
   */
  private onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    if (this.error) this.error = '';
  }

  /**
   * Allows Enter key to trigger parsing without clicking Parse.
   *
   * @param event Keyboard event from the progression input.
   */
  private onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.parseAndEmit();
    }
  }

  /**
   * Parses current input value and emits normalized progression event.
   *
   * Event name: progression-parsed
   */
  private parseAndEmit() {
    const progression = this.parseProgression(this.value);

    if (!progression.length) {
      this.error = 'No valid chord symbols were found.';
      return;
    }

    this.error = '';
    const detail: ChordInputParsedEventDetail = {
      progression,
      source: this.value,
    };

    this.dispatchEvent(
      new CustomEvent<ChordInputParsedEventDetail>('progression-parsed', {
        detail,
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Uses regex tokenization first, then Tonal chord parsing for musical data.
    *
    * @param source Freeform progression text.
    * @returns Parsed chord collection in original order.
   */
  private parseProgression(source: string): ParsedChord[] {
    const tokens = this.tokenize(source);
    const parsed: ParsedChord[] = [];

    for (const symbol of tokens) {
      const chord = Chord.get(symbol);

      if (chord.empty || chord.notes.length === 0) {
        continue;
      }

      parsed.push({
        symbol,
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
   * Captures chord-like symbols while ignoring separators such as | and commas.
    *
    * @param source Freeform progression text.
    * @returns Tokenized chord-like strings suitable for Tonal parsing.
   */
  private tokenize(source: string): string[] {
    const chordTokenRegex = /[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g;
    const matches = source.match(chordTokenRegex);
    return matches ? matches.map((token) => token.trim()) : [];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chord-input': ChordInput;
  }

  interface HTMLElementEventMap {
    'progression-parsed': CustomEvent<ChordInputParsedEventDetail>;
  }
}
