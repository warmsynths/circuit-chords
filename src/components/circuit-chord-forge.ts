import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Chord, Interval, Note } from 'tonal';
import './chord-input';
import './progression-stepper';
import './circuit-grid';
import type { ChordInputParsedEventDetail, ParsedChord } from './chord-input';
import {
  KEY_OPTIONS,
  PAD_ANCHOR_OPTIONS,
  SCALE_OPTIONS,
  VOICING_OPTIONS,
  buildChordRecipe,
  buildCircuitGrid,
  type PadAnchorMode,
  type GridConfig,
  type ScaleMode,
  type VoicingMode,
} from '../lib/music-grid';
import { playChord } from '../lib/audio';

@customElement('circuit-chord-forge')
export class CircuitChordForge extends LitElement {
  static styles = css`
    :host {
      /* 1. DESIGN THEME & COLOR PALETTE */
      --bg-onyx: #121316;
      --bg-charcoal: #1a1b20;
      --radius-panel: 12px;
      
      --pad-scale: #2c3a4e;
      --pad-chromatic: #222328;
      
      --accent-cyan: #00f0ff;
      --accent-magenta: #ff2a9f;
      --status-green: #39ff14;

      /* Structural sizing */
      --sidebar-left-width: 72px;
      --sidebar-right-width: 260px;
      --header-height: 80px;
      --footer-height: 80px;
      --gap: 16px;

      display: block;
      height: 100vh;
      overflow: hidden;
      background-color: var(--bg-onyx);
      color: #ffffff;
      font-family: 'Space Grotesk', system-ui, sans-serif;
      padding: var(--gap);
      box-sizing: border-box;
    }

    * {
      box-sizing: border-box;
    }

    /* Hide scrollbars globally but keep functionality */
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent-cyan);
    }

    /* 2. STRUCTURAL SECTIONS & ARCHITECTURE */
    .app-grid {
      display: grid;
      grid-template-columns: var(--sidebar-left-width) minmax(0, 1fr) var(--sidebar-right-width);
      grid-template-rows: 48px var(--header-height) 1fr var(--footer-height);
      gap: var(--gap);
      height: calc(100vh - (var(--gap) * 2));
      max-width: 1600px;
      margin: 0 auto;
    }

    .panel {
      background-color: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    }

    /* Brand Header Bar */
    .brand-header {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 0 16px;
      background: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
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
      color: #ffffff;
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
      color: #888;
    }

    .midi-led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--status-green);
      box-shadow: 0 0 8px var(--status-green);
    }

    /* Section 1: Left Navigation Tab Bar */
    .sidebar-left {
      grid-column: 1 / 2;
      grid-row: 2 / 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 0;
      gap: 16px;
    }

    .nav-btn {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: var(--bg-onyx);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #666;
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
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.2);
    }

    .nav-divider {
      width: 32px;
      height: 2px;
      background: rgba(255, 255, 255, 0.08);
      margin: 8px 0;
      border-radius: 2px;
    }

    .nav-bottom {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* Section 2: Top Header Bar */
    .header-top {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      display: flex;
      align-items: center;
      padding: 0 24px;
      gap: 32px;
      overflow: hidden;
    }

    .config-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .config-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #888;
      text-transform: uppercase;
    }

    .tactile-group {
      display: flex;
      gap: 4px;
      background: var(--bg-onyx);
      padding: 4px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .tactile-btn {
      padding: 6px 11px;
      border-radius: 6px;
      background: var(--pad-chromatic);
      color: #888;
      border: none;
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.15s ease;
      min-width: 34px;
      text-align: center;
    }
    .tactile-btn:hover {
      background: var(--pad-scale);
      color: white;
    }
    .tactile-btn.active-root {
      background: var(--accent-cyan);
      color: var(--bg-onyx);
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
    }

    .header-select {
      background: var(--bg-onyx) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2300f0ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 6 8 10 12 6'></polyline></svg>") no-repeat right 12px center;
      background-size: 12px;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 6px 32px 6px 16px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
      outline: none;
      font-family: inherit;
      appearance: none;
      -webkit-appearance: none;
      min-width: 150px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
      transition: all 0.2s;
    }
    .header-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0, 240, 255, 0.25);
    }
    .header-select:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* Section 3: Center Main Content Area */
    .main-content {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      padding: 24px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Tab 1: Grid View */
    .circuit-grid {
      height: 100%;
      width: 100%;
    }

    /* Tab 2: Data Input View */
    .data-input-view {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 32px;
      width: 100%;
    }

    /* We wrap chord-input here so it displays inside */
    chord-input {
      width: 100%;
      max-width: 500px;
    }

    /* Section 4: Right Sidebar (MIDI HUD) */
    .sidebar-right {
      grid-column: 3 / 4;
      grid-row: 2 / 4;
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .sidebar-right::-webkit-scrollbar {
      display: none;
    }

    .midi-status {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .midi-icon-wrapper {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: var(--bg-onyx);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #222328;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.8);
      transition: all 0.3s;
    }

    .midi-icon-wrapper.connected {
      border-color: var(--status-green);
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.8), 0 0 16px rgba(57, 255, 20, 0.3);
    }

    .midi-svg {
      width: 42px;
      height: 42px;
      fill: none;
      stroke: #333;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .midi-icon-wrapper.connected .midi-svg {
      stroke: var(--status-green);
      filter: drop-shadow(0 0 4px var(--status-green));
    }

    .status-text {
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: var(--status-green);
      text-shadow: 0 0 8px rgba(57, 255, 20, 0.4);
    }

    .midi-config {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .midi-select {
      width: 100%;
      background: var(--bg-onyx) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2300f0ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 6 8 10 12 6'></polyline></svg>") no-repeat right 16px center;
      background-size: 14px;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 10px 36px 10px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      font-family: inherit;
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      outline: none;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
      transition: all 0.2s;
    }
    .midi-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 240, 255, 0.25);
    }
    .midi-select:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* Section 5: Bottom Timeline Footer */
    .footer-timeline {
      grid-column: 2 / 4;
      grid-row: 4 / 5;
      display: flex;
      align-items: center;
      padding: 0 24px;
    }

    progression-stepper {
      width: 100%;
    }

    .mobile-close-btn {
      display: none;
    }

    /* Responsive Media Queries */
    @media (max-width: 1024px) {
      :host {
        --sidebar-left-width: 56px;
        --sidebar-right-width: 0px;
        --header-height: 70px;
        --footer-height: 70px;
        --gap: 8px;
        padding: var(--gap);
      }

      .app-grid {
        grid-template-columns: var(--sidebar-left-width) minmax(0, 1fr);
        grid-template-rows: 48px var(--header-height) 1fr var(--footer-height);
        gap: var(--gap);
        height: calc(100vh - (var(--gap) * 2));
      }

      .brand-header {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        padding: 0 12px;
      }

      .desktop-only {
        display: none !important;
      }

      .mobile-only {
        display: flex !important;
      }

      .main-content {
        padding: 12px;
      }

      /* Sidebar Right as Overlay Drawer on Mobile */
      .sidebar-right {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 280px;
        height: 100vh;
        z-index: 1000;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        background: var(--bg-charcoal);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0;
        box-shadow: -4px 0 24px rgba(0, 0, 0, 0.5);
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
      }

      .sidebar-right.open {
        transform: translateX(0);
      }

      .mobile-close-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 16px;
        right: 16px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        width: 32px;
        height: 32px;
        color: #888;
        cursor: pointer;
        z-index: 1010;
        transition: all 0.2s ease;
      }
      .mobile-close-btn:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: var(--accent-cyan);
        color: var(--accent-cyan);
      }

      .sidebar-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2px);
        z-index: 999;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }

      .sidebar-backdrop.open {
        opacity: 1;
        pointer-events: auto;
      }

      /* Reduce spacer elements in timeline footer on mobile */
      .footer-timeline {
        padding: 0 8px;
        grid-column: 2 / 3;
        grid-row: 4 / 5;
      }
    }

    @media (min-width: 1025px) {
      .desktop-only {
        display: flex !important;
      }

      .mobile-only {
        display: none !important;
      }
      
      .sidebar-backdrop {
        display: none !important;
      }
    }
  `;

