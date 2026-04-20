import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Chord, Interval, Note } from 'tonal';
import './components/chord-input';
import './components/progression-stepper';
import './components/circuit-grid';
import type { ChordInputParsedEventDetail, ParsedChord } from './components/chord-input';
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
} from './lib/music-grid';

/**
 * Root application component that binds progression parsing, key/scale settings,
 * grid mapping, and chord voicing guidance into one interactive workflow.
 */
@customElement('chord-mapper-app')
class ChordMapperApp extends LitElement {
  static styles = css`
    :host {
      display: grid;
      gap: 1.25rem;
      margin-top: 1rem;
      overflow-x: clip;
    }

    .panel {
      border: 1px solid #2d3a4d;
      border-radius: 18px;
      padding: 1rem;
      background: linear-gradient(180deg, rgb(28 37 50 / 0.92), rgb(18 25 35 / 0.92));
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.03),
        0 10px 30px rgb(2 6 23 / 0.35);
    }

    .panel-title {
      margin: 0;
      font-size: 0.88rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #9fb2cb;
    }

    .status {
      display: grid;
      gap: 0.4rem;
    }

    .placeholder {
      color: #94a3b8;
      font-size: 0.9rem;
    }

    .layout {
      display: grid;
      grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
      gap: 1rem;
      align-items: start;
    }

    .controls {
      display: grid;
      gap: 0.9rem;
    }

    .field {
      display: grid;
      gap: 0.4rem;
    }

    .field label {
      font-size: 0.82rem;
      font-weight: 700;
      color: #c5d2e3;
    }

    .field select {
      border: 1px solid #3a4a61;
      border-radius: 12px;
      padding: 0.7rem 0.8rem;
      font: inherit;
      background: #0f1724;
      color: #dbe8f8;
    }

    .toggle-row {
      display: flex;
      gap: 0.6rem;
      flex-wrap: wrap;
    }

    .toggle-row button {
      border: 1px solid #3a4a61;
      border-radius: 999px;
      padding: 0.55rem 0.8rem;
      font: inherit;
      font-weight: 700;
      background: #111b29;
      color: #c4d3e7;
      cursor: pointer;
    }

    .toggle-row button:hover {
      border-color: #2dd4bf;
      color: #e4f7f3;
    }

    .toggle-row button.active {
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      color: #f0fdfa;
      border-color: #2dd4bf;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
    }

    .summary-card {
      background: #121c2b;
      border: 1px solid #314258;
      border-radius: 14px;
      padding: 0.8rem;
    }

    .summary-card strong {
      display: block;
      margin-bottom: 0.25rem;
      color: #7dd3fc;
    }

    .summary-card span {
      color: #d2dfef;
      font-size: 0.92rem;
    }

    .source {
      margin: 0;
      font-size: 0.85rem;
      color: #97a8c2;
    }

    .help-text {
      margin: 0;
      font-size: 0.86rem;
      color: #9bb0cc;
      line-height: 1.35;
    }

    .warning {
      margin: 0;
      font-size: 0.86rem;
      color: #fda4af;
      line-height: 1.35;
      background: #3b0d1a;
      border: 1px solid #9f1239;
      border-radius: 10px;
      padding: 0.55rem 0.65rem;
    }

    .chips {
      margin: 0;
      display: grid;
      gap: 0.45rem;
    }

    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .chip {
      border-radius: 999px;
      padding: 0.35rem 0.65rem;
      background: #1b283a;
      color: #d3dfef;
      font-size: 0.85rem;
      font-weight: 700;
      border: 1px solid #33465f;
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.45rem 0 0.75rem;
    }

    .legend-item {
      border-radius: 10px;
      padding: 0.4rem 0.68rem;
      font-size: 0.78rem;
      font-weight: 700;
      border: 1px solid transparent;
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.28),
        inset 0 -4px 10px rgb(2 6 23 / 0.22),
        0 2px 6px rgb(2 6 23 / 0.18);
      letter-spacing: 0.01em;
    }

    .legend-root {
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      color: #f0fdfa;
      border-color: rgb(45 212 191 / 0.45);
    }

    .legend-chord {
      background: linear-gradient(180deg, #f59e0b, #b45309);
      color: #fff7ed;
      border-color: rgb(245 158 11 / 0.45);
    }

    .legend-dim {
      background: linear-gradient(180deg, #334155, #1f2937);
      color: #cbd5e1;
      border-color: rgb(148 163 184 / 0.35);
    }

    .legend-target {
      background: linear-gradient(180deg, #0f172a, #020617);
      color: #f8fafc;
      border-color: #38bdf8;
    }

    .legend-ring {
      background: linear-gradient(180deg, #1f2937, #111827);
      color: #f8fafc;
      border-color: #94a3b8;
    }

    .mobile-config-trigger {
      display: none;
      border: 1px solid #3a4a61;
      border-radius: 10px;
      background: #0f1724;
      color: #dbe8f8;
      font: inherit;
      font-weight: 700;
      width: 40px;
      height: 36px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .mobile-appbar {
      display: none;
      align-items: center;
      justify-content: space-between;
      gap: 0.55rem;
      border: 1px solid #2d3a4d;
      border-radius: 14px;
      padding: 0.55rem 0.65rem;
      background: linear-gradient(180deg, rgb(28 37 50 / 0.92), rgb(18 25 35 / 0.92));
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.03),
        0 8px 18px rgb(2 6 23 / 0.3);
    }

    .mobile-appbar-copy {
      min-width: 0;
      flex: 1;
    }

    .mobile-appbar-title {
      margin: 0;
      color: #d7e4f5;
      font-size: 0.84rem;
      font-weight: 800;
      letter-spacing: 0.02em;
      line-height: 1.2;
      text-transform: uppercase;
      overflow-wrap: anywhere;
    }

    .mobile-appbar-subtitle {
      margin: 0.15rem 0 0;
      color: #9fb2cb;
      font-size: 0.72rem;
      line-height: 1.2;
      overflow-wrap: anywhere;
    }

    .mode-note {
      margin: 0;
      font-size: 0.84rem;
      color: #d4e4f7;
      line-height: 1.35;
      background: #122335;
      border: 1px solid #35506e;
      border-radius: 10px;
      padding: 0.5rem 0.6rem;
    }

    .hamburger {
      width: 16px;
      height: 2px;
      background: currentColor;
      position: relative;
      border-radius: 2px;
    }

    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
      width: 16px;
      height: 2px;
      background: currentColor;
      border-radius: 2px;
    }

    .hamburger::before {
      top: -5px;
    }

    .hamburger::after {
      top: 5px;
    }

    .mobile-config-backdrop {
      position: fixed;
      inset: 0;
      background: rgb(2 6 23 / 0.62);
      opacity: 0;
      pointer-events: none;
      transition: opacity 180ms ease;
      z-index: 20;
    }

    .mobile-config-backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    .mobile-config-drawer {
      position: fixed;
      right: 0;
      top: 0;
      height: 100dvh;
      width: min(90vw, 360px);
      padding: 0.75rem;
      box-sizing: border-box;
      transform: translateX(calc(100% + 1rem));
      transition: transform 220ms ease, opacity 180ms ease;
      z-index: 21;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
    }

    .mobile-config-drawer.open {
      transform: translateX(0);
      pointer-events: auto;
      opacity: 1;
      visibility: visible;
    }

    .mobile-config-panel {
      height: 100%;
      overflow: auto;
    }

    .mobile-config-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }

    .mobile-close {
      border: 1px solid #3a4a61;
      border-radius: 999px;
      background: #0f1724;
      color: #dbe8f8;
      font: inherit;
      font-size: 0.8rem;
      padding: 0.35rem 0.75rem;
      cursor: pointer;
    }

    @media (max-width: 920px) {
      .mobile-appbar {
        display: flex;
      }

      .mobile-config-trigger {
        display: inline-flex;
      }

      .desktop-controls {
        display: none;
      }

      .layout {
        grid-template-columns: 1fr;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  @state()
  /** Original parsed progression as entered by user. */
  private progression: ParsedChord[] = [];

  @state()
  /** Baseline key captured at parse time for transposition deltas. */
  private originalKey = 'C';

  @state()
  /** Raw progression source string shown in status panel. */
  private source = '';

  @state()
  /** Selected chord index in progression stepper. */
  private activeIndex = 0;

  @state()
  /** Active grid/key configuration for mapping and display. */
  private config: GridConfig = {
    key: 'C',
    scale: 'major',
    mode: 'chromatic',
    anchorMode: 'key',
  };

  @state()
  /** Selected voicing mode for recipe target generation. */
  private voicing: VoicingMode = 'triad';

  @state()
  /** Controls visibility of mobile configuration drawer. */
  private mobileConfigOpen = false;

  /**
   * Renders app shell, controls, progression stepper, and mapped grid output.
   *
   * @returns Lit template representing the full application UI.
   */
  render() {
    const transposedProgression = this.getTransposedProgression();
    const activeChord = transposedProgression[this.activeIndex] ?? null;
    const pads = buildCircuitGrid(activeChord, this.config);
    const recipe = buildChordRecipe(activeChord, pads, this.voicing);
    const missingChordTones = this.getMissingChordTones(activeChord, pads);
    const showKeyProgression = this.originalKey !== this.config.key;

    return html`
      <div class="mobile-appbar">
        <div class="mobile-appbar-copy">
          <p class="mobile-appbar-title">Circuit Chord Forge</p>
          <p class="mobile-appbar-subtitle">Map progressions to playable pad voicings for Circuit Tracks.</p>
        </div>
        <button
          class="mobile-config-trigger"
          aria-label="Open config"
          @click=${() => this.toggleMobileConfig(true)}
        >
          <span class="hamburger" aria-hidden="true"></span>
        </button>
      </div>

