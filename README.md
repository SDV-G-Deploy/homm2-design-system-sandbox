# HOMM2 Art Direction Sandbox

Public, project-agnostic HOMM2-inspired art-direction board and emerging design-system sandbox. Current state: **artifact-like scenes + token contract + living reference page + less-round fantasy direction evolving toward a heraldic main-menu feel, now stabilized with a menu-first adaptive layer across mobile / tablet / small desktop**.

## What this is

A browser-first sandbox that now has two layers: an atmosphere board for art direction and a small production-facing system layer for tokens, surfaces, type scale, and interactive states. It explores how an interface can feel embedded in a fantasy world through scene composition, material hierarchy, restrained ornament, and consequence-based magic accents.

North star: **Interface belongs to the world.**

Current direction label: **Heraldic Menu** — an old-kingdom fantasy interface with modern readability.

## What was achieved

- Reframed the sandbox from component inventory into three scenes: gate, dossier, ceremony.
- Added larger foreground / midground / background masses for a stronger sense of place.
- Clarified material grammar: parchment for reading, stone for structure, gold for value, mana for rare consequence.
- Reworked typography toward literary, legible, slightly formal tone without novelty fantasy fonts.
- Added mobile rhythm polish so the scenes remain readable on narrow screens.
- Shifted the shape language away from AI-round softness toward plaques, frames, bevels, and stronger panel anatomy.
- Clarified the next stylistic move toward heraldic framing, menu-like controls, and stricter geometry rather than softer web-card language.
- Refreshed the reference page so the demo-stand documents shape language and layout rhythm, not only colors/tokens.
- Rebalanced scene composition and spacing so hero, archive, ceremony, and reference sections hold together more cleanly across desktop and mobile.

## Still weak

- Reusable system layer is now seeded, but still incomplete: tokens and shared CSS are formalized, while broader component coverage is still partial.
- Accessibility is improved but not production-audited across contrast, states, and interaction patterns.
- Only one art-direction slice is represented; broader flows, empty states, errors, and dense content remain untested.
- Some visual depth relies on CSS illustration tricks that would need refinement before product use.

## Latest UX / UI pass

A focused layout cleanup pass tightened the demo in four places:

- **Hero / Gate:** separated the copy block and ledger so they no longer feel glued together.
- **Archive / Dossier:** improved spacing between rail, parchment dossier, and side notes; reduced oversized parchment weight.
- **Ceremony:** rebalanced copy vs ritual panel so the CTA block feels important without overpowering the scene.
- **Reference page:** tightened vertical rhythm and mobile specimen sizing to reduce dead space and overly tall blocks.

## Latest adaptive stabilization pass

The latest pass intentionally chose **adaptive stabilization over grid-first flattening**.

- Added a separate **menu-first adaptive layer** so the authored HoMM2 composition survives responsive transitions.
- Relaxed hard layout constraints that were making some states brittle.
- Added `min-width: 0` and containment-style protections to reduce overflow and collision risk.
- Improved transition behavior between **mobile / tablet / small desktop** widths.
- Added `fairy-journeys.html` plus its dedicated `css/fairy-journeys.css` as a live applied branch inside the sandbox.

Verified during the pass:

- widths checked: `360 / 768 / 1024 / 1180 / 1366`
- no critical horizontal overflow on the reviewed states
- `git diff --check` clean before commit

## Next logical pass

The next phase is a **design-system research refactor**: preserve the Heraldic Menu direction, but convert the current scene work into a stricter reusable system with a real operational reference, clearer component boundaries, and stronger mobile/action hierarchy.

Primary plan:
- `docs/design-system-research-plan-2026-05.md`

Focused page backlog:
- `docs/fairy-journeys-codex-task-list-v2.md`

## Direction guardrails

Preserve the fantasy-game menu pull, but do not drift into:

- parody retro or literal pixel-art cosplay
- glow on every interactive or premium surface
- soft SaaS pills and over-rounded card silhouettes
- decorative heraldry without hierarchy, state, or navigational purpose

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

### Unfreeze checklist

Unfreeze only if all items are true:

- the incident window has clearly cooled down
- no new GitHub Actions or Pages-related abuse pattern has appeared
- the workflow still deploys static files without dependency-install steps
- no suspicious repo changes appeared during the freeze window
- one manual deploy review is acceptable before restoring automation

Recommended unfreeze order:

1. inspect workflow diff and current repo state
2. restore `push` on `main` in `.github/workflows/deploy-pages.yml`
3. trigger one manual deploy and verify published output
4. watch for another 24 hours before treating auto-deploy as routine again

## Deployment

GitHub Pages deployment is currently manual-only via GitHub Actions `workflow_dispatch`.

Live URL: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/

## File structure

```txt
css/
  tokens.css           # canonical token contract (primitives / scales / semantic roles)
  components.css       # shared global and reusable UI layer
  scenes.css           # scene-specific art-direction compositions
  reference.css        # reference-page-only specimen layout
  fairy-journeys.css   # page-specific adaptive scene rules
index.html             # atmosphere board / sandbox scenes
reference.html         # living design-system reference page
fairy-journeys.html    # live applied branch / fairy-tale menu-first page
```

## How to read the repo

- Start with `reference.html` when you want the token contract and system specimens.
- Use `index.html` when you want the art-direction scenes and atmosphere pass.
- Treat `tokens.css` as the override surface for future themes / factions.
- Treat `components.css` as the place for reusable rules; keep scene illustration logic out of it.
