import { LitElement, html, css, svg } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Note } from 'tonal';
import { consume } from '@lit/context';
import { chordContext, uiContext, actionsContext } from '../../store/contexts';
import type { ChordState, UIState, AppActions } from '../../store/contexts';

@customElement('voicing-keyboard')
export class VoicingKeyboard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .keyboard-viz-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-charcoal);
      padding: 2px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      height: 46px;
      cursor: pointer;
      user-select: none;
      touch-action: none;
      box-shadow: var(--shadow-inset);
      transition: border-color 0.2s ease;
    }

    .keyboard-viz-container:hover {
      border-color: rgba(255, 255, 255, 0.15);
    }

    .voicing-keyboard {
      background: transparent;
    }

    .voicing-keyboard rect.white-key {
      fill: var(--kb-white-key-bg, #8b8e98);
      stroke: var(--kb-stroke, #121316);
      stroke-width: 0.75px;
      cursor: pointer;
      transition: fill 0.15s ease;
    }

    .voicing-keyboard rect.white-key.active {
      fill: var(--accent-cyan);
      stroke: var(--accent-cyan);
    }

    .voicing-keyboard rect.black-key {
      fill: var(--kb-black-key-bg, #121316);
      stroke: var(--kb-stroke, #121316);
      stroke-width: 0.75px;
      cursor: pointer;
      transition: fill 0.15s ease;
    }

    .voicing-keyboard rect.black-key.active {
      fill: var(--accent-cyan);
      stroke: var(--accent-cyan);
    }

    .voicing-keyboard text.keyboard-label {
      fill: var(--accent-cyan);
      font-size: 7px;
      font-weight: 800;
      pointer-events: none;
      text-shadow: 0 0 4px var(--accent-cyan-alpha);
    }
  `;

  @consume({ context: uiContext, subscribe: true })
  @state()
  private uiState!: UIState;

  @consume({ context: chordContext, subscribe: true })
  @state()
  private chordState!: ChordState;

  @consume({ context: actionsContext, subscribe: true })
  private actions!: AppActions;

  // Since we aren't lifting all complex logic to the store yet, we will dispatch events for the container to handle
  // or we can handle it directly if we lift shiftVoicingInversion logic to the actions.
  
  private onKeyboardPointerDown(e: PointerEvent) {
    const containerEl = e.currentTarget as HTMLElement;
    containerEl.setPointerCapture(e.pointerId);
    this.dispatchEvent(new CustomEvent('keyboard-pointer-down', { detail: { clientX: e.clientX }, bubbles: true, composed: true }));
    e.preventDefault();
  }

  private onKeyboardPointerMove(e: PointerEvent) {
    this.dispatchEvent(new CustomEvent('keyboard-pointer-move', { detail: { clientX: e.clientX }, bubbles: true, composed: true }));
  }

  private onKeyboardPointerUp(e: PointerEvent) {
    const containerEl = e.currentTarget as HTMLElement;
    try {
      containerEl.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    const target = e.target as SVGElement;
    let midi = null;
    if (target.tagName === 'rect') {
      const midiAttr = target.getAttribute('data-midi');
      if (midiAttr) {
        midi = Number(midiAttr);
      }
    }
    this.dispatchEvent(new CustomEvent('keyboard-pointer-up', { detail: { midi }, bubbles: true, composed: true }));
  }

  private onKeyboardWheel(e: WheelEvent) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('keyboard-wheel', { detail: { deltaY: e.deltaY }, bubbles: true, composed: true }));
  }

  render() {
    // Fallbacks if contexts aren't loaded yet
    const activeIndex = this.chordState?.activeIndex ?? 0;
    const progression = this.chordState?.progression ?? [];
    const voicedOffsets = this.chordState?.voicedOffsets ?? {};
    const isMobileViewport = this.uiState?.isMobileViewport ?? false;

    // Use transposeProgression flag if we add it to the state, but we'll assume it's true for now
    const activeChord = progression[activeIndex] ?? null;
    const rootMidi = activeChord ? (Note.midi((activeChord.tonic ?? 'C') + '4') ?? 60) : 60;

    const activeMidis = (voicedOffsets[activeIndex] || []).map((offset: number) => rootMidi + offset);

    const isMobile = isMobileViewport;

    const whiteKeys = isMobile ? [
      60, 62, 64, 65, 67, 69, 71,
      72, 74, 76, 77, 79, 81, 83,
      84
    ] : [
      48, 50, 52, 53, 55, 57, 59,
      60, 62, 64, 65, 67, 69, 71,
      72, 74, 76, 77, 79, 81, 83,
      84
    ];

    const blackKeys = isMobile ? [
      { midi: 61, afterIdx: 0 }, { midi: 63, afterIdx: 1 }, { midi: 66, afterIdx: 3 }, { midi: 68, afterIdx: 4 }, { midi: 70, afterIdx: 5 },
      { midi: 73, afterIdx: 7 }, { midi: 75, afterIdx: 8 }, { midi: 78, afterIdx: 10 }, { midi: 80, afterIdx: 11 }, { midi: 82, afterIdx: 12 }
    ] : [
      { midi: 49, afterIdx: 0 }, { midi: 51, afterIdx: 1 }, { midi: 54, afterIdx: 3 }, { midi: 56, afterIdx: 4 }, { midi: 58, afterIdx: 5 },
      { midi: 61, afterIdx: 7 }, { midi: 63, afterIdx: 8 }, { midi: 66, afterIdx: 10 }, { midi: 68, afterIdx: 11 }, { midi: 70, afterIdx: 12 },
      { midi: 73, afterIdx: 14 }, { midi: 75, afterIdx: 15 }, { midi: 78, afterIdx: 17 }, { midi: 80, afterIdx: 18 }, { midi: 82, afterIdx: 19 }
    ];

    const width = isMobile ? 150 : 220;
    const containerWidth = isMobile ? 154 : 224;

    return html`
      <div 
        class="keyboard-viz-container"
        style="width: ${containerWidth}px;"
        @pointerdown=${this.onKeyboardPointerDown}
        @pointermove=${this.onKeyboardPointerMove}
        @pointerup=${this.onKeyboardPointerUp}
        @pointercancel=${this.onKeyboardPointerUp}
        @wheel=${this.onKeyboardWheel}
      >
        <svg class="voicing-keyboard" width="${width}" height="42" viewBox="0 0 ${width} 42">
          ${whiteKeys.map((midi, i) => {
            const x = i * 10;
            const isActive = activeMidis.includes(midi);
            return svg`
              <rect 
                x="${x}" 
                y="2" 
                width="9.2" 
                height="28" 
                rx="1" 
                class="white-key ${isActive ? 'active' : ''}"
                data-midi="${midi}"
              />
            `;
          })}

          ${blackKeys.map(({ midi, afterIdx }) => {
            const x = (afterIdx + 1) * 10 - 3.2;
            const isActive = activeMidis.includes(midi);
            return svg`
              <rect 
                x="${x}" 
                y="2" 
                width="6.4" 
                height="18" 
                rx="0.5" 
                class="black-key ${isActive ? 'active' : ''}"
                data-midi="${midi}"
              />
            `;
          })}

          ${activeMidis.map(midi => {
            const wIdx = whiteKeys.indexOf(midi);
            let labelX = 0;
            if (wIdx !== -1) {
              labelX = wIdx * 10 + 4.6;
            } else {
              const bk = blackKeys.find(b => b.midi === midi);
              if (bk) {
                labelX = (bk.afterIdx + 1) * 10;
              }
            }
            const noteName = Note.pitchClass(Note.fromMidi(midi));
            return svg`
              <text x="${labelX}" y="39" text-anchor="middle" class="keyboard-label">
                ${noteName}
              </text>
            `;
          })}
        </svg>
      </div>
    `;
  }
}