  // === State Variables ===
  @state() private activeTab: 'grid' | 'data' = 'grid';
  @state() private progression: ParsedChord[] = [];
  @state() private originalKey = 'C';
  @state() private activeIndex = 0;
  @state() private config: GridConfig = {
    key: 'C',
    scale: 'minor',
    mode: 'chromatic',
    anchorMode: 'key',
  };
  @state() private voicing: VoicingMode = 'triad';
  @state() private autoPlay = true;
  @state() private transposeProgression = true;
  @state() private inversion = 0;
  @state() private source = '';
  @state() private showSettings = false;

  connectedCallback() {
    super.connectedCallback();
    this.loadDefaultProgression();
  }

  private loadDefaultProgression() {
    const defaultSource = 'Cmaj7 Am7 Dm7 G7';
    const tokens = defaultSource.match(/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g) || [];
    const parsed: ParsedChord[] = [];
    for (const symbol of tokens) {
      const chord = Chord.get(symbol);
      if (!chord.empty && chord.notes.length > 0) {
        parsed.push({
          symbol,
          tonic: chord.tonic,
          quality: chord.quality,
          notes: chord.notes,
          intervals: chord.intervals,
          aliases: chord.aliases,
        });
      }
    }
    if (parsed.length > 0) {
      this.progression = parsed;
      this.source = defaultSource;
      this.activeIndex = 0;
      const firstChord = parsed[0];
      const baseKey = this.normalizeKey(firstChord?.tonic) ?? this.config.key;
      this.originalKey = baseKey;
      this.config = { ...this.config, key: baseKey };
    }
  }

