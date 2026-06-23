import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ChordRecipePad, CircuitPad } from '../lib/music-grid';
import { playNote } from '../lib/audio';

/**
 * Visual pad renderer that mirrors Circuit-style grid and highlights chord recipe steps.
 */
@customElement('circuit-grid')
export class CircuitGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    .shell {
      height: 100%;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      grid-template-rows: repeat(4, 1fr);
      gap: 12px;
      height: 100%;
    }

    .gap {
      border-radius: 8px;
      background: transparent;
      pointer-events: none;
    }

    .pad {
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      display: grid;
      place-items: center;
      text-align: center;
      padding: 0.3rem;
      color: #888;
      font-weight: 700;
      letter-spacing: 0.02em;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), var(--pad-scale, #2c3a4e);
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.05), 0 4px 8px rgba(0, 0, 0, 0.4);
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      user-select: none;
      outline: none;
    }

    .pad:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    .pad:active {
      transform: scale(0.94);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .pad:focus-visible {
      outline: 2px solid var(--accent-magenta, #ff2a9f);
      outline-offset: 2px;
    }

    .pad.dim {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%), var(--pad-chromatic, #222328);
      color: #444;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .pad.scale {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%), var(--pad-scale, #2c3a4e);
      color: #ccc;
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.05), 0 4px 8px rgba(0, 0, 0, 0.4);
    }

    /* "lit" corresponds to chord tones */
    .pad.lit {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), var(--accent-magenta, #ff2a9f);
      color: white;
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 20px rgba(255, 42, 159, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3);
    }

    /* "active" corresponds to the root note */
    .pad.active {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), var(--accent-cyan, #00f0ff);
      color: #121316;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 18px rgba(0, 240, 255, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.4);
    }

    .meta {
      font-size: 0.68rem;
      opacity: 0.75;
      display: none; /* Hide coords in new clean hardware design */
    }

    /* "target" corresponds to voicing recipe targets */
    .pad.target {
      outline: 2px solid #ffffff;
      outline-offset: 2px;
      box-shadow: 0 0 12px #ffffff;
    }

    .step {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: #ffffff;
      color: #121316;
      font-size: 0.68rem;
      font-weight: 800;
      display: grid;
      place-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .pad-inner {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }

    @media (max-width: 768px) {
      .grid {
        gap: 6px;
      }
      .pad {
        padding: 0.15rem;
        font-size: 0.75rem;
        border-radius: 6px;
      }
      .step {
        width: 14px;
        height: 14px;
        font-size: 0.55rem;
        top: 3px;
        right: 3px;
      }
    }

    @media (max-width: 768px) and (orientation: portrait) {
      .grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-template-rows: repeat(8, 1fr);
      }
    }
  `;

  @property({ attribute: false })
  /** Full 32-pad model with note/state metadata for display. */
  pads: CircuitPad[] = [];

  @property({ attribute: false })
  /** Ordered subset of target pads to press for current chord voicing. */
  recipe: ChordRecipePad[] = [];

  /**
   * Renders pad grid and overlays press order markers for recipe targets.
   *
   * @returns Lit template for pad grid.
   */
  render() {
    const recipeOrder = new Map<number, number>(
      this.recipe.map((pad, index) => [pad.index, index + 1])
    );

    return html`
      <div class="shell">
        <div class="grid" role="grid" aria-label="Circuit pad grid">
          ${this.pads.map(
            (pad) => {
              if (!pad.note) {
                return html`<div class="gap" aria-hidden="true"></div>`;
              }

              const step = recipeOrder.get(pad.index);
              return html`
              <div 
                class=${`pad ${pad.state} ${step ? 'target' : ''}`} 
                role="button" 
                tabindex="0"
                aria-label=${this.getAriaLabel(pad, step)}
                @click=${() => this.onPadClick(pad)}
                @keydown=${(e: KeyboardEvent) => this.onPadKeydown(e, pad)}
              >
                <div class="pad-inner">
                  ${step ? html`<span class="step">${step}</span>` : null}
                  <div>
                    <div>${pad.label}</div>
                    <div class="meta">${pad.row + 1}:${pad.col + 1}</div>
                  </div>
                </div>
              </div>
            `;
            }
          )}
        </div>
      </div>
    `;
  }

  /**
   * Triggers audio playback for the pad note.
   */
  private onPadClick(pad: CircuitPad) {
    if (pad.midiNote) {
      playNote(pad.midiNote);
      this.dispatchEvent(
        new CustomEvent<CircuitPad>('pad-clicked', {
          detail: pad,
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  /**
   * Handles keyboard triggers (Space, Enter) for keyboard accessibility.
   */
  private onPadKeydown(e: KeyboardEvent, pad: CircuitPad) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this.onPadClick(pad);
    }
  }

  /**
   * Builds accessible description for each grid cell.
   *
   * @param pad Pad model.
   * @param step Optional voicing step number for target pads.
   * @returns Human-readable aria-label text.
   */
  private getAriaLabel(pad: CircuitPad, step?: number): string {
    if (!pad.note) {
      return `empty slot row ${pad.row + 1} column ${pad.col + 1}`;
    }

    if (step) {
      return `${pad.note} row ${pad.row + 1} column ${pad.col + 1} voicing note ${step} of ${this.recipe.length} (lowest to highest)`;
    }

    return `${pad.note} row ${pad.row + 1} column ${pad.col + 1} ${pad.state}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'circuit-grid': CircuitGrid;
  }
}

