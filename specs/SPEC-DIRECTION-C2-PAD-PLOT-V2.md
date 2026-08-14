# Spec: Direction C2 Pad Plot v2 Overhaul

**Triage Label**: `ready-for-agent`

## Problem Statement

Novation Circuit Tracks and Circuit groovebox musicians need a fast, visual, and musically accurate way to map chord progressions to the physical 4x8 pad layout without mental friction or excessive UI clutter. 

The previous version of Circuit Chords accumulated extraneous features (a complex multi-tab shell, an entire SysEx patch editor, disparate settings panels, and slow-loading external sample dependencies) that distracted from the core workflow: choosing chords, immediately seeing which physical pads to hold on the Circuit grid, previewing the sound instantly, and testing progressions.

## Solution

Overhaul the application into a focused **Studio Minimal / Pad Plot v2** interface inspired directly by the Novation Circuit hardware aesthetic. 

The application presents a unified single-screen studio layout with:
- An illuminated 8x4 pad plate showing the exact pads to hold for close-voiced chords in Chromatic or In-Key layouts with bloom and shimmer micro-animations.
- An interactive progression step strip (up to 16 steps) where every step displays a miniature 8x4 pad plot preview, enabling musicians to visually understand chord hand-shape transitions before pressing anything.
- Instant, low-latency audio auditioning and progression playback via a dedicated dual-oscillator warm synth engine that requires zero external audio sample downloads.
- A streamlined sidebar providing a piano root selector, 12 chord qualities, a detailed chord tone table with row/column pad references (e.g., `C3 R1C1`), a key selector with one-click diatonic Roman numeral appends, and keyboard navigation shortcuts.

---

## User Stories

1. As a groovebox musician, I want to see an illuminated 8x4 pad matrix on screen, so that I know exactly which pads to press on my Novation Circuit without memorizing fingerings.
2. As a composer, I want the root note of a chord highlighted in cyan (`#5cc9d1`) and chord tones highlighted in berry pink (`#d1608f`), so that I can instantly distinguish the chord foundation from color tones.
3. As a music producer, I want to click any pad on the grid to hear that note and instantly re-root the active chord to that pad's pitch, so that I can experiment with chord movements directly from the layout.
4. As a songwriter, I want to build progressions of up to 16 steps, so that I can arrange complete verse and chorus structures.
5. As a performer, I want each step in the progression strip to display a miniature 8x4 pad plot thumbnail, so that I can see the visual shape of upcoming chord changes at a glance.
6. As a producer, I want to press `Space` to toggle continuous progression playback, so that I can hear how my chords flow together in rhythm.
7. As a musician, I want to press `Enter` to audition the currently selected chord, so that I can quickly check its sound.
8. As a keyboard power-user, I want to use `←` and `→` arrow keys to cycle between progression steps, so that I can navigate without using a mouse.
9. As a musician playing across different registers, I want to use `↑` and `↓` arrow keys (or the octave stepper) to shift the base octave up or down (`C1` to `C6`), so that I can position voicings in the ideal register.
10. As a Circuit Tracks user, I want to toggle between `chromatic` and `in-key` pad layouts, so that the screen mirrors whatever pad mode my hardware is currently set to.
11. As a musician exploring harmonies, I want to select a musical key and see in-key pads distinguished with slate coloring and subtle ambient shimmer from out-of-key pads, so that I maintain harmonic awareness.
12. As a songwriter, I want one-click diatonic Roman numeral buttons (I, ii, iii, IV, V, vi, vii) for my selected key, so that I can quickly append standard diatonic chord changes to my progression.
13. As a musician entering chords, I want a piano-style root note picker with distinct sharp and natural keys, so that I can pick root notes using familiar keyboard geometry.
14. As an arranger, I want a comprehensive chord quality grid (`maj`, `min`, `maj7`, `m7`, `7`, `m7b5`, `dim`, `aug`, `sus2`, `sus4`, `6`, `add9`), so that I can construct essential modern harmonic variations.
15. As a learner, I want a tone breakdown table displaying scale degrees, note names with octaves, and exact grid coordinates (e.g. `root C3 R1C1`, `3rd E3 R1C3`), so that I can read the exact physical pad assignments.
16. As a collaborator, I want a "copy pad list" button that copies the active chord name and pad coordinates (e.g. `Cmaj7 — C3→R1C1  E3→R1C3  G3→R1C5  B3→R1C7`) to my clipboard, so that I can share fingerings in notes or chat.
17. As a producer working in varied acoustic environments, I want an off-plate warning banner if a chord tone extends beyond the 4x8 boundary, so that I know when to adjust the octave or switch layout mode.
18. As a returning user, I want my progression, active step, key, octave, and layout automatically saved to local storage, so that I do not lose my musical ideas when reloading the page.
19. As a mobile user, I want the pad plate and progression strip to support horizontal touch scrolling on narrow screens, so that the tool remains fully functional on smartphones and tablets.
20. As a musician on unreliable internet, I want instant audio synthesis with zero network sample loading latency, so that chords play immediately upon opening the app.
21. As a user with motion sensitivity, I want all animations to respect the `prefers-reduced-motion` media query, so that interface transitions do not cause discomfort.

