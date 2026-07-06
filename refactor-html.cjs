const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src', 'components', 'circuit-chord-forge.ts');
let content = fs.readFileSync(targetPath, 'utf8');

// BrandHeader
content = content.replace(/<header class="brand-header">[\s\S]*?<\/header>/, '<brand-header></brand-header>');

// SidebarNav
content = content.replace(/<nav class="panel sidebar-left">[\s\S]*?<\/nav>/, '<sidebar-nav .isCircuitTracksConnected=${this.isCircuitTracksConnected}></sidebar-nav>');

// SettingsPanel
content = content.replace(/<aside class="panel sidebar-right[\s\S]*?<\/aside>/, '<settings-panel @device-select=${(e) => this.selectedMidiDevice = e.detail} @channel-select=${(e) => this.selectedMidiChannel = e.detail} @midi-connect=${() => this.connectMidiDevice()} @midi-disconnect=${() => this.disconnectMidiDevice()} @warning-toggle=${(e) => this.toggleScaleWarnings(e.detail)}></settings-panel>');

// VoicingKeyboard
content = content.replace(/this\.renderVoicingKeyboard\(\)/, "html`<voicing-keyboard @keyboard-pointer-down=${(e) => this.onKeyboardPointerDown(e.detail)} @keyboard-pointer-move=${(e) => this.onKeyboardPointerMove(e.detail)} @keyboard-pointer-up=${(e) => { const ev = e.detail; ev.target = {tagName: ev.midi ? 'rect' : 'svg', getAttribute: () => ev.midi}; this.onKeyboardPointerUp(ev); }} @keyboard-wheel=${(e) => { const ev = e.detail; ev.preventDefault = () => {}; this.onKeyboardWheel(ev); }}></voicing-keyboard>`");

fs.writeFileSync(targetPath, content, 'utf8');
console.log('HTML replace done.');
