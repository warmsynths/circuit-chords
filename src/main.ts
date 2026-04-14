import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Note } from 'tonal';
import './components/chord-input';
import './components/progression-stepper';
import './components/circuit-grid';
import type { ChordInputParsedEventDetail, ParsedChord } from './components/chord-input';
import {
  KEY_OPTIONS,
  SCALE_OPTIONS,
  VOICING_OPTIONS,
  buildChordRecipe,
  buildCircuitGrid,
  type GridConfig,
  type ScaleMode,
  type VoicingMode,
} from './lib/music-grid';

@customElement('chord-mapper-app')
class ChordMapperApp extends LitElement {
  static styles = css`
    :host {
      display: grid;
      gap: 1.25rem;
      margin-top: 1rem;
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

    @media (max-width: 820px) {
      .layout {
        grid-template-columns: 1fr;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  @state()
  private progression: ParsedChord[] = [];

  @state()
  private source = '';

  @state()
  private activeIndex = 0;

  @state()
  private config: GridConfig = {
    key: 'C',
    scale: 'major',
    mode: 'chromatic',
  };

  @state()
  private voicing: VoicingMode = 'triad';

  render() {
    const activeChord = this.progression[this.activeIndex] ?? null;
    const pads = buildCircuitGrid(activeChord, this.config);
    const recipe = buildChordRecipe(activeChord, pads, this.voicing);
    const missingChordTones = this.getMissingChordTones(activeChord, pads);

    return html`
      <section class="panel">
        <p class="panel-title">Progression Input</p>
        <chord-input @progression-parsed=${this.onParsed}></chord-input>
      </section>

      <div class="layout">
        <section class="panel controls">
          <p class="panel-title">Circuit Config</p>

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
              Scale Collapse: only notes inside key/scale appear on pads. Chromatic: all 12 notes appear.
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
            <label for="key-select">Key</label>
            <select id="key-select" .value=${this.config.key} @change=${this.onKeyChange}>
              ${KEY_OPTIONS.map((key) => html`<option value=${key}>${key}</option>`)}
            </select>
          </div>

          <div class="field">
            <label for="scale-select">Scale</label>
            <select id="scale-select" .value=${this.config.scale} @change=${this.onScaleChange}>
              ${SCALE_OPTIONS.map((scale) => html`<option value=${scale}>${scale}</option>`)}
            </select>
          </div>

          <div class="field">
            <label for="voicing-select">Voicing</label>
            <select
              id="voicing-select"
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
                  </div>
                  <p class="source">${this.source}</p>
                `
              : html`<p class="placeholder">Parse progression, then select chord.</p>`}
          </div>
        </section>

        <section class="chips">
          <section class="panel">
            <p class="panel-title">Progression Stepper</p>
            ${this.progression.length === 0
              ? html`<p class="placeholder">Chords appear here after parsing.</p>`
              : html`
                  <progression-stepper
                    .chords=${this.progression}
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
    `;
  }

  private setMode(mode: ScaleMode) {
    this.config = {
      ...this.config,
      mode,
    };
  }

  private onKeyChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.config = {
      ...this.config,
      key: target.value,
    };
  }

  private onScaleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.config = {
      ...this.config,
      scale: target.value,
    };
  }

  private onVoicingChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.voicing = target.value as VoicingMode;
  }

  private onChordSelected(event: CustomEvent<number>) {
    this.activeIndex = event.detail;
  }

  private onParsed(event: CustomEvent<ChordInputParsedEventDetail>) {
    this.progression = event.detail.progression;
    this.source = event.detail.source;
    this.activeIndex = 0;

    const firstChord = event.detail.progression[0];
    if (firstChord?.tonic) {
      this.config = {
        ...this.config,
        key: firstChord.tonic,
      };
    }
  }

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

  private normalizeGridNote(note: string): string | null {
    const pitchClass = Note.pitchClass(note);
    if (!pitchClass) {
      return null;
    }

    return Note.enharmonic(pitchClass);
  }
}
