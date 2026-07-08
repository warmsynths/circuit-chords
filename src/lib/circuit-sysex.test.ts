import { describe, it, expect } from 'vitest';
import {
  decodePatchDump,
  encodePatchDump,
  createRequestDumpCommand,
  PATCH_BYTES,
  NOVATION_ID,
  CIRCUIT_TRACKS_ID,
  SysexCommand,
  OscWaveform,
  FilterType,
  DistortionType,
  type PatchData,
} from './circuit-sysex';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Creates a zeroed 350-byte patch buffer for testing. */
function makeEmptyPatch(): Uint8Array {
  return new Uint8Array(PATCH_BYTES);
}

/** Creates a minimal valid PatchData object with all zeroed oscillators/envelopes. */
function makeMinimalPatch(raw?: Uint8Array): PatchData {
  const rawData = raw ?? makeEmptyPatch();
  const osc = {
    wave: OscWaveform.SINE,
    waveInterpolate: 0,
    pulseWidthIndex: 0,
    virtualSyncDepth: 0,
    density: 0,
    densityDetune: 0,
    semitones: 0,
    cents: 0,
    pitchBend: 0,
  };
  const env = { velocityOrDelay: 0, attack: 0, decay: 0, sustain: 0, release: 0 };
  return {
    rawData,
    oscillators: [{ ...osc }, { ...osc }],
    mixer: { osc1Level: 0, osc2Level: 0, ringModLevel12: 0, noiseLevel: 0, preFxLevel: 0, postFxLevel: 0 },
    filter: {
      routing: 0, drive: 0, driveType: DistortionType.DIODE,
      type: FilterType.LOW_PASS_12DB, frequency: 0, track: 0,
      resonance: 0, qNormalise: 0, env2ToFreq: 0,
    },
    envelopes: [{ ...env }, { ...env }, { ...env }],
  };
}

// ─── PATCH_BYTES constant ─────────────────────────────────────────────────────

describe('PATCH_BYTES', () => {
  it('is exactly 350', () => {
    expect(PATCH_BYTES).toBe(350);
  });
});

// ─── createRequestDumpCommand ─────────────────────────────────────────────────

describe('createRequestDumpCommand', () => {
  it('produces a 9-byte SysEx message', () => {
    const cmd = createRequestDumpCommand();
    expect(cmd).toHaveLength(9);
  });

  it('starts with SysEx start byte 0xF0', () => {
    const cmd = createRequestDumpCommand();
    expect(cmd[0]).toBe(0xF0);
  });

  it('ends with SysEx end byte 0xF7', () => {
    const cmd = createRequestDumpCommand();
    expect(cmd[cmd.length - 1]).toBe(0xF7);
  });

  it('contains the Novation manufacturer ID', () => {
    const cmd = createRequestDumpCommand();
    expect(cmd[1]).toBe(NOVATION_ID[0]);
    expect(cmd[2]).toBe(NOVATION_ID[1]);
    expect(cmd[3]).toBe(NOVATION_ID[2]);
  });

  it('contains the Circuit Tracks device ID', () => {
    const cmd = createRequestDumpCommand();
    expect(cmd[5]).toBe(CIRCUIT_TRACKS_ID);
  });

  it('contains the REQUEST_DUMP_CURRENT_PATCH command', () => {
    const cmd = createRequestDumpCommand();
    expect(cmd[6]).toBe(SysexCommand.REQUEST_DUMP_CURRENT_PATCH);
  });

  it('defaults location to 0', () => {
    const cmd = createRequestDumpCommand();
    expect(cmd[7]).toBe(0);
  });

  it('encodes a custom location', () => {
    const cmd = createRequestDumpCommand(42);
    expect(cmd[7]).toBe(42);
  });
});

// ─── decodePatchDump ──────────────────────────────────────────────────────────

