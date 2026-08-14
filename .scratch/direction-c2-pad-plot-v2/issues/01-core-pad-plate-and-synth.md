# 01 — Core Pad Plate & Dual-Oscillator Warm Synth

**What to build:** An interactive 8x4 pad matrix on the screen showing row/column coordinates (rows 1–4, cols 1–8) and illuminated pads for roots and chord tones in both Chromatic and In-Key layouts. Tapping any pad auditions its pitch and re-roots the chord to that pad. Below the grid, a tone breakdown table lists degrees, pitches, and exact grid coordinates (e.g. `C3 R1C1`). An instant Web Audio dual-oscillator warm synth provides immediate chord and note playback with zero network loading latency.

**Blocked by:** None — can start immediately

**Status:** done

- [x] Renders an 8x4 pad plate with sticky row indicators (4 to 1) and column header markers (1 to 8)
- [x] Highlights root note pads in cyan (`#5cc9d1`) and chord tones in berry (`#d1608f`)
- [x] Differentiates in-key pads (slate) from out-of-key pads (dark plum)
- [x] Tapping any pad plays its pitch and re-roots the active chord to that pad's note
- [x] Provides layout toggle between `chromatic` and `in-key` pad arrangements
- [x] Displays tones table listing chord degrees (root, 3rd, 5th, 7th...) with pitch and coordinate references (e.g. `R1C1`)
- [x] Instant Web Audio synth triggers dual-oscillator (triangle + sine with lowpass filter and 28ms strum stagger) voices
