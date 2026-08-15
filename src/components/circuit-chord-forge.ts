import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { keyed } from 'lit/directives/keyed.js';
import {
  NOTE_NAMES,
  QUALS,
  DEGREES,
  SCALES,
  getScaleDefinition,
  getScaleChords,
  getPitchName,
  getChordLabel,
  isNoteInKey,
  calculateVoicing,
  buildGridCells,
  calculateLitPads,
  type ProgressionStep,
  type GridCell,
  type PadLitInfo,
  type VoicedTone,
  type ScaleDefinition,
  type ScaleChord
} from '../lib/pad-plot';
import { playChord, playNote } from '../lib/audio';
import { parseProgressionToSteps } from '../lib/chord-parser';

const STORAGE_KEY = 'circuit_chords_v2_state';

interface SavedState {
  steps: ProgressionStep[];
  active: number;
  keyRoot: number;
  keyScale?: string;
  keyMode?: 'major' | 'minor';
  octave: number;
  layout?: 'chromatic' | 'in-key';
}

const DEFAULT_STEPS: ProgressionStep[] = [
  { root: 0, q: 'maj7' }, // Cmaj7
  { root: 9, q: 'm7' },   // Am7
  { root: 2, q: 'm7' },   // Dm7
  { root: 7, q: '7' }     // G7
];

@customElement('circuit-chord-forge')
export class CircuitChordForge extends LitElement {
  @state() private steps: ProgressionStep[] = DEFAULT_STEPS;
  @state() private active = 0;
  @state() private keyRoot = 0;
  @state() private keyScale = 'chromatic';
  @state() private octave = 3;
  @state() private playing = false;
  @state() private copied = false;
  @state() private vw = typeof window !== 'undefined' ? window.innerWidth : 1280;

  private parity = false;

  private get layout(): 'chromatic' | 'in-key' {
    return this.keyScale === 'chromatic' ? 'chromatic' : 'in-key';
  }

