# 04 — Transport Playback, Keyboard Navigation & Persistence

**What to build:** Full keyboard and transport control for progression workflows. Users can press Space (or click "play through") to run an automated transport loop playing each progression step in sequence at ~60-70 BPM, press Enter (or click "audition") to hear the active chord, use Left/Right arrows to move between steps, and use Up/Down arrows to shift base octave (`C1` to `C6`). Also provides a "copy pad list" clipboard button, an off-plate tone warning banner, and automatic `localStorage` persistence.

**Blocked by:** 02 — Progression Step Strip & Mini Pad-Plot Thumbnails, 03 — Piano Root Selector, 12 Chord Qualities & Diatonic Builder

**Status:** done

- [x] "play through" transport button and Spacebar key toggle continuous step-by-step playback with visual cursor tracking
- [x] "audition" button and Enter key trigger the active chord's voicing
- [x] Left and Right arrow keys switch active progression steps with wraparound
- [x] Up and Down arrow keys shift base octave up and down between C1 and C6
- [x] "copy pad list" button copies formatted chord name and pad references to clipboard with temporary "copied" confirmation
- [x] Displays off-plate warning banner when chord tones fall outside the 4x8 pad grid
- [x] Persists progression steps, active step, key, octave, and layout mode to `localStorage` and restores them on load