      <section class="panel">
        <p class="panel-title">Progression Input</p>
        <chord-input @progression-parsed=${this.onParsed}></chord-input>
      </section>

      <div class="layout">
        <section class="panel controls desktop-controls">
          ${this.renderConfigSection(activeChord, missingChordTones, 'desktop')}
        </section>

        <section class="chips">
          <section class="panel">
            <p class="panel-title">Progression Stepper</p>
            ${this.progression.length === 0
              ? html`<p class="placeholder">Chords appear here after parsing.</p>`
              : html`
                  <progression-stepper
                    .originalChords=${this.progression}
                    .keyChords=${showKeyProgression ? transposedProgression : []}
                    .keyLabel=${this.config.key}
                    .activeIndex=${this.activeIndex}
                    @chord-selected=${this.onChordSelected}
                  ></progression-stepper>
                `}
          </section>

          <section class="panel">
            <p class="panel-title">Circuit Tracks Grid</p>
            <p class="help-text">
              Pads with bright ring and number are voicing pads to press. Change voicing mode to see shape update.
            </p>
            <div class="legend" aria-label="Pad legend">
              <span class="legend-item legend-ring">Ring + number = pads to press</span>
              <span class="legend-item legend-chord">Lit = chord tone</span>
              <span class="legend-item legend-root">Active = root note</span>
              <span class="legend-item legend-dim">Dim = non-chord note</span>
              <span class="legend-item legend-target">Dark base = neutral grid style</span>
            </div>
            ${this.progression.length === 0
              ? html`<p class="placeholder">Need parsed chords before pad map can render.</p>`
              : html`<circuit-grid .pads=${pads} .recipe=${recipe}></circuit-grid>`}
          </section>

