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
