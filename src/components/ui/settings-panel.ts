import { LitElement, html, css, svg } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { uiContext, midiContext, actionsContext } from '../../store/contexts';
import type { UIState, MidiState, AppActions } from '../../store/contexts';

@customElement('settings-panel')
export class SettingsPanel extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    
    .sidebar-right {
      grid-column: 3 / 4;
      grid-row: 2 / 5;
      display: none;
      flex-direction: column;
      padding: 24px 20px;
      gap: 20px;
      background: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
      overflow-y: auto;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }

    .sidebar-right.open {
      display: flex;
    }

    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      right: 16px;
      background: var(--bg-onyx);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      width: 32px;
      height: 32px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;
    }
    .close-btn:hover {
      color: var(--text-primary);
      border-color: var(--text-primary);
    }

    .sidebar-header {
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 12px;
      margin-bottom: 8px;
    }

    .settings-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .section-title {
      margin: 0;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .midi-status {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: var(--bg-onyx);
      border-radius: 8px;
      border: 1px solid var(--border-color);
    }

    .midi-icon-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--bg-charcoal);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--border-color);
      color: var(--midi-svg-stroke-off);
      transition: all 0.3s ease;
    }
    
    .midi-icon-wrapper.connected {
      color: var(--status-green);
      border-color: var(--status-green);
      box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.2);
    }

    .midi-svg {
      width: 20px;
      height: 20px;
    }

    .status-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .status-text {
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.1em;
    }
    
    .status-text.connected {
      color: var(--status-green);
    }
    
    .status-text.disconnected {
      color: var(--text-muted);
    }

    .active-device-name {
      font-size: 0.8rem;
      color: var(--text-primary);
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 140px;
    }

    .midi-config {
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: var(--bg-onyx);
      padding: 16px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
    }
    
    .config-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--text-secondary);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .midi-select {
      background: var(--bg-charcoal);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 8px 12px;
      border-radius: 6px;
      font-family: inherit;
      font-size: 0.85rem;
      outline: none;
      width: 100%;
    }

    .midi-btn {
      margin-top: 8px;
      padding: 10px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
      width: 100%;
    }
    
    .midi-btn.connect {
      background: var(--accent-cyan);
      color: var(--accent-cyan-text);
    }
    
    .midi-btn.connect:hover:not(:disabled) {
      filter: brightness(1.1);
      box-shadow: 0 0 12px var(--accent-cyan-alpha);
    }
    
    .midi-btn.connect:disabled {
      background: var(--bg-charcoal);
      color: var(--text-muted);
      cursor: not-allowed;
    }
    
    .midi-btn.disconnect {
      background: var(--bg-charcoal);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }
    
    .midi-btn.disconnect:hover {
      border-color: #ff4444;
      color: #ff4444;
    }
    
    .no-devices-msg {
      font-size: 0.75rem;
      color: var(--text-secondary);
      font-style: italic;
      text-align: center;
      padding: 12px;
      background: var(--bg-onyx);
      border-radius: 8px;
      border: 1px dashed var(--border-color);
    }

    @media (max-width: 1024px) {
      .sidebar-right {
        display: flex;
        position: absolute;
        top: var(--gap);
        right: var(--gap);
        bottom: var(--gap);
        width: 320px;
        z-index: 100;
        box-shadow: -4px 0 24px rgba(0, 0, 0, 0.5);
        transform: translateX(120%);
      }
      .sidebar-right.open {
        transform: translateX(0);
      }
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

  // Ideally, these would be in a proper appStore/context, but for this refactor we can dispatch events 
  // or use the actions if they were defined in contexts.
  private handleDeviceSelect(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    this.dispatchEvent(new CustomEvent('device-select', { detail: value, bubbles: true, composed: true }));
  }

  private handleChannelSelect(e: Event) {
    const value = parseInt((e.target as HTMLSelectElement).value, 10);
    this.dispatchEvent(new CustomEvent('channel-select', { detail: value, bubbles: true, composed: true }));
  }

  private handleConnect() {
    this.dispatchEvent(new CustomEvent('midi-connect', { bubbles: true, composed: true }));
  }

  private handleDisconnect() {
    this.dispatchEvent(new CustomEvent('midi-disconnect', { bubbles: true, composed: true }));
  }

  private handleWarningToggle(e: Event) {
    const value = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(new CustomEvent('warning-toggle', { detail: value, bubbles: true, composed: true }));
  }

  // Passing props if context is missing for these specific UI states
  @state() showScaleWarnings = true;

  render() {
    const showSettings = this.uiState?.showSettings || false;
    const midiConnected = this.midiState?.midiConnected || false;
    const midiDevices = this.midiState?.midiDevices || [];
    const activeMidiDevice = this.midiState?.activeMidiDevice;
    const selectedMidiDevice = this.midiState?.selectedMidiDevice || '';
    const selectedMidiChannel = this.midiState?.selectedMidiChannel || 1;

    return html`
      <aside class="panel sidebar-right ${showSettings ? 'open' : ''}">
        <button class="close-btn" @click=${() => this.actions?.toggleSettings()} title="Close Settings">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="sidebar-header">
          <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Settings</h3>
        </div>

        <div class="settings-section">
          <h4 class="section-title">General</h4>
          <label style="display: flex; align-items: center; cursor: pointer; color: #b0b3b8; font-size: 0.9rem;">
            <input type="checkbox" .checked=${this.showScaleWarnings} @change=${this.handleWarningToggle} style="margin-right: 8px; cursor: pointer;">
            Show warnings for out-of-scale notes
          </label>
        </div>

        <div class="settings-section">
          <h4 class="section-title">MIDI Settings</h4>
          
          <div class="midi-status">
            <div class="midi-icon-wrapper ${midiConnected ? 'connected' : ''}">
              <svg class="midi-svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke-width="4" />
                <circle cx="25" cy="70" r="6" fill="currentColor" />
                <circle cx="75" cy="70" r="6" fill="currentColor" />
                <circle cx="20" cy="40" r="6" fill="currentColor" />
                <circle cx="80" cy="40" r="6" fill="currentColor" />
                <circle cx="50" cy="20" r="6" fill="currentColor" />
                <path d="M 45 90 L 50 80 L 55 90 Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div class="status-info">
              <div class="status-text ${midiConnected ? 'connected' : 'disconnected'}">
                ${midiConnected ? 'CONNECTED' : 'DISCONNECTED'}
              </div>
              ${midiConnected && activeMidiDevice ? html`
                <div class="active-device-name" title="${activeMidiDevice}">
                  ${activeMidiDevice}
                </div>
              ` : ''}
            </div>
          </div>

          ${midiDevices.length > 0 ? html`
            <div class="midi-config">
              <span class="config-label">Available Devices</span>
              <select class="midi-select" .value=${selectedMidiDevice} @change=${this.handleDeviceSelect}>
                ${midiDevices.map(device => html`
                  <option value=${device} ?selected=${selectedMidiDevice === device}>${device}</option>
                `)}
              </select>

              <span class="config-label" style="margin-top: 8px;">MIDI Channel</span>
              <select class="midi-select" .value=${selectedMidiChannel.toString()} @change=${this.handleChannelSelect}>
                ${Array.from({ length: 16 }, (_, i) => i + 1).map(channel => html`
                  <option value=${channel.toString()} ?selected=${selectedMidiChannel === channel}>Channel ${channel}</option>
                `)}
              </select>
              
              ${midiConnected && activeMidiDevice === selectedMidiDevice ? html`
                <button class="midi-btn disconnect" @click=${this.handleDisconnect}>
                  Disconnect
                </button>
              ` : html`
                <button class="midi-btn connect" @click=${this.handleConnect} ?disabled=${!selectedMidiDevice}>
                  Connect
                </button>
              `}
            </div>
          ` : html`
            <div class="no-devices-msg">
              No MIDI devices detected
            </div>
          `}
        </div>
      </aside>
    `;
  }
}
