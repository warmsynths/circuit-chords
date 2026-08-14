# 05 — Shell Polish, Responsive Layout & Legacy Cleanup

**What to build:** Complete aesthetic polish and refactoring of the top-level application shell. Cleans up obsolete legacy components (such as the SysEx patch editor and unused navigation bars), loads Google Fonts `Space Grotesk` and `IBM Plex Mono`, renders the header with breathing hardware status indicator (`tracks · synth 1 · ch1`), implements responsive horizontal scroll containers for mobile/tablet screens, and verifies that `npm run typecheck` and `npm test` pass cleanly.

**Blocked by:** 04 — Transport Playback, Keyboard Navigation & Persistence

**Status:** done

- [x] Removes unused legacy components (SysEx patch editor, old tab bar, obsolete panels)
- [x] Connects Google Fonts `Space Grotesk` and `IBM Plex Mono` in `index.html`
- [x] Implements the top brand header with logo SVG and breathing hardware status indicator
- [x] Implements responsive breakpoints (mobile, tablet, desktop) with horizontal scroll support for pad grid and step strip on small screens
- [x] Incorporates `prefers-reduced-motion` media queries for accessibility
- [x] Passes full TypeScript build/typecheck (`npm run typecheck`) and automated test suite (`npm test`)
