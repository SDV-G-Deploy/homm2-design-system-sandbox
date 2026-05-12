# HOMM2 Art Direction Sandbox

Public, project-agnostic HOMM2-inspired art-direction board and emerging design-system sandbox. Current state: **artifact-like scenes + token contract + living reference page + less-round fantasy direction**.

## What this is

A browser-first sandbox that now has two layers: an atmosphere board for art direction and a small production-facing system layer for tokens, surfaces, type scale, and interactive states. It explores how an interface can feel embedded in a fantasy world through scene composition, material hierarchy, restrained ornament, and consequence-based magic accents.

North star: **Interface belongs to the world.**

## What was achieved

- Reframed the sandbox from component inventory into three scenes: gate, dossier, ceremony.
- Added larger foreground / midground / background masses for a stronger sense of place.
- Clarified material grammar: parchment for reading, stone for structure, gold for value, mana for rare consequence.
- Reworked typography toward literary, legible, slightly formal tone without novelty fantasy fonts.
- Added mobile rhythm polish so the scenes remain readable on narrow screens.
- Shifted the shape language away from AI-round softness toward plaques, frames, bevels, and stronger panel anatomy.
- Refreshed the reference page so the demo-stand documents shape language and layout rhythm, not only colors/tokens.

## Still weak

- Reusable system layer is now seeded, but still incomplete: tokens and shared CSS are formalized, while broader component coverage is still partial.
- Accessibility is improved but not production-audited across contrast, states, and interaction patterns.
- Only one art-direction slice is represented; broader flows, empty states, errors, and dense content remain untested.
- Some visual depth relies on CSS illustration tricks that would need refinement before product use.

## Next logical pass

Deepen the reusable layer further: expand semantic token coverage, add forms/tables/badges, test denser archival screens, run accessibility checks, and continue reducing any leftover generic web-card thinking.

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
  tokens.css      # canonical token contract (primitives / scales / semantic roles)
  components.css  # shared global and reusable UI layer
  scenes.css      # scene-specific art-direction compositions
  reference.css   # reference-page-only specimen layout
index.html        # atmosphere board / sandbox scenes
reference.html    # living design-system reference page
```

## How to read the repo

- Start with `reference.html` when you want the token contract and system specimens.
- Use `index.html` when you want the art-direction scenes and atmosphere pass.
- Treat `tokens.css` as the override surface for future themes / factions.
- Treat `components.css` as the place for reusable rules; keep scene illustration logic out of it.
