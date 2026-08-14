// Instant Web Audio Dual-Oscillator Warm Synth Engine

let audioCtx: AudioContext | null = null;
let masterBus: GainNode | null = null;
let filterNode: BiquadFilterNode | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;
    audioCtx = new AudioContextClass();
    masterBus = audioCtx.createGain();
    masterBus.gain.value = 0.5;

    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'lowpass';
    filterNode.frequency.value = 2600;
    filterNode.Q.value = 0.6;

    masterBus.connect(filterNode);
    filterNode.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function midiToFrequency(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function parseMidiNumber(note: number | string): number {
  if (typeof note === 'number') return note;
  // Parse note name like C4, D#3, etc.
  const match = note.match(/^([A-Ga-g][#b]?)(-?\d+)$/);
  if (!match) return 60; // fallback to C4
  const name = match[1].toUpperCase();
  const oct = parseInt(match[2], 10);
  const noteMap: Record<string, number> = {
    'C': 0, 'C#': 1, 'DB': 1, 'D': 2, 'D#': 3, 'EB': 3,
    'E': 4, 'F': 5, 'F#': 6, 'GB': 6, 'G': 7, 'G#': 8,
    'AB': 8, 'A': 9, 'A#': 10, 'BB': 10, 'B': 11
  };
  const semi = noteMap[name] ?? 0;
  return (oct + 1) * 12 + semi;
}

export function playChord(notes: (number | string)[], duration = 1.15): void {
  const ctx = getAudioContext();
  if (!ctx || !masterBus) return;

  const t0 = ctx.currentTime + 0.015;
  const d = Math.max(0.2, duration);
  const midis = notes.map(parseMidiNumber);

  midis.forEach((midi, i) => {
    const freq = midiToFrequency(midi);
    const gainNode = ctx.createGain();
    const startTime = t0 + i * 0.028;

    gainNode.gain.setValueAtTime(0.0001, startTime);
    gainNode.gain.linearRampToValueAtTime(0.16, startTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.055, startTime + 0.22);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + d);

    gainNode.connect(masterBus!);

    // Dual oscillators: Triangle + Sine (detuned by -5 cents)
    const oscConfigs = [
      { type: 'triangle' as OscillatorType, cents: 0 },
      { type: 'sine' as OscillatorType, cents: -5 }
    ];

    oscConfigs.forEach(({ type, cents }) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq * Math.pow(2, cents / 1200);
      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + d + 0.05);
    });
  });
}

export function playNote(note: number | string, duration = 0.6): void {
  playChord([note], duration);
}

export async function startAudio(): Promise<void> {
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    await ctx.resume();
  }
}

export async function suspendAudio(): Promise<void> {
  if (audioCtx && audioCtx.state === 'running') {
    await audioCtx.suspend();
  }
}

export function isAudioActive(): boolean {
  return !!audioCtx && audioCtx.state === 'running';
}

export function registerAudioStateListener(listener: (state: AudioContextState) => void): () => void {
  const ctx = getAudioContext();
  if (ctx) {
    const cb = () => listener(ctx.state);
    ctx.addEventListener('statechange', cb);
    return () => ctx.removeEventListener('statechange', cb);
  }
  return () => {};
}
