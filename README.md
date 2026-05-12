# HOMM2 Art Direction Sandbox

Public, project-agnostic HOMM2-inspired art-direction board. Current state: **final critique closeout after Art Direction Pass 02, typography, and mobile polish**.

## What this is

A browser-only atmosphere board, not a product UI kit. It explores how an interface can feel embedded in a fantasy world through scene composition, material hierarchy, restrained ornament, and consequence-based magic accents.

North star: **Interface belongs to the world.**

## What was achieved

- Reframed the sandbox from component inventory into three scenes: gate, dossier, ceremony.
- Added larger foreground / midground / background masses for a stronger sense of place.
- Clarified material grammar: parchment for reading, stone for structure, gold for value, mana for rare consequence.
- Reworked typography toward literary, legible, slightly formal tone without novelty fantasy fonts.
- Added mobile rhythm polish so the scenes remain readable on narrow screens.
- Final small closeout fixes: clearer closeout labeling, keyboard focus visibility, reduced-motion handling, and docs.

## Still weak

- Not yet a reusable design system: component rules and tokens are implied, not formalized.
- Accessibility is improved but not production-audited across contrast, states, and interaction patterns.
- Only one art-direction slice is represented; broader flows, empty states, errors, and dense content remain untested.
- Some visual depth relies on CSS illustration tricks that would need refinement before product use.

## Next logical pass

Translate the art direction into a small production-facing kit: tokens, type scale, surface recipes, button / panel / nav states, accessibility checks, and 2-3 realistic dense screens.

## Local preview

Open `index.html` directly or serve the folder with any static server:

```sh
python3 -m http.server 4173
```

## Temporary deploy safety note (2026-05-12)

During the active npm supply-chain incident review, GitHub Pages deployment was temporarily changed from automatic `push` on `main` to **manual `workflow_dispatch` only**.

Reason:

- reduce exposure from automatic remote workflow execution during the incident window
- keep deploy available for explicit operator-triggered runs only

Current temporary rule:

- `.github/workflows/deploy-pages.yml` must stay manual-only until the incident window is considered cleared

Before restoring automatic deploys:

- re-check current incident status
- confirm the repo still does not require dependency-install steps for Pages deploy
- then restore normal triggers intentionally in git history

## Deployment

GitHub Pages deployment is currently manual-only via GitHub Actions `workflow_dispatch`.

Live URL: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/
