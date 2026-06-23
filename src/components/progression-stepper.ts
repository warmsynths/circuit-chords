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
      width: 100%;
    }

    .sequence-track {
      display: flex;
      width: 100%;
      gap: 8px;
      height: 48px;
    }

    .step-block {
      flex: 1;
      background: var(--bg-onyx, #121316);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
      color: #555;
      cursor: pointer;
      transition: all 0.15s;
      overflow: hidden;
    }

    .step-block:hover {
      background: var(--pad-chromatic, #222328);
      color: #888;
    }

    .step-block.active {
      border-color: var(--accent-magenta, #ff2a9f);
      color: var(--accent-magenta, #ff2a9f);
      background: rgba(255, 42, 159, 0.1);
      box-shadow: 0 0 12px rgba(255, 42, 159, 0.2);
    }

    .step-index {
      font-size: 0.6rem;
      opacity: 0.5;
    }

    .chord-symbol {
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      .sequence-track {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        padding-bottom: 2px;
      }
      .sequence-track::-webkit-scrollbar {
        display: none;
      }
      .step-block {
        flex: 0 0 46px;
        min-width: 46px;
        height: 38px;
      }
      .chord-symbol {
        font-size: 0.75rem;
      }
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
    const chords = this.keyChords.length > 0 ? this.keyChords : this.originalChords;
    
    return html`
      <div class="sequence-track">
        ${Array.from({ length: 16 }).map((_, i) => {
          const chord = chords[i];
          return html`
            <div 
              class="step-block ${i === this.activeIndex ? 'active' : ''}"
              @click=${() => chord && this.selectChord(i)}
            >
              ${chord 
                ? html`<span class="chord-symbol">${chord.symbol}</span>`
                : html`<span class="step-index">${i + 1}</span>`
              }
            </div>
          `;
        })}
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
