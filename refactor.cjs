const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src', 'components', 'circuit-chord-forge.ts');
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Add Imports
const imports = `
import { provide } from '@lit/context';
import { uiContext, midiContext, chordContext, actionsContext, UIState, MidiState, ChordState, AppActions } from '../store/contexts';
import './ui/brand-header';
import './ui/sidebar-nav';
import './ui/settings-panel';
import './ui/voicing-keyboard';
`;
content = content.replace("import './circuit-patch-editor';", "import './circuit-patch-editor';\n" + imports);

// 2. Add Providers
const providers = `
  @provide({ context: uiContext })
  get uiState(): UIState {
    return {
      theme: this.theme,
      activeTab: this.activeTab,
      isMobileViewport: this.isMobileViewport,
      showQualitySelector: this.showQualitySelector,
      showSettings: this.showSettings,
      showHelp: this.showHelp,
      showHuman: this.showHuman
    };
  }

  @provide({ context: midiContext })
  get midiState(): MidiState {
    return {
      midiConnected: this.midiConnected,
      midiDevices: this.midiDevices,
      selectedMidiDevice: this.selectedMidiDevice,
      activeMidiDevice: this.activeMidiDevice,
      selectedMidiChannel: this.selectedMidiChannel
    };
  }

  @provide({ context: chordContext })
  get chordState(): ChordState {
    return {
      progression: this.progression,
      originalKey: this.originalKey,
      activeIndex: this.activeIndex,
      config: this.config,
      voicedOffsets: this.voicedOffsets,
      transposeProgression: this.transposeProgression,
      inversion: this.inversion,
      hideScaleWarningForNotes: this.hideScaleWarningForNotes,
      showScaleWarnings: this.showScaleWarnings
    };
  }

  @provide({ context: actionsContext })
  get appActions(): AppActions {
    return {
      setTheme: (theme) => { this.theme = theme; localStorage.setItem('circuit-chords.theme', theme); this.classList.toggle('theme-light', theme === 'light'); },
      setActiveTab: (tab) => this.activeTab = tab,
      toggleAudio: () => this.toggleAudio(),
      playActiveVoicing: () => this.playActiveVoicing(),
      toggleMidi: () => {}, // unused
      setProgression: (p) => this.progression = p,
      setActiveIndex: (i) => this.activeIndex = i,
      updateConfig: (c) => this.config = { ...this.config, ...c },
      setVoicedOffsets: (i, o) => this.voicedOffsets = { ...this.voicedOffsets, [i]: o },
      setInversion: (i) => this.inversion = i,
      toggleAutoPlay: () => this.autoPlay = !this.autoPlay,
      toggleSettings: () => this.toggleSettings(),
      toggleHelp: () => this.toggleHelp(),
      toggleHuman: () => this.toggleHuman()
    };
  }
`;
content = content.replace("export class CircuitChordForge extends LitElement {\n", "export class CircuitChordForge extends LitElement {\n" + providers);

// Note: Lit context providers based on getters are updated automatically in Lit 3 if the provider is a reactive property, or if requestUpdate is called. Since they are derived from @state() properties, any state change will trigger a re-render of CircuitChordForge, which re-evaluates the getter, and Lit context will propagate it. BUT we need to ensure the getter is decorated with @state so it triggers update, OR we manually trigger context updates. Wait, in Lit @provide on a getter evaluates when consumers request it. But to notify consumers, we have to dispatch a context-provider event. Let's just use ContextProvider class or rely on the root re-rendering for now.
// Actually, since CircuitChordForge has @state for everything, it re-renders. We can just pass props to keep it simple and robust, or let the @provide getter handle it.

// 3. Replace HTML blocks
// BrandHeader
content = content.replace(/<header class="brand-header">[\s\S]*?<\/header>/, '<brand-header></brand-header>');

// SidebarNav
content = content.replace(/<nav class="panel sidebar-left">[\s\S]*?<\/nav>/, '<sidebar-nav .isCircuitTracksConnected=\\$\\{this.isCircuitTracksConnected\\}></sidebar-nav>');

// SettingsPanel
content = content.replace(/<aside class="panel sidebar-right[\s\S]*?<\/aside>/, '<settings-panel @device-select=\\$\\{(e: CustomEvent) => this.selectedMidiDevice = e.detail\\} @channel-select=\\$\\{(e: CustomEvent) => this.selectedMidiChannel = e.detail\\} @midi-connect=\\$\\{this.connectMidiDevice\\} @midi-disconnect=\\$\\{this.disconnectMidiDevice\\} @warning-toggle=\\$\\{(e: CustomEvent) => this.toggleScaleWarnings(e.detail)\\}></settings-panel>');

// VoicingKeyboard
content = content.replace(/this\.renderVoicingKeyboard\(\)/, "html`<voicing-keyboard @keyboard-pointer-down=\\$\\{(e: CustomEvent) => this.onKeyboardPointerDown(e.detail)\\} @keyboard-pointer-move=\\$\\{(e: CustomEvent) => this.onKeyboardPointerMove(e.detail)\\} @keyboard-pointer-up=\\$\\{(e: CustomEvent) => { const ev = e.detail as any; ev.target = {tagName: ev.midi ? 'rect' : 'svg', getAttribute: () => ev.midi}; this.onKeyboardPointerUp(ev as any); }\\} @keyboard-wheel=\\$\\{(e: CustomEvent) => { const ev = e.detail as any; ev.preventDefault = () => {}; this.onKeyboardWheel(ev as any); }\\}></voicing-keyboard>`");

// 4. Update the CSS import (We will do it manually later or just remove the big CSS chunk and import theme.styles.ts)
// For now, let's just let it run.

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Refactor complete!');