          ${activeChord
            ? html`
                <section class="panel">
                  <p class="panel-title">Active Chord Notes</p>
                  <div class="chip-row">
                    ${activeChord.notes.map((note) => html`<span class="chip">${note}</span> `)}
                  </div>
                </section>

              `
            : null}
        </section>
      </div>

      <div
        class=${`mobile-config-backdrop ${this.mobileConfigOpen ? 'open' : ''}`}
        @click=${() => this.toggleMobileConfig(false)}
      ></div>
      <aside class=${`mobile-config-drawer ${this.mobileConfigOpen ? 'open' : ''}`}>
        <section class="panel mobile-config-panel">
          <div class="mobile-config-header">
            <p class="panel-title">Circuit Config</p>
            <button class="mobile-close" @click=${() => this.toggleMobileConfig(false)}>Close</button>
          </div>
          ${this.renderConfigSection(activeChord, missingChordTones, 'mobile', false)}
        </section>
      </aside>
    `;
  }

  /**
   * Renders reusable configuration controls for desktop panel and mobile drawer.
   *
   * @param activeChord Current active (transposed) chord.
   * @param missingChordTones Notes not visible in current grid mode.
   * @param idPrefix Prefix for unique form control IDs.
   * @param showTitle Whether to render section title inside this block.
   * @returns Lit template for config controls section.
   */
  private renderConfigSection(
    activeChord: ParsedChord | null,
    missingChordTones: string[],
    idPrefix: string,
    showTitle = true
  ) {
    return html`
      ${showTitle ? html`<p class="panel-title">Circuit Config</p>` : null}

