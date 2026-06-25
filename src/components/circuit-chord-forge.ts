import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Chord, Interval, Note } from 'tonal';
import './chord-input';
import './progression-stepper';
import './circuit-grid';
import type { ChordInputParsedEventDetail, ParsedChord } from './chord-input';
import {
  KEY_OPTIONS,
  SCALE_DISPLAY_NAMES,
  SCALE_OPTIONS,
  VOICING_OPTIONS,
  buildChordRecipe,
  buildCircuitGrid,
  normalizePitchClass,
  type GridConfig,
  type ScaleMode,
  type VoicingMode,
} from '../lib/music-grid';
import { playChord, isAudioActive, startAudio, suspendAudio, registerAudioStateListener } from '../lib/audio';

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
      height: 100dvh;
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
      grid-template-columns: var(--sidebar-left-width) minmax(0, 1fr);
      grid-template-rows: 48px var(--header-height) 1fr var(--footer-height);
      gap: var(--gap);
      height: calc(100vh - (var(--gap) * 2));
      height: calc(100dvh - (var(--gap) * 2));
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
      grid-column: 1 / -1;
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
      background: #444;
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
      background: var(--bg-onyx);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #666;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
    }
    .audio-btn:hover {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    }
    .audio-btn.active {
      color: var(--status-green);
      border-color: var(--status-green);
      box-shadow: 0 0 10px rgba(57, 255, 22, 0.2);
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

    /* Tab 2: Key & Scale Pad Picker */
    .data-input-view {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      gap: 20px;
      width: 100%;
      overflow-y: auto;
    }

    /* Tab 3: Chord Input View */
    .chord-input-view {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 24px;
      width: 100%;
      padding: 0 16px;
    }

    .chord-input-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      text-align: center;
    }

    .chord-input-title {
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #ffffff;
    }

    .chord-input-hint {
      font-size: 0.78rem;
      color: #666;
      line-height: 1.5;
    }

    .chord-input-hint code {
      color: var(--accent-cyan);
      background: var(--bg-onyx);
      padding: 2px 7px;
      border-radius: 4px;
      font-family: 'Fira Code', 'Consolas', monospace;
    }

    /* We wrap chord-input here so it displays inside */
    chord-input {
      width: 100%;
      max-width: 600px;
    }

    /* ── Pad Picker (Data View) ─────────────────────────── */
    .pad-picker {
      width: 100%;
      max-width: 720px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .pad-picker-section-label {
      font-size: 0.58rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: #555;
      text-transform: uppercase;
      padding: 0 2px;
      margin-bottom: 2px;
    }

    /* Each section (keynote / scale) has its own container */
    .pad-picker-section {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 10px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 10px;
    }

    .pad-row {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 5px;
    }

    /* ── Base pad style — mirrors circuit-grid.ts .pad ── */
    .picker-pad {
      aspect-ratio: 1;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      cursor: pointer;
      display: grid;
      place-items: center;
      font-family: inherit;
      font-weight: 700;
      font-size: 0.65rem;
      line-height: 1.2;
      text-align: center;
      padding: 4px 2px;
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      user-select: none;
      outline: none;
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.04), 0 3px 6px rgba(0, 0, 0, 0.4);
    }
    .picker-pad:active {
      transform: scale(0.93);
    }

    /* ── Note pads — dark "off" state, cyan when selected ── */
    .picker-pad.pad-root {
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%), var(--pad-scale);
      color: #ccc;
      border-color: rgba(255, 255, 255, 0.05);
    }
    .picker-pad.pad-root:hover {
      border-color: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
    .picker-pad.pad-root.pad-active {
      background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%), var(--accent-cyan);
      color: #121316;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 18px rgba(0, 240, 255, 0.55), inset 0 2px 4px rgba(255,255,255,0.4);
    }
    /* Dimmed/spacer pads for gap positions */
    .picker-pad.pad-root.pad-dim {
      background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), var(--pad-chromatic);
      color: #333;
      border-color: rgba(255,255,255,0.03);
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.5);
      cursor: default;
      pointer-events: none;
    }

    /* ── Scale pads — dark "off" state, magenta when selected ── */
    .picker-pad.pad-scale {
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%), var(--pad-scale);
      color: #ccc;
      border-color: rgba(255, 255, 255, 0.05);
      font-size: 0.58rem;
    }
    .picker-pad.pad-scale:hover {
      border-color: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
    .picker-pad.pad-scale.pad-active {
      background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%), var(--accent-magenta);
      color: #fff;
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 20px rgba(255, 42, 159, 0.65), inset 0 2px 4px rgba(255,255,255,0.3);
    }

    /* Section 4: Right Sidebar (MIDI HUD / Modal on Desktop) */
    .sidebar-right {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%) scale(0.95);
      width: 400px;
      max-width: 90vw;
      height: auto;
      max-height: 85vh;
      z-index: 1000;
      background: rgba(26, 27, 32, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sidebar-right.open {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, -50%) scale(1);
    }
    .sidebar-right::-webkit-scrollbar {
      display: none;
    }

    /* Help Panel (Modal on Desktop) */
    .sidebar-help {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%) scale(0.95);
      width: 480px;
      max-width: 90vw;
      height: auto;
      max-height: 85vh;
      z-index: 1000;
      background: rgba(26, 27, 32, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sidebar-help.open {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, -50%) scale(1);
    }
    .sidebar-help::-webkit-scrollbar {
      display: none;
    }

    /* Help specific contents formatting */
    .help-section {
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 16px;
    }
    .help-section:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
    }
    .help-title {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent-cyan);
      margin: 0 0 10px 0;
    }
    .help-text {
      font-size: 0.85rem;
      line-height: 1.5;
      color: #ccc;
      margin: 0;
    }
    .help-list {
      margin: 8px 0 0 0;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      list-style-type: none;
    }
    .help-list li {
      font-size: 0.8rem;
      line-height: 1.4;
      color: #bbb;
      position: relative;
    }
    .help-list li strong {
      color: #fff;
    }
    .help-step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--accent-magenta);
      color: white;
      font-size: 0.65rem;
      font-weight: 800;
      margin-right: 6px;
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
      color: #666;
      transition: all 0.3s ease;
    }

    .status-text.connected {
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

    .settings-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-top: 8px;
    }

    .section-title {
      margin: 0 0 4px 0;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent-cyan);
      opacity: 0.8;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 6px;
    }

    .status-info {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }

    .active-device-name {
      font-size: 0.75rem;
      font-weight: 600;
      color: #aaa;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 8px;
    }

    .midi-btn {
      width: 100%;
      padding: 10px 16px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
      outline: none;
    }
    
    .midi-btn.connect {
      background: var(--accent-cyan);
      color: var(--bg-charcoal);
      border-color: var(--accent-cyan);
    }
    .midi-btn.connect:hover {
      background: #00d8e6;
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.3);
    }
    .midi-btn.connect:disabled {
      background: #222;
      color: #555;
      border-color: #333;
      cursor: not-allowed;
      box-shadow: none;
    }
    
    .midi-btn.disconnect {
      background: #251216;
      color: var(--accent-magenta);
      border-color: rgba(255, 0, 127, 0.3);
    }
    .midi-btn.disconnect:hover {
      background: #3a151b;
      border-color: var(--accent-magenta);
      box-shadow: 0 0 12px rgba(255, 0, 127, 0.2);
    }

    .no-devices-msg {
      font-size: 0.75rem;
      color: #666;
      font-style: italic;
      text-align: center;
      padding: 12px;
      background: var(--bg-onyx);
      border-radius: 8px;
      border: 1px dashed rgba(255, 255, 255, 0.05);
    }

    /* Section 5: Bottom Timeline Footer */
    .footer-timeline {
      grid-column: 2 / -1;
      grid-row: 4 / 5;
      display: flex;
      align-items: center;
      padding: 0 24px;
    }

    progression-stepper {
      width: 100%;
    }

    /* Close Button (Global for Modal and Drawer) */
    .close-btn {
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
    .close-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }

    /* Backdrop (Global overlay for modal/drawer) */
    .sidebar-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sidebar-backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    .scale-warning {
      display: flex;
      align-items: center;
      background: rgba(255, 170, 0, 0.1);
      border: 1px solid rgba(255, 170, 0, 0.2);
      color: #ffaa00;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.75rem;
      margin-bottom: 12px;
      font-weight: 500;
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
        height: calc(100dvh - (var(--gap) * 2));
      }

      .sidebar-left {
        padding: 16px 0;
        gap: 12px;
      }

      .nav-bottom {
        gap: 12px;
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
        left: auto;
        right: 0;
        bottom: 0;
        width: 280px;
        height: 100vh;
        height: 100dvh;
        max-height: 100vh;
        max-height: 100dvh;
        z-index: 1000;
        background: var(--bg-charcoal);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-top: none;
        border-right: none;
        border-bottom: none;
        border-radius: 0;
        box-shadow: -4px 0 24px rgba(0, 0, 0, 0.5);
        transform: translateX(100%);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        padding: 24px 20px;
        opacity: 1 !important;
        pointer-events: none;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .sidebar-right.open {
        transform: translateX(0);
        pointer-events: auto;
      }

      /* Sidebar Help as Overlay Drawer on Mobile */
      .sidebar-help {
        position: fixed;
        top: 0;
        left: auto;
        right: 0;
        bottom: 0;
        width: 300px;
        height: 100vh;
        height: 100dvh;
        max-height: 100vh;
        max-height: 100dvh;
        z-index: 1000;
        background: var(--bg-charcoal);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-top: none;
        border-right: none;
        border-bottom: none;
        border-radius: 0;
        box-shadow: -4px 0 24px rgba(0, 0, 0, 0.5);
        transform: translateX(100%);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        padding: 24px 20px;
        opacity: 1 !important;
        pointer-events: none;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      .sidebar-help.open {
        transform: translateX(0);
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
    }
  `;

  // === State Variables ===
  @state() private audioActive = false;
  private audioCleanup: (() => void) | null = null;
  @state() private activeTab: 'grid' | 'data' | 'input' = 'grid';
  @state() private progression: ParsedChord[] = [];
  @state() private originalKey = 'C';
  @state() private activeIndex = 0;
  @state() private config: GridConfig = {
    key: 'C',
    scale: 'minor',
    mode: 'collapsed',
  };
  @state() private voicing: VoicingMode = 'triad';
  @state() private autoPlay = true;
  @state() private transposeProgression = true;
  @state() private inversion = 0;
  @state() private source = '';
  @state() private showSettings = false;
  @state() private showHelp = false;
  @state() private midiConnected = false;
  @state() private midiDevices: string[] = [];
  @state() private selectedMidiDevice = '';
  @state() private activeMidiDevice: string | null = null;

  private toggleHelp() {
    this.showHelp = !this.showHelp;
    if (this.showHelp) {
      this.showSettings = false;
    }
  }

  private toggleSettings() {
    this.showSettings = !this.showSettings;
    if (this.showSettings) {
      this.showHelp = false;
    }
  }

  private async toggleAudio() {
    try {
      if (this.audioActive) {
        await suspendAudio();
      } else {
        await startAudio();
      }
    } catch (e) {
      console.warn("Failed to toggle audio:", e);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadDefaultProgression();
    this.initMidi();

    // Initialize audio state and register state change listener
    this.audioActive = isAudioActive();
    this.audioCleanup = registerAudioStateListener((state) => {
      this.audioActive = state === 'running';
    });
  }

  disconnectedCallback() {
    if (this.audioCleanup) {
      this.audioCleanup();
    }
    super.disconnectedCallback();
  }

  private initMidi() {
    if (typeof navigator !== 'undefined' && 'requestMIDIAccess' in navigator) {
      (navigator as any).requestMIDIAccess()
        .then((access: any) => {
          this.updateMidiStatus(access);
          access.onstatechange = () => {
            this.updateMidiStatus(access);
          };
        })
        .catch((err: any) => {
          console.warn("MIDI access request failed:", err);
          this.midiConnected = false;
          this.midiDevices = [];
        });
    }
  }

  private updateMidiStatus(access: any) {
    const devices: string[] = [];
    
    if (access && access.inputs) {
      access.inputs.forEach((input: any) => {
        if (input.state === 'connected') {
          if (input.name && !devices.includes(input.name)) {
            devices.push(input.name);
          }
        }
      });
    }
    if (access && access.outputs) {
      access.outputs.forEach((output: any) => {
        if (output.state === 'connected') {
          if (output.name && !devices.includes(output.name)) {
            devices.push(output.name);
          }
        }
      });
    }
    
    this.midiDevices = devices;

    // Update selected MIDI device if not set or no longer available
    if (this.selectedMidiDevice === '' || !devices.includes(this.selectedMidiDevice)) {
      this.selectedMidiDevice = devices.length > 0 ? devices[0] : '';
    }

    // If active device is disconnected, reset state
    if (this.activeMidiDevice !== null && !devices.includes(this.activeMidiDevice)) {
      this.activeMidiDevice = null;
      this.midiConnected = false;
    } else if (this.activeMidiDevice !== null) {
      this.midiConnected = true;
    } else {
      this.midiConnected = false;
    }
  }

  private connectMidiDevice() {
    if (this.selectedMidiDevice) {
      this.activeMidiDevice = this.selectedMidiDevice;
      this.midiConnected = true;
    }
  }

  private disconnectMidiDevice() {
    this.activeMidiDevice = null;
    this.midiConnected = false;
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
      const isMinor = firstChord?.quality?.toLowerCase().includes('minor') || firstChord?.symbol?.includes('m');
      const defaultScale = isMinor ? 'minor' : 'major';
      this.config = { ...this.config, key: baseKey, scale: defaultScale };
    }
  }

  render() {
    const transposedProgression = this.getTransposedProgression();
    const activeChord = transposedProgression[this.activeIndex] ?? null;
    const pads = buildCircuitGrid(activeChord, this.config);
    const recipe = buildChordRecipe(activeChord, pads, this.voicing, this.inversion);

    const uniqueTargets = activeChord ? activeChord.notes.map(n => normalizePitchClass(n)).filter(Boolean) : [];
    const missingNotes = activeChord && this.config.mode === 'collapsed'
      ? uniqueTargets.filter(note => !pads.some(p => p.note === note))
      : [];

    return html`
      <div class="app-grid">
        <!-- Brand Header Bar -->
        <header class="brand-header">
          <div class="brand-left">
            <svg class="brand-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#ffffff" />
              <g transform="rotate(-45 16 16)" fill="#1a1b20">
                <rect x="6.5" y="6" width="5" height="14" rx="2.5" />
                <rect x="13.5" y="12" width="5" height="14" rx="2.5" />
                <rect x="20.5" y="6" width="5" height="14" rx="2.5" />
              </g>
            </svg>
            <div class="brand-title">circuit chords</div>
          </div>
          <div class="brand-right">
            <!-- Audio State Button -->
            <button class="audio-btn ${this.audioActive ? 'active' : ''}" @click=${this.toggleAudio} title="${this.audioActive ? 'Disable Audio' : 'Enable Audio'}">
              ${this.audioActive ? html`
                <svg viewBox="0 0 24 24">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              ` : html`
                <svg viewBox="0 0 24 24">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              `}
            </button>
            <div class="midi-led-group">
              <span class="midi-led ${this.midiConnected ? 'connected' : ''}"></span>
              WebMIDI
            </div>
          </div>
        </header>

        <!-- 1. Left Navigation Tab Bar -->
        <nav class="panel sidebar-left">
          <button class="nav-btn ${this.activeTab === 'grid' ? 'active' : ''}" title="Grid View" @click=${() => this.activeTab = 'grid'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </button>
          <button class="nav-btn ${this.activeTab === 'data' ? 'active' : ''}" title="Key &amp; Scale" @click=${() => this.activeTab = 'data'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </button>
          <button class="nav-btn ${this.activeTab === 'input' ? 'active' : ''}" title="Chord Input" @click=${() => this.activeTab = 'input'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          </button>
          <div class="nav-divider"></div>
          <div class="nav-bottom">
            <button class="nav-btn ${this.showHelp ? 'active' : ''}" title="Help ?" @click=${() => this.toggleHelp()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </button>
            <button class="nav-btn ${this.showSettings ? 'active' : ''}" title="Settings" @click=${() => this.toggleSettings()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
          </div>
        </nav>

        <!-- 2. Top Header Bar (active config summary + voicing toggle) -->
        <header class="panel header-top">
          <div class="config-group">
            <span class="config-label">Key / Scale</span>
            <div style="display:flex; gap:8px; align-items:center;">
              <span style="font-size:1rem; font-weight:800; color:var(--accent-cyan); letter-spacing:-0.02em;">${this.config.key}</span>
              <span style="color:#444; font-size:0.8rem;">·</span>
              <span style="font-size:0.75rem; font-weight:600; color:#aaa; text-transform:uppercase; letter-spacing:0.06em;">${this.config.scale}</span>
            </div>
          </div>

          <div style="flex:1;"></div>

          <div class="config-group">
            <span class="config-label">Voicing</span>
            <div class="tactile-group">
              ${VOICING_OPTIONS.map((v) => html`
                <button
                  class="tactile-btn ${this.voicing === v ? 'active-root' : ''}"
                  @click=${() => this.onVoicingChange(v as VoicingMode)}
                  title="Voicing: ${v}">
                  ${v === 'triad' ? '3' : v === 'seventh' ? '7th' : v}
                </button>
              `)}
            </div>
          </div>
        </header>

        <!-- 3. Center Main Content Area -->
        <main class="panel main-content">
          ${missingNotes.length > 0 ? html`
            <div class="scale-warning">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px; flex-shrink: 0;">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span>Chord note(s) (${missingNotes.join(', ')}) outside scale are hidden in Scale Collapse mode. Switch to Chromatic mode to play.</span>
            </div>
          ` : null}

          <!-- Tab 1: Grid View -->
          <div class="circuit-grid" style="display: ${this.activeTab === 'grid' ? 'block' : 'none'}">
            <circuit-grid .pads=${pads} .recipe=${recipe}></circuit-grid>
          </div>

          <!-- Tab 2: Key & Scale Pad Picker -->
          <div class="data-input-view" style="display: ${this.activeTab === 'data' ? 'flex' : 'none'}">

            <!-- Keynote + Scale Pad Picker — Circuit Tracks layout -->
            <div class="pad-picker">

              <!-- Keynote Section: row 1 = sharps, row 2 = naturals -->
              <div class="pad-picker-section">
                <div class="pad-picker-section-label">Keynote</div>
                <!-- Row 1 (pads 1–8): gaps at positions 1, 4, 8; sharps at 2,3,5,6,7 -->
                <div class="pad-row">
                  ${(['', 'C#', 'D#', '', 'F#', 'G#', 'A#', ''] as string[]).map(note => note === '' ? html`
                    <div class="picker-pad pad-root pad-dim" aria-hidden="true"></div>
                  ` : html`
                    <button
                      class="picker-pad pad-root ${this.config.key === note ? 'pad-active' : ''}"
                      @click=${() => this.onKeyChange(note)}
                      title="Root: ${note}"
                      aria-label="Root note ${note}">
                      ${note}
                    </button>
                  `)}
                </div>
                <!-- Row 2 (pads 9–16): C D E F G A B + dim -->
                <div class="pad-row">
                  ${(['C', 'D', 'E', 'F', 'G', 'A', 'B', ''] as string[]).map(note => note === '' ? html`
                    <div class="picker-pad pad-root pad-dim" aria-hidden="true"></div>
                  ` : html`
                    <button
                      class="picker-pad pad-root ${this.config.key === note ? 'pad-active' : ''}"
                      @click=${() => this.onKeyChange(note)}
                      title="Root: ${note}"
                      aria-label="Root note ${note}">
                      ${note}
                    </button>
                  `)}
                </div>
              </div>

              <!-- Scale Section: row 3 = scales 1–8, row 4 = scales 9–16 -->
              <div class="pad-picker-section">
                <div class="pad-picker-section-label">Scale</div>
                <!-- Row 3 (pads 17–24): first 8 scales -->
                <div class="pad-row">
                  ${SCALE_OPTIONS.slice(0, 8).map(scale => html`
                    <button
                      class="picker-pad pad-scale ${this.config.scale === scale ? 'pad-active' : ''}"
                      @click=${() => this.onScaleChange(scale)}
                      title="Scale: ${scale}"
                      aria-label="Scale ${SCALE_DISPLAY_NAMES[scale] ?? scale}">
                      ${SCALE_DISPLAY_NAMES[scale] ?? scale}
                    </button>
                  `)}
                </div>
                <!-- Row 4 (pads 25–32): next 8 scales -->
                <div class="pad-row">
                  ${SCALE_OPTIONS.slice(8, 16).map(scale => html`
                    <button
                      class="picker-pad pad-scale ${this.config.scale === scale ? 'pad-active' : ''}"
                      @click=${() => this.onScaleChange(scale)}
                      title="Scale: ${scale}"
                      aria-label="Scale ${SCALE_DISPLAY_NAMES[scale] ?? scale}">
                      ${SCALE_DISPLAY_NAMES[scale] ?? scale}
                    </button>
                  `)}
                </div>
              </div>

            </div>
          </div>

          <!-- Tab 3: Chord Input -->
          <div class="chord-input-view" style="display: ${this.activeTab === 'input' ? 'flex' : 'none'}">
            <div class="chord-input-header">
              <div class="chord-input-title">Chord Progression</div>
              <div class="chord-input-hint">Enter chords separated by spaces — e.g. <code>Cmaj7 Am7 Dm7 G7</code></div>
            </div>
            <chord-input .value=${this.source} @progression-parsed=${this.onParsed}></chord-input>
          </div>
        </main>

        <!-- Sidebar Backdrop for Mobile overlay -->
        <div class="sidebar-backdrop ${this.showSettings || this.showHelp ? 'open' : ''}" @click=${() => { this.showSettings = false; this.showHelp = false; }}></div>

        <!-- 4. Right Sidebar (MIDI HUD / Modal on Desktop) -->
        <aside class="panel sidebar-right ${this.showSettings ? 'open' : ''}">
          <!-- Close Button -->
          <button class="close-btn" @click=${() => this.showSettings = false} title="Close Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Sidebar Header -->
          <div class="sidebar-header" style="width: 100%; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 12px; margin-bottom: 8px;">
            <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Settings</h3>
          </div>

          <!-- MIDI Settings -->
          <div class="settings-section">
            <h4 class="section-title">MIDI Settings</h4>
            
            <div class="midi-status">
              <div class="midi-icon-wrapper ${this.midiConnected ? 'connected' : ''}">
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
                <div class="status-text ${this.midiConnected ? 'connected' : 'disconnected'}">
                  ${this.midiConnected ? 'CONNECTED' : 'DISCONNECTED'}
                </div>
                ${this.midiConnected && this.activeMidiDevice ? html`
                  <div class="active-device-name" title="${this.activeMidiDevice}">
                    ${this.activeMidiDevice}
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Device selection & connection trigger -->
            ${this.midiDevices.length > 0 ? html`
              <div class="midi-config">
                <span class="config-label">Available Devices</span>
                <select class="midi-select" .value=${this.selectedMidiDevice} @change=${(e: Event) => this.selectedMidiDevice = (e.target as HTMLSelectElement).value}>
                  ${this.midiDevices.map(device => html`
                    <option value=${device} ?selected=${this.selectedMidiDevice === device}>${device}</option>
                  `)}
                </select>
                
                ${this.midiConnected && this.activeMidiDevice === this.selectedMidiDevice ? html`
                  <button class="midi-btn disconnect" @click=${this.disconnectMidiDevice}>
                    Disconnect
                  </button>
                ` : html`
                  <button class="midi-btn connect" @click=${this.connectMidiDevice} ?disabled=${!this.selectedMidiDevice}>
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

        <!-- Help Sidebar/Modal Panel -->
        <aside class="panel sidebar-help ${this.showHelp ? 'open' : ''}">
          <!-- Close Button -->
          <button class="close-btn" @click=${() => this.showHelp = false} title="Close Help">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Sidebar Header -->
          <div class="sidebar-header" style="width: 100%; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 12px; margin-bottom: 8px;">
            <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Quick Start Guide</h3>
          </div>

          <!-- Section 1: Entering Chords -->
          <div class="help-section">
            <h4 class="help-title">1. Enter Progressions</h4>
            <p class="help-text">
              Go to the <strong>Data Input View</strong> (second icon from the top in the left menu) to write or paste your chord progression (e.g. <code style="color: var(--accent-cyan); background: var(--bg-onyx); padding: 2px 6px; border-radius: 4px; font-family: monospace;">Am7 D9 Gmaj7</code>).
            </p>
          </div>

          <!-- Section 2: Playing Mapped Pads -->
          <div class="help-section">
            <h4 class="help-title">2. View & Play Pads</h4>
            <p class="help-text">
              Switch back to the <strong>Grid View</strong> (top icon in the left menu) to see the 4x8 Circuit pad grid. 
            </p>
            <ul class="help-list">
              <li><span class="help-step-number">1</span><strong>Target Voicings</strong>: Pads with white border rings show the notes to press to play the active chord. The numbers indicate the recommended finger/voicing order.</li>
              <li><strong>Interactive Preview</strong>: Click or tap any pad to play its note individually.</li>
            </ul>
          </div>

          <!-- Section 3: Customizing Layouts -->
          <div class="help-section">
            <h4 class="help-title">3. Configure Layouts</h4>
            <p class="help-text">
              Open the <strong>Settings Panel</strong> (gear icon in the left menu) to configure:
            </p>
            <ul class="help-list">
              <li><strong>Scale</strong>: Pick a scale in the Data Input view — the grid automatically collapses to show only notes in that scale. Selecting <em>Chromatic</em> switches to a full keyboard layout.</li>
              <li><strong>Voicing Types</strong>: Choose between Triad, Seventh, or Spread configurations.</li>
            </ul>
          </div>

          <!-- Section 4: WebMIDI Connect -->
          <div class="help-section">
            <h4 class="help-title">4. Hardware Integration</h4>
            <p class="help-text">
              Connect external MIDI controllers or synth modules. The <strong>WebMIDI LED indicator</strong> in the top header will light up green once a valid device is successfully established.
            </p>
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

  private onKeyChange(key: string) {
    this.config = { ...this.config, key };
  }

  private onScaleChange(scale: string) {
    // 'chromatic' scale → chromatic keyboard layout mode.
    // Any other named scale → collapsed mode (only scale notes shown).
    const mode: ScaleMode = scale === 'chromatic' ? 'chromatic' : 'collapsed';
    this.config = { ...this.config, scale, mode };
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

    const isMinor = firstChord?.quality?.toLowerCase().includes('minor') || firstChord?.symbol?.includes('m');
    const defaultScale = isMinor ? 'minor' : 'major';

    if (firstChord?.tonic) {
      this.config = { ...this.config, key: baseKey, scale: defaultScale };
    }

    if (this.autoPlay && this.progression.length > 0) {
      setTimeout(() => this.playActiveVoicing(), 50);
    }
    
    if (this.progression.length > 0) {
      this.activeTab = 'grid'; // Switch back to grid view so user sees pads
    }
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
