import { Note } from 'tonal';

let audioCtx: AudioContext | null = null;

/**
 * Lazily obtains and resumes the web audio context.
 */
function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a single midi note using a warm triangle synth sound.
 * 
 * @param noteName Note name with octave, e.g. "C4" or "D#5".
 * @param duration Duration in seconds.
 */
export function playNote(noteName: string, duration = 0.35): void {
  try {
    const ctx = getAudioContext();
    const freq = Note.freq(noteName);
    if (!freq) return;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.value = freq;

    // Cut harsh highs for a warmer synth feel
    filter.type = 'lowpass';
    filter.frequency.value = 1100;
    filter.Q.value = 0.8;

    const now = ctx.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    
    // Smooth attack and decay envelope
    gainNode.gain.linearRampToValueAtTime(0.18, now + 0.04);
    gainNode.gain.setValueAtTime(0.18, now + duration - 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  } catch (e) {
    console.warn('Audio playback failed:', e);
  }
}

/**
 * Plays a chord of notes simultaneously.
 * 
 * @param noteNames Array of note names with octaves.
 * @param duration Duration in seconds.
 */
export function playChord(noteNames: string[], duration = 0.7): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    noteNames.forEach((noteName) => {
      const freq = Note.freq(noteName);
      if (!freq) return;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.value = freq;

      // Warmer cut for polyphony
      filter.type = 'lowpass';
      filter.frequency.value = 900;
      filter.Q.value = 0.8;

      gainNode.gain.setValueAtTime(0, now);
      // Slower attack for chord swell
      gainNode.gain.linearRampToValueAtTime(0.12, now + 0.06);
      gainNode.gain.setValueAtTime(0.12, now + duration - 0.12);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });
  } catch (e) {
    console.warn('Audio playback failed:', e);
  }
}
