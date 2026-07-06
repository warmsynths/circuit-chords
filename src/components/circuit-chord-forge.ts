import { LitElement, css, html, svg } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Chord, Interval, Note } from 'tonal';
import './chord-input';
import './progression-stepper';
import './circuit-grid';
import type { ChordInputParsedEventDetail } from './chord-input';
import { parseProgression, type ParsedChord } from '../lib/chord-parser';
import {
  KEY_OPTIONS,
  SCALE_DISPLAY_NAMES,
  SCALE_OPTIONS,
  buildCircuitGrid,
  normalizePitchClass,
  type GridConfig,
  type CircuitPad,
  type ChordRecipePad,
} from '../lib/music-grid';
import { playChord, isAudioActive, startAudio, suspendAudio, registerAudioStateListener } from '../lib/audio';
import { PatchData, decodePatchDump, createRequestDumpCommand, encodePatchDump, PATCH_BYTES } from '../lib/circuit-sysex';
import './circuit-patch-editor';

@customElement('circuit-chord-forge')
export class CircuitChordForge extends LitElement {
  static styles = css`
    :host {
      /* 1. DESIGN THEME & COLOR PALETTE */
      /* Default Dark Mode (Circuit Tracks) */
      --bg-onyx: #121316;
      --bg-charcoal: #1a1b20;
      --bg-charcoal-alpha: rgba(26, 27, 32, 0.85);
      --kb-white-key-bg: #8b8e98;
      --kb-black-key-bg: #121316;
      --kb-stroke: #121316;
      --radius-panel: 12px;
      
      --text-primary: #ffffff;
      --text-secondary: #888888;
      --text-muted: #555555;
      --text-on-accent: #ffffff;
      
      --pad-scale: #2c3a4e;
      --pad-chromatic: #222328;
      
      --accent-cyan: #00f0ff;
      --accent-cyan-text: #121316;
      --accent-cyan-alpha: rgba(0, 240, 255, 0.3);
      --accent-magenta: #ff2a9f;
      --accent-magenta-alpha: rgba(255, 42, 159, 0.1);
      --status-green: #39ff14;

      --pad-top-dim: #132230;
      --pad-top-text-dim: #264660;
      --pad-top-scale: #1a3246;
      --pad-top-text-scale: #62a2d4;
      --pad-bot-dim: #221222;
      --pad-bot-text-dim: #4d234d;
      --pad-bot-scale: #331833;
      --pad-bot-text-scale: #9c5c9c;
      
      --border-color: rgba(255, 255, 255, 0.05);
      --shadow-panel: 0 4px 24px rgba(0, 0, 0, 0.2);
      --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.5);
      --pad-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.04), 0 3px 6px rgba(0, 0, 0, 0.4);
      --scrollbar-thumb: rgba(255, 255, 255, 0.1);
      --midi-led-off: #444444;
      --midi-svg-stroke-off: #333333;
      
      --brand-logo-bg: #ffffff;
      --brand-logo-fill: #1a1b20;

      --knob-shadow: 5px 5px 10px #0c1222, -5px -5px 10px #202e46;
      --knob-shadow-hover: 3px 3px 6px #0c1222, -3px -3px 6px #202e46;
      --knob-shadow-dragging: inset 3px 3px 6px #0c1222, inset -3px -3px 6px #202e46;

      --input-bg: #121316;
      --input-color: #ffffff;
      --btn-text-off: #888888;

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
      color: var(--text-primary);
      font-family: 'Space Grotesk', system-ui, sans-serif;
      padding: var(--gap);
      box-sizing: border-box;
    }

    :host(.theme-light) {
      /* Light/Medium Mode (Circuit Rhythm) */
      --bg-onyx: #5c5f66;          /* Darker slate grey chassis edges */
      --bg-charcoal: #82858d;      /* Medium slate grey faceplate */
      --bg-charcoal-alpha: rgba(130, 133, 141, 0.85);
      --kb-white-key-bg: #cbd5e1;
      --kb-black-key-bg: #2e3035;
      --kb-stroke: #5c5f66;
      
      --text-primary: #121316;     /* Black printed text */
      --text-secondary: #2e3035;   /* Dark gray labels */
      --text-muted: #4a4d53;       /* Muted gray */
      --text-on-accent: #ffffff;
      
      --pad-scale: #2e313a;        /* Dark charcoal pads off state */
      --pad-chromatic: #1c1e24;    /* Darkest gap pads off state */
      
      --accent-cyan: #ff5c12;      /* Glowing Orange pads */
      --accent-cyan-text: #ffffff;
      --accent-cyan-alpha: rgba(255, 92, 18, 0.3);
      --accent-magenta: #00d2ff;   /* Glowing Cyan/Teal pads */
      --accent-magenta-alpha: rgba(0, 210, 255, 0.25);
      --status-green: #10b981;     /* Play button Green */

      --pad-top-dim: #12242e;
      --pad-top-text-dim: #254b5f;
      --pad-top-scale: #17384a;
      --pad-top-text-scale: #5eaad1;
      --pad-bot-dim: #2a1610;
      --pad-bot-text-dim: #5c3021;
      --pad-bot-scale: #3f1e13;
      --pad-bot-text-scale: #b55d3c;
      
      --border-color: rgba(0, 0, 0, 0.15);
      --shadow-panel: 0 4px 24px rgba(0, 0, 0, 0.15);
      --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.15);
      --pad-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.15), 0 3px 6px rgba(0, 0, 0, 0.25);
      --scrollbar-thumb: rgba(0, 0, 0, 0.25);
      --midi-led-off: #4a4d53;
      --midi-svg-stroke-off: #4a4d53;
      
      --brand-logo-bg: #121316;
      --brand-logo-fill: #82858d;

      --knob-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25), -4px -4px 8px rgba(255, 255, 255, 0.2);
      --knob-shadow-hover: 2px 2px 5px rgba(0, 0, 0, 0.25), -2px -2px 5px rgba(255, 255, 255, 0.2);
      --knob-shadow-dragging: inset 2px 2px 5px rgba(0, 0, 0, 0.25), inset -2px -2px 5px rgba(255, 255, 255, 0.2);

      --input-bg: #ffffff;         /* Crisp white input background */
      --input-color: #121316;      /* Black text in input */
      --btn-text-off: #cbd5e1;

      color: var(--text-primary);
      background-color: var(--bg-onyx);
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
      background: var(--scrollbar-thumb);
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent-cyan);
    }

    /* 2. STRUCTURAL SECTIONS & ARCHITECTURE */
    .app-grid {
      display: grid;
      grid-template-columns: var(--sidebar-left-width) minmax(0, 1fr);
      grid-template-rows: 48px var(--header-height) 1fr minmax(var(--footer-height), auto) auto;
      gap: var(--gap);
      height: calc(100vh - (var(--gap) * 2));
      height: calc(100dvh - (var(--gap) * 2));
      max-width: 1600px;
      margin: 0 auto;
    }

    .panel {
      background-color: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
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
    .audio-btn:hover {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }
    .audio-btn.active {
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
      color: var(--text-secondary);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .tactile-group {
      display: flex;
      gap: 4px;
      background: var(--bg-onyx);
      padding: 4px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-inset);
    }

    .tactile-btn {
      padding: 6px 11px;
      border-radius: 6px;
      background: var(--pad-chromatic);
      color: var(--btn-text-off, #94a3b8);
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
      color: var(--text-primary);
    }
    .tactile-btn.active-root {
      background: var(--accent-cyan);
      color: var(--accent-cyan-text);
      box-shadow: 0 0 12px var(--accent-cyan-alpha, rgba(0, 240, 255, 0.2));
    }

    .header-select {
      background: var(--bg-onyx) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2300f0ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 6 8 10 12 6'></polyline></svg>") no-repeat right 12px center;
      background-size: 12px;
      color: var(--text-primary);
      border: 1px solid var(--border-color);
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
      box-shadow: var(--shadow-inset);
      transition: all 0.2s;
    }
    .header-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: var(--shadow-inset), 0 0 8px rgba(0, 240, 255, 0.25);
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
      color: var(--text-primary);
    }

    .chord-input-hint {
      font-size: 0.78rem;
      color: var(--text-secondary);
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
      color: var(--text-muted);
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
      border: 1px solid var(--border-color);
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
      border: 1px solid var(--border-color);
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
      box-shadow: var(--pad-shadow);
    }
    .picker-pad:active {
      transform: scale(0.93);
    }

    /* ── Note pads — dark "off" state, cyan when selected ── */
    .picker-pad.pad-root {
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%), var(--pad-scale);
      color: var(--btn-text-off, #94a3b8);
      border-color: var(--border-color);
    }
    .picker-pad.pad-root:hover {
      border-color: var(--btn-text-off);
      color: var(--text-primary);
    }
    .picker-pad.pad-root.pad-active {
      background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%), var(--accent-cyan);
      color: var(--accent-cyan-text);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 18px var(--accent-cyan-alpha, rgba(0, 240, 255, 0.55)), var(--shadow-inset);
    }
    /* Dimmed/spacer pads for gap positions */
    .picker-pad.pad-root.pad-dim {
      background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), var(--pad-chromatic);
      color: var(--text-muted);
      border-color: var(--border-color);
      box-shadow: var(--shadow-inset);
      cursor: default;
      pointer-events: none;
    }

    /* ── Scale pads — dark "off" state, magenta when selected ── */
    .picker-pad.pad-scale {
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%), var(--pad-scale);
      color: var(--btn-text-off, #94a3b8);
      border-color: var(--border-color);
      font-size: 0.58rem;
    }
    .picker-pad.pad-scale:hover {
      border-color: var(--btn-text-off);
      color: var(--text-primary);
    }
    .picker-pad.pad-scale.pad-active {
      background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%), var(--accent-magenta);
      color: var(--text-on-accent);
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 20px var(--accent-magenta-alpha, rgba(255, 42, 159, 0.65)), var(--shadow-inset);
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
      background: var(--bg-charcoal-alpha);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-color);
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
      background: var(--bg-charcoal-alpha);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-color);
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
      border-bottom: 1px solid var(--border-color);
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
      color: var(--text-secondary);
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
      color: var(--text-muted);
      position: relative;
    }
    .help-list li strong {
      color: var(--text-primary);
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
      border: 2px solid var(--border-color);
      box-shadow: var(--shadow-inset);
      transition: all 0.3s;
    }

    .midi-icon-wrapper.connected {
      border-color: var(--status-green);
      box-shadow: var(--shadow-inset), 0 0 16px rgba(57, 255, 20, 0.3);
    }

    .midi-svg {
      width: 42px;
      height: 42px;
      fill: none;
      stroke: var(--midi-svg-stroke-off);
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
      color: var(--text-muted);
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
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 10px 36px 10px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      font-family: inherit;
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      outline: none;
      box-shadow: var(--shadow-inset);
      transition: all 0.2s;
    }
    .midi-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: var(--shadow-inset), 0 0 8px rgba(0, 240, 255, 0.25);
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
      border-bottom: 1px solid var(--border-color);
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
      color: var(--text-secondary);
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
      border: 1px solid var(--border-color);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
      outline: none;
    }
    
    .midi-btn.connect {
      background: var(--accent-cyan);
      color: var(--accent-cyan-text);
      border-color: var(--accent-cyan);
    }
    .midi-btn.connect:hover {
      background: #00d8e6;
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.3);
    }
    .midi-btn.connect:disabled {
      background: var(--pad-scale);
      color: var(--text-muted);
      border-color: var(--border-color);
      cursor: not-allowed;
      box-shadow: none;
      opacity: 0.5;
    }
    
    .midi-btn.disconnect {
      background: var(--pad-chromatic);
      color: var(--accent-magenta);
      border-color: var(--border-color);
    }
    .midi-btn.disconnect:hover {
      background: var(--pad-scale);
      border-color: var(--accent-magenta);
      box-shadow: 0 0 12px var(--accent-magenta-alpha);
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

    /* Section 5: Bottom Timeline Footer */
    .footer-timeline {
      grid-column: 2 / -1;
      grid-row: 4 / 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
      height: auto !important;
      padding: 8px 24px;
    }

    .footer-drawer-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
      animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .footer-voicing-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .footer-voicing-label {
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--text-secondary);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .quality-selector-row {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      scrollbar-width: none;
      width: 100%;
      padding-bottom: 2px;
      margin-bottom: 2px;
    }

    .quality-selector-row::-webkit-scrollbar {
      display: none;
    }

    .quality-pill {
      background: var(--bg-charcoal);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--text-secondary);
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s ease;
    }

    .quality-pill:hover {
      border-color: var(--text-primary);
      color: var(--text-primary);
    }

    .quality-pill.active {
      background: var(--bg-charcoal);
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
      box-shadow: 0 0 8px var(--accent-cyan-alpha);
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .footer-timeline.peek-hint {
      animation: peekPulse 1.5s ease;
    }

    @keyframes peekPulse {
      0% { box-shadow: none; }
      30% { box-shadow: 0 0 12px var(--accent-cyan-alpha), inset 0 0 8px rgba(0, 240, 255, 0.05); }
      100% { box-shadow: none; }
    }

    progression-stepper {
      width: 100%;
    }

    /* Section 6: Bottom Links Footer */
    .app-links-footer {
      grid-column: 1 / -1;
      grid-row: 5 / 6;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 8px 16px 0 16px;
      font-size: 0.75rem;
      color: var(--text-secondary);
      border-top: 1px solid var(--border-color);
      margin-top: -4px;
      flex-wrap: wrap;
    }

    .footer-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease, transform 0.2s ease;
    }

    .footer-link:hover {
      color: var(--accent-cyan);
      transform: translateY(-1px);
    }

    .footer-link-highlight {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .footer-link-highlight:hover {
      color: var(--accent-cyan);
      text-decoration: underline;
    }

    .footer-divider {
      color: var(--border-color);
      user-select: none;
    }

    .footer-icon {
      flex-shrink: 0;
      transition: stroke 0.2s ease;
    }

    .footer-link:hover .footer-icon {
      stroke: var(--accent-cyan);
    }

    .heart-icon {
      display: inline-block;
      animation: heartPulse 2.5s infinite ease-in-out;
      margin: 0 2px;
    }

    .coffee-icon {
      display: inline-block;
      transition: transform 0.2s ease;
    }

    .footer-link:hover .coffee-icon {
      transform: rotate(10deg) scale(1.1);
    }

    @keyframes heartPulse {
      0% { transform: scale(1); }
      14% { transform: scale(1.15); }
      28% { transform: scale(1); }
      42% { transform: scale(1.15); }
      70% { transform: scale(1); }
    }

    /* Close Button (Global for Modal and Drawer) */
    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      right: 16px;
      background: var(--bg-onyx);
      border: 1px solid var(--border-color);
      border-radius: 50%;
      width: 32px;
      height: 32px;
      color: var(--text-secondary);
      cursor: pointer;
      z-index: 1010;
      transition: all 0.2s ease;
    }
    .close-btn:hover {
      background: var(--pad-scale);
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

    /* Sidebar Human (Slide-out panel) */
    .sidebar-human {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 400px;
      max-width: 100vw;
      height: 100vh;
      height: 100dvh;
      z-index: 1000;
      background: var(--bg-charcoal-alpha);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-left: 1px solid var(--border-color);
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-y: auto;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 1 !important;
      pointer-events: none;
    }

    .sidebar-human.open {
      transform: translateX(0);
      pointer-events: auto;
    }

    /* Style integration for the human lit component */
    human-panel {
      --human-bg: transparent;
      --human-surface: var(--bg-onyx);
      --human-border: var(--border-color);
      --human-text-primary: var(--text-primary);
      --human-text-secondary: var(--text-secondary);
      --human-accent: var(--accent-cyan);
      --human-accent-hover: var(--accent-magenta);
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      background: transparent !important;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      flex-shrink: 0 !important;
      height: auto !important;
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
        grid-template-rows: 48px var(--header-height) 1fr minmax(var(--footer-height), auto) auto;
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

      /* Sidebar Human as Overlay Drawer on Mobile */
      .sidebar-human {
        width: 280px;
        padding: 24px 20px;
      }

      /* Reduce spacer elements in timeline footer on mobile */
      .footer-timeline {
        padding: 0 8px;
        grid-column: 2 / 3;
        grid-row: 4 / 5;
      }

      /* Mobile styling for Top Header config */
      .header-top {
        padding: 0 12px;
        gap: 12px;
      }

      .header-top .tactile-btn {
        min-width: 30px;
        padding: 6px 8px;
        font-size: 0.75rem;
      }

      /* Mobile styling for Key/Scale picker */
      .data-input-view {
        gap: 16px;
      }

      .pad-picker {
        gap: 10px;
      }

      .pad-picker-section {
        padding: 12px;
        gap: 8px;
      }

      .pad-picker-section-label {
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        color: #777;
        margin-bottom: 4px;
      }

      /* Keynote grid on mobile */
      .pad-row.keynote-row {
        gap: 4px;
      }

      .picker-pad.pad-root {
        aspect-ratio: 0.95;
        font-size: 0.7rem;
      }

      /* Scale grid on mobile */
      .pad-row.scale-row {
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
      }

      .picker-pad.pad-scale {
        aspect-ratio: auto;
        height: 42px;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        padding: 6px 10px;
        border-radius: 8px;
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

    /* Voicing Keyboard & Control Styles */
    .voicing-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .voicing-control-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .keyboard-viz-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-charcoal);
      padding: 2px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      width: 224px; /* default fallback, overridden dynamically */
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

    .relocated-audio-controls {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .relocated-audio-controls .audio-btn {
      border-radius: 6px;
      width: 32px;
      height: 32px;
      background: var(--bg-charcoal);
      box-shadow: var(--pad-shadow);
    }

    @media (max-width: 520px) {
      .voicing-group {
        gap: 2px;
      }
    }
  `;