      <div class="field">
        <label>Pad Anchor</label>
        <div class="toggle-row">
          ${PAD_ANCHOR_OPTIONS.map(
            (anchorMode) => html`
              <button
                class=${this.config.anchorMode === anchorMode ? 'active' : ''}
                @click=${() => this.setAnchorMode(anchorMode)}
              >
                ${anchorMode === 'key' ? 'Project Key' : 'Chord Root'}
              </button>
            `
          )}
        </div>
        <p class="help-text">
          Project Key keeps pad positions fixed for exact Circuit input. Chord Root recenters each chord to compare shapes.
        </p>
      </div>

      <div class="field">
        <label>Pad Mode</label>
        <div class="toggle-row">
          <button
            class=${this.config.mode === 'collapsed' ? 'active' : ''}
            @click=${() => this.setMode('collapsed')}
          >
            Scale Collapse
          </button>
          <button
            class=${this.config.mode === 'chromatic' ? 'active' : ''}
            @click=${() => this.setMode('chromatic')}
          >
            Chromatic
          </button>
        </div>
        <p class="help-text">
          Scale Collapse: only notes inside key/scale appear on pads. Chromatic: keyboard layout (top accidentals, bottom naturals).
        </p>
        <p class="mode-note">
          In Chromatic, scale does not change pad notes. With Project Key anchor, chord changes move highlights across a fixed grid.
          With Chord Root anchor, different chords can share same shape positions.
        </p>
        ${this.config.mode === 'collapsed' && missingChordTones.length > 0
          ? html`
              <p class="warning">
                Scale Collapse hides chord tones not in selected scale: ${missingChordTones.join(', ')}.
                Switch to Chromatic or change key/scale to include them.
              </p>
            `
          : null}
      </div>

      <div class="field">
        <label for=${`${idPrefix}-key-select`}>Key</label>
        <select id=${`${idPrefix}-key-select`} .value=${this.config.key} @change=${this.onKeyChange}>
          ${KEY_OPTIONS.map((key) => html`<option value=${key}>${key}</option>`)}
        </select>
      </div>

      <div class="field">
        <label for=${`${idPrefix}-scale-select`}>Scale</label>
        <select id=${`${idPrefix}-scale-select`} .value=${this.config.scale} @change=${this.onScaleChange}>
          ${SCALE_OPTIONS.map((scale) => html`<option value=${scale}>${scale}</option>`)}
        </select>
      </div>

      <div class="field">
        <label for=${`${idPrefix}-voicing-select`}>Voicing</label>
        <select
          id=${`${idPrefix}-voicing-select`}
          .value=${this.voicing}
          @change=${this.onVoicingChange}
          @input=${this.onVoicingChange}
        >
          ${VOICING_OPTIONS.map((voicing) => html`<option value=${voicing}>${voicing}</option>`)}
        </select>
      </div>

