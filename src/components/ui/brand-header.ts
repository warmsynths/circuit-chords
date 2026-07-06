import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { uiContext, midiContext, actionsContext } from '../../store/contexts';
import type { UIState, MidiState, AppActions } from '../../store/contexts';

@customElement('brand-header')
export class BrandHeader extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    
    .brand-header {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 0 16px;
      background: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
    }

    .brand-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .brand-logo {
      width: 24px;
      height: 24px;
      display: block;
    }

    .brand-title {
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      text-transform: lowercase;
      color: var(--text-primary);
      line-height: 1;
    }

    .brand-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .midi-led-group {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-secondary);
    }

    .midi-led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--midi-led-off);
      transition: all 0.3s ease;
    }

    .midi-led.connected {
      background: var(--status-green);
      box-shadow: 0 0 8px var(--status-green);
    }

    .audio-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--pad-scale);
      border: 1px solid var(--border-color);
      color: var(--btn-text-off, #94a3b8);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
    }
    
    .audio-btn:hover, .audio-btn.active {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }
    
    .audio-btn svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `;

  @consume({ context: uiContext, subscribe: true })
  @state()
  private uiState!: UIState;

  @consume({ context: midiContext, subscribe: true })
  @state()
  private midiState!: MidiState;

  @consume({ context: actionsContext, subscribe: true })
  private actions!: AppActions;

  private handleThemeToggle() {
    if (this.actions && this.uiState) {
      this.actions.setTheme(this.uiState.theme === 'dark' ? 'light' : 'dark');
    }
  }

  render() {
    const theme = this.uiState?.theme || 'dark';
    const midiConnected = this.midiState?.midiConnected || false;

    return html`
      <header class="brand-header">
        <div class="brand-left">
          <svg class="brand-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="var(--brand-logo-bg, #ffffff)" />
            <g transform="rotate(-45 16 16)" fill="var(--brand-logo-fill, #1a1b20)">
              <rect x="6.5" y="6" width="5" height="14" rx="2.5" />
              <rect x="13.5" y="12" width="5" height="14" rx="2.5" />
              <rect x="20.5" y="6" width="5" height="14" rx="2.5" />
            </g>
          </svg>
          <div class="brand-title">circuit chords</div>
        </div>
        <div class="brand-right">
          <!-- Theme Toggle Button -->
          <button class="audio-btn theme-toggle-btn" @click=${this.handleThemeToggle} title="${theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}">
            ${theme === 'dark' ? html`
              <!-- Sun Icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ` : html`
              <!-- Moon Icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            `}
          </button>
          <div class="midi-led-group">
            <span class="midi-led ${midiConnected ? 'connected' : ''}"></span>
            MIDI
          </div>
        </div>
      </header>
    `;
  }
}