---

## Implementation Decisions

- **Single-Screen Architecture**: Replace the previous multi-tab layout and sidebar navigation with a unified 2-column desktop layout (responsive single-column on mobile) matching the Direction C2 Pad Plot specification.
- **Retirement of SysEx Patch Editor**: Eliminate the Circuit SysEx patch editor module, removing bulk and focusing 100% on chord plotting and progression building.
- **Embedded Dual-Oscillator Web Audio Synth Engine**:
  - Replaces external sampled Rhodes playback with an instant local Web Audio synthesizer.
  - Voicing synthesis uses dual oscillators (triangle + sine detuned by -5 cents) passed through a 2600Hz lowpass filter with gentle exponential amplitude decay and a 28ms voice-to-voice strum stagger.
  - Automatically handles `AudioContext` lifecycle (resuming from suspended state on first user gesture).
- **Core Progression State Model**:
  - A step is represented by `{ root: number, q: string }` where `root` is 0..11 (`C`..`B`) and `q` is one of the 12 supported chord quality identifiers.
  - Active progression state contains `steps` (1..16 array), `active` index, `keyRoot`, `keyMode` (`'major'` | `'minor'`), `octave` (1..6), and `layout` (`'chromatic'` | `'in-key'`).
  - State transitions automatically persist to `localStorage` under a dedicated storage key.
- **Pad Layout Calculation & Voicing Mapping**:
  - **Chromatic layout**: 4 rows; rows 1 and 3 contain natural notes (C, D, E, F, G, A, B, C); rows 2 and 4 contain accidentals with inactive placeholders.
  - **In-Key layout**: 4 rows; 8 pads per row mapping diatonic scale degrees starting from `keyRoot` across consecutive octaves.
  - Lowest-matching pad mapping algorithm assigns each voiced chord note to its corresponding active pad on the plate, flagging unmapped notes as off-plate tones.
- **Visual Design System**:
  - Dark onyx background (`#17181c`), dark slate panel borders (`#26282e`), cyan root accent (`#5cc9d1`), berry pink tone accent (`#d1608f`).
  - Typography: Google Fonts `Space Grotesk` (headings and branding) and `IBM Plex Mono` (data, coordinates, pad labels, and metadata).
  - Micro-animations: `padBloomA`/`padBloomB` on chord changes with distance-based stagger, `ambientShimmer` for in-key idle pads, and `breathe` for the header status indicator.

---

## Testing Decisions

- **Testing Seams**:
  - **Grid & Voicing Math Seam**: Test chord voicing generation, interval calculations, and 4x8 pad matrix coordinates across both chromatic and in-key modes. Tests verify that given a root, quality, and octave, the correct pad coordinate mappings (`R#C#`) and off-plate detection are computed.
  - **Progression State Seam**: Test step addition (up to maximum 16), removal (minimum 1), step selection, diatonic chord insertion, and serialization/deserialization with `localStorage`.
  - **Audio Trigger Seam**: Verify that the audio synth interface triggers note/chord events with expected MIDI pitch arrays without throwing or blocking UI execution.
- **Behavioral Focus**: Tests verify external outputs and computations (e.g. pad coordinates, note names, scale containment, and progression bounds) rather than internal private DOM state.
- **Prior Art**: Builds on the existing Vitest unit tests in `src/lib/music-grid.test.ts` and `src/lib/chord-parser.test.ts`.

---

## Out of Scope

- Circuit SysEx patch dumping, patch parameter tweaking, and synthesizer preset management.
- External MIDI controller input mapping / MIDI clock synchronization.
- Complex multi-track rhythm sequencing or drum pattern visualization.
- Microtonal or non-12-EDO temperament tuning systems.

---

## Further Notes

- The design is tailored to Novation Circuit Tracks and original Novation Circuit hardware users.
- Touch targets on mobile meet accessibility minimums (minimum 44x44px for pads with horizontal scroll container).
