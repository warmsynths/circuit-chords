import * as Tone from 'tone';

// Limiter/compressor to prevent clipping when multiple notes play simultaneously.
// Tuned to act transparently — fast attack/release catches peaks without audible pumping.
const limiter = new Tone.Compressor({
  threshold: -6,   // Start compressing when summed signal nears 0 dBFS
  ratio: 20,       // High ratio makes it behave like a limiter
  attack: 0.002,   // 2ms attack — fast enough to catch transient peaks
  release: 0.1,    // 100ms release — quick recovery without pumping artifacts
  knee: 3,         // Slight soft knee for transparent sound
}).toDestination();

// High-quality sampled 1977 Rhodes Mark I Stage 73 electric piano
// Sourced from J. Learman open-source CC0 samples hosted via GitHub Pages
const sampler = new Tone.Sampler({
  urls: {
    "F1": "A_029__F1_5.m4a",
    "B1": "A_035__B1_5.m4a",
    "E2": "A_040__E2_5.m4a",
    "A2": "A_045__A2_5.m4a",
    "D3": "A_050__D3_5.m4a",
    "G3": "A_055__G3_5.m4a",
    "B3": "A_059__B3_5.m4a",
    "D4": "A_062__D4_5.m4a",
    "F4": "A_065__F4_5.m4a",
    "B4": "A_071__B4_5.m4a",
    "E5": "A_076__E5_5.m4a",
    "A5": "A_081__A5_5.m4a",
    "D6": "A_086__D6_5.m4a",
    "G6": "A_091__G6_5.m4a"
  },
  baseUrl: "https://danigb.github.io/samples/jlearman/rhodes-mki/jRhodes3d-mono/",
  // Lowered base volume so stacked notes have headroom before the limiter kicks in.
  // Each additional note adds ~3dB of summed energy, so we give ourselves room.
  volume: -12,
  onload: () => {
    console.log("Rhodes piano sampler loaded successfully!");
  },
  onerror: (err) => {
    console.warn("Failed to load Rhodes piano sampler:", err);
  }
}).connect(limiter);

/**
 * Plays a single note using the sampled Rhodes electric piano.
 * Starts Tone.js audio context on user gesture if not already running.
 *
 * @param noteName Note name with octave, e.g. "C4" or "D#5".
 * @param duration Duration in seconds.
 */
export function playNote(noteName: string, duration = 0.35): void {
  try {
    Tone.start().then(() => {
      sampler.triggerAttackRelease(noteName, duration);
    }).catch((e) => {
      console.warn("Audio playback gesture failed:", e);
    });
  } catch (e) {
    console.warn("Audio playback failed:", e);
  }
}

/**
 * Plays a chord of notes simultaneously using the sampled Rhodes electric piano.
 * Starts Tone.js audio context on user gesture if not already running.
 * Velocity is scaled down proportionally to the number of notes to prevent
 * the summed signal from clipping before reaching the limiter.
 *
 * @param noteNames Array of note names with octaves.
 * @param duration Duration in seconds.
 */
export function playChord(noteNames: string[], duration = 0.7): void {
  try {
    Tone.start().then(() => {
      // Scale velocity down as note count grows to pre-empt loudness buildup.
      // Capped at a floor of 0.4 so chords never sound too quiet.
      const count = noteNames.length;
      const velocity = count <= 1 ? 1 : Math.max(0.4, 1 / Math.sqrt(count));
      sampler.triggerAttackRelease(noteNames, duration, Tone.now(), velocity);
    }).catch((e) => {
      console.warn("Audio playback gesture failed:", e);
    });
  } catch (e) {
    console.warn("Audio playback failed:", e);
  }
}