describe('decodePatchDump', () => {
  it('throws on incorrect buffer length (too short)', () => {
    const bad = new Uint8Array(100);
    expect(() => decodePatchDump(bad)).toThrow();
  });

  it('throws on incorrect buffer length (too long)', () => {
    const bad = new Uint8Array(400);
    expect(() => decodePatchDump(bad)).toThrow();
  });

  it('throws with a descriptive message mentioning expected length', () => {
    const bad = new Uint8Array(100);
    expect(() => decodePatchDump(bad)).toThrow(/350/);
  });

  it('returns a PatchData with two oscillators from a zero buffer', () => {
    const patch = decodePatchDump(makeEmptyPatch());
    expect(patch.oscillators).toHaveLength(2);
  });

  it('returns a PatchData with three envelopes from a zero buffer', () => {
    const patch = decodePatchDump(makeEmptyPatch());
    expect(patch.envelopes).toHaveLength(3);
  });

  it('reads osc1 wave from byte offset 46', () => {
    const raw = makeEmptyPatch();
    raw[46] = OscWaveform.SAWTOOTH;
    const patch = decodePatchDump(raw);
    expect(patch.oscillators[0].wave).toBe(OscWaveform.SAWTOOTH);
  });

  it('reads osc2 wave from byte offset 55 (46 + 9)', () => {
    const raw = makeEmptyPatch();
    raw[55] = OscWaveform.SQUARE;
    const patch = decodePatchDump(raw);
    expect(patch.oscillators[1].wave).toBe(OscWaveform.SQUARE);
  });

  it('reads osc1 semitones correctly', () => {
    const raw = makeEmptyPatch();
    raw[46 + 6] = 12; // semitones field
    const patch = decodePatchDump(raw);
    expect(patch.oscillators[0].semitones).toBe(12);
  });

  it('reads osc2 cents correctly', () => {
    const raw = makeEmptyPatch();
    raw[55 + 7] = 50; // cents field for osc2
    const patch = decodePatchDump(raw);
    expect(patch.oscillators[1].cents).toBe(50);
  });

  it('reads mixer osc1Level from offset 64', () => {
    const raw = makeEmptyPatch();
    raw[64] = 100;
    const patch = decodePatchDump(raw);
    expect(patch.mixer.osc1Level).toBe(100);
  });

  it('reads mixer osc2Level from offset 65', () => {
    const raw = makeEmptyPatch();
    raw[65] = 80;
    const patch = decodePatchDump(raw);
    expect(patch.mixer.osc2Level).toBe(80);
  });

  it('reads mixer noiseLevel from offset 67', () => {
    const raw = makeEmptyPatch();
    raw[67] = 64;
    const patch = decodePatchDump(raw);
    expect(patch.mixer.noiseLevel).toBe(64);
  });

  it('reads filter frequency from offset 74', () => {
    const raw = makeEmptyPatch();
    raw[74] = 127;
    const patch = decodePatchDump(raw);
    expect(patch.filter.frequency).toBe(127);
  });

  it('reads filter resonance from offset 76', () => {
    const raw = makeEmptyPatch();
    raw[76] = 90;
    const patch = decodePatchDump(raw);
    expect(patch.filter.resonance).toBe(90);
  });

  it('reads filter type correctly', () => {
    const raw = makeEmptyPatch();
    raw[73] = FilterType.HIGH_PASS_24DB;
    const patch = decodePatchDump(raw);
    expect(patch.filter.type).toBe(FilterType.HIGH_PASS_24DB);
  });

  it('reads envelope 1 attack from offset 80', () => {
    const raw = makeEmptyPatch();
    raw[79 + 1] = 63;
    const patch = decodePatchDump(raw);
    expect(patch.envelopes[0].attack).toBe(63);
  });

  it('reads envelope 2 sustain from offset 84+3=87', () => {
    const raw = makeEmptyPatch();
    raw[79 + 5 + 3] = 100;
    const patch = decodePatchDump(raw);
    expect(patch.envelopes[1].sustain).toBe(100);
  });

  it('reads envelope 3 release from offset 89+4=93', () => {
    const raw = makeEmptyPatch();
    raw[79 + 10 + 4] = 127;
    const patch = decodePatchDump(raw);
    expect(patch.envelopes[2].release).toBe(127);
  });

  it('stores a copy of the raw buffer in rawData', () => {
    const raw = makeEmptyPatch();
    raw[0] = 0xAB;
    const patch = decodePatchDump(raw);
    expect(patch.rawData[0]).toBe(0xAB);
  });
});

// ─── encodePatchDump ──────────────────────────────────────────────────────────

