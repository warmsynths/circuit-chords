# Circuit Chord Forge

Map chord progressions to playable pad voicings for Novation Circuit Tracks.

This is a Lit + Tonal.js web app that:

- Parses chord progression text (example: `Am7 D9 Gmaj7`)
- Shows progression stepper for chord-by-chord selection
- Renders a 4x8 Circuit-style pad grid
- Supports `Chromatic` and `Scale Collapse` modes
- Supports voicing modes: `triad`, `seventh`, `spread`
- Highlights target pads for current voicing (ring + step number)
- Includes mobile config drawer (hamburger app bar)

## Tech Stack

- Lit (web components)
- Tonal.js (chord and scale logic)
- Vite
- TypeScript

## Project Structure

- `src/components/chord-input.ts` - progression parser input + event emitter
- `src/components/progression-stepper.ts` - chord chip selector
- `src/components/circuit-grid.ts` - 4x8 pad renderer + target highlighting
- `src/lib/music-grid.ts` - pad mapping + voicing recipe logic
- `src/main.ts` - app state wiring, config UI, mobile drawer
- `index.html` - app host page

## Events

`chord-input` emits:

- `progression-parsed`

Event detail shape:

```ts
{
  progression: ParsedChord[];
  source: string;
}
```

## Local Development

Install:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Type check:

```bash
npm run typecheck
```

Production build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

## GitHub Pages Deployment (Branch + /docs)

This repo is configured to output build files to `docs/`.

Vite config:

- `build.outDir = "docs"`
- `base = "/circuit-chords/"`

Deployment steps:

1. Run `npm run build`
2. Ensure `docs/.nojekyll` exists
3. Commit and push `docs/` output
4. In GitHub repo settings:
   - Pages Source: `Deploy from branch`
   - Branch: `main`
   - Folder: `/docs`

## UX Notes

- On mobile, config controls open from hamburger slide-out drawer.
- Main pad grid stays visible first to reduce scrolling.
- In `Scale Collapse`, non-scale chord tones may be hidden; app warns when this happens.

## Current Scope

Implemented now:

- Chord parsing
- Grid mapping
- Mode/key/scale/voicing config
- Master Stage + active chord sync
- Mobile drawer UX

Planned next phases:

- Guitar fretboard equivalent voicings
- WebMIDI audition/send to hardware
- Hardware-faithful interval layout refinements