  // === State Variables ===
  @state() private theme: 'dark' | 'light' = (localStorage.getItem('circuit-chords.theme') as 'dark' | 'light') || 'dark';
  @state() private audioActive = false;
  private audioCleanup: (() => void) | null = null;
  @state() private activeTab: 'grid' | 'data' | 'input' | 'patch' = 'grid';
  @state() private activePatch: PatchData | null = null;
  @state() private progression: ParsedChord[] = [];
  @state() private originalKey = 'C';
  @state() private activeIndex = 0;
  @state() private hideScaleWarningForNotes = '';
  @state() private config: GridConfig = {
    key: 'C',
    scale: 'chromatic',
    mode: 'chromatic',
  };
  @state() private voicedOffsets: Record<number, number[]> = {};
  @state() private isMobileViewport = false;
  @state() private showQualitySelector = false;
  private hasSeenDrawerPeek = localStorage.getItem('circuit-chords.drawerPeekSeen') === 'true';
  private peekTimeout: ReturnType<typeof setTimeout> | null = null;

  // Voicing drag-to-change state
  private isDraggingVoicing = false;
  private dragStartX = 0;
  private hasMovedVoicing = false;
  private playDebounceTimeout: any = null;
  @state() private autoPlay = true;

  private handleResize = () => {
    this.isMobileViewport = window.innerWidth < 520;
  };
  @state() private transposeProgression = true;
  @state() private inversion = 0;
  @state() private source = '';
  @state() private showSettings = false;
  @state() private showHelp = false;
  @state() private humanLoaded = false;
  @state() private showHuman = false;
  @state() private humanState: any = null;
  @state() private showScaleWarnings = localStorage.getItem('circuit-chords.showScaleWarnings') !== 'false';
  @state() private midiConnected = false;
  @state() private midiDevices: string[] = [];
  @state() private selectedMidiDevice = '';
  @state() private activeMidiDevice: string | null = null;
  @state() private selectedMidiChannel = 1;
  private midiAccess: any = null;
  private activeMidiTimeouts: Map<number, ReturnType<typeof setTimeout>> = new Map();

