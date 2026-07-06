import { createContext } from '@lit/context';
import type { ParsedChord } from '../lib/chord-parser';
import type { GridConfig } from '../lib/music-grid';
import type { PatchData } from '../lib/circuit-sysex';

export interface UIState {
  theme: 'dark' | 'light';
  activeTab: 'grid' | 'data' | 'input' | 'patch';
  isMobileViewport: boolean;
  showQualitySelector: boolean;
  showSettings: boolean;
  showHelp: boolean;
  showHuman: boolean;
}

export interface AudioState {
  audioActive: boolean;
  autoPlay: boolean;
}

export interface MidiState {
  midiConnected: boolean;
  midiDevices: string[];
  selectedMidiDevice: string;
  activeMidiDevice: string | null;
  selectedMidiChannel: number;
}

export interface ChordState {
  progression: ParsedChord[];
  originalKey: string;
  activeIndex: number;
  config: GridConfig;
  voicedOffsets: Record<number, number[]>;
  transposeProgression: boolean;
  inversion: number;
  hideScaleWarningForNotes: string;
  showScaleWarnings: boolean;
}

export interface PatchState {
  activePatch: PatchData | null;
}

// Create contexts for each slice of state
export const uiContext = createContext<UIState>('ui-context');
export const audioContext = createContext<AudioState>('audio-context');
export const midiContext = createContext<MidiState>('midi-context');
export const chordContext = createContext<ChordState>('chord-context');
export const patchContext = createContext<PatchState>('patch-context');

// Also create a context for the dispatch/action methods so components can trigger updates
export interface AppActions {
  setTheme(theme: 'dark' | 'light'): void;
  setActiveTab(tab: 'grid' | 'data' | 'input' | 'patch'): void;
  toggleAudio(): void;
  playActiveVoicing(): void;
  toggleMidi(): void;
  setProgression(progression: ParsedChord[]): void;
  setActiveIndex(index: number): void;
  updateConfig(config: Partial<GridConfig>): void;
  setVoicedOffsets(index: number, offsets: number[]): void;
  setInversion(inversion: number): void;
  toggleAutoPlay(): void;
  toggleSettings(): void;
  toggleHelp(): void;
  toggleHuman(): void;
}

export const actionsContext = createContext<AppActions>('actions-context');