  private transportTimer: number | null = null;
  private lastSig = '';

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #17181c; /* Deep studio grey/black */
      color: #e8e9ec;
      font-family: 'Inter', system-ui, sans-serif;
      --pad-gap: 8px;
      --plate-bg: #1c1e23;
    }

    /* Custom Scrollbars for Sleek Desktop UI */
    ::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.02);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.12);
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    @keyframes plateIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: none; }
    }

    @keyframes padBloomA {
      0% { transform: scale(0.9); }
      55% { transform: scale(1.07); }
      100% { transform: scale(1.025); }
    }

    @keyframes padBloomB {
      0% { transform: scale(0.9); }
      55% { transform: scale(1.07); }
      100% { transform: scale(1.025); }
    }

    @keyframes padDimA {
      0% { transform: scale(0.985); }
      100% { transform: scale(1); }
    }

    @keyframes padDimB {
      0% { transform: scale(0.985); }
      100% { transform: scale(1); }
    }

    @keyframes nameIn {
      from { opacity: 0; transform: translateY(7px); filter: blur(3px); }
      to { opacity: 1; transform: none; filter: none; }
    }

    @keyframes breathe {
      0%, 100% { opacity: 0.55; }
      50% { opacity: 1; }
    }

    @keyframes ambientShimmer {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.09); }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 1ms !important;
      }
    }

    .container {
      max-width: 1240px;
      margin: 0 auto;
      padding: 34px 44px 72px;
    }

    /* Top Brand Header */
    .brand-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid #26282e;
      margin-bottom: 44px;
    }

    .brand-left {
      display: flex;
      align-items: center;
      gap: 11px;
    }

    .brand-title {
      font-weight: 500;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      color: #c8cad0;
      white-space: nowrap;
    }

    .brand-status {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      color: #868b94;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #5cc9d1;
      animation: breathe 3.6s ease-in-out infinite;
    }

    /* Main Grid Layout */
    .main-grid {
      display: grid;
      grid-template-columns: 1fr 264px;
      gap: 40px;
      align-items: start;
    }

    .workspace-col {
      min-width: 0;
    }

    /* Title & Meta Bar */
    .chord-meta-header {
      margin-bottom: 28px;
    }

    .meta-line {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      color: #868b94;
      margin-bottom: 12px;
    }

    .chord-title-row {
      display: flex;
      align-items: baseline;
      gap: 20px;
      flex-wrap: wrap;
    }

    .chord-name-title {
      font-size: 4.1rem;
      font-weight: 400;
      letter-spacing: -0.045em;
      line-height: 0.92;
      color: #eef0f3;
      display: inline-block;
    }

    .chord-name-anim {
      display: inline-block;
      animation: nameIn 460ms cubic-bezier(.2,.75,.25,1) both;
    }

    .chord-sub-badge {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.8rem;
      color: #8d919a;
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    .action-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
    }

    .tool-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      border: 1px solid #2e3138;
      color: #9aa4af;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      padding: 9px 14px;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;
      transition: border-color 240ms ease, color 240ms ease, background-color 240ms ease;
    }

    .tool-btn:hover {
      border-color: #5cc9d1;
      color: #5cc9d1;
      background-color: rgba(92,201,209,0.06);
    }

    .tool-btn.playing {
      background: rgba(209,96,143,0.16);
      color: #d1608f;
      border-color: rgba(209,96,143,0.5);
    }

    .tool-btn.playing:hover {
      filter: brightness(1.2);
    }

    /* Warning Banner */
    .warning-banner {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 11px 14px;
      margin-bottom: 22px;
      border-left: 2px solid #d1608f;
      background: rgba(209,96,143,0.07);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      color: #dba2bc;
    }

    /* Progression Step Strip */
    .section-header-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .section-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      letter-spacing: 0.2em;
      color: #868b94;
    }

    .section-detail {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      color: #7d828b;
    }

    .step-strip {
      display: flex;
      border-top: 1px solid #26282e;
      border-bottom: 1px solid #26282e;
      overflow-x: auto;
    }

    .step-tile {
      flex: 1 1 0;
      min-width: 0;
      padding: 15px 14px 17px;
      border-right: 1px solid #26282e;
      cursor: pointer;
      position: relative;
      background: transparent;
      box-shadow: inset 0 -2px 0 transparent;
      transition: background-color 260ms ease, box-shadow 260ms ease;
      user-select: none;
    }

    .step-tile:hover {
      background-color: rgba(255,255,255,0.03);
    }

    .step-tile.active {
      background: rgba(209,96,143,0.07);
      box-shadow: inset 0 -2px 0 #d1608f;
    }

    .step-tile-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .step-tile-name {
      font-size: 0.95rem;
      color: #9aa4af;
      transition: color 240ms ease;
    }

    .step-tile.active .step-tile-name {
      color: #e8e9ec;
    }

    .step-tile-num {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      color: #7d828b;
      transition: color 240ms ease;
    }

    .step-tile.active .step-tile-num {
      color: #d1608f;
    }

    .mini-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 2px;
    }

    .mini-cell {
      aspect-ratio: 1;
      border-radius: 1px;
      transition: background-color 300ms ease;
    }

    .add-step-btn {
      flex: 0 0 56px;
      display: grid;
      place-items: center;
      color: #6e727a;
      font-size: 1.15rem;
      cursor: pointer;
      transition: color 220ms ease, background-color 220ms ease;
      user-select: none;
    }

    .add-step-btn:hover {
      color: #5cc9d1;
      background-color: rgba(92,201,209,0.05);
    }

    .step-footer-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 9px;
    }

    .remove-step-btn {
      background: transparent;
      border: 0;
      padding: 0;
      color: #6e727a;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      cursor: pointer;
      transition: color 220ms ease;
    }

    .remove-step-btn:hover {
      color: #d1608f;
    }

    /* Main 8x4 Pad Plate */
    .plate-container {
      margin-top: 26px;
      animation: plateIn 520ms cubic-bezier(.2,.7,.3,1) both;
    }

    .plate-scroll-wrap {
      /* No overflow-x auto to prevent unwanted scrollbars on desktop during bloom transforms */
    }

    .col-markers {
      display: grid;
      grid-template-columns: 28px repeat(8, 1fr);
      gap: 8px;
      margin-bottom: 8px;
    }

    .col-num {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      color: #7d828b;
      text-align: center;
    }

    .grid-with-row-nums {
      display: grid;
      grid-template-columns: 28px 1fr;
      gap: 8px;
    }

    .row-markers {
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      gap: 8px;
      position: sticky;
      left: 0;
      background: #17181c;
    }

    .row-num {
      display: grid;
      place-items: center;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      color: #7d828b;
    }

    .pad-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 8px;
    }

    .pad-btn {
      aspect-ratio: 1;
      border-radius: 7px;
      display: grid;
      place-items: center;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.84rem;
      cursor: pointer;
      user-select: none;
      will-change: transform;
      transition: background 380ms cubic-bezier(.2,.7,.3,1), color 320ms ease, box-shadow 420ms cubic-bezier(.2,.7,.3,1);
    }

    .pad-btn:hover {
      filter: brightness(1.18);
    }

    .pad-btn:active {
      filter: brightness(0.9);
    }

    .pad-btn.empty {
      background: transparent;
      color: transparent;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
      cursor: default;
    }

    .pad-btn.empty:hover {
      filter: none;
    }

    .plate-caption-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 6px 28px;
      margin-top: 15px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      color: #7d828b;
    }

    /* Toolbar under Pad Plate */
    .plate-bottom-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px 32px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #26282e;
    }

    .legend-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px 18px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.68rem;
      color: #8d919a;
      white-space: nowrap;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .legend-swatch {
      width: 11px;
      height: 11px;
      border-radius: 3px;
    }

    .plate-controls-group {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
    }

    .octave-stepper {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 7px 12px;
      border: 1px solid #2e3138;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      color: #8d919a;
    }

    .octave-btn {
      background: transparent;
      border: 0;
      color: #8d919a;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.9rem;
      cursor: pointer;
      padding: 0 2px;
      transition: color 200ms ease;
    }

    .octave-btn:hover {
      color: #5cc9d1;
    }

    .octave-label {
      color: #c8cad0;
      min-width: 22px;
      text-align: center;
    }

    /* Right Sidebar Controls */
    .sidebar-col {
      min-width: 0;
    }

    .sidebar-title {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      letter-spacing: 0.2em;
      color: #868b94;
      margin: 0 0 12px;
    }

    /* Piano Root Selector */
    .piano-accidentals {
      display: grid;
      grid-template-columns: repeat(14, 1fr);
      gap: 3px;
      margin-bottom: 3px;
    }

    .piano-black-key {
      padding: 9px 0;
      text-align: center;
      border-radius: 0 0 3px 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      cursor: pointer;
      user-select: none;
      background: #171a1f;
      color: #7f868f;
      transition: background 240ms ease, color 240ms ease, box-shadow 240ms ease;
    }

    .piano-black-key.active {
      background: rgba(92,201,209,0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92,201,209,0.45);
    }

    .piano-black-key:hover {
      filter: brightness(1.35);
    }

    .piano-naturals {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 3px;
      margin-bottom: 26px;
    }

    .piano-white-key {
      padding: 11px 0;
      text-align: center;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      cursor: pointer;
      user-select: none;
      background: #22262c;
      color: #a4adb7;
      transition: background 240ms ease, color 240ms ease, box-shadow 240ms ease;
    }

    .piano-white-key.active {
      background: rgba(92,201,209,0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92,201,209,0.45);
    }

    .piano-white-key:hover {
      filter: brightness(1.3);
    }

    /* Chord Quality Grid */
    .quality-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      margin-bottom: 32px;
    }

    .quality-tile {
      padding: 9px 0;
      text-align: center;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.68rem;
      cursor: pointer;
      user-select: none;
      background: #21252b;
      color: #a0a9b3;
      transition: background 240ms ease, color 240ms ease, box-shadow 240ms ease;
    }

    .quality-tile.active {
      background: rgba(209,96,143,0.17);
      color: #d1608f;
      box-shadow: inset 0 0 0 1px rgba(209,96,143,0.45);
    }

    .quality-tile:hover {
      filter: brightness(1.3);
    }

    /* Tone Breakdown Table */
    .tones-table {
      display: flex;
      flex-direction: column;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.74rem;
      margin-bottom: 32px;
    }

    .tone-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-top: 1px solid #26282e;
    }

    .tone-row:last-child {
      border-bottom: 1px solid #26282e;
    }

    .tone-deg {
      color: #9298a1;
    }

    /* Key & Scale Section */
    .key-scale-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin: 0 0 10px;
    }

    .key-scale-line {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.64rem;
      color: #6e727a;
      white-space: nowrap;
    }

    .key-roots-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 2px;
      margin-bottom: 6px;
    }

    .key-root-btn {
      padding: 8px 0;
      text-align: center;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      cursor: pointer;
      user-select: none;
      transition: background 220ms ease, color 220ms ease, box-shadow 220ms ease;
      background: #1c1f24;
      color: #8d919a;
      box-shadow: inset 0 0 0 1px #26282e;
    }

    .key-root-btn:hover {
      filter: brightness(1.35);
    }

    .key-root-btn.active {
      background: rgba(92, 201, 209, 0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92, 201, 209, 0.5);
    }

    .scales-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
    }

    .scale-btn {
      padding: 8px 10px;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.64rem;
      cursor: pointer;
      user-select: none;
      transition: background 220ms ease, color 220ms ease, box-shadow 220ms ease;
      background: #1c1f24;
      color: #8d919a;
      box-shadow: inset 0 0 0 1px #26282e;
      text-align: left;
    }

    .scale-btn:hover {
      filter: brightness(1.35);
    }

    .scale-btn.active {
      background: rgba(92, 201, 209, 0.14);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92, 201, 209, 0.45);
    }

    .diatonic-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 3px;
      margin-top: 14px;
    }

    .diatonic-chip {
      flex: 1 1 44px;
      padding: 7px 0;
      text-align: center;
      border-radius: 3px;
      background: #1f2329;
      color: #9aa4af;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.62rem;
      cursor: pointer;
      user-select: none;
      transition: background-color 220ms ease, color 220ms ease;
    }

    .diatonic-chip:hover {
      background-color: rgba(92, 201, 209, 0.12);
      color: #5cc9d1;
    }

    .diatonic-chip.active {
      background: rgba(92, 201, 209, 0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92, 201, 209, 0.45);
    }

    .diatonic-hint {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.62rem;
      color: #6e727a;
      margin-top: 8px;
      margin-bottom: 32px;
    }

    /* Shortcuts Section */
    .shortcuts-list {
      display: flex;
      flex-direction: column;
      gap: 9px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      color: #8d919a;
    }

    .shortcut-row {
      display: flex;
      justify-content: space-between;
    }

    .shortcut-key {
      color: #c8cad0;
    }

    /* Bottom Links Footer */
    .app-links-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding-top: 32px;
      margin-top: 56px;
      border-top: 1px solid #26282e;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      color: #868b94;
      flex-wrap: wrap;
    }

    .footer-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #8d919a;
      text-decoration: none;
      font-weight: 500;
      transition: color 220ms ease, transform 220ms ease;
    }

    .footer-link:hover {
      color: #5cc9d1;
      transform: translateY(-1px);
    }

    .footer-link-highlight {
      color: #c8cad0;
      text-decoration: none;
      font-weight: 500;
      transition: color 220ms ease;
    }

    .footer-link-highlight:hover {
      color: #5cc9d1;
      text-decoration: underline;
    }

    .footer-divider {
      color: #2e3138;
      user-select: none;
    }

    .footer-icon {
      flex-shrink: 0;
      transition: stroke 220ms ease;
    }

    .footer-link:hover .footer-icon {
      stroke: #5cc9d1;
    }

    .heart-icon {
      display: inline-block;
      transition: transform 220ms ease;
      margin: 0 2px;
    }

    .footer-text:hover .heart-icon {
      transform: scale(1.25);
    }

    .coffee-icon {
      display: inline-block;
      transition: transform 220ms ease;
    }

    .footer-link:hover .coffee-icon {
      transform: rotate(12deg) scale(1.15);
    }

    /* Responsive Breakpoints */
    @media (max-width: 1080px) {
      .container {
        padding: 26px 24px 56px;
      }
      .main-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .chord-name-title {
        font-size: 3.3rem;
      }
    }

    @media (max-width: 680px) {
      .container {
        padding: 18px 14px 48px;
      }
      .brand-header {
        margin-bottom: 24px;
      }
      .brand-status {
        display: none;
      }
      .chord-name-title {
        font-size: 2.5rem;
      }
      .pad-grid {
        grid-template-columns: repeat(8, 1fr);
        gap: 4px;
      }
      .col-markers {
        grid-template-columns: 22px repeat(8, 1fr);
        gap: 4px;
        min-width: 0;
      }
      .grid-with-row-nums {
        grid-template-columns: 22px 1fr;
        gap: 4px;
        min-width: 0;
      }
      .row-markers {
        gap: 4px;
      }
      .step-tile {
        flex: 0 0 148px;
      }
      .app-links-footer {
        margin-top: 36px;
        padding-top: 24px;
        gap: 12px;
        font-size: 0.68rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadInitialState();
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('resize', this.handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('resize', this.handleResize);
    if (this.transportTimer) {
      clearInterval(this.transportTimer);
      this.transportTimer = null;
    }
  }

  private handleResize = () => {
    this.vw = window.innerWidth;
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    // Avoid capturing keyboard shortcuts if an input/select is focused
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }

    const n = this.steps.length;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.active = (this.active + 1) % n;
      this.persistState();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.active = (this.active - 1 + n) % n;
      this.persistState();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.bumpOctave(1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.bumpOctave(-1);
    } else if (e.key === ' ') {
      e.preventDefault();
      this.toggleTransport();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      this.auditionActive();
    }
  };

  private loadInitialState() {
    let search = typeof window !== 'undefined' ? window.location.search : '';
    // If a sharp chord (e.g. F#m7) is passed without URL encoding, the browser
    // splits the string at the '#' into location.search and location.hash.
    if (typeof window !== 'undefined' && window.location.hash && !window.location.hash.startsWith('#/')) {
      search += window.location.hash;
    }
    const urlParams = new URLSearchParams(search);
    const progressionQuery = urlParams.get('p') || urlParams.get('progression');

    if (progressionQuery && progressionQuery.trim()) {
      const parsedSteps = parseProgressionToSteps(progressionQuery.trim());
      if (parsedSteps.length > 0) {
        this.steps = parsedSteps;
        this.active = 0;
        const firstStep = parsedSteps[0];
        this.keyRoot = firstStep.root;
        this.keyScale = 'chromatic';

        // Optional query param overrides if provided
        if (urlParams.has('key')) {
          const keyParam = urlParams.get('key')!;
          const keyNum = parseInt(keyParam, 10);
          if (!isNaN(keyNum) && keyNum >= 0 && keyNum <= 11) {
            this.keyRoot = keyNum;
          } else {
            const idx = NOTE_NAMES.indexOf(keyParam.toUpperCase() as any);
            if (idx >= 0) this.keyRoot = idx;
          }
        }
        if (urlParams.has('scale')) {
          const scaleParam = urlParams.get('scale')!.toLowerCase();
          const def = getScaleDefinition(scaleParam);
          this.keyScale = def.id;
        } else if (urlParams.has('mode')) {
          const modeParam = urlParams.get('mode')!.toLowerCase();
          this.keyScale = modeParam === 'minor' ? 'natminor' : 'major';
        }
        if (urlParams.has('octave')) {
          const octParam = parseInt(urlParams.get('octave')!, 10);
          if (!isNaN(octParam) && octParam >= 1 && octParam <= 6) {
            this.octave = octParam;
          }
        }
        if (urlParams.has('layout') && urlParams.get('layout') === 'chromatic') {
          this.keyScale = 'chromatic';
        }

        this.persistState();
        return;
      }
    }

    this.loadPersistedState();
  }

  private loadPersistedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: SavedState = JSON.parse(saved);
        if (Array.isArray(parsed.steps) && parsed.steps.length > 0) {
          this.steps = parsed.steps;
        }
        if (typeof parsed.active === 'number') {
          this.active = Math.max(0, Math.min(parsed.active, this.steps.length - 1));
        }
        if (typeof parsed.keyRoot === 'number') this.keyRoot = parsed.keyRoot;
        if (typeof parsed.keyScale === 'string') {
          this.keyScale = getScaleDefinition(parsed.keyScale).id;
        } else if (parsed.layout === 'chromatic') {
          this.keyScale = 'chromatic';
        } else if (parsed.keyMode === 'minor') {
          this.keyScale = 'natminor';
        } else if (parsed.keyMode === 'major') {
          this.keyScale = 'major';
        }
        if (typeof parsed.octave === 'number') this.octave = Math.max(1, Math.min(6, parsed.octave));
      }
    } catch {
      // Fall back to defaults on parse failure
    }
  }

  private persistState() {
    try {
      const stateToSave: SavedState = {
        steps: this.steps,
        active: this.active,
        keyRoot: this.keyRoot,
        keyScale: this.keyScale,
        octave: this.octave,
        layout: this.layout
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch {
      // Ignore localStorage errors
    }
  }

  private bumpOctave(delta: number) {
    const nextOct = Math.max(1, Math.min(6, this.octave + delta));
    if (nextOct !== this.octave) {
      this.octave = nextOct;
      this.persistState();
    }
  }

  private auditionActive() {
    const st = this.steps[this.active];
    if (st) {
      const tones = calculateVoicing(st, this.octave);
      playChord(tones.map(t => t.midi));
    }
  }

  private toggleTransport() {
    if (this.transportTimer) {
      clearInterval(this.transportTimer);
      this.transportTimer = null;
      this.playing = false;
      return;
    }

    this.playing = true;
    const tick = () => {
      const st = this.steps[this.active];
      if (st) {
        const tones = calculateVoicing(st, this.octave);
        playChord(tones.map(t => t.midi), 0.85);
      }
      this.active = (this.active + 1) % this.steps.length;
      this.persistState();
    };

    tick();
    this.transportTimer = window.setInterval(tick, 980);
  }

  private setStepRoot(root: number) {
    this.steps = this.steps.map((st, i) => (i === this.active ? { ...st, root } : st));
    this.persistState();
  }

  private setStepQuality(q: string) {
    this.steps = this.steps.map((st, i) => (i === this.active ? { ...st, q } : st));
    this.persistState();
  }

  private setStepChord(root: number, q: string) {
    this.steps = this.steps.map((st, i) => (i === this.active ? { ...st, root, q } : st));
    this.persistState();
  }

  private addStep() {
    if (this.steps.length >= 16) return;
    const last = this.steps[this.steps.length - 1] || { root: this.keyRoot, q: 'maj7' };
    this.steps = [...this.steps, { ...last }];
    this.active = this.steps.length - 1;
    this.auditionActive();
    this.persistState();
  }

  private removeStep() {
    if (this.steps.length <= 1) return;
    const next = this.steps.filter((_, i) => i !== this.active);
    this.steps = next;
    this.active = Math.min(this.active, next.length - 1);
    this.auditionActive();
    this.persistState();
  }

  private copyPadList(chordLabel: string, pairs: { pitch: string; ref: string }[]) {
    const text = `${chordLabel} — ${pairs.map(p => `${p.pitch}→${p.ref}`).join('  ')}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 1600);
  }

  private renderMiniCells(step: ProgressionStep) {
    const { cells, litMap } = calculateLitPads(step, this.octave, this.layout, this.keyRoot, this.keyScale);
    return cells.map((c, i) => {
      const lit = litMap.get(i);
      let bg = '#242730';
      if (lit) {
        bg = lit.isRoot ? '#5cc9d1' : '#d1608f';
      } else if (c.midi === null) {
        bg = '#1f2126';
      } else if (isNoteInKey(c.midi % 12, this.keyRoot, this.keyScale)) {
        bg = '#2b3038';
      }
      return html`<div class="mini-cell" style="background: ${bg};"></div>`;
    });
  }

  render() {
    const currentStep = this.steps[this.active] || this.steps[0] || { root: 0, q: 'maj7' };
    const { cells, tones, litMap, missingTones } = calculateLitPads(
      currentStep,
      this.octave,
      this.layout,
      this.keyRoot,
      this.keyScale
    );

    const litCount = litMap.size;
    const chordLabel = getChordLabel(currentStep);
    const scaleDef = getScaleDefinition(this.keyScale);
    const scaleChords = getScaleChords(this.keyRoot, this.keyScale);

    // Track signature change for bloom parity trigger
    const sig = `${currentStep.root}:${currentStep.q}:${this.octave}:${this.layout}:${this.keyRoot}:${this.keyScale}:${this.active}`;
    if (sig !== this.lastSig) {
      this.lastSig = sig;
      this.parity = !this.parity;
    }
    const animLetter = this.parity ? 'A' : 'B';

    // Find root cell for distance-staggered bloom
    let rootCell: GridCell | null = null;
    litMap.forEach((lit, idx) => {
      if (lit.isRoot) rootCell = cells[idx];
    });

    const getDistance = (c: GridCell) => {
      if (rootCell) {
        return Math.max(Math.abs(c.row - rootCell.row), Math.abs(c.col - rootCell.col));
      }
      return Math.abs(c.col - 4);
    };

    // Build pitch & coordinate pairs for tones breakdown & copy
    const pairs = tones.map((t) => {
      const hit = Array.from(litMap.entries()).find(([, lit]) => lit.order === t.order);
      return {
        pitch: getPitchName(t.midi),
        ref: hit ? hit[1].ref : 'off plate',
        deg: DEGREES[t.iv] || 'tone',
        isRoot: t.isRoot
      };
    });

    return html`
      <div class="container">
        <!-- Top Brand Header -->
        <header class="brand-header">
          <div class="brand-left">
            <svg width="16" height="16" viewBox="0 0 32 32" style="display:block;">
              <rect width="32" height="32" rx="6" fill="#c8cad0"></rect>
              <g transform="rotate(-45 16 16)" fill="#17181c">
                <rect x="6.5" y="6" width="5" height="14" rx="2.5"></rect>
                <rect x="13.5" y="12" width="5" height="14" rx="2.5"></rect>
                <rect x="20.5" y="6" width="5" height="14" rx="2.5"></rect>
              </g>
            </svg>
            <div class="brand-title">circuit chords</div>
          </div>
          <div class="brand-status">
            <span class="status-dot"></span>
            <span>tracks · synth 1 · ch1</span>
          </div>
        </header>

        <div class="main-grid">
          <!-- Left Workspace Column -->
          <div class="workspace-col">
            <!-- Chord Title & Actions -->
            <div class="chord-meta-header">
              <div class="meta-line">
                STEP ${String(this.active + 1).padStart(2, '0')} / ${String(this.steps.length).padStart(2, '0')}  ·  ${NOTE_NAMES[this.keyRoot]} ${scaleDef.label.toUpperCase()}  ·  ${this.layout === 'chromatic' ? 'CHROMATIC LAYOUT' : 'IN-KEY LAYOUT'}
              </div>
              <div class="chord-title-row">
                <div class="chord-name-title">
                  ${keyed(chordLabel, html`<span class="chord-name-anim">${chordLabel}</span>`)}
                </div>
                <div class="chord-sub-badge">
                  ${litCount} ${litCount === 1 ? 'pad' : 'pads'} · close voicing
                </div>
              </div>
              <div class="action-toolbar">
                <button
                  type="button"
                  class="tool-btn"
                  title="hear this chord (Enter)"
                  @click=${() => this.auditionActive()}
                >
                  audition
                </button>
                <button
                  type="button"
                  class="tool-btn ${this.playing ? 'playing' : ''}"
                  title="play the progression (Space)"
                  @click=${() => this.toggleTransport()}
                >
                  ${this.playing ? 'stop' : 'play through'}
                </button>
                <button
                  type="button"
                  class="tool-btn"
                  @click=${() => this.copyPadList(chordLabel, pairs)}
                >
                  ${this.copied ? 'copied' : 'copy pad list'}
                </button>
              </div>
            </div>

            <!-- Off-Plate Warning -->
            ${missingTones.length > 0
              ? html`
                  <div class="warning-banner">
                    ${missingTones.length} ${missingTones.length === 1 ? 'tone' : 'tones'} off the plate (${missingTones.map(m => getPitchName(m.midi)).join(', ')}) — shift the base octave or switch layout
                  </div>
                `
              : ''}

            <!-- Progression Step Strip -->
            <div>
              <div class="section-header-row">
                <div class="section-label">PROGRESSION</div>
                <div class="section-detail">${this.steps.length} of 16 steps used</div>
              </div>
              <div class="step-strip">
                ${this.steps.map((st, i) => {
                  const isActive = i === this.active;
                  return html`
                    <div
                      class="step-tile ${isActive ? 'active' : ''}"
                      tabindex="0"
                      role="button"
                      aria-label="Step ${i + 1}, ${getChordLabel(st)}${isActive ? ', active' : ''}"
                      @click=${() => {
                        this.active = i;
                        this.auditionActive();
                        this.persistState();
                      }}
                      @keydown=${(e: KeyboardEvent) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          this.active = i;
                          this.auditionActive();
                          this.persistState();
                        }
                      }}
                    >
                      <div class="step-tile-top">
                        <span class="step-tile-name">${getChordLabel(st)}</span>
                        <span class="step-tile-num">${String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div class="mini-grid">
                        ${this.renderMiniCells(st)}
                      </div>
                    </div>
                  `;
                })}
                ${this.steps.length < 16
                  ? html`
                      <div
                        class="add-step-btn"
                        tabindex="0"
                        role="button"
                        aria-label="Add step"
                        title="add step"
                        @click=${() => this.addStep()}
                        @keydown=${(e: KeyboardEvent) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            this.addStep();
                          }
                        }}
                      >
                        +
                      </div>
                    `
                  : ''}
              </div>
              <div class="step-footer-actions">
                <button
                  type="button"
                  class="remove-step-btn"
                  ?disabled=${this.steps.length <= 1}
                  @click=${() => this.removeStep()}
                >
                  remove step
                </button>
              </div>
            </div>

            <!-- Main 8x4 Pad Plate -->
            <div class="plate-container">
              <div class="plate-scroll-wrap">
                <div class="col-markers">
                  <div></div>
                  ${[1, 2, 3, 4, 5, 6, 7, 8].map(
                    col => html`<div class="col-num">${col}</div>`
                  )}
                </div>

                <div class="grid-with-row-nums">
                  <div class="row-markers">
                    ${[4, 3, 2, 1].map(
                      row => html`<div class="row-num">${row}</div>`
                    )}
                  </div>

                  <div class="pad-grid">
                    ${cells.map((c, i) => {
                      const lit = litMap.get(i);
                      const isEmpty = c.midi === null;
                      const noteName = isEmpty ? '' : NOTE_NAMES[c.midi! % 12];
                      const isNat = !isEmpty && noteName.length === 1;
                      const dist = getDistance(c);

                      let bg = 'transparent';
                      let fg = 'transparent';
                      let weight = '400';
                      let anim = 'none';

                      if (lit) {
                        bg = lit.isRoot ? '#5cc9d1' : '#d1608f';
                        fg = '#121418';
                        weight = '500';
                        anim = `padBloom${animLetter} 560ms cubic-bezier(.2,.75,.25,1) ${70 + dist * 46}ms both`;
                      } else if (!isEmpty) {
                        const inKey = isNoteInKey(c.midi! % 12, this.keyRoot, this.keyScale);
                        bg = inKey
                          ? isNat ? '#2d343e' : '#252b33'
                          : isNat ? '#342a31' : '#2a2329';
                        fg = inKey ? '#aeb7c1' : '#a2909c';
                        anim = `padDim${animLetter} 420ms ease ${dist * 22}ms both${
                          inKey
                            ? `, ambientShimmer 5.2s ease-in-out ${((c.row + c.col) * 0.13).toFixed(2)}s infinite`
                            : ''
                        }`;
                      }

                      return html`
                        <div
                          class="pad-btn ${isEmpty ? 'empty' : ''}"
                          style="
                            background: ${bg};
                            color: ${fg};
                            font-weight: ${weight};
                            animation: ${anim};
                          "
                          tabindex="${isEmpty ? -1 : 0}"
                          role="button"
                          aria-label="${isEmpty ? 'Empty pad' : `${getPitchName(c.midi!)} row ${c.row} col ${c.col}`}"
                          title="${isEmpty ? 'no pad' : `${getPitchName(c.midi!)} · row ${c.row} col ${c.col}`}"
                          @click=${() => {
                            if (!isEmpty && c.midi !== null) {
                              playNote(c.midi, 0.6);
                              this.setStepRoot(c.midi % 12);
                            }
                          }}
                          @keydown=${(e: KeyboardEvent) => {
                            if (!isEmpty && c.midi !== null && (e.key === 'Enter' || e.key === ' ')) {
                              e.preventDefault();
                              playNote(c.midi, 0.6);
                              this.setStepRoot(c.midi % 12);
                            }
                          }}
                        >
                          ${noteName}
                        </div>
                      `;
                    })}
                  </div>
                </div>
              </div>

              <div class="plate-caption-row">
                <span>Hold ${litCount} ${litCount === 1 ? 'pad' : 'pads'} together — ${pairs.map(p => `${p.pitch}→${p.ref}`).join('  ')}</span>
                <span>↑↓ octave · ←→ step</span>
              </div>
            </div>

            <!-- Bottom Toolbar -->
            <div class="plate-bottom-bar">
              <div class="legend-row">
                <span class="legend-item">
                  <span class="legend-swatch" style="background:#5cc9d1;"></span>root
                </span>
                <span class="legend-item">
                  <span class="legend-swatch" style="background:#d1608f;"></span>chord tone
                </span>
                <span class="legend-item">
                  <span class="legend-swatch" style="background:#2b323b;"></span>in key
                </span>
                <span class="legend-item">
                  <span class="legend-swatch" style="background:#33292f;"></span>out of key
                </span>
              </div>
              <div class="plate-controls-group">
                <div class="octave-stepper">
                  <button
                    type="button"
                    class="octave-btn"
                    title="Lower base octave"
                    @click=${() => this.bumpOctave(-1)}
                  >
                    –
                  </button>
                  <span class="octave-label">C${this.octave}</span>
                  <button
                    type="button"
                    class="octave-btn"
                    title="Raise base octave"
                    @click=${() => this.bumpOctave(1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar Column -->
          <div class="sidebar-col">
            <div class="sidebar-title">CHORD</div>

            <!-- Piano Root Selector -->
            <div class="piano-accidentals">
              <div
                class="piano-black-key ${currentStep.root === 1 ? 'active' : ''}"
                style="grid-column: 2/4;"
                tabindex="0"
                role="button"
                aria-label="C sharp root"
                @click=${() => this.setStepRoot(1)}
              >
                C♯
              </div>
              <div
                class="piano-black-key ${currentStep.root === 3 ? 'active' : ''}"
                style="grid-column: 4/6;"
                tabindex="0"
                role="button"
                aria-label="D sharp root"
                @click=${() => this.setStepRoot(3)}
              >
                D♯
              </div>
              <div
                class="piano-black-key ${currentStep.root === 6 ? 'active' : ''}"
                style="grid-column: 8/10;"
                tabindex="0"
                role="button"
                aria-label="F sharp root"
                @click=${() => this.setStepRoot(6)}
              >
                F♯
              </div>
              <div
                class="piano-black-key ${currentStep.root === 8 ? 'active' : ''}"
                style="grid-column: 10/12;"
                tabindex="0"
                role="button"
                aria-label="G sharp root"
                @click=${() => this.setStepRoot(8)}
              >
                G♯
              </div>
              <div
                class="piano-black-key ${currentStep.root === 10 ? 'active' : ''}"
                style="grid-column: 12/14;"
                tabindex="0"
                role="button"
                aria-label="A sharp root"
                @click=${() => this.setStepRoot(10)}
              >
                A♯
              </div>
            </div>

            <div class="piano-naturals">
              ${[
                { root: 0, label: 'C' },
                { root: 2, label: 'D' },
                { root: 4, label: 'E' },
                { root: 5, label: 'F' },
                { root: 7, label: 'G' },
                { root: 9, label: 'A' },
                { root: 11, label: 'B' }
              ].map(
                key => html`
                  <div
                    class="piano-white-key ${currentStep.root === key.root ? 'active' : ''}"
                    tabindex="0"
                    role="button"
                    aria-label="${key.label} root"
                    @click=${() => this.setStepRoot(key.root)}
                  >
                    ${key.label}
                  </div>
                `
              )}
            </div>

            <!-- 12 Chord Qualities -->
            <div class="quality-grid">
              ${QUALS.map(
                q => html`
                  <div
                    class="quality-tile ${currentStep.q === q.id ? 'active' : ''}"
                    tabindex="0"
                    role="button"
                    aria-label="${q.label} quality"
                    @click=${() => this.setStepQuality(q.id)}
                  >
                    ${q.label}
                  </div>
                `
              )}
            </div>

            <!-- Tones Breakdown -->
            <div class="sidebar-title">TONES</div>
            <div class="tones-table">
              ${pairs.map(
                p => html`
                  <div class="tone-row">
                    <span class="tone-deg">${p.deg}</span>
                    <span style="color: ${p.isRoot ? '#5cc9d1' : '#d1608f'};">
                      ${p.pitch} ${p.ref !== 'off plate' ? p.ref : '(off plate)'}
                    </span>
                  </div>
                `
              )}
            </div>

            <!-- Key & Scale Section -->
            <div class="key-scale-header">
              <div class="sidebar-title" style="margin:0;">KEY + SCALE</div>
              <div class="key-scale-line">
                ${NOTE_NAMES[this.keyRoot]} ${scaleDef.label}  ·  ${scaleDef.iv.length} notes
              </div>
            </div>

            <!-- 12-Root Grid -->
            <div class="key-roots-grid">
              ${NOTE_NAMES.map((name, i) => {
                const isSelected = this.keyRoot === i;
                const formattedName = name.replace('#', '♯');
                return html`
                  <div
                    class="key-root-btn ${isSelected ? 'active' : ''}"
                    tabindex="0"
                    role="button"
                    aria-label="key root ${name}${isSelected ? ', selected' : ''}"
                    @click=${() => {
                      this.keyRoot = i;
                      this.persistState();
                    }}
                    @keydown=${(e: KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.keyRoot = i;
                        this.persistState();
                      }
                    }}
                  >
                    ${formattedName}
                  </div>
                `;
              })}
            </div>

            <!-- 16 Scales Grid -->
            <div class="scales-grid">
              ${SCALES.map(sd => {
                const isSelected = sd.id === this.keyScale;
                return html`
                  <div
                    class="scale-btn ${isSelected ? 'active' : ''}"
                    tabindex="0"
                    role="button"
                    aria-label="${sd.label} scale${isSelected ? ', selected' : ''}"
                    @click=${() => {
                      this.keyScale = sd.id;
                      this.persistState();
                    }}
                    @keydown=${(e: KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.keyScale = sd.id;
                        this.persistState();
                      }
                    }}
                  >
                    ${sd.label}
                  </div>
                `;
              })}
            </div>

            <!-- Diatonic / Scale Chords Chips -->
            ${scaleChords.length > 0
              ? html`
                  <div class="diatonic-chips-row">
                    ${scaleChords.map(sc => {
                      const isCurrentChord = currentStep.root === sc.root && currentStep.q === sc.q;
                      return html`
                        <div
                          class="diatonic-chip ${isCurrentChord ? 'active' : ''}"
                          tabindex="0"
                          role="button"
                          aria-label="Set active chord to ${sc.label} (${sc.roman})"
                          title="${sc.roman} · ${sc.label}"
                          @click=${() => {
                            this.setStepChord(sc.root, sc.q);
                            const tones = calculateVoicing({ root: sc.root, q: sc.q }, this.octave);
                            playChord(tones.map(t => t.midi), 0.9);
                          }}
                          @keydown=${(e: KeyboardEvent) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              this.setStepChord(sc.root, sc.q);
                              const tones = calculateVoicing({ root: sc.root, q: sc.q }, this.octave);
                              playChord(tones.map(t => t.midi), 0.9);
                            }
                          }}
                        >
                          ${sc.label}
                        </div>
                      `;
                    })}
                  </div>
                  <div class="diatonic-hint">chords in this scale — tap to set active chord</div>
                `
              : html`<div style="height: 32px;"></div>`}

            <!-- Shortcuts -->
            <div class="sidebar-title">SHORTCUTS</div>
            <div class="shortcuts-list">
              <div class="shortcut-row">
                <span>hear the active chord</span>
                <span class="shortcut-key">enter</span>
              </div>
              <div class="shortcut-row">
                <span>play the progression</span>
                <span class="shortcut-key">space</span>
              </div>
              <div class="shortcut-row">
                <span>switch step</span>
                <span class="shortcut-key">← →</span>
              </div>
              <div class="shortcut-row">
                <span>shift base octave</span>
                <span class="shortcut-key">↑ ↓</span>
              </div>
              <div class="shortcut-row">
                <span>re-root from the plate</span>
                <span class="shortcut-key">click a pad</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Links Footer -->
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
            Support on Ko-fi
          </a>
        </footer>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'circuit-chord-forge': CircuitChordForge;
  }
}
