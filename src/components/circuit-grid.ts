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
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .grid {
      display: grid;
      grid-template-columns: 24px repeat(8, minmax(0, 1fr));
      grid-template-rows: 24px repeat(4, 1fr);
      gap: 12px;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }

    .grid-label {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--text-muted, #555);
      user-select: none;
      font-family: inherit;
    }

    .col-label {
      border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      padding-bottom: 4px;
    }

    .row-label {
      border-right: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      padding-right: 8px;
    }

    .gap {
      border-radius: 8px;
      background: transparent;
      pointer-events: none;
      aspect-ratio: 1;
    }

    .pad {
      aspect-ratio: 1;
      border-radius: 8px;
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      display: grid;
      place-items: center;
      text-align: center;
      padding: 0.3rem;
      color: var(--text-secondary, #888);
      font-weight: 700;
      letter-spacing: 0.02em;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), var(--pad-scale, #2c3a4e);
      box-shadow: var(--pad-shadow, inset 0 2px 4px rgba(255, 255, 255, 0.05), 0 4px 8px rgba(0, 0, 0, 0.4));
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      user-select: none;
      outline: none;
    }

    .pad:hover {
      border-color: var(--text-secondary);
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
      box-shadow: var(--shadow-inset, inset 0 1px 2px rgba(0, 0, 0, 0.5));
    }

    .pad.scale {
      box-shadow: var(--pad-shadow, inset 0 2px 4px rgba(255, 255, 255, 0.05), 0 4px 8px rgba(0, 0, 0, 0.4));
    }

    .pad.top-half.dim {
      background: var(--pad-top-dim, #132230);
      color: var(--pad-top-text-dim, #264660);
    }
    .pad.top-half.scale {
      background: var(--pad-top-scale, #1a3246);
      color: var(--pad-top-text-scale, #62a2d4);
    }

    .pad.bottom-half.dim {
      background: var(--pad-bot-dim, #221222);
      color: var(--pad-bot-text-dim, #4d234d);
    }
    .pad.bottom-half.scale {
      background: var(--pad-bot-scale, #331833);
      color: var(--pad-bot-text-scale, #9c5c9c);
    }

    /* "lit" corresponds to chord tones */
    .pad.lit {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), var(--accent-magenta, #ff2a9f);
      color: var(--text-on-accent, white);
      border-color: var(--border-color, rgba(255, 255, 255, 0.25));
      box-shadow: 0 0 20px var(--accent-magenta-alpha, rgba(255, 42, 159, 0.6)), var(--shadow-inset, inset 0 2px 4px rgba(255, 255, 255, 0.3));
    }

    /* "active" corresponds to the root note */
    .pad.active {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), var(--accent-cyan, #00f0ff);
      color: var(--accent-cyan-text, #121316);
      border-color: var(--border-color, rgba(255, 255, 255, 0.3));
      box-shadow: 0 0 18px var(--accent-cyan-alpha, rgba(0, 240, 255, 0.5)), var(--shadow-inset, inset 0 2px 4px rgba(255, 255, 255, 0.4));
    }

    .meta {
      font-size: 0.68rem;
      opacity: 0.75;
      display: none; /* Hide coords in new clean hardware design */
    }

    /* "target" corresponds to voicing recipe targets */
    .pad.target {
      outline: 2px solid var(--text-primary, #ffffff);
      outline-offset: 2px;
      box-shadow: 0 0 12px var(--text-primary, #ffffff);
    }

    .step {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: var(--text-primary, #ffffff);
      color: var(--bg-charcoal, #121316);
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

    @media (max-width: 1024px) {
      .grid {
        grid-template-columns: 16px repeat(8, minmax(0, 1fr));
        grid-template-rows: 16px repeat(4, 1fr);
        gap: 6px;
      }
      .grid-label {
        font-size: 0.55rem;
      }
      .row-label {
        padding-right: 4px;
      }
      .pad {
        padding: 0.15rem;
        font-size: 0.65rem;
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
          <!-- Column Header Labels -->
          <div class="grid-label corner" aria-hidden="true"></div>
          ${Array.from({ length: 8 }).map((_, i) => html`
            <div class="grid-label col-label" aria-hidden="true">${i + 1}</div>
          `)}

          <!-- Row 4 (pads index 0..7) -->
          <div class="grid-label row-label" aria-hidden="true">4</div>
          ${this.pads.slice(0, 8).map((pad) => this.renderPad(pad, recipeOrder))}

          <!-- Row 3 (pads index 8..15) -->
          <div class="grid-label row-label" aria-hidden="true">3</div>
          ${this.pads.slice(8, 16).map((pad) => this.renderPad(pad, recipeOrder))}

          <!-- Row 2 (pads index 16..23) -->
          <div class="grid-label row-label" aria-hidden="true">2</div>
          ${this.pads.slice(16, 24).map((pad) => this.renderPad(pad, recipeOrder))}

          <!-- Row 1 (pads index 24..31) -->
          <div class="grid-label row-label" aria-hidden="true">1</div>
          ${this.pads.slice(24, 32).map((pad) => this.renderPad(pad, recipeOrder))}
        </div>
      </div>
    `;
  }

  private renderPad(pad: CircuitPad, recipeOrder: Map<number, number>) {
    if (!pad.note) {
      return html`<div class="gap" aria-hidden="true"></div>`;
    }

    const step = recipeOrder.get(pad.index);
    const halfClass = pad.index < 16 ? 'top-half' : 'bottom-half';
    return html`
      <div 
        class=${`pad ${pad.state} ${halfClass} ${step ? 'target' : ''}`} 
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

