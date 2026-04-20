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
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #91a4bf;
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    button {
      border: 1px solid #3b4d66;
      background: linear-gradient(180deg, #1b283a, #131d2c);
      color: #cad7e8;
      border-radius: 999px;
      padding: 0.55rem 0.9rem;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
    }

    button:hover {
      transform: translateY(-1px);
      border-color: #2dd4bf;
      color: #e4f7f3;
    }

    button.active {
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      color: #f0fdfa;
      border-color: #2dd4bf;
      box-shadow: 0 8px 20px rgb(45 212 191 / 0.28);
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
