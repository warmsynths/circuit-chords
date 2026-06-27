import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

@customElement('slider-element')
export class SliderElement extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 127;
  @property({ type: String }) label = '';
  @property({ type: Boolean }) horizontal = false;

  @state() private isDragging = false;
  @query('.slider-container') private container!: HTMLElement;

  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      user-select: none;
      --slider-color: #22d3ee;
      --slider-bg: #1e293b;
      --slider-track: #0f172a;
    }

    .slider-container {
      position: relative;
      background: var(--slider-track);
      border-radius: 8px;
      cursor: pointer;
      box-shadow: inset 2px 2px 5px #0c1222, inset -2px -2px 5px #202e46;
      touch-action: none;
    }

    :host(:not([horizontal])) .slider-container {
      width: 16px;
      height: 120px;
    }

    :host([horizontal]) .slider-container {
      width: 120px;
      height: 16px;
      flex-direction: row;
    }

    .slider-fill {
      position: absolute;
      background: var(--slider-color);
      border-radius: 8px;
      pointer-events: none;
      box-shadow: 0 0 8px var(--slider-color);
    }

    :host(:not([horizontal])) .slider-fill {
      bottom: 0;
      left: 0;
      width: 100%;
    }

    :host([horizontal]) .slider-fill {
      top: 0;
      left: 0;
      height: 100%;
    }

    .slider-thumb {
      position: absolute;
      background: #e2e8f0;
      border-radius: 4px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      pointer-events: none;
    }

    :host(:not([horizontal])) .slider-thumb {
      width: 24px;
      height: 8px;
      left: -4px;
      transform: translateY(50%);
    }

    :host([horizontal]) .slider-thumb {
      width: 8px;
      height: 24px;
      top: -4px;
      transform: translateX(-50%);
    }

    .label {
      margin-top: 8px;
      font-size: 0.75rem;
      color: #94a3b8;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    :host([horizontal]) .label {
      margin-top: 0;
      margin-right: 12px;
      width: 60px;
      text-align: right;
    }

    .layout-horizontal {
      display: flex;
      align-items: center;
    }
  `;

  private handlePointerDown = (e: PointerEvent) => {
    this.isDragging = true;
    this.container.setPointerCapture(e.pointerId);
    this.updateValueFromEvent(e);
    
    this.container.addEventListener('pointermove', this.handlePointerMove);
    this.container.addEventListener('pointerup', this.handlePointerUp);
    this.container.addEventListener('pointercancel', this.handlePointerUp);
  };

  private handlePointerMove = (e: PointerEvent) => {
    if (!this.isDragging) return;
    this.updateValueFromEvent(e);
  };

  private handlePointerUp = (e: PointerEvent) => {
    this.isDragging = false;
    this.container.releasePointerCapture(e.pointerId);
    this.container.removeEventListener('pointermove', this.handlePointerMove);
    this.container.removeEventListener('pointerup', this.handlePointerUp);
    this.container.removeEventListener('pointercancel', this.handlePointerUp);
  };

  private updateValueFromEvent(e: PointerEvent) {
    const rect = this.container.getBoundingClientRect();
    let percentage = 0;

    if (this.horizontal) {
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      percentage = x / rect.width;
    } else {
      const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
      percentage = 1 - (y / rect.height); // Invert Y axis
    }

    let newValue = Math.round(this.min + percentage * (this.max - this.min));
    
    if (newValue !== this.value) {
      this.value = newValue;
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    
    const fillStyle = this.horizontal
      ? `width: ${percentage}%`
      : `height: ${percentage}%`;
      
    const thumbStyle = this.horizontal
      ? `left: ${percentage}%`
      : `bottom: ${percentage}%`;

    const template = html`
      <div 
        class="slider-container"
        @pointerdown="${this.handlePointerDown}"
      >
        <div class="slider-fill" style="${fillStyle}"></div>
        <div class="slider-thumb" style="${thumbStyle}"></div>
      </div>
    `;

    if (this.horizontal) {
      return html`
        <div class="layout-horizontal">
          ${this.label ? html`<div class="label">${this.label}</div>` : ''}
          ${template}
        </div>
      `;
    }

    return html`
      ${template}
      ${this.label ? html`<div class="label">${this.label}</div>` : ''}
    `;
  }
}
