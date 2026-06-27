export const PATCH_BYTES = 350;
export const NOVATION_ID = new Uint8Array([0x00, 0x20, 0x29]);
export const CIRCUIT_TRACKS_ID = 0x64;
export const CIRCUIT_ORIGINAL_ID = 0x60;

export enum SysexCommand {
  REPLACE_CURRENT_PATCH = 0,
  REPLACE_PATCH = 1,
  REQUEST_DUMP_CURRENT_PATCH = 0x40,
}

export enum OscWaveform {
  SINE = 0, TRIANGLE = 1, SAWTOOTH = 2, SAW_9_1_PW = 3,
  SAW_8_2_PW = 4, SAW_7_3_PW = 5, SAW_6_4_PW = 6, SAW_5_5_PW = 7,
  SAW_4_6_PW = 8, SAW_3_7_PW = 9, SAW_2_8_PW = 10, SAW_1_9_PW = 11,
  PULSE_WIDTH = 12, SQUARE = 13, SINE_TABLE = 14, ANALOGUE_PULSE = 15,
  ANALOGUE_SYNC = 16, TRIANGLE_SAW_BLEND = 17, DIGITAL_NASTY_1 = 18,
  DIGITAL_NASTY_2 = 19, DIGITAL_SAW_SQUARE = 20, DIGITAL_VOCAL_1 = 21,
  DIGITAL_VOCAL_2 = 22, DIGITAL_VOCAL_3 = 23, DIGITAL_VOCAL_4 = 24,
  DIGITAL_VOCAL_5 = 25, DIGITAL_VOCAL_6 = 26, RANDOM_COLLECTION_1 = 27,
  RANDOM_COLLECTION_2 = 28, RANDOM_COLLECTION_3 = 29
}

export enum FilterType {
  LOW_PASS_12DB = 0, LOW_PASS_24DB = 1, BAND_PASS_6DB = 2,
  BAND_PASS_12DB = 3, HIGH_PASS_12DB = 4, HIGH_PASS_24DB = 5
}

export enum DistortionType {
  DIODE = 0, VALVE = 1, CLIPPER = 2, CROSS_OVER = 3,
  RECTIFIER = 4, BIT_REDUCER = 5, RATE_REDUCER = 6
}

export interface Osc {
  wave: OscWaveform;
  waveInterpolate: number;
  pulseWidthIndex: number;
  virtualSyncDepth: number;
  density: number;
  densityDetune: number;
  semitones: number;
  cents: number;
  pitchBend: number;
}

export interface Filter {
  routing: number;
  drive: number;
  driveType: DistortionType;
  type: FilterType;
  frequency: number;
  track: number;
  resonance: number;
  qNormalise: number;
  env2ToFreq: number;
}

