# 02 — Progression Step Strip & Mini Pad-Plot Thumbnails

**What to build:** A horizontal progression step strip displaying up to 16 steps. Each step tile displays its step index, chord label, and an 8x4 mini pad-plot thumbnail rendering the exact illuminated pad layout for that step's chord. Users can click any step to make it active, click `+` to duplicate/append a step, and click `remove step` to delete the active step.

**Blocked by:** 01 — Core Pad Plate & Dual-Oscillator Warm Synth

**Status:** done

- [x] Displays progression steps horizontally with step number (e.g. `01`) and chord name (e.g. `Cmaj7`)
- [x] Renders a miniature 8x4 grid plot on each step tile showing the lighted pad shape for that step
- [x] Active step is clearly highlighted with berry pink bottom border accent and elevated background
- [x] Clicking a step card sets it as the active chord and auditions its voicing
- [x] Clicking `+` appends a step (up to a maximum of 16 steps)
- [x] Clicking `remove step` removes the current step (with minimum bound of 1 step)
- [x] Pad plate triggers bloom animation (`padBloomA`/`padBloomB`) when switching between steps