      <div class="status">
        <p class="panel-title">Master Stage</p>
        ${activeChord
          ? html`
              <div class="summary-grid">
                <div class="summary-card">
                  <strong>Active Chord</strong>
                  <span>${activeChord.symbol}</span>
                </div>
                <div class="summary-card">
                  <strong>Mapped Notes</strong>
                  <span>${activeChord.notes.join(', ')}</span>
                </div>
                <div class="summary-card">
                  <strong>Voicing Mode</strong>
                  <span>${this.voicing}</span>
                </div>
                <div class="summary-card">
                  <strong>Pad Anchor</strong>
                  <span>${this.config.anchorMode}</span>
                </div>
              </div>
              <p class="source">${this.source}</p>
            `
          : html`<p class="placeholder">Parse progression, then select chord.</p>`}
      </div>
    `;
  }

  /**
   * Opens or closes the mobile configuration drawer.
   *
   * @param open True to open drawer; false to close.
   */
  private toggleMobileConfig(open: boolean) {
    this.mobileConfigOpen = open;
  }

  /**
   * Updates pad anchor behavior (project key vs chord root).
   *
   * @param anchorMode Selected anchor mode.
   */
  private setAnchorMode(anchorMode: PadAnchorMode) {
    this.config = {
      ...this.config,
      anchorMode,
    };
  }

  /**
   * Updates grid note mode (collapsed or chromatic).
   *
   * @param mode Selected scale mode.
   */
  private setMode(mode: ScaleMode) {
    this.config = {
      ...this.config,
      mode,
    };
  }

  /**
   * Handles key select changes and updates config state.
   *
   * @param event Change event from key select control.
   */
  private onKeyChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.config = {
      ...this.config,
      key: target.value,
    };
  }

  /**
   * Handles scale select changes and updates config state.
   *
   * @param event Change event from scale select control.
   */
  private onScaleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.config = {
      ...this.config,
      scale: target.value,
    };
  }

  /**
   * Handles voicing select changes and updates voicing mode.
   *
   * @param event Change/input event from voicing select control.
   */
  private onVoicingChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.voicing = target.value as VoicingMode;
  }

  /**
   * Updates currently active chord index from stepper click events.
   *
   * @param event Custom event containing selected progression index.
   */
  private onChordSelected(event: CustomEvent<number>) {
    this.activeIndex = event.detail;
  }

  /**
   * Handles parsed progression event and initializes key baseline.
   *
   * Captures first chord tonic as original key when available, then aligns
   * project key to that tonic to mirror hardware default behavior.
   *
   * @param event Parsed progression payload from chord-input component.
   */
  private onParsed(event: CustomEvent<ChordInputParsedEventDetail>) {
    this.progression = event.detail.progression;
    this.source = event.detail.source;
    this.activeIndex = 0;

    const firstChord = event.detail.progression[0];
    const baseKey = this.normalizeKey(firstChord?.tonic) ?? this.config.key;
    this.originalKey = baseKey;

    if (firstChord?.tonic) {
      this.config = {
        ...this.config,
        key: baseKey,
      };
    }
  }

  /**
   * Builds current progression in selected project key by transposing original.
   *
   * @returns Transposed progression, or original progression when no shift exists.
   */
  private getTransposedProgression(): ParsedChord[] {
    if (this.progression.length === 0) {
      return [];
    }

    const semitones = this.getKeyShiftSemitones();
    if (semitones === 0) {
      return this.progression;
    }

    return this.progression
      .map((chord) => this.transposeParsedChord(chord, semitones))
      .filter((chord): chord is ParsedChord => Boolean(chord));
  }

  /**
   * Computes chromatic semitone shift from original key to selected key.
   *
   * @returns Positive semitone delta in range 0..11.
   */
  private getKeyShiftSemitones(): number {
    const fromIndex = KEY_OPTIONS.indexOf(this.originalKey);
    const toIndex = KEY_OPTIONS.indexOf(this.config.key);

    if (fromIndex === -1 || toIndex === -1) {
      return 0;
    }

    return (toIndex - fromIndex + 12) % 12;
  }

  /**
   * Transposes one parsed chord and reparses it to refreshed note metadata.
   *
   * @param chord Source parsed chord in original key.
   * @param semitones Semitone shift amount.
   * @returns Transposed parsed chord, or null when symbol cannot be resolved.
   */
  private transposeParsedChord(chord: ParsedChord, semitones: number): ParsedChord | null {
    const transposedSymbol = this.transposeChordSymbol(chord.symbol, semitones);
    if (!transposedSymbol) {
      return null;
    }

    const resolved = Chord.get(transposedSymbol);
    if (resolved.empty || resolved.notes.length === 0) {
      return null;
    }

    return {
      symbol: transposedSymbol,
      tonic: resolved.tonic,
      quality: resolved.quality,
      notes: resolved.notes,
      intervals: resolved.intervals,
      aliases: resolved.aliases,
    };
  }

  /**
   * Transposes chord symbol root (and optional slash bass) by semitone amount.
   *
   * @param symbol Chord symbol to transpose.
   * @param semitones Semitone shift amount.
   * @returns Transposed chord symbol, or null when parsing fails.
   */
  private transposeChordSymbol(symbol: string, semitones: number): string | null {
    const match = symbol.match(/^([A-G](?:#{1,2}|b{1,2})?)(.*?)(?:\/([A-G](?:#{1,2}|b{1,2})?))?$/);
    if (!match) {
      return null;
    }

    const root = this.transposeNoteName(match[1], semitones);
    if (!root) {
      return null;
    }

    const suffix = match[2] ?? '';
    const bass = match[3] ? this.transposeNoteName(match[3], semitones) : null;
    if (match[3] && !bass) {
      return null;
    }

    return `${root}${suffix}${bass ? `/${bass}` : ''}`;
  }

  /**
   * Transposes note name by semitone amount and normalizes to supported key list.
   *
   * @param noteName Note to transpose.
   * @param semitones Semitone shift amount.
   * @returns Normalized pitch class or null.
   */
  private transposeNoteName(noteName: string, semitones: number): string | null {
    const interval = Interval.fromSemitones(semitones);
    const shifted = Note.transpose(noteName, interval);
    return this.normalizeKey(shifted);
  }

  /**
   * Normalizes any note to app key naming convention used in selectors.
   *
   * @param note Input note string.
   * @returns Normalized key pitch class or null when invalid.
   */
  private normalizeKey(note: string | null | undefined): string | null {
    const pitchClass = Note.pitchClass(note ?? '');
    if (!pitchClass) {
      return null;
    }

    const enharmonic = Note.enharmonic(pitchClass);
    return KEY_OPTIONS.includes(enharmonic) ? enharmonic : null;
  }

  /**
   * Finds chord tones that are absent from currently visible pad map.
   *
   * @param activeChord Active parsed chord.
   * @param pads Built grid pads for current config.
   * @returns Unique chord tones not represented on visible pads.
   */
  private getMissingChordTones(activeChord: ParsedChord | null, pads: ReturnType<typeof buildCircuitGrid>): string[] {
    if (!activeChord) {
      return [];
    }

    const visibleNotes = new Set(pads.map((pad) => pad.note));
    const wanted = activeChord.notes
      .map((note) => this.normalizeGridNote(note))
      .filter((note): note is string => Boolean(note));

    return Array.from(new Set(wanted.filter((note) => !visibleNotes.has(note))));
  }

  /**
   * Normalizes note names for comparison against grid note labels.
   *
   * @param note Input note string.
   * @returns Enharmonic pitch class, or null when conversion fails.
   */
  private normalizeGridNote(note: string): string | null {
    const pitchClass = Note.pitchClass(note);
    if (!pitchClass) {
      return null;
    }

    return Note.enharmonic(pitchClass);
  }
}