  render() {
    const transposedProgression = this.getTransposedProgression();
    const activeChord = transposedProgression[this.activeIndex] ?? null;
    const pads = buildCircuitGrid(activeChord, this.config);
    const recipe = buildChordRecipe(activeChord, pads, this.voicing, this.inversion);

    return html`
      <div class="app-grid">
        <!-- Brand Header Bar -->
        <header class="brand-header">
          <div class="brand-left">
            <svg class="brand-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#ffffff" />
              <g transform="rotate(-45 16 16)" fill="#1a1b20">
                <rect x="8.5" y="4.5" width="6" height="23" rx="2.5" />
                <rect x="17.5" y="13.5" width="6" height="14" rx="2.5" />
              </g>
            </svg>
            <div class="brand-title">circuit chords</div>
          </div>
          <div class="brand-right">
            <div class="midi-led-group">
              <span class="midi-led"></span>
              WebMIDI
            </div>
          </div>
        </header>

        <!-- 1. Left Navigation Tab Bar -->
        <nav class="panel sidebar-left">
          <button class="nav-btn ${this.activeTab === 'grid' ? 'active' : ''}" title="Grid View" @click=${() => this.activeTab = 'grid'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </button>
          <button class="nav-btn ${this.activeTab === 'data' ? 'active' : ''}" title="Data Input View" @click=${() => this.activeTab = 'data'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </button>
          <div class="nav-divider"></div>
          <div class="nav-bottom">
            <button class="nav-btn" title="Help ?">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </button>
            <button class="nav-btn" title="Settings" @click=${() => this.showSettings = !this.showSettings}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
          </div>
        </nav>

        <!-- 2. Top Header Bar -->
        <header class="panel header-top">
          <div class="config-group">
            <span class="config-label">Root Note</span>
            <!-- Desktop Layout -->
            <div class="tactile-group desktop-only">
              ${KEY_OPTIONS.map(key => html`
                <button 
                  class="tactile-btn ${this.config.key === key ? 'active-root' : ''}"
                  @click=${() => this.onKeyChange(key)}>
                  ${key}
                </button>
              `)}
            </div>
            <!-- Mobile Layout -->
            <div class="tactile-group mobile-only">
              <select class="header-select" @change=${(e: Event) => this.onKeyChange((e.target as HTMLSelectElement).value)}>
                ${KEY_OPTIONS.map(key => html`
                  <option value=${key} ?selected=${this.config.key === key}>${key}</option>
                `)}
              </select>
            </div>
          </div>
          
          <div class="config-group">
            <span class="config-label">Scale Type</span>
            <div class="tactile-group">
              <select class="header-select" @change=${(e: Event) => this.onScaleChange((e.target as HTMLSelectElement).value)}>
                ${SCALE_OPTIONS.map(scale => html`
                  <option value=${scale} ?selected=${this.config.scale === scale}>
                    ${scale.toUpperCase()}
                  </option>
                `)}
              </select>
            </div>
          </div>
        </header>

        <!-- 3. Center Main Content Area -->
        <main class="panel main-content">
          <!-- Tab 1: Grid View -->
          <div class="circuit-grid" style="display: ${this.activeTab === 'grid' ? 'block' : 'none'}">
            <circuit-grid .pads=${pads} .recipe=${recipe}></circuit-grid>
          </div>

          <!-- Tab 2: Data Input View -->
          <div class="data-input-view" style="display: ${this.activeTab === 'data' ? 'flex' : 'none'}">
            <chord-input .value=${this.source} @progression-parsed=${this.onParsed}></chord-input>
          </div>
        </main>

        <!-- Sidebar Backdrop for Mobile overlay -->
        <div class="sidebar-backdrop ${this.showSettings ? 'open' : ''}" @click=${() => this.showSettings = false}></div>

        <!-- 4. Right Sidebar (MIDI HUD) -->
        <aside class="panel sidebar-right ${this.showSettings ? 'open' : ''}">
          <!-- Mobile Close Button -->
          <button class="mobile-close-btn" @click=${() => this.showSettings = false} title="Close Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="midi-status">
            <span class="config-label">MIDI Status</span>
            <div class="midi-icon-wrapper connected">
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
            <div class="status-text">CONNECTED</div>
          </div>

          <!-- Advanced Config -->
          <div class="midi-config">
            <span class="config-label">Pad Anchor</span>
            <select class="midi-select" .value=${this.config.anchorMode} @change=${(e: Event) => this.setAnchorMode((e.target as HTMLSelectElement).value as PadAnchorMode)}>
              ${PAD_ANCHOR_OPTIONS.map((o) => html`<option value=${o}>${o === 'key' ? 'Project Key' : 'Chord Root'}</option>`)}
            </select>
          </div>
          
          <div class="midi-config">
            <span class="config-label">Pad Mode</span>
            <select class="midi-select" .value=${this.config.mode} @change=${(e: Event) => this.setMode((e.target as HTMLSelectElement).value as ScaleMode)}>
              <option value="chromatic">Chromatic</option>
              <option value="collapsed">Scale Collapse</option>
            </select>
          </div>
          
          <div class="midi-config">
            <span class="config-label">Voicing</span>
            <select class="midi-select" .value=${this.voicing} @change=${(e: Event) => this.onVoicingChange((e.target as HTMLSelectElement).value as VoicingMode)}>
              ${VOICING_OPTIONS.map((v) => html`<option value=${v}>${v}</option>`)}
            </select>
          </div>

        </aside>

        <!-- 5. Bottom Timeline Footer -->
        <footer class="panel footer-timeline">
          <progression-stepper
            .originalChords=${this.progression}
            .keyChords=${this.transposeProgression && this.originalKey !== this.config.key ? transposedProgression : []}
            .keyLabel=${this.config.key}
            .activeIndex=${this.activeIndex}
            @chord-selected=${(e: CustomEvent<number>) => this.onChordSelected(e)}
          ></progression-stepper>
        </footer>
      </div>
    `;
  }

