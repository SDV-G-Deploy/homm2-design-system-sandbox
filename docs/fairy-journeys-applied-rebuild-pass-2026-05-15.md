# fairy-journeys applied rebuild pass - 2026-05-15

## Status

Completed bounded applied rebuild for `fairy-journeys.html`.

This artifact was created before implementation work, then refined after the static and viewport smoke checks. The pass stays scoped to the applied page and its page-local stylesheet.

## Files changed

- `fairy-journeys.html`
- `css/fairy-journeys.css`
- `docs/fairy-journeys-applied-rebuild-pass-2026-05-15.md`

No shared component hooks were added. `index.html`, `reference.html`, README and canonical fixtures were not changed.

## Recipe stack used on the page

Primary first screen:

- `ArticleHeroRecipe`
- Root hook: `data-recipe="article-hero"`
- Primary frame: hero copy block with `data-frame-rank="primary"`
- Hostile-but-plausible content: disputed guide, unreliable map, debt-like metadata, not promo copy

Continuation recipes:

- `DossierReadingRecipe`
  - Root hook: `data-recipe="dossier-reading"`
  - Primary frame: `.parchment-object.fairy-reading[data-frame-rank="primary"]`
  - Support: archive rail and tertiary notes
- `FeedListingRecipe`
  - Root hook: `data-recipe="feed-listing"`
  - Primary frame: `.fairy-feed-main[data-frame-rank="primary"]`
  - Support: secondary filter rail and summary cue

Support-only recipes:

- `SideRailMetadataRecipe`
  - Used only through `data-support-recipe="side-rail-metadata"`
  - Appears as hero metadata rail, dossier archive rail and feed filter rail
  - Each support rail has a `recipe-support-summary` and collapse hook where relevant
- `SiteShellNavigationRecipe`
  - Used only through `.site-shell-navigation.fairy-shell[data-support-recipe="site-shell-navigation"]`
  - Header/breadcrumb stays secondary and does not own the first screen

Removed old drift:

- Removed the prior menu-stack/page-shell composition from `fairy-journeys.html`
- Removed page-local menu classes from `css/fairy-journeys.css`: old `game-menu-stack`, `menu-screen-shell`, `command-slab`, `menu-keep`, status rail and command rail styling are no longer part of the page

## Verification run

Static sanity:

```text
PASS article hero root
PASS dossier root
PASS feed root
PASS site shell support
PASS side rail support
PASS support summaries
PASS frame rank primaries
PASS frame rank secondaries
PASS old menu stack removed
```

Selector/hook count check:

```text
rg data-recipe/data-primary-recipe/data-support-recipe/data-frame-rank/recipe-support-summary/recipe-state-cue fairy-journeys.html -> 27 matching hook lines
```

Old menu drift check:

```text
rg "game-menu-stack|menu-screen-shell|command-slab|menu-keep|fairy-menu-scene|status-rail|command-rail-shell" fairy-journeys.html css/fairy-journeys.css
# no matches
```

Viewport smoke:

- Local server: `python3 -m http.server 8123 --bind 127.0.0.1`
- Mobile smoke: Chromium headless screenshot at `390x844`
  - Rendered nonblank image: `390x844`, mean RGB approximately `(50.0, 40.5, 28.7)`
  - First screen shows the secondary shell, breadcrumb, dominant ArticleHero title/summary/actions and beginning of support metadata without horizontal clipping observed in the screenshot.
- Desktop-short smoke: Chromium headless screenshot at `1024x640`
  - Rendered nonblank image: `1024x640`, mean RGB approximately `(38.0, 30.7, 24.0)`
  - First screen is dominated by ArticleHero content; shell navigation remains a thin support layer and primary action controls are visible at the lower edge.

Notes:

- The OpenClaw browser tool rejected direct navigation to the local URL with a policy block, so the smoke check used local Chromium headless screenshots instead.
- Chromium emitted snap/dbus/VAAPI warnings, but screenshots were written successfully.

## Regressions and risks still open

- This is still an applied smoke page. It does not promote `fairy-journeys.html` to canonical fixture status.
- The page proves only one article -> dossier -> feed composition and does not cover every applied-page archetype.
- The visual art is CSS-native and bounded to a tertiary hero slot; it was not expanded into an asset proof pass.
- No broad shell-heavy, filter-heavy or utility-dashboard behavior is claimed from this pass.
- No automated pixel regression suite was added.

## Ready state

Ready for commit as a bounded applied rebuild pass.

A second bounded cleanup pass is not required for the recipe-stack objective. Future follow-up would be visual polish or expanded applied-page coverage, not a blocker for this pass.

