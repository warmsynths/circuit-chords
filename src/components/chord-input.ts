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
      color: #ffffff;
      width: 100%;
    }

    .wrap {
      display: grid;
      gap: 12px;
      width: 100%;
    }

    label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      color: #888888;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .input-group {
      display: flex;
      gap: 12px;
      width: 100%;
    }

    input {
      flex: 1;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 12px 16px;
      font: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #121316;
      color: #ffffff;
      transition: all 150ms ease;
    }

    input:focus {
      border-color: var(--accent-cyan, #00f0ff);
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.2);
    }

    button {
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      font: inherit;
      font-weight: 700;
      background: var(--accent-magenta, #ff2a9f);
      color: #ffffff;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(255, 42, 159, 0.2);
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(255, 42, 159, 0.3);
    }

    button:active:not(:disabled) {
      transform: translateY(1px);
      box-shadow: 0 2px 4px rgba(255, 42, 159, 0.2);
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      box-shadow: none;
    }

    .hint {
      font-size: 0.75rem;
      color: #666666;
      margin-top: 2px;
      line-height: 1.4;
    }

    .error {
      font-size: 0.78rem;
      color: #fda4af;
      background: rgba(225, 29, 72, 0.1);
      border: 1px solid #f43f5e;
      border-radius: 8px;
      padding: 8px 12px;
      margin-top: 4px;
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
        <label for="chord-progression">Chord Progression</label>
        <div class="input-group">
          <input
            id="chord-progression"
            type="text"
            .value=${this.value}
            placeholder="e.g. Cmaj7 Am7 Dm7 G7"
            @input=${this.onInput}
            @keydown=${this.onKeydown}
          />
          <button ?disabled=${!this.value.trim()} @click=${this.parseAndEmit}>Parse</button>
        </div>

        ${this.error 
          ? html`<div class="error">${this.error}</div>` 
          : html`<div class="hint">Enter chord symbols separated by spaces (e.g., Cmaj7 Am7 F G9). Press Enter to parse.</div>`}
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