  // === Business Logic Ported ===

  private playActiveVoicing() {
    const transposedProgression = this.getTransposedProgression();
    const activeChord = transposedProgression[this.activeIndex] ?? null;
    if (!activeChord) return;

    const pads = buildCircuitGrid(activeChord, this.config);
    const recipe = buildChordRecipe(activeChord, pads, this.voicing, this.inversion);
    const midiNotes = recipe
      .map((rPad) => pads.find((p) => p.index === rPad.index)?.midiNote)
      .filter((note): note is string => Boolean(note));

    if (midiNotes.length > 0) {
      playChord(midiNotes);
    }
  }

  private setAnchorMode(anchorMode: PadAnchorMode) {
    this.config = { ...this.config, anchorMode };
  }

  private setMode(mode: ScaleMode) {
    this.config = { ...this.config, mode };
  }

  private onKeyChange(key: string) {
    this.config = { ...this.config, key };
  }

  private onScaleChange(scale: string) {
    this.config = { ...this.config, scale };
  }

  private onVoicingChange(voicing: VoicingMode) {
    this.voicing = voicing;
  }

  private onChordSelected(event: CustomEvent<number>) {
    this.activeIndex = event.detail;
    if (this.autoPlay) {
      setTimeout(() => this.playActiveVoicing(), 20);
    }
  }

