# 03 — Piano Root Selector, 12 Chord Qualities & Diatonic Builder

**What to build:** The dedicated right-hand sidebar control panel allowing musicians to change the chord for the active step. Includes a 12-key piano layout with distinct upper accidentals (C#, D#, F#, G#, A#) and lower naturals (C, D, E, F, G, A, B), a 12-quality chord button grid, a musical key/scale dropdown, and one-click diatonic Roman numeral append buttons (I, ii, iii, IV, V, vi, vii).

**Blocked by:** 01 — Core Pad Plate & Dual-Oscillator Warm Synth

**Status:** done

- [x] Renders a piano-style root note picker with styled sharp and natural keys
- [x] Clicking any root note updates the active step's root and updates pad lighting
- [x] Renders a 3x4 grid for the 12 chord qualities (`maj`, `min`, `maj7`, `m7`, `7`, `m7b5`, `dim`, `aug`, `sus2`, `sus4`, `6`, `add9`)
- [x] Selecting a quality updates the chord voicing and highlights the chosen button
- [x] Key selector dropdown supports all 12 root keys across Major and Minor modes
- [x] Seven diatonic numeral buttons (e.g. `I`, `ii`, `iii`, `IV`, `V`, `vi`, `vii`) append the corresponding diatonic chord to the progression when clicked
