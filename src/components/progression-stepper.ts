import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ParsedChord } from './chord-input';

@customElement('progression-stepper')
export class ProgressionStepper extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    button {
      border: 1px solid #d6dce3;
      background: #fff8ec;
      color: #2b3340;
      border-radius: 999px;
      padding: 0.55rem 0.9rem;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
    }

    button:hover {
      transform: translateY(-1px);
      border-color: #b45309;
    }

    button.active {
      background: #0f766e;
      color: white;
      border-color: #0f766e;
      box-shadow: 0 8px 20px rgb(15 118 110 / 0.25);
    }
  `;

  @property({ attribute: false })
  chords: ParsedChord[] = [];

  @property({ type: Number })
  activeIndex = 0;

  render() {
    return html`
      <div class="wrap">
        ${this.chords.map(
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
    `;
  }

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