describe('encodePatchDump', () => {
  it('returns a Uint8Array of PATCH_BYTES length', () => {
    const patch = makeMinimalPatch();
    const encoded = encodePatchDump(patch);
    expect(encoded).toHaveLength(PATCH_BYTES);
  });

  it('writes osc1 wave to byte 46', () => {
    const patch = makeMinimalPatch();
    patch.oscillators[0].wave = OscWaveform.TRIANGLE;
    const encoded = encodePatchDump(patch);
    expect(encoded[46]).toBe(OscWaveform.TRIANGLE);
  });

  it('writes osc2 wave to byte 55', () => {
    const patch = makeMinimalPatch();
    patch.oscillators[1].wave = OscWaveform.PULSE_WIDTH;
    const encoded = encodePatchDump(patch);
    expect(encoded[55]).toBe(OscWaveform.PULSE_WIDTH);
  });

  it('writes osc1 semitones to byte 52', () => {
    const patch = makeMinimalPatch();
    patch.oscillators[0].semitones = 7;
    const encoded = encodePatchDump(patch);
    expect(encoded[46 + 6]).toBe(7);
  });

  it('writes osc1 pitchBend to byte 54', () => {
    const patch = makeMinimalPatch();
    patch.oscillators[0].pitchBend = 64;
    const encoded = encodePatchDump(patch);
    expect(encoded[46 + 8]).toBe(64);
  });

  it('writes mixer osc1Level to byte 64', () => {
    const patch = makeMinimalPatch();
    patch.mixer.osc1Level = 120;
    const encoded = encodePatchDump(patch);
    expect(encoded[64]).toBe(120);
  });

  it('writes mixer postFxLevel to byte 69', () => {
    const patch = makeMinimalPatch();
    patch.mixer.postFxLevel = 55;
    const encoded = encodePatchDump(patch);
    expect(encoded[64 + 5]).toBe(55);
  });

  it('writes filter frequency to byte 74', () => {
    const patch = makeMinimalPatch();
    patch.filter.frequency = 100;
    const encoded = encodePatchDump(patch);
    expect(encoded[70 + 4]).toBe(100);
  });

  it('writes filter resonance to byte 76', () => {
    const patch = makeMinimalPatch();
    patch.filter.resonance = 80;
    const encoded = encodePatchDump(patch);
    expect(encoded[70 + 6]).toBe(80);
  });

  it('writes filter type to byte 73', () => {
    const patch = makeMinimalPatch();
    patch.filter.type = FilterType.BAND_PASS_12DB;
    const encoded = encodePatchDump(patch);
    expect(encoded[70 + 3]).toBe(FilterType.BAND_PASS_12DB);
  });

  it('writes envelope 1 decay to byte 81', () => {
    const patch = makeMinimalPatch();
    patch.envelopes[0].decay = 45;
    const encoded = encodePatchDump(patch);
    expect(encoded[79 + 2]).toBe(45);
  });

  it('writes envelope 3 attack to byte 90', () => {
    const patch = makeMinimalPatch();
    patch.envelopes[2].attack = 10;
    const encoded = encodePatchDump(patch);
    expect(encoded[79 + 10 + 1]).toBe(10);
  });

  it('always sets byte 6 to REPLACE_CURRENT_PATCH (0)', () => {
    const patch = makeMinimalPatch();
    const encoded = encodePatchDump(patch);
    expect(encoded[6]).toBe(SysexCommand.REPLACE_CURRENT_PATCH);
  });

  // ── Round-trip encode → decode ──────────────────────────────────────────────

  it('round-trips osc1 wave: decode → mutate → encode → decode', () => {
    const raw = makeEmptyPatch();
    const decoded = decodePatchDump(raw);
    decoded.oscillators[0].wave = OscWaveform.ANALOGUE_SYNC;
    const reencoded = encodePatchDump(decoded);
    const redecoded = decodePatchDump(reencoded);
    expect(redecoded.oscillators[0].wave).toBe(OscWaveform.ANALOGUE_SYNC);
  });

  it('round-trips mixer levels', () => {
    const raw = makeEmptyPatch();
    const decoded = decodePatchDump(raw);
    decoded.mixer.osc1Level = 90;
    decoded.mixer.osc2Level = 70;
    decoded.mixer.noiseLevel = 30;
    const reencoded = encodePatchDump(decoded);
    const redecoded = decodePatchDump(reencoded);
    expect(redecoded.mixer.osc1Level).toBe(90);
    expect(redecoded.mixer.osc2Level).toBe(70);
    expect(redecoded.mixer.noiseLevel).toBe(30);
  });

  it('round-trips all three envelopes', () => {
    const raw = makeEmptyPatch();
    const decoded = decodePatchDump(raw);
    decoded.envelopes[0] = { velocityOrDelay: 1, attack: 10, decay: 20, sustain: 80, release: 5 };
    decoded.envelopes[1] = { velocityOrDelay: 2, attack: 30, decay: 40, sustain: 60, release: 15 };
    decoded.envelopes[2] = { velocityOrDelay: 3, attack: 50, decay: 60, sustain: 40, release: 25 };
    const reencoded = encodePatchDump(decoded);
    const redecoded = decodePatchDump(reencoded);
    expect(redecoded.envelopes[0]).toEqual({ velocityOrDelay: 1, attack: 10, decay: 20, sustain: 80, release: 5 });
    expect(redecoded.envelopes[1]).toEqual({ velocityOrDelay: 2, attack: 30, decay: 40, sustain: 60, release: 15 });
    expect(redecoded.envelopes[2]).toEqual({ velocityOrDelay: 3, attack: 50, decay: 60, sustain: 40, release: 25 });
  });

  it('round-trips filter parameters', () => {
    const raw = makeEmptyPatch();
    const decoded = decodePatchDump(raw);
    decoded.filter.type = FilterType.HIGH_PASS_12DB;
    decoded.filter.frequency = 100;
    decoded.filter.resonance = 75;
    decoded.filter.driveType = DistortionType.BIT_REDUCER;
    const reencoded = encodePatchDump(decoded);
    const redecoded = decodePatchDump(reencoded);
    expect(redecoded.filter.type).toBe(FilterType.HIGH_PASS_12DB);
    expect(redecoded.filter.frequency).toBe(100);
    expect(redecoded.filter.resonance).toBe(75);
    expect(redecoded.filter.driveType).toBe(DistortionType.BIT_REDUCER);
  });

  it('encode does not mutate unrelated bytes outside the known parameter offsets', () => {
    const raw = makeEmptyPatch();
    // Set a canary byte outside any known param region
    raw[200] = 0xBE;
    const decoded = decodePatchDump(raw);
    decoded.oscillators[0].wave = OscWaveform.SAWTOOTH;
    const reencoded = encodePatchDump(decoded);
    expect(reencoded[200]).toBe(0xBE);
  });
});