export interface Envelope {
  velocityOrDelay: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

export interface Mixer {
  osc1Level: number;
  osc2Level: number;
  ringModLevel12: number;
  noiseLevel: number;
  preFxLevel: number;
  postFxLevel: number;
}

export interface PatchData {
  oscillators: [Osc, Osc];
  mixer: Mixer;
  filter: Filter;
  envelopes: [Envelope, Envelope, Envelope];
  // Note: we can map the rest of the 350 bytes as raw data for now,
  // and only parse/serialize the parameters we need for the basic editor.
  rawData: Uint8Array;
}

// Byte offsets for the basic editor parameters based on ctpatch.py
// Header (6) + Command (4) + Meta (32) = 42
// Voice (4) = 46
// Osc 1 (9) = 46 to 54
// Osc 2 (9) = 55 to 63
// Mixer (6) = 64 to 69
// Filter (9) = 70 to 78
// Envelopes (3 * 5 = 15) = 79 to 93

const OSC_OFFSET = 46;
const MIXER_OFFSET = 64;
const FILTER_OFFSET = 70;
const ENV_OFFSET = 79;

export function decodePatchDump(data: Uint8Array): PatchData {
  if (data.length !== PATCH_BYTES) {
    throw new Error(`Invalid patch dump length. Expected ${PATCH_BYTES}, got ${data.length}`);
  }

  const rawData = new Uint8Array(data);

  const parseOsc = (offset: number): Osc => ({
    wave: rawData[offset],
    waveInterpolate: rawData[offset + 1],
    pulseWidthIndex: rawData[offset + 2],
    virtualSyncDepth: rawData[offset + 3],
    density: rawData[offset + 4],
    densityDetune: rawData[offset + 5],
    semitones: rawData[offset + 6],
    cents: rawData[offset + 7],
    pitchBend: rawData[offset + 8],
  });

  const parseEnv = (offset: number): Envelope => ({
    velocityOrDelay: rawData[offset],
    attack: rawData[offset + 1],
    decay: rawData[offset + 2],
    sustain: rawData[offset + 3],
    release: rawData[offset + 4],
  });

  return {
    rawData,
    oscillators: [parseOsc(OSC_OFFSET), parseOsc(OSC_OFFSET + 9)],
    mixer: {
      osc1Level: rawData[MIXER_OFFSET],
      osc2Level: rawData[MIXER_OFFSET + 1],
      ringModLevel12: rawData[MIXER_OFFSET + 2],
      noiseLevel: rawData[MIXER_OFFSET + 3],
      preFxLevel: rawData[MIXER_OFFSET + 4],
      postFxLevel: rawData[MIXER_OFFSET + 5],
    },
    filter: {
      routing: rawData[FILTER_OFFSET],
      drive: rawData[FILTER_OFFSET + 1],
      driveType: rawData[FILTER_OFFSET + 2],
      type: rawData[FILTER_OFFSET + 3],
      frequency: rawData[FILTER_OFFSET + 4],
      track: rawData[FILTER_OFFSET + 5],
      resonance: rawData[FILTER_OFFSET + 6],
      qNormalise: rawData[FILTER_OFFSET + 7],
      env2ToFreq: rawData[FILTER_OFFSET + 8],
    },
    envelopes: [parseEnv(ENV_OFFSET), parseEnv(ENV_OFFSET + 5), parseEnv(ENV_OFFSET + 10)],
  };
}

export function encodePatchDump(patch: PatchData): Uint8Array {
  // Start with the existing raw data
  const data = new Uint8Array(patch.rawData);

  const writeOsc = (offset: number, osc: Osc) => {
    data[offset] = osc.wave;
    data[offset + 1] = osc.waveInterpolate;
    data[offset + 2] = osc.pulseWidthIndex;
    data[offset + 3] = osc.virtualSyncDepth;
    data[offset + 4] = osc.density;
    data[offset + 5] = osc.densityDetune;
    data[offset + 6] = osc.semitones;
    data[offset + 7] = osc.cents;
    data[offset + 8] = osc.pitchBend;
  };

  const writeEnv = (offset: number, env: Envelope) => {
    data[offset] = env.velocityOrDelay;
    data[offset + 1] = env.attack;
    data[offset + 2] = env.decay;
    data[offset + 3] = env.sustain;
    data[offset + 4] = env.release;
  };

  writeOsc(OSC_OFFSET, patch.oscillators[0]);
  writeOsc(OSC_OFFSET + 9, patch.oscillators[1]);

  data[MIXER_OFFSET] = patch.mixer.osc1Level;
  data[MIXER_OFFSET + 1] = patch.mixer.osc2Level;
  data[MIXER_OFFSET + 2] = patch.mixer.ringModLevel12;
  data[MIXER_OFFSET + 3] = patch.mixer.noiseLevel;
  data[MIXER_OFFSET + 4] = patch.mixer.preFxLevel;
  data[MIXER_OFFSET + 5] = patch.mixer.postFxLevel;

  data[FILTER_OFFSET] = patch.filter.routing;
  data[FILTER_OFFSET + 1] = patch.filter.drive;
  data[FILTER_OFFSET + 2] = patch.filter.driveType;
  data[FILTER_OFFSET + 3] = patch.filter.type;
  data[FILTER_OFFSET + 4] = patch.filter.frequency;
  data[FILTER_OFFSET + 5] = patch.filter.track;
  data[FILTER_OFFSET + 6] = patch.filter.resonance;
  data[FILTER_OFFSET + 7] = patch.filter.qNormalise;
  data[FILTER_OFFSET + 8] = patch.filter.env2ToFreq;

  writeEnv(ENV_OFFSET, patch.envelopes[0]);
  writeEnv(ENV_OFFSET + 5, patch.envelopes[1]);
  writeEnv(ENV_OFFSET + 10, patch.envelopes[2]);

  // Ensure Replace Current Patch command
  data[6] = SysexCommand.REPLACE_CURRENT_PATCH;

  return data;
}

export function createRequestDumpCommand(location = 0): Uint8Array {
  return new Uint8Array([
    0xF0,
    NOVATION_ID[0], NOVATION_ID[1], NOVATION_ID[2],
    0x01,
    CIRCUIT_TRACKS_ID,
    SysexCommand.REQUEST_DUMP_CURRENT_PATCH,
    location,
    0xF7
  ]);
}