  private onParsed(event: CustomEvent<ChordInputParsedEventDetail>) {
    this.progression = event.detail.progression;
    this.source = event.detail.source;
    this.activeIndex = 0;

    const firstChord = event.detail.progression[0];
    const baseKey = this.normalizeKey(firstChord?.tonic) ?? this.config.key;
    this.originalKey = baseKey;

    if (firstChord?.tonic) {
      this.config = { ...this.config, key: baseKey };
    }

    if (this.autoPlay && this.progression.length > 0) {
      setTimeout(() => this.playActiveVoicing(), 50);
    }
    
    this.activeTab = 'grid'; // Switch back to grid view so user sees pads
  }

  private getTransposedProgression(): ParsedChord[] {
    if (this.progression.length === 0) return [];
    if (!this.transposeProgression) return this.progression;

    const semitones = this.getKeyShiftSemitones();
    if (semitones === 0) return this.progression;

    return this.progression
      .map((chord) => this.transposeParsedChord(chord, semitones))
      .filter((chord): chord is ParsedChord => Boolean(chord));
  }

  private getKeyShiftSemitones(): number {
    const fromIndex = KEY_OPTIONS.indexOf(this.originalKey);
    const toIndex = KEY_OPTIONS.indexOf(this.config.key);
    if (fromIndex === -1 || toIndex === -1) return 0;
    return (toIndex - fromIndex + 12) % 12;
  }

  private transposeParsedChord(chord: ParsedChord, semitones: number): ParsedChord | null {
    const transposedSymbol = this.transposeChordSymbol(chord.symbol, semitones);
    if (!transposedSymbol) return null;

    const resolved = Chord.get(transposedSymbol);
    if (resolved.empty || resolved.notes.length === 0) return null;

    return {
      symbol: transposedSymbol,
      tonic: resolved.tonic,
      quality: resolved.quality,
      notes: resolved.notes,
      intervals: resolved.intervals,
      aliases: resolved.aliases,
    };
  }

  private transposeChordSymbol(symbol: string, semitones: number): string | null {
    const match = symbol.match(/^([A-G](?:#{1,2}|b{1,2})?)(.*?)(?:\/([A-G](?:#{1,2}|b{1,2})?))?$/);
    if (!match) return null;

    const root = this.transposeNoteName(match[1], semitones);
    if (!root) return null;

    const suffix = match[2] ?? '';
    const bass = match[3] ? this.transposeNoteName(match[3], semitones) : null;
    if (match[3] && !bass) return null;
    return `${root}${suffix}${bass ? `/${bass}` : ''}`;
  }

  private transposeNoteName(noteName: string, semitones: number): string | null {
    const interval = Interval.fromSemitones(semitones);
    const shifted = Note.transpose(noteName, interval);
    return this.normalizeKey(shifted);
  }

  private normalizeKey(note: string | null | undefined): string | null {
    const pitchClass = Note.pitchClass(note ?? '');
    if (!pitchClass) return null;
    const enharmonic = Note.enharmonic(pitchClass);
    return KEY_OPTIONS.includes(enharmonic) ? enharmonic : null;
  }
}