  private get isDebugMode() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('debug');
  }

  private get isCircuitTracksConnected() {
    if (this.isDebugMode) return true;
    return this.midiConnected && !!this.activeMidiDevice && this.activeMidiDevice.toLowerCase().includes('circuit tracks');
  }

  private getOrCreateMockPatch(): PatchData {
    const data = new Uint8Array(PATCH_BYTES);
    data[45] = 1;
    data[46] = 0;
    data[64] = 64;
    data[70] = 1;
    data[71] = 64;
    data[73] = 64;
    data[79] = 10;
    data[80] = 50;
    data[81] = 64;
    data[82] = 20;
    return decodePatchDump(data);
  }



  private toggleHelp() {
    this.showHelp = !this.showHelp;
    if (this.showHelp) {
      this.showSettings = false;
      this.showHuman = false;
    }
  }

  private toggleSettings() {
    this.showSettings = !this.showSettings;
    if (this.showSettings) {
      this.showHelp = false;
      this.showHuman = false;
    }
  }

  private toggleHuman() {
    this.showHuman = !this.showHuman;
    if (this.showHuman) {
      this.showHelp = false;
      this.showSettings = false;
    }
  }

  private handleHumanChange(e: CustomEvent<any>) {
    this.humanState = e.detail;
  }

  private handleHumanPreview(e: CustomEvent<any>) {
    this.humanState = e.detail;
    this.playActiveVoicing();
  }

  private toggleScaleWarnings(show: boolean) {
    this.showScaleWarnings = show;
    localStorage.setItem('circuit-chords.showScaleWarnings', String(show));
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

  private toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('circuit-chords.theme', this.theme);
    this.classList.toggle('theme-light', this.theme === 'light');
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.isDebugMode) {
      this.activePatch = this.getOrCreateMockPatch();
    }
    this.loadDefaultProgression();
    this.initMidi();

    // Dynamically import the human-engine component
    // Production: env var is set to CDN URL, loaded at runtime via @vite-ignore
    // Development: env var is unset, Vite resolves 'human-engine' alias to local built file
    const engineUrl = import.meta.env.VITE_HUMAN_ENGINE_URL;
    const loadEngine = engineUrl
      ? import(/* @vite-ignore */ engineUrl)
      : import('human-engine');

    loadEngine
      .then(() => {
        this.humanLoaded = true;
      })
      .catch((err) => {
        console.warn('Could not load human panel:', err);
      });

    // Apply the initial theme class to host
    this.classList.toggle('theme-light', this.theme === 'light');

    // Initialize audio state and register state change listener
    this.audioActive = isAudioActive();
    this.audioCleanup = registerAudioStateListener((state) => {
      this.audioActive = state === 'running';
    });

    if (typeof window !== 'undefined') {
      this.isMobileViewport = window.innerWidth < 520;
      window.addEventListener('resize', this.handleResize);
    }
  }

  disconnectedCallback() {
    if (this.audioCleanup) {
      this.audioCleanup();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
    super.disconnectedCallback();
  }

  private initMidi() {
    if (typeof navigator !== 'undefined' && 'requestMIDIAccess' in navigator) {
      (navigator as any).requestMIDIAccess({ sysex: true })
        .then((access: any) => {
          this.midiAccess = access;
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
      if (this.midiAccess) {
        this.midiAccess.inputs.forEach((input: any) => {
          if (input.name === this.activeMidiDevice) {
            input.onmidimessage = this.handleMidiMessage.bind(this);
          }
        });
      }
    }
  }

  private handleMidiMessage(event: any) {
    const data = event.data as Uint8Array;
    if (data.length === PATCH_BYTES && data[0] === 0xF0) {
      try {
        this.activePatch = decodePatchDump(data);
      } catch (err) {
        console.warn("Failed to parse sysex patch dump", err);
      }
    }
  }

  private sendSysexCommand(data: Uint8Array) {
    if (this.midiAccess && this.activeMidiDevice) {
      this.midiAccess.outputs.forEach((output: any) => {
        if (output.name === this.activeMidiDevice) {
          output.send(data);
        }
      });
    }
  }

  private handlePatchChange(e: CustomEvent) {
    if (!this.activePatch) return;
    const { path, value } = e.detail;

    // Deep clone patch data
    const newPatch = { ...this.activePatch };
    newPatch.oscillators = [{ ...newPatch.oscillators[0] }, { ...newPatch.oscillators[1] }];
    newPatch.filter = { ...newPatch.filter };
    newPatch.mixer = { ...newPatch.mixer };
    newPatch.envelopes = [{ ...newPatch.envelopes[0] }, { ...newPatch.envelopes[1] }, { ...newPatch.envelopes[2] }];

    // Apply change using path
    const parts = path.split('.');
    let current: any = newPatch;
    for (let i = 0; i < parts.length - 1; i++) {
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;

    this.activePatch = newPatch;

    // Auto-sync to device
    const sysex = encodePatchDump(newPatch);
    this.sendSysexCommand(sysex);
  }

  private handleRequestDump() {
    const cmd = createRequestDumpCommand(0);
    this.sendSysexCommand(cmd);
  }

  private handleLoadSlot(e: CustomEvent) {
    const slot = e.detail.slot;
    if (this.midiAccess && this.activeMidiDevice) {
      this.midiAccess.outputs.forEach((output: any) => {
        if (output.name === this.activeMidiDevice) {
          // Program Change on Channel 1 (0xC0), followed by patch number (0-63)
          output.send([0xC0, slot]);
        }
      });
      // Wait for Synth to load patch then request dump
      setTimeout(() => {
        this.handleRequestDump();
      }, 50);
    }
  }

  private disconnectMidiDevice() {
    this.activeMidiDevice = null;
    this.midiConnected = false;
  }

  private loadDefaultProgression() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('p');
    const sourceText = queryParam ? queryParam.trim() : 'Cmaj7 Am7 Dm7 G7';
    
    let parsed = parseProgression(sourceText);

    // If query parameter was provided but parsed no chords, fall back to default
    if (parsed.length === 0 && queryParam) {
      parsed = parseProgression('Cmaj7 Am7 Dm7 G7');
    }

    if (parsed.length > 0) {
      this.progression = parsed;
      this.source = queryParam && parsed.length > 0 ? sourceText : 'Cmaj7 Am7 Dm7 G7';
      this.activeIndex = 0;
      this.initVoicedOffsets();
      const firstChord = parsed[0];
      const baseKey = this.normalizeKey(firstChord?.tonic) ?? this.config.key;
      this.originalKey = baseKey;
      const defaultScale = 'chromatic';
      this.config = { ...this.config, key: baseKey, scale: defaultScale, mode: 'chromatic' };
    }
  }


  private initVoicedOffsets() {
    const newOffsets: Record<number, number[]> = {};
    this.progression.forEach((chord, i) => {
      newOffsets[i] = this.getDefaultVoicedOffsets(chord);
    });
    this.voicedOffsets = newOffsets;
  }

  private getDefaultVoicedOffsets(chord: ParsedChord): number[] {
    const baseIntervals = chord.intervals
      .map((inv) => Interval.get(inv).semitones)
      .filter((val): val is number => typeof val === 'number');
    return baseIntervals.sort((a, b) => a - b);
  }

  private shiftVoicingInversion(offsets: number[], steps: number): number[] {
    if (offsets.length === 0) return [];
    let current = [...offsets].sort((a, b) => a - b);

    if (steps > 0) {
      for (let i = 0; i < steps; i++) {
        const lowest = current.shift()!;
        current.push(lowest + 12);
        current.sort((a, b) => a - b);
      }
    } else if (steps < 0) {
      for (let i = 0; i < Math.abs(steps); i++) {
        const highest = current.pop()!;
        current.unshift(highest - 12);
        current.sort((a, b) => a - b);
      }
    }

    const rootMidi = Note.midi((this.getTransposedProgression()[this.activeIndex]?.tonic ?? 'C') + '4') ?? 60;
    const minMidi = this.isMobileViewport ? 60 : 48;
    const minOffset = minMidi - rootMidi;
    const maxOffset = 84 - rootMidi;

    current = current.map(o => {
      let bounded = o;
      while (bounded < minOffset) bounded += 12;
      while (bounded > maxOffset) bounded -= 12;
      return bounded;
    }).sort((a, b) => a - b);

    return Array.from(new Set(current));
  }

  private onKeyboardPointerDown(e: PointerEvent) {
    const containerEl = e.currentTarget as HTMLElement;
    containerEl.setPointerCapture(e.pointerId);
    this.isDraggingVoicing = true;
    this.dragStartX = e.clientX;
    this.hasMovedVoicing = false;
    e.preventDefault();
  }

  private onKeyboardPointerMove(e: PointerEvent) {
    if (!this.isDraggingVoicing) return;
    const deltaX = e.clientX - this.dragStartX;
    if (Math.abs(deltaX) > 4) {
      this.hasMovedVoicing = true;
    }
    const stepSize = 15;
    const stepDiff = Math.round(deltaX / stepSize);

    if (stepDiff !== 0) {
      this.dragStartX = e.clientX;
      const current = this.voicedOffsets[this.activeIndex] || [];
      if (current.length > 0) {
        const updated = this.shiftVoicingInversion(current, stepDiff);
        this.voicedOffsets = {
          ...this.voicedOffsets,
          [this.activeIndex]: updated
        };
        if (this.autoPlay) {
          this.playActiveVoicingDebounced();
        }
      }
    }
  }

  private onKeyboardPointerUp(e: PointerEvent) {
    if (!this.isDraggingVoicing) return;
    this.isDraggingVoicing = false;
    const containerEl = e.currentTarget as HTMLElement;
    try {
      containerEl.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    if (!this.hasMovedVoicing) {
      const target = e.target as SVGElement;
      if (target.tagName === 'rect') {
        const midiAttr = target.getAttribute('data-midi');
        if (midiAttr) {
          const clickedMidi = Number(midiAttr);
          const activeChord = this.getTransposedProgression()[this.activeIndex] ?? null;
          if (activeChord) {
            const rootMidi = Note.midi((activeChord.tonic ?? 'C') + '4') ?? 60;
            const offset = clickedMidi - rootMidi;

            const current = [...(this.voicedOffsets[this.activeIndex] || [])];
            const index = current.indexOf(offset);
            if (index !== -1) {
              current.splice(index, 1);
            } else {
              if (current.length < 6) {
                current.push(offset);
              }
            }
            this.voicedOffsets = {
              ...this.voicedOffsets,
              [this.activeIndex]: current.sort((a, b) => a - b)
            };

            if (this.autoPlay) {
              this.playActiveVoicingDebounced();
            }
          }
        }
      }
    }
  }

  private playActiveVoicingDebounced() {
    if (this.playDebounceTimeout) {
      clearTimeout(this.playDebounceTimeout);
    }
    this.playDebounceTimeout = setTimeout(() => {
      this.playActiveVoicing();
    }, 80);
  }

  private onKeyboardWheel(e: WheelEvent) {
    e.preventDefault();
    const stepDiff = e.deltaY > 0 ? -1 : 1;
    const current = this.voicedOffsets[this.activeIndex] || [];
    if (current.length > 0) {
      const updated = this.shiftVoicingInversion(current, stepDiff);
      this.voicedOffsets = {
        ...this.voicedOffsets,
        [this.activeIndex]: updated
      };
      if (this.autoPlay) {
        this.playActiveVoicingDebounced();
      }
    }
  }

  private renderVoicingKeyboard() {
    const transposedProgression = this.getTransposedProgression();
    const activeChord = transposedProgression[this.activeIndex] ?? null;
    const rootMidi = activeChord ? (Note.midi((activeChord.tonic ?? 'C') + '4') ?? 60) : 60;

    const activeMidis = (this.voicedOffsets[this.activeIndex] || []).map(offset => rootMidi + offset);

    const isMobile = this.isMobileViewport;

    // White key MIDI notes mapping: C4 to C6 on mobile, C3 to C6 otherwise
    const whiteKeys = isMobile ? [
      60, 62, 64, 65, 67, 69, 71, // Octave 1
      72, 74, 76, 77, 79, 81, 83, // Octave 2
      84                          // Octave 3 C
    ] : [
      48, 50, 52, 53, 55, 57, 59, // Octave 0
      60, 62, 64, 65, 67, 69, 71, // Octave 1
      72, 74, 76, 77, 79, 81, 83, // Octave 2
      84                          // Octave 3 C
    ];

    // Black key MIDI notes and their preceding white key indexes
    const blackKeys = isMobile ? [
      { midi: 61, afterIdx: 0 },
      { midi: 63, afterIdx: 1 },
      { midi: 66, afterIdx: 3 },
      { midi: 68, afterIdx: 4 },
      { midi: 70, afterIdx: 5 },

      { midi: 73, afterIdx: 7 },
      { midi: 75, afterIdx: 8 },
      { midi: 78, afterIdx: 10 },
      { midi: 80, afterIdx: 11 },
      { midi: 82, afterIdx: 12 }
    ] : [
      { midi: 49, afterIdx: 0 },
      { midi: 51, afterIdx: 1 },
      { midi: 54, afterIdx: 3 },
      { midi: 56, afterIdx: 4 },
      { midi: 58, afterIdx: 5 },

      { midi: 61, afterIdx: 7 },
      { midi: 63, afterIdx: 8 },
      { midi: 66, afterIdx: 10 },
      { midi: 68, afterIdx: 11 },
      { midi: 70, afterIdx: 12 },

      { midi: 73, afterIdx: 14 },
      { midi: 75, afterIdx: 15 },
      { midi: 78, afterIdx: 17 },
      { midi: 80, afterIdx: 18 },
      { midi: 82, afterIdx: 19 }
    ];

    const width = isMobile ? 150 : 220;
    const containerWidth = isMobile ? 154 : 224;

    return html`
      <div 
        class="keyboard-viz-container"
        style="width: ${containerWidth}px;"
        @pointerdown=${(e: PointerEvent) => this.onKeyboardPointerDown(e)}
        @pointermove=${(e: PointerEvent) => this.onKeyboardPointerMove(e)}
        @pointerup=${(e: PointerEvent) => this.onKeyboardPointerUp(e)}
        @pointercancel=${(e: PointerEvent) => this.onKeyboardPointerUp(e)}
        @wheel=${(e: WheelEvent) => this.onKeyboardWheel(e)}
      >
        <svg class="voicing-keyboard" width="${width}" height="42" viewBox="0 0 ${width} 42">
          <!-- 1. Render White Keys -->
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

          <!-- 2. Render Black Keys -->
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

          <!-- 3. Render note labels under active keys -->
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

  render() {
    const transposedProgression = this.getTransposedProgression();
    const activeChord = transposedProgression[this.activeIndex] ?? null;
    const pads = buildCircuitGrid(activeChord, this.config);

    // Construct active recipe pads from voicedOffsets
    const rootMidi = activeChord ? (Note.midi((activeChord.tonic ?? 'C') + '4') ?? 60) : 60;
    const activeOffsets = this.voicedOffsets[this.activeIndex] || [];
    const recipe = activeOffsets.map(offset => {
      const noteName = Note.fromMidi(rootMidi + offset);
      const pad = pads.find(p => p.midiNote === noteName);
      if (pad) {
        return { note: pad.note, row: pad.row, col: pad.col, index: pad.index };
      }
      return null;
    }).filter((r): r is ChordRecipePad => r !== null);

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
            <button class="audio-btn theme-toggle-btn" @click=${this.toggleTheme} title="${this.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}">
              ${this.theme === 'dark' ? html`
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
              <span class="midi-led ${this.midiConnected ? 'connected' : ''}"></span>
              MIDI
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
          <button 
            class="nav-btn ${this.activeTab === 'patch' ? 'active' : ''}" 
            title="Patch Editor" 
            @click=${() => { if (this.isCircuitTracksConnected) this.activeTab = 'patch'; }}
            style="opacity: ${this.isCircuitTracksConnected ? '1' : '0.3'}; cursor: ${this.isCircuitTracksConnected ? 'pointer' : 'not-allowed'};"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
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

        <!-- 2. Top Header Bar (active config summary + audio controls) -->
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

          <div class="relocated-audio-controls">
            <!-- Audio State Button (Mute) -->
            <button 
              class="audio-btn ${this.audioActive ? 'active' : ''}" 
              @click=${this.toggleAudio} 
              title="${this.audioActive ? 'Disable Audio' : 'Enable Audio'}"
            >
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

            <!-- Human toggle Button -->
            ${this.humanLoaded ? html`
              <button 
                class="audio-btn ${this.showHuman ? 'active' : ''}" 
                @click=${this.toggleHuman} 
                title="Toggle Human Settings"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
            ` : null}
          </div>
        </header>

        <!-- 3. Center Main Content Area -->
        <main class="panel main-content">
          ${missingNotes.length > 0 && this.showScaleWarnings && this.hideScaleWarningForNotes !== missingNotes.join(',') ? html`
            <div class="scale-warning" style="display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px; flex-shrink: 0;">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Chord note(s) (${missingNotes.join(', ')}) outside scale are hidden in Scale Collapse mode. Switch to Chromatic mode to play.</span>
              </div>
              <div style="display: flex; align-items: center;">
                <label style="display: flex; align-items: center; cursor: pointer; font-size: 0.85rem; opacity: 0.8; margin-right: 12px; margin-bottom: 0;">
                  <input type="checkbox" @change=${(e: Event) => this.toggleScaleWarnings(!(e.target as HTMLInputElement).checked)} style="margin-right: 6px; cursor: pointer;">
                  Don't show again
                </label>
                <button 
                  @click=${() => this.hideScaleWarningForNotes = missingNotes.join(',')}
                  style="background: transparent; border: none; color: inherit; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center;"
                  title="Dismiss"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          ` : null}

          <!-- Tab 1: Grid View -->
          <div class="circuit-grid" style="display: ${this.activeTab === 'grid' ? 'block' : 'none'}">
            <circuit-grid .pads=${pads} .recipe=${recipe} @pad-clicked=${(e: CustomEvent<any>) => this.onPadClicked(e)}></circuit-grid>
          </div>

          <!-- Tab 2: Key & Scale Pad Picker -->
          <div class="data-input-view" style="display: ${this.activeTab === 'data' ? 'flex' : 'none'}">

            <!-- Keynote + Scale Pad Picker — Circuit Tracks layout -->
            <div class="pad-picker">

              <!-- Keynote Section: row 1 = sharps, row 2 = naturals -->
              <div class="pad-picker-section">
                <div class="pad-picker-section-label">Keynote</div>
                <!-- Row 1 (pads 1–8): gaps at positions 1, 4, 8; sharps at 2,3,5,6,7 -->
                <div class="pad-row keynote-row">
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
                <div class="pad-row keynote-row">
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
                <div class="pad-row scale-row">
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
                <div class="pad-row scale-row">
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

          <!-- Tab 4: Patch Editor -->
          <div class="patch-editor-view" style="display: ${this.activeTab === 'patch' ? 'block' : 'none'}; height: 100%;">
            <circuit-patch-editor 
              .patch=${this.activePatch} 
              .midiConnected=${this.midiConnected || this.isDebugMode}
              @patch-change=${this.handlePatchChange}
              @request-dump=${this.handleRequestDump}
              @load-slot=${this.handleLoadSlot}
            ></circuit-patch-editor>
          </div>
        </main>

        <!-- Sidebar Backdrop for Mobile overlay -->
        <div class="sidebar-backdrop ${this.showSettings || this.showHelp || this.showHuman ? 'open' : ''}" @click=${() => { this.showSettings = false; this.showHelp = false; this.showHuman = false; }}></div>

        <!-- Human Sidebar Panel -->
        ${this.humanLoaded ? html`
          <aside class="panel sidebar-human ${this.showHuman ? 'open' : ''}">
            <!-- Close Button -->
            <button class="close-btn" @click=${() => this.showHuman = false} title="Close Human">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <human-panel 
              .heading=${"Human Settings"}
              .hideInput=${true} 
              .debugExpanded=${false}
              @human-change=${this.handleHumanChange}
              @human-preview=${this.handleHumanPreview}
            ></human-panel>
          </aside>
        ` : null}

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

          <!-- General Settings -->
          <div class="settings-section">
            <h4 class="section-title">General</h4>
            <label style="display: flex; align-items: center; cursor: pointer; color: #b0b3b8; font-size: 0.9rem;">
              <input type="checkbox" .checked=${this.showScaleWarnings} @change=${(e: Event) => this.toggleScaleWarnings((e.target as HTMLInputElement).checked)} style="margin-right: 8px; cursor: pointer;">
              Show warnings for out-of-scale notes
            </label>
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

                <span class="config-label" style="margin-top: 8px;">MIDI Channel</span>
                <select class="midi-select" .value=${this.selectedMidiChannel.toString()} @change=${(e: Event) => this.selectedMidiChannel = parseInt((e.target as HTMLSelectElement).value, 10)}>
                  ${Array.from({ length: 16 }, (_, i) => i + 1).map(channel => html`
                    <option value=${channel.toString()} ?selected=${this.selectedMidiChannel === channel}>Channel ${channel}</option>
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
        <footer class="panel footer-timeline ${this.showQualitySelector && !this.hasSeenDrawerPeek ? 'peek-hint' : ''}">
          ${this.showQualitySelector ? html`
            <div class="footer-drawer-content">
              <div class="footer-voicing-row">
                <span class="footer-voicing-label">Voicing</span>
                ${this.renderVoicingKeyboard()}
              </div>
              <div class="quality-selector-row">
                ${[
          { label: 'maj7', value: 'maj7' },
          { label: 'm7', value: 'm7' },
          { label: '7', value: '7' },
          { label: 'm7b5', value: 'm7b5' },
          { label: 'dim7', value: 'dim7' },
          { label: 'sus4', value: 'sus4' },
          { label: '9', value: '9' },
          { label: 'maj', value: 'maj' },
          { label: 'm', value: 'm' }
        ].map(q => {
          const activeChord = this.progression[this.activeIndex];
          let isActive = false;
          if (activeChord && activeChord.tonic) {
            const suffix = activeChord.symbol.slice(activeChord.tonic.length);
            const qSuffix = q.value === 'maj' ? '' : q.value;
            isActive = suffix === qSuffix;
          }
          return html`
                    <button 
                      class="quality-pill ${isActive ? 'active' : ''}"
                      @click=${() => this.changeActiveChordQuality(q.value)}
                    >
                      ${q.label}
                    </button>
                  `;
        })}
              </div>
            </div>
          ` : null}
          <progression-stepper
            .originalChords=${this.progression}
            .keyChords=${this.transposeProgression && this.originalKey !== this.config.key ? transposedProgression : []}
            .keyLabel=${this.config.key}
            .activeIndex=${this.activeIndex}
            @chord-selected=${(e: CustomEvent<number>) => this.onChordSelected(e)}
          ></progression-stepper>
        </footer>

        <!-- 6. Bottom Links Footer -->
        <footer class="app-links-footer">
          <a href="https://github.com/warmsynths/circuit-chords" target="_blank" rel="noopener noreferrer" class="footer-link">
            <svg class="footer-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
          <span class="footer-divider">|</span>
          <span class="footer-text">
            Made with <span class="heart-icon">💖</span> by <a href="mailto:warmsynthsiloveyou@gmail.com" class="footer-link-highlight">warmsynths</a>
          </span>
          <span class="footer-divider">|</span>
          <a href="https://ko-fi.com/warmsynths" target="_blank" rel="noopener noreferrer" class="footer-link">
            <span class="coffee-icon">☕</span>
            Support the Voyage
          </a>
        </footer>
      </div>
    `;
  }

  // === Business Logic Ported ===

  private changeActiveChordQuality(qualityValue: string) {
    const activeChord = this.progression[this.activeIndex];
    if (!activeChord) return;

    const tonic = activeChord.tonic || 'C';
    const suffix = qualityValue === 'maj' ? '' : qualityValue;
    const newSymbol = `${tonic}${suffix}`;

    const parsed = Chord.get(newSymbol);
    if (!parsed.empty && parsed.notes.length > 0) {
      const updatedChord: ParsedChord = {
        symbol: newSymbol,
        tonic: parsed.tonic,
        quality: parsed.quality,
        notes: parsed.notes,
        intervals: parsed.intervals,
        aliases: parsed.aliases
      };

      const nextProgression = [...this.progression];
      nextProgression[this.activeIndex] = updatedChord;
      this.progression = nextProgression;

      this.voicedOffsets = {
        ...this.voicedOffsets,
        [this.activeIndex]: this.getDefaultVoicedOffsets(updatedChord)
      };

      this.updateSourceFromProgression();

      if (this.autoPlay) {
        this.playActiveVoicingDebounced();
      }
    }
  }

  private updateSourceFromProgression() {
    this.source = this.progression.map(c => c.symbol).join(' ');
  }

  private playActiveVoicing() {
    const transposedProgression = this.getTransposedProgression();
    const activeChord = transposedProgression[this.activeIndex] ?? null;
    if (!activeChord) return;

    let offsets = this.voicedOffsets[this.activeIndex] || [];
    if (offsets.length === 0) {
      offsets = this.getDefaultVoicedOffsets(activeChord);
    }

    const rootMidi = Note.midi((activeChord.tonic ?? 'C') + '4') ?? 60;
    const midiNotes = offsets.map(o => Note.fromMidi(rootMidi + o)).filter((n): n is string => n !== null);

    if (midiNotes.length > 0) {
      playChord(midiNotes, 0.7, this.humanState);
      this.sendMidiNotes(midiNotes, 700, this.humanState);
    }
  }

  private sendMidiNotes(notes: string[], durationMs: number = 700, humanState?: any) {
    if (!this.midiConnected || !this.activeMidiDevice || !this.midiAccess) return;

    let output: any = null;
    for (const out of this.midiAccess.outputs.values()) {
      if (out.name === this.activeMidiDevice) {
        output = out;
        break;
      }
    }
    if (!output) return;

    const channelOffset = (this.selectedMidiChannel - 1) & 0x0F;
    const noteOnStatus = 0x90 | channelOffset;
    const noteOffStatus = 0x80 | channelOffset;

    notes.forEach((noteStr, index) => {
      const midiNumber = Note.midi(noteStr);
      if (midiNumber === null) return;

      if (this.activeMidiTimeouts.has(midiNumber)) {
        clearTimeout(this.activeMidiTimeouts.get(midiNumber)!);
      }

      let velocity = 100;
      let staggerMs = 0;
      let noteDurationMs = durationMs;

      if (humanState) {
        const { minVelocity, maxVelocity, spread, microTiming, humanVariance, duration: hDuration } = humanState;

        velocity = Math.round(minVelocity + Math.random() * (maxVelocity - minVelocity));

        const spreadOffset = index * spread * 0.1;
        const microTimingOffset = (Math.random() - 0.5) * microTiming * 0.05;
        const varianceOffset = (Math.random() - 0.5) * humanVariance * 0.03;
        staggerMs = Math.max(0, Math.round((spreadOffset + microTimingOffset + varianceOffset) * 1000));

        noteDurationMs = Math.max(50, Math.round(hDuration * 1000 * (1.0 + (Math.random() - 0.5) * 0.2 * humanVariance)));
      }

      const timeout = setTimeout(() => {
        try {
          output.send([noteOnStatus, midiNumber, velocity]);
        } catch (e) {
          console.warn('Failed to send MIDI Note On:', e);
        }

        const offTimeout = setTimeout(() => {
          try {
            output.send([noteOffStatus, midiNumber, 0]);
          } catch (e) {
            // ignore
          }
          this.activeMidiTimeouts.delete(midiNumber);
        }, noteDurationMs);

        this.activeMidiTimeouts.set(midiNumber, offTimeout);
      }, staggerMs);

      this.activeMidiTimeouts.set(midiNumber, timeout);
    });
  }

  private onPadClicked(e: CustomEvent<any>) {
    if (e.detail && e.detail.midiNote) {
      this.sendMidiNotes([e.detail.midiNote], 350);
    }
  }

  private onKeyChange(key: string) {
    this.config = { ...this.config, key };
  }

  private onScaleChange(scale: string) {
    // 'chromatic' scale → chromatic keyboard layout mode.
    // Any other named scale → collapsed mode (only scale notes shown).
    const mode = scale === 'chromatic' ? 'chromatic' : 'collapsed';
    this.config = { ...this.config, scale, mode };
  }



  private onChordSelected(event: CustomEvent<number>) {
    const newIndex = event.detail;
    if (this.activeIndex === newIndex) {
      this.showQualitySelector = !this.showQualitySelector;
    } else {
      this.activeIndex = newIndex;
      this.showQualitySelector = false;
      if (this.autoPlay) {
        setTimeout(() => this.playActiveVoicing(), 20);
      }

      // One-time peek to hint at the drawer functionality
      if (!this.hasSeenDrawerPeek) {
        this.hasSeenDrawerPeek = true;
        localStorage.setItem('circuit-chords.drawerPeekSeen', 'true');
        this.showQualitySelector = true;
        if (this.peekTimeout) clearTimeout(this.peekTimeout);
        this.peekTimeout = setTimeout(() => {
          this.showQualitySelector = false;
          this.peekTimeout = null;
        }, 1500);
      }
    }
  }

  private onParsed(event: CustomEvent<ChordInputParsedEventDetail>) {
    this.progression = event.detail.progression;
    this.source = event.detail.source;
    this.activeIndex = 0;
    this.initVoicedOffsets();

    const firstChord = event.detail.progression[0];
    const baseKey = this.normalizeKey(firstChord?.tonic) ?? this.config.key;
    this.originalKey = baseKey;

    const defaultScale = 'chromatic';

    if (firstChord?.tonic) {
      this.config = { ...this.config, key: baseKey, scale: defaultScale, mode: 'chromatic' };
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
