import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

@customElement('knob-element')
export class KnobElement extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 127;
  @property({ type: String }) label = '';
  @property({ type: Boolean }) centered = false;

  @state() private isDragging = false;
  @query('.knob-container') private container!: HTMLElement;

  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      user-select: none;
      --knob-color: var(--accent-cyan, #22d3ee);
      --knob-bg: var(--pad-scale, #1e293b);
      --knob-track: var(--pad-chromatic, #334155);
    }

    .knob-container {
      position: relative;
      width: 60px;
      height: 60px;
      cursor: ns-resize;
      border-radius: 50%;
      background: var(--bg-charcoal, linear-gradient(145deg, #1e293b, #0f172a));
      box-shadow: var(--knob-shadow, 5px 5px 10px #0c1222, -5px -5px 10px #202e46);
      display: flex;
      justify-content: center;
      align-items: center;
      touch-action: none;
      transition: box-shadow 0.2s ease, transform 0.1s ease;
    }

    .knob-container:hover {
      box-shadow: var(--knob-shadow-hover, 3px 3px 6px #0c1222, -3px -3px 6px #202e46);
    }

    .knob-container.dragging {
      transform: scale(0.98);
      box-shadow: var(--knob-shadow-dragging, inset 3px 3px 6px #0c1222, inset -3px -3px 6px #202e46);
    }

    .knob-svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .track {
      fill: none;
      stroke: var(--knob-track);
      stroke-width: 6;
      stroke-linecap: round;
    }

    .progress {
      fill: none;
      stroke: var(--knob-color);
      stroke-width: 6;
      stroke-linecap: round;
      filter: drop-shadow(0 0 4px var(--knob-color));
      transition: stroke-dasharray 0.1s linear;
    }

    .indicator-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
    }

    .indicator {
      position: absolute;
      width: 4px;
      height: 12px;
      background-color: var(--text-secondary, #e2e8f0);
      border-radius: 2px;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
    }

    .label {
      margin-top: 8px;
      font-size: 0.75rem;
      color: var(--text-secondary, #94a3b8);
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
  `;

  private startY = 0;
  private startValue = 0;
  
  private handlePointerDown = (e: PointerEvent) => {
    this.isDragging = true;
    this.startY = e.clientY;
    this.startValue = this.value;
    
    // Capture pointer events
    this.container.setPointerCapture(e.pointerId);
    
    this.container.addEventListener('pointermove', this.handlePointerMove);
    this.container.addEventListener('pointerup', this.handlePointerUp);
    this.container.addEventListener('pointercancel', this.handlePointerUp);
  };

  private handlePointerMove = (e: PointerEvent) => {
    if (!this.isDragging) return;
    
    const deltaY = this.startY - e.clientY;
    const sensitivity = (this.max - this.min) / 100;
    
    let newValue = this.startValue + Math.round(deltaY * sensitivity);
    newValue = Math.max(this.min, Math.min(this.max, newValue));
    
    if (newValue !== this.value) {
      this.value = newValue;
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true
      }));
    }
  };

  private handlePointerUp = (e: PointerEvent) => {
    this.isDragging = false;
    this.container.releasePointerCapture(e.pointerId);
    this.container.removeEventListener('pointermove', this.handlePointerMove);
    this.container.removeEventListener('pointerup', this.handlePointerUp);
    this.container.removeEventListener('pointercancel', this.handlePointerUp);
  };

  private renderSvg() {
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    // We want a gap at the bottom. 270 degrees arc.
    const arcLength = circumference * 0.75;
    const gapLength = circumference * 0.25;
    
    const normalizedValue = (this.value - this.min) / (this.max - this.min);
    
    let strokeDasharray = `0 ${circumference}`;
    
    if (this.centered) {
      const halfArc = arcLength / 2;
      const progress = (normalizedValue - 0.5) * arcLength;
      
      if (progress > 0) {
        strokeDasharray = `0 ${halfArc + gapLength / 2} ${progress} ${circumference}`;
      } else {
        strokeDasharray = `0 ${halfArc + gapLength / 2 + progress} ${Math.abs(progress)} ${circumference}`;
      }
    } else {
      strokeDasharray = `${normalizedValue * arcLength} ${circumference}`;
    }

    const angle = this.centered 
      ? -135 + (normalizedValue * 270)
      : -135 + (normalizedValue * 270);

    return html`
      <svg class="knob-svg" viewBox="0 0 60 60">
        <circle 
          class="track" 
          cx="30" cy="30" r="${radius}" 
          stroke-dasharray="${arcLength} ${gapLength}" 
          stroke-dashoffset="${-gapLength / 2}" 
          transform="rotate(135, 30, 30)" 
        />
        <circle 
          class="progress" 
          cx="30" cy="30" r="${radius}" 
          stroke-dasharray="${strokeDasharray}" 
          stroke-dashoffset="${-gapLength / 2}" 
          transform="rotate(135, 30, 30)" 
        />
      </svg>
      <div class="indicator-wrapper" style="transform: rotate(${angle}deg)">
        <div class="indicator"></div>
      </div>
    `;
  }

  render() {
    return html`
      <div 
        class="knob-container ${this.isDragging ? 'dragging' : ''}"
        @pointerdown="${this.handlePointerDown}"
      >
        ${this.renderSvg()}
      </div>
      ${this.label ? html`<div class="label">${this.label}</div>` : ''}
    `;
  }
}
