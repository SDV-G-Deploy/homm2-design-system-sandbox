# HOMM2 Art Direction Sandbox

Public, project-agnostic HOMM2-inspired art-direction board and emerging design-system sandbox. Current state: **artifact-like scenes + token contract + living reference page + less-round fantasy direction evolving toward a heraldic main-menu feel, now stabilized with a menu-first adaptive layer across mobile / tablet / small desktop**.

## What this is

A browser-first sandbox that now has two layers: an atmosphere board for art direction and a small production-facing system layer for tokens, surfaces, type scale, and interactive states. It explores how an interface can feel embedded in a fantasy world through scene composition, material hierarchy, restrained ornament, and consequence-based magic accents.

North star: **Interface belongs to the world.**

Current direction label: **Heraldic Menu** — an old-kingdom fantasy interface with modern readability.

## Applied implementation target

The live applied product site is `../YourInsideQuest`.

This sandbox remains the upstream design-system/reference source. Changes here should be reconciled intentionally into `YourInsideQuest`; they are not automatically synced.

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

## Latest applied-page rebuild

The latest pass moved `fairy-journeys.html` away from the older menu-first bridge composition and rebuilt it as a bounded applied page on top of the current recipe stack.

- First screen now uses **ArticleHeroRecipe** as the primary recipe.
- Continuation sections use **DossierReadingRecipe** and **FeedListingRecipe**.
- **SideRailMetadataRecipe** and **SiteShellNavigationRecipe** remain support-only.
- The page keeps its own `css/fairy-journeys.css` and does not add new shared hooks.

Verified during the pass:

- static recipe-hook sanity
- Chromium headless smoke at `390x844` and `1024x640`
- `git diff --check` clean before commit

## Current reality after the documentation + proof program

The repo now has a stronger split between canonical proof surfaces and applied pages.

What is now true:
- canonical fixtures exist for **ArticleHeroRecipe**, **DossierReadingRecipe**, **FeedListingRecipe**, and **MenuScreenRecipe**
- bounded host-bound proof exists for **SideRailMetadataRecipe** and **SiteShellNavigationRecipe**
- `fairy-journeys.html` has been rebuilt as an applied smoke page that follows the ratified content-first recipe stack

What is **not** true yet:
- applied pages still do not replace canonical fixtures as proof
- broad shell-heavy, dashboard-heavy, promo-heavy, or search-heavy page families are not generally proven
- future applied pages can still drift if they ignore the documented recipe/budget rules

So the current state should be treated as:
**proof-backed for the covered fixture slices, with applied-page work now starting to align to that proof.**

## Next logical pass

The next phase is **fixture debt + regression harness**: promote reusable patterns discovered in applied work only through canonical fixtures, then make the smoke checks repeatable.

Current priority order:

- promote the Fairy Journeys indexed FeedListing row / badge pattern into canonical fixture evidence if it should become reusable
- keep SideRail and SiteShell support-only unless a new host-bound proof pass expands them
- build a small repeatable viewport/static harness for canonical fixtures and selected smoke pages

Operator entry point:
- `docs/design-system-operator-index-2026-05-15.md`

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

## Regression smoke

Run the dependency-free smoke harness before/after recipe or applied-page layout changes:

```sh
node tools/regression-smoke.js
```

It starts a local static server, launches headless Chromium, checks static ARIA references, page-level overflow, primary-surface placement, Fairy nav one-line labels, and the indexed FeedListing row track across `1440x900`, `390x844`, and `360x740`.

## Deploy status

GitHub Pages deployment is live again on both:

- `push` to `main`
- manual `workflow_dispatch`

The workflow stays static-only:

- no dependency install
- artifact upload is the repo contents
- deploy target is GitHub Pages

If deployment policy changes again, update both `.github/workflows/deploy-pages.yml` and this section in the same commit.

## Deployment

Current default: push to `main` and wait for the Pages workflow to publish.

Live URL: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/

## Current system checkpoint

Latest completed checkpoint: **documentation consolidation + tranche-1 canonical host proof + bounded support proofs + first applied rebuild + reference operator mode**.

Current entry point:

- `docs/design-system-operator-index-2026-05-15.md`

What now exists at the system level:

- shared tokens in `css/tokens.css`
- shared recipe hooks in `css/components.css`
- canonical fixtures for `menu-screen`, `article-hero`, `dossier-reading`, `feed-listing`, and narrow `site-shell-navigation`
- proof and acceptance artifacts for the documented recipe slices
- one rebuilt applied smoke page in `fairy-journeys.html`
- reference quick operator mode in `reference.html#operator-mode`

Current recommendation:

- treat canonical fixtures and pass reports as the proof source of truth
- treat applied pages as smoke/pressure surfaces unless a later pass explicitly promotes broader proof
- use the operator index before long implementation or audit passes so older pass reports do not look equally current

## File structure

```txt
css/
  tokens.css           # canonical token contract (primitives / scales / semantic roles)
  components.css       # shared global and reusable UI layer
  scenes.css           # scene-specific art-direction compositions
  reference.css        # reference-page-only specimen layout
  fairy-journeys.css   # page-specific applied-page rules for the fairy-journeys smoke surface
fixtures/
  menu-screen-recipe.html  # canonical responsive recipe regression fixture
  article-hero-recipe.html
  dossier-reading-recipe.html
  feed-listing-recipe.html
  site-shell-navigation-recipe.html
index.html             # atmosphere board / sandbox scenes
reference.html         # living design-system reference page
fairy-journeys.html    # bounded applied smoke page using article hero + dossier + feed stack
```

## How to read the repo

- Start with `docs/design-system-operator-index-2026-05-15.md` when you need the current proof status, reading path, or next work order.
- Use `reference.html` when you want the token contract, system specimens, and quick operator reminder.
- Use `index.html` when you want the art-direction scenes and atmosphere pass.
- Use `fixtures/*.html` when you want the canonical proof surfaces and regression fixtures.
- Treat `tokens.css` as the override surface for future themes / factions.
- Treat `components.css` as the place for reusable rules; keep scene illustration logic out of it.
