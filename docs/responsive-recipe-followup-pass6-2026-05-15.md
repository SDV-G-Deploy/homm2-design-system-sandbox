# Responsive Recipe Follow-up Pass 6 - 2026-05-15

## Scope

Bounded follow-up for residual risks after Pass 5. This pass checks compatibility and contract clarity only; it is not a broad polish or demo-page pass.

## Source Artifacts Reviewed

- [x] `docs/responsive-recipe-shared-hooks-pass4-2026-05-15.md`
- [x] `docs/responsive-recipe-viewport-qa-pass5-2026-05-15.md`
- [x] `docs/responsive-recipe-implementation-mapping-2026-05-15.md`

## Residual Risks / Open Questions

Reviewed residuals from Pass 4, Pass 5 and the implementation mapping:

- Canonical target selection: resolved. `fixtures/menu-screen-recipe.html` exists and is the canonical MenuScreenRecipe regression target.
- `fairy-journeys.html#menu-shell`: intentionally remains a bridge smoke target, not a contract fixture or polish target.
- Fixture path/deploy assumption: resolved for current repo. GitHub Pages uploads `path: .`, so `fixtures/menu-screen-recipe.html` is included by the static deployment artifact.
- Density API ambiguity: resolved enough for this slice. Data attributes are the durable fixture/test API; classes remain supported for author ergonomics.
- Frame-rank API ambiguity: resolved enough for this slice. `data-frame-rank` is the durable selector for tests; `.recipe-frame-*` classes remain CSS-authoring helpers.
- Forced hide behavior: clarified by Pass 5 fix. `.recipe-compact-hidden`, `.recipe-emergency-hidden` and summary detail hiding are forced density-state hooks and intentionally beat page-local display rules.
- Existing page-local sub-12px rules in `css/fairy-journeys.css` and older shared component areas are still broader cleanup debt. They are not part of this bounded slice unless they break the canonical fixture or the `#menu-shell` smoke target.

## Checks

Static hook and compatibility checks:

- Grepped `css/tokens.css`, `css/components.css`, `fixtures/menu-screen-recipe.html` and `fairy-journeys.html` for:
  - `recipe-density`, `data-recipe-density`
  - `recipe-compact-hidden`, `recipe-emergency-hidden`
  - `recipe-support-summary`, `recipe-state-cue`
  - `recipe-frame-*`, `data-frame-rank`
  - `recipe-title`, `recipe-label`, `recipe-metadata`, `visually-hidden`
- Re-read shared hook definitions around:
  - `css/tokens.css` responsive contract tokens;
  - `css/components.css` shared recipe hooks;
  - `css/components.css` MenuScreenRecipe container-query fallback.
- Confirmed fixture states:
  - `standard`, `compact`, `emergency`, `stress`
  - each fixture state has `data-recipe="menu-screen"`;
  - each fixture state has a valid `data-recipe-density`;
  - each fixture state also carries the matching density class;
  - each fixture state has exactly one `data-frame-rank="primary"` command slab.
- Confirmed accessible reference integrity in the fixture:
  - no missing `aria-labelledby` or `aria-describedby` ids.
- Smoke-checked `fairy-journeys.html#menu-shell` selector compatibility:
  - `.menu-screen-shell`
  - `.menu-center-mount`
  - `.command-slab`
  - `.menu-side-rail`
  - `.menu-route-index`
  - one primary applied command and five authored menu commands.
- Smoke-checked static serving:
  - `/fixtures/menu-screen-recipe.html` returns 200 from a local static server;
  - `/fairy-journeys.html` returns 200;
  - `/css/tokens.css` returns 200;
  - `/css/components.css` returns 200.
- Confirmed deploy assumption:
  - `.github/workflows/deploy-pages.yml` uploads `path: .`, so the fixture directory is within the Pages artifact.

## Fixes

No code fix landed in Pass 6.

Reason: checks found no new defect in the canonical fixture, forced density hooks, path/deploy assumptions, or bridge smoke surface. The remaining density/rank wording is now captured here as a contract clarification, without changing CSS or page markup.

## Stabilized

- Canonical MenuScreenRecipe fixture location and role.
- Hybrid density API:
  - `data-recipe-density` for deterministic fixtures/tests;
  - `.recipe-density-*` classes for author ergonomics.
- Hybrid frame-rank API:
  - `data-frame-rank` for deterministic tests;
  - `.recipe-frame-*` classes for CSS ergonomics.
- Forced density hide hooks:
  - `.recipe-compact-hidden`;
  - `.recipe-emergency-hidden`;
  - `.recipe-support-panel[data-recipe-collapse="summary"] .recipe-support-detail`.
- Static deploy compatibility for the fixture path.
- `fairy-journeys.html#menu-shell` as compatibility smoke target only.

## Intentionally Deferred

- Broad `fairy-journeys.html` or `css/fairy-journeys.css` typography cleanup.
- Promoting `fairy-journeys.html` to canonical regression status.
- A repeatable CDP/browser harness script for future viewport passes.
- One-state-per-route screenshot pages for cleaner visual diffs.
- ReferenceManualRecipe table/card behavior.
- Any content-budget automation in CSS.

## Decision

Recommendation: close this slice.

The responsive recipe layer is ready to leave bounded-pass mode for MenuScreenRecipe. Future work should be normal targeted maintenance: add a reusable viewport harness when needed, and open separate narrow passes for applied-page cleanup or additional recipe families.
