import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ParsedChord } from './chord-input';

/**
 * Renders progression pills and emits selected chord index.
 *
 * Supports dual rows:
 * - Original progression
 * - Transposed progression for selected project key
 */
@customElement('progression-stepper')
export class ProgressionStepper extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .stack {
      display: grid;
      gap: 0.65rem;
    }

    .row {
      display: grid;
      gap: 0.35rem;
    }

    .row-label {
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    button {
      border: 1px solid var(--border);
      background: var(--pad-dim);
      color: var(--text);
      border-radius: 999px;
      padding: 0.55rem 0.9rem;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      transition: transform 120ms cubic-bezier(0.4, 0, 0.2, 1), 
                  background 120ms cubic-bezier(0.4, 0, 0.2, 1), 
                  border-color 120ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:hover {
      transform: translateY(-1px);
      border-color: var(--accent);
      color: var(--text);
    }

    button.active {
      background: var(--pad-active);
      color: var(--text);
      border-color: var(--accent);
      box-shadow: 0 4px 12px var(--accent-glow);
    }
  `;

  @property({ attribute: false })
  /** Original parsed progression as entered by user. */
  originalChords: ParsedChord[] = [];

  @property({ attribute: false })
  /** Key-adjusted progression shown when selected key differs from source key. */
  keyChords: ParsedChord[] = [];

  @property({ type: String })
  /** Display label for currently selected key row. */
  keyLabel = '';

  @property({ type: Number })
  /** Currently selected chord position shared by both rows. */
  activeIndex = 0;

  /**
   * Renders progression rows and interactive chord pills.
   *
   * @returns Lit template for progression selector UI.
   */
  render() {
    const hasKeyProgression = this.keyChords.length > 0;

    return html`
      <div class="stack">
        <div class="row">
          <p class="row-label">Original</p>
          <div class="wrap">
            ${this.originalChords.map(
              (chord, index) => html`
                <button
                  class=${index === this.activeIndex ? 'active' : ''}
                  @click=${() => this.selectChord(index)}
                >
                  ${chord.symbol}
                </button>
              `
            )}
          </div>
        </div>

        ${hasKeyProgression
          ? html`
              <div class="row">
                <p class="row-label">Key of ${this.keyLabel}</p>
                <div class="wrap">
                  ${this.keyChords.map(
                    (chord, index) => html`
                      <button
                        class=${index === this.activeIndex ? 'active' : ''}
                        @click=${() => this.selectChord(index)}
                      >
                        ${chord.symbol}
                      </button>
                    `
                  )}
                </div>
              </div>
            `
          : null}
      </div>
    `;
  }

  /**
   * Emits selected progression index for parent component synchronization.
   *
   * @param index Selected chord index.
   */
  private selectChord(index: number) {
    this.dispatchEvent(
      new CustomEvent<number>('chord-selected', {
        detail: index,
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'progression-stepper': ProgressionStepper;
  }

  interface HTMLElementEventMap {
    'chord-selected': CustomEvent<number>;
  }
}
