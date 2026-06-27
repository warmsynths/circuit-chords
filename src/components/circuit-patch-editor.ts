import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { PatchData } from '../lib/circuit-sysex';
import './ui/knob-element';
import './ui/slider-element';

@customElement('circuit-patch-editor')
export class CircuitPatchEditor extends LitElement {
  @property({ type: Object }) patch: PatchData | null = null;
  @property({ type: Boolean }) midiConnected = false;
  
  @state() private activeSlot = 0;
  @state() private viewMode: 'basic' | 'advanced' = 'basic';

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #ffffff;
      overflow-y: auto;
      padding: 16px;
      gap: 16px;
      font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
    }

    .panel {
      background: var(--bg-charcoal, #1a1b20);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .panel-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.6);
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 0;
    }

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .mode-switch {
      display: flex;
      background: var(--bg-onyx, #121316);
      border-radius: 20px;
      padding: 4px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .mode-btn {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      padding: 6px 16px;
      border-radius: 16px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .mode-btn.active {
      background: rgba(255, 255, 255, 0.1);
      color: var(--accent-cyan, #00f0ff);
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .btn {
      background: var(--bg-onyx, #121316);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.5px;
    }

    .btn:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .btn.primary {
      background: var(--accent-cyan, #00f0ff);
      color: #000;
      border: none;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
    }

    .btn.primary:hover {
      background: #33f3ff;
      box-shadow: 0 0 15px rgba(0, 240, 255, 0.7);
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .slot-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    .slot-btn {
      aspect-ratio: 1;
      background: var(--bg-onyx, #121316);
      border: 1px solid rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 0.6);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .slot-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }

    .slot-btn.active {
      background: var(--accent-cyan, #00f0ff);
      color: #000;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: rgba(255, 255, 255, 0.6);
      text-align: center;
      gap: 16px;
    }
  `;

  private updateParam(path: string, value: number) {
    if (!this.patch) return;
    
    this.dispatchEvent(new CustomEvent('patch-change', {
      detail: { path, value },
      bubbles: true,
      composed: true
    }));
  }

  private handleRequestDump() {
    this.dispatchEvent(new CustomEvent('request-dump', {
      bubbles: true,
      composed: true
    }));
  }

  private renderOscillatorPanel(oscIndex: number, title: string) {
    if (!this.patch) return '';
    const osc = this.patch.oscillators[oscIndex];
    const isAdv = this.viewMode === 'advanced';
    
    return html`
      <div class="panel">
        <h3 class="panel-title">${title}</h3>
        <div class="row">
          <knob-element 
            label="Type" 
            .min=${0} .max=${29} 
            .value=${osc.wave}
            @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.wave`, e.detail.value)}
          ></knob-element>
          
          ${oscIndex === 0 ? html`
            <knob-element 
              label="Mix" 
              .min=${0} .max=${127} 
              .value=${this.patch.mixer.osc1Level}
              @change=${(e: CustomEvent) => this.updateParam('mixer.osc1Level', e.detail.value)}
            ></knob-element>
          ` : html`
            <knob-element 
              label="Mix" 
              .min=${0} .max=${127} 
              .value=${this.patch.mixer.osc2Level}
              @change=${(e: CustomEvent) => this.updateParam('mixer.osc2Level', e.detail.value)}
            ></knob-element>
          `}

          <knob-element 
            label="Wavetable Idx" 
            .min=${0} .max=${127} 
            .value=${osc.waveInterpolate}
            @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.waveInterpolate`, e.detail.value)}
          ></knob-element>
          
          ${isAdv ? html`
            <knob-element label="Pulse Width" .min=${0} .max=${127} .value=${osc.pulseWidthIndex} @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.pulseWidthIndex`, e.detail.value)}></knob-element>
            <knob-element label="Sync Depth" .min=${0} .max=${127} .value=${osc.virtualSyncDepth} @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.virtualSyncDepth`, e.detail.value)}></knob-element>
            <knob-element label="Density" .min=${0} .max=${127} .value=${osc.density} @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.density`, e.detail.value)}></knob-element>
            <knob-element label="Detune" .min=${0} .max=${127} .value=${osc.densityDetune} @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.densityDetune`, e.detail.value)}></knob-element>
            <knob-element label="Semitones" .min=${0} .max=${127} .value=${osc.semitones} @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.semitones`, e.detail.value)}></knob-element>
            <knob-element label="Cents" .min=${0} .max=${127} .value=${osc.cents} @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.cents`, e.detail.value)}></knob-element>
            <knob-element label="Pitch Bend" .min=${0} .max=${127} .value=${osc.pitchBend} @change=${(e: CustomEvent) => this.updateParam(`oscillators.${oscIndex}.pitchBend`, e.detail.value)}></knob-element>
          ` : ''}
        </div>
      </div>
    `;
  }

  private renderMixerPanel() {
    if (!this.patch || this.viewMode !== 'advanced') return '';
    const mixer = this.patch.mixer;
    return html`
      <div class="panel">
        <h3 class="panel-title">Mixer (Advanced)</h3>
        <div class="row">
          <knob-element label="Osc 1" .min=${0} .max=${127} .value=${mixer.osc1Level} @change=${(e: CustomEvent) => this.updateParam('mixer.osc1Level', e.detail.value)}></knob-element>
          <knob-element label="Osc 2" .min=${0} .max=${127} .value=${mixer.osc2Level} @change=${(e: CustomEvent) => this.updateParam('mixer.osc2Level', e.detail.value)}></knob-element>
          <knob-element label="Ring Mod" .min=${0} .max=${127} .value=${mixer.ringModLevel12} @change=${(e: CustomEvent) => this.updateParam('mixer.ringModLevel12', e.detail.value)}></knob-element>
          <knob-element label="Noise" .min=${0} .max=${127} .value=${mixer.noiseLevel} @change=${(e: CustomEvent) => this.updateParam('mixer.noiseLevel', e.detail.value)}></knob-element>
          <knob-element label="Pre FX" .min=${0} .max=${127} .value=${mixer.preFxLevel} @change=${(e: CustomEvent) => this.updateParam('mixer.preFxLevel', e.detail.value)}></knob-element>
          <knob-element label="Post FX" .min=${0} .max=${127} .value=${mixer.postFxLevel} @change=${(e: CustomEvent) => this.updateParam('mixer.postFxLevel', e.detail.value)}></knob-element>
        </div>
      </div>
    `;
  }

  private renderFilterPanel() {
    if (!this.patch) return '';
    const filter = this.patch.filter;
    const isAdv = this.viewMode === 'advanced';

    return html`
      <div class="panel">
        <h3 class="panel-title">Filter</h3>
        <div class="row" style="align-items: flex-start; justify-content: space-around;">
          <div class="column">
            <knob-element 
              label="Drive" 
              .min=${0} .max=${127} 
              .value=${filter.drive}
              @change=${(e: CustomEvent) => this.updateParam('filter.drive', e.detail.value)}
            ></knob-element>
            ${isAdv ? html`<knob-element label="Drive Type" .min=${0} .max=${6} .value=${filter.driveType} @change=${(e: CustomEvent) => this.updateParam('filter.driveType', e.detail.value)}></knob-element>` : ''}
          </div>

          <div class="column" style="height: 100%; flex: 1; max-width: 300px;">
            <slider-element
              label="Cutoff"
              .min=${0} .max=${127}
              .value=${filter.frequency}
              @change=${(e: CustomEvent) => this.updateParam('filter.frequency', e.detail.value)}
            ></slider-element>
          </div>

          <div class="column">
            <knob-element 
              label="Resonance" 
              .min=${0} .max=${127} 
              .value=${filter.resonance}
              @change=${(e: CustomEvent) => this.updateParam('filter.resonance', e.detail.value)}
            ></knob-element>
            <knob-element 
              label="Type" 
              .min=${0} .max=${5} 
              .value=${filter.type}
              .centered=${true}
              @change=${(e: CustomEvent) => this.updateParam('filter.type', e.detail.value)}
            ></knob-element>
          </div>
          
          ${isAdv ? html`
            <div class="column">
              <knob-element label="Routing" .min=${0} .max=${2} .value=${filter.routing} @change=${(e: CustomEvent) => this.updateParam('filter.routing', e.detail.value)}></knob-element>
              <knob-element label="Track" .min=${0} .max=${127} .value=${filter.track} @change=${(e: CustomEvent) => this.updateParam('filter.track', e.detail.value)}></knob-element>
            </div>
            <div class="column">
              <knob-element label="Q Norm" .min=${0} .max=${127} .value=${filter.qNormalise} @change=${(e: CustomEvent) => this.updateParam('filter.qNormalise', e.detail.value)}></knob-element>
              <knob-element label="Env2>Freq" .min=${0} .max=${127} .value=${filter.env2ToFreq} @change=${(e: CustomEvent) => this.updateParam('filter.env2ToFreq', e.detail.value)}></knob-element>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  private renderEnvelopePanel(envIndex: number, title: string) {
    if (!this.patch) return '';
    const env = this.patch.envelopes[envIndex];
    const isAdv = this.viewMode === 'advanced';

    return html`
      <div class="panel">
        <h3 class="panel-title">${title}</h3>
        <div class="column" style="align-items: stretch;">
          ${isAdv ? html`
            <slider-element horizontal label="Vel/Delay" .min=${0} .max=${127} .value=${env.velocityOrDelay} @change=${(e: CustomEvent) => this.updateParam(`envelopes.${envIndex}.velocityOrDelay`, e.detail.value)}></slider-element>
          ` : ''}
          <slider-element horizontal label="Attack" .min=${0} .max=${127} .value=${env.attack} @change=${(e: CustomEvent) => this.updateParam(`envelopes.${envIndex}.attack`, e.detail.value)}></slider-element>
          <slider-element horizontal label="Decay" .min=${0} .max=${127} .value=${env.decay} @change=${(e: CustomEvent) => this.updateParam(`envelopes.${envIndex}.decay`, e.detail.value)}></slider-element>
          <slider-element horizontal label="Sustain" .min=${0} .max=${127} .value=${env.sustain} @change=${(e: CustomEvent) => this.updateParam(`envelopes.${envIndex}.sustain`, e.detail.value)}></slider-element>
          <slider-element horizontal label="Release" .min=${0} .max=${127} .value=${env.release} @change=${(e: CustomEvent) => this.updateParam(`envelopes.${envIndex}.release`, e.detail.value)}></slider-element>
        </div>
      </div>
    `;
  }

  private renderManagementPanel() {
    return html`
      <div class="panel">
        <h3 class="panel-title">Patch Management</h3>
        <div class="row" style="align-items: stretch;">
          <div class="column" style="flex: 1; align-items: stretch;">
            <div class="row" style="gap: 8px;">
              <button class="btn primary" style="flex: 1;">Save</button>
              <button class="btn" style="flex: 1;">Save As</button>
            </div>
            <button class="btn" @click=${this.handleRequestDump} ?disabled=${!this.midiConnected}>Request Dump</button>
            <button class="btn">Randomize</button>
          </div>
          
          <div class="slot-grid">
            ${Array.from({ length: 16 }).map((_, i) => html`
              <button 
                class="slot-btn ${i === this.activeSlot ? 'active' : ''}"
                @click=${() => {
                  this.activeSlot = i;
                  this.dispatchEvent(new CustomEvent('load-slot', { detail: { slot: i }, bubbles: true, composed: true }));
                }}
              >${i + 1}</button>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="header">
        <div class="mode-switch">
          <button class="mode-btn ${this.viewMode === 'basic' ? 'active' : ''}" @click=${() => this.viewMode = 'basic'}>Basic</button>
          <button class="mode-btn ${this.viewMode === 'advanced' ? 'active' : ''}" @click=${() => this.viewMode = 'advanced'}>Advanced</button>
        </div>
      </div>

      ${!this.patch ? html`
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <p>Connect your Circuit Tracks via MIDI<br/>and request a patch dump to start editing.</p>
          <button class="btn primary" @click=${this.handleRequestDump} ?disabled=${!this.midiConnected}>
            Request Patch Dump
          </button>
        </div>
      ` : html`
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${this.renderOscillatorPanel(0, 'Synth 1')}
          ${this.viewMode === 'advanced' ? this.renderOscillatorPanel(1, 'Synth 2') : ''}
          ${this.renderMixerPanel()}
          ${this.renderFilterPanel()}
          
          <div class="row" style="align-items: stretch;">
            <div style="flex: 1; min-width: 250px;">${this.renderEnvelopePanel(0, 'Env 1 (Amp)')}</div>
            ${this.viewMode === 'advanced' ? html`
              <div style="flex: 1; min-width: 250px;">${this.renderEnvelopePanel(1, 'Env 2 (Filter)')}</div>
              <div style="flex: 1; min-width: 250px;">${this.renderEnvelopePanel(2, 'Env 3 (Aux)')}</div>
            ` : ''}
          </div>
        </div>
        ${this.renderManagementPanel()}
      `}
    `;
  }
}
