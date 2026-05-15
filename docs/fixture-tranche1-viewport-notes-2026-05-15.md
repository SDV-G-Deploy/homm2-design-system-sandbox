# Fixture Tranche 1 Viewport Notes - 2026-05-15

## Scope

Quick viewport evidence notes for the first canonical host fixture tranche:

- `fixtures/article-hero-recipe.html`
- `fixtures/dossier-reading-recipe.html`
- `fixtures/feed-listing-recipe.html`

This is not a full Pass 5/Pass 6 QA matrix. It is a bounded implementation-pass sanity check after writing the fixtures.

## Method

- Rendered locally with headless Chromium.
- Viewports checked during this pass:
  - desktop `1440 x 900`
  - mobile `390 x 844`
- Used rendered screenshots to catch first-screen hierarchy failures that static grep could not catch.

## Observations

### ArticleHeroRecipe

- Desktop:
  - clean state shows one dominant hero copy frame, supporting art, and visible handoff below.
  - primary title no longer clips via shared `recipe-title` line clamp.
- Mobile:
  - initial implementation incorrectly let art appear before readable hero copy.
  - bounded fix applied: mobile fixture now hides the art surface and keeps copy + handoff ahead of metadata.
  - first-screen now shows the primary hero block before support.

### DossierReadingRecipe

- Desktop:
  - parchment field remains visually dominant over rail and notes.
  - primary title no longer clips via shared `recipe-title` line clamp.
- Mobile:
  - first readable block remains visible before rail/detail expansion.
  - support surfaces do not appear to overtake the parchment field in the checked clean state.

### FeedListingRecipe

- Desktop:
  - heading and first rows establish a scan path; filters stay secondary.
  - primary feed title no longer clips via shared `recipe-title` line clamp.
- Mobile:
  - initial implementation let the filter panel occupy too much first-screen height.
  - bounded fix applied: mobile order now keeps feed heading and first result row above the filter block.
  - first visible row now appears in the first viewport in the checked clean state.

## Limits

- This pass checked representative rendered states, not every fixture state at every viewport.
- No automated per-state screenshot inventory was written into the repo.
- Headless Chromium screenshots were generated in a snap-private temp location, so they were used for live verification only and are not treated as durable repo artifacts.

## Follow-up

- A fuller QA pass should still run the formal host-fixture matrix across all required hostile and density states.
- SideRail host-bound proof was intentionally not started in this tranche.
