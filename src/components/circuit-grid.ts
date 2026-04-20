import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ChordRecipePad, CircuitPad } from '../lib/music-grid';

/**
 * Visual pad renderer that mirrors Circuit-style grid and highlights chord recipe steps.
 */
@customElement('circuit-grid')
export class CircuitGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .shell {
      border-radius: 24px;
      padding: 1rem;
      background:
        linear-gradient(180deg, #1e293b, #0f172a),
        radial-gradient(circle at top, rgb(255 255 255 / 0.06), transparent 55%);
      border: 1px solid rgb(148 163 184 / 0.2);
      box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.04), 0 18px 40px rgb(15 23 42 / 0.35);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: 0.7rem;
    }

    .gap {
      aspect-ratio: 1;
      border-radius: 16px;
      background: transparent;
      border: none;
      box-shadow: none;
      pointer-events: none;
    }

    .pad {
      aspect-ratio: 1;
      border-radius: 16px;
      border: 1px solid rgb(255 255 255 / 0.08);
      display: grid;
      place-items: center;
      text-align: center;
      padding: 0.3rem;
      color: #e2e8f0;
      font-weight: 700;
      letter-spacing: 0.02em;
      background: #233044;
      box-shadow: inset 0 -8px 18px rgb(0 0 0 / 0.25);
      transition: transform 140ms ease, box-shadow 140ms ease, background 140ms ease;
    }

    .pad:hover {
      transform: translateY(-1px);
    }

    .pad.dim {
      background: linear-gradient(180deg, #334155, #1f2937);
      color: #cbd5e1;
    }

    .pad.lit {
      background: linear-gradient(180deg, #f59e0b, #b45309);
      box-shadow: 0 0 18px rgb(245 158 11 / 0.28), inset 0 -8px 18px rgb(120 53 15 / 0.35);
      color: #fff7ed;
    }

    .pad.active {
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      box-shadow: 0 0 20px rgb(45 212 191 / 0.34), inset 0 -8px 18px rgb(17 94 89 / 0.38);
      color: white;
    }

    .meta {
      font-size: 0.68rem;
      opacity: 0.75;
    }

    .pad.target {
      outline: 2px solid #f8fafc;
      outline-offset: 1px;
      box-shadow:
        0 0 0 2px rgb(56 189 248 / 0.85),
        0 0 18px rgb(56 189 248 / 0.35),
        inset 0 -8px 18px rgb(0 0 0 / 0.22);
    }

    .step {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: #f8fafc;
      color: #0f172a;
      font-size: 0.68rem;
      font-weight: 800;
      display: grid;
      place-items: center;
      border: 1px solid rgb(15 23 42 / 0.2);
    }

    .pad-inner {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
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
              <div class=${`pad ${pad.state} ${step ? 'target' : ''}`} role="gridcell" aria-label=${this.getAriaLabel(pad, step)}>
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
      return `${pad.note} row ${pad.row + 1} column ${pad.col + 1} press order ${step}`;
    }

    return `${pad.note} row ${pad.row + 1} column ${pad.col + 1} ${pad.state}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'circuit-grid': CircuitGrid;
  }
}
