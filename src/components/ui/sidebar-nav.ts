import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { uiContext, midiContext, actionsContext } from '../../store/contexts';
import type { UIState, MidiState, AppActions } from '../../store/contexts';

@customElement('sidebar-nav')
export class SidebarNav extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    
    .sidebar-left {
      grid-column: 1 / 2;
      grid-row: 2 / 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 0;
      gap: 16px;
      background-color: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
    }

    .nav-btn {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: var(--pad-scale);
      border: 1px solid var(--border-color);
      color: var(--btn-text-off, #94a3b8);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-btn:hover, .nav-btn.active {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }

    .nav-divider {
      width: 32px;
      height: 2px;
      background: var(--border-color);
      margin: 8px 0;
      border-radius: 2px;
    }

    .nav-bottom {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
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

  // We could also pass this down from root if we don't want the nav to figure it out
  @property({ type: Boolean })
  isCircuitTracksConnected = false;

  render() {
    const activeTab = this.uiState?.activeTab || 'grid';
    const showHelp = this.uiState?.showHelp || false;
    const showSettings = this.uiState?.showSettings || false;

    return html`
      <nav class="panel sidebar-left">
        <button class="nav-btn ${activeTab === 'grid' ? 'active' : ''}" title="Grid View" @click=${() => this.actions?.setActiveTab('grid')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </button>
        <button class="nav-btn ${activeTab === 'data' ? 'active' : ''}" title="Key &amp; Scale" @click=${() => this.actions?.setActiveTab('data')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </button>
        <button class="nav-btn ${activeTab === 'input' ? 'active' : ''}" title="Chord Input" @click=${() => this.actions?.setActiveTab('input')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </button>
        <button 
          class="nav-btn ${activeTab === 'patch' ? 'active' : ''}" 
          title="Patch Editor" 
          @click=${() => { if (this.isCircuitTracksConnected) this.actions?.setActiveTab('patch'); }}
          style="opacity: ${this.isCircuitTracksConnected ? '1' : '0.3'}; cursor: ${this.isCircuitTracksConnected ? 'pointer' : 'not-allowed'};"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
        </button>
        <div class="nav-divider"></div>
        <div class="nav-bottom">
          <button class="nav-btn ${showHelp ? 'active' : ''}" title="Help ?" @click=${() => this.actions?.toggleHelp()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </button>
          <button class="nav-btn ${showSettings ? 'active' : ''}" title="Settings" @click=${() => this.actions?.toggleSettings()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>
        </div>
      </nav>
    `;
  }
}
