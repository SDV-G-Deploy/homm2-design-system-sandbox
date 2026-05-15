# SiteShellNavigationRecipe Narrow Contract / Proof Pass Report - 2026-05-15

This report was opened before implementation as the durable ledger for a bounded SiteShellNavigationRecipe pass.

## Scope

Create the smallest defensible proof surface for SiteShellNavigationRecipe so persistent headers, local section navigation, breadcrumbs and route shortcuts have an explicit secondary-support contract before broad generated sites rely on them.

## Intended Proof Level

Target proof level: narrow host-bound proof, not broad generated-site readiness.

The pass may show that a shell-navigation support layer can surround a primary recipe screen without becoming co-primary. It may not claim that all shell-heavy pages, dashboards, promo pages, search pages, applied sites or future generated sites are covered.

## In-Scope Hosts / Surfaces

- A new canonical proof fixture under `fixtures/` for SiteShellNavigationRecipe.
- Shell navigation roles:
  - persistent top utility navigation;
  - breadcrumb / chapter context;
  - local section navigation;
  - small route shortcuts around a primary recipe screen.
- One primary-family host inside the proof surface, with the primary frame explicitly marked and visually dominant.
- Stable selectors/hooks for static QA and later viewport checks.

## Out Of Scope

- Broad CSS rewrite.
- Reopening tranche-1 hero, dossier or feed host fixtures except for minimal attachment/proof needs if unavoidable.
- Claiming broad generated-site readiness.
- Promoting shell navigation to a primary family except when the screen's primary family is actually MenuScreenRecipe.
- Changing content-first sequencing or reworking SideRailMetadataRecipe proof.
- Applied-page cleanup in `fairy-journeys.html`.

## Verification Plan

- Static selector audit:
  - exactly one primary host frame per fixture state;
  - shell frames stay `secondary` or `tertiary`;
  - shell roles are addressable through stable `data-shell-role` selectors;
  - each fixture state declares one primary family.
- Sanity viewport check if feasible:
  - browser or local DOM check for no horizontal overflow at a narrow mobile width;
  - primary host remains present in the first viewport while shell support is compacted.
- Record any browser/local policy blocker explicitly instead of overstating proof.

## Implementation Notes

- Added `fixtures/site-shell-navigation-recipe.html` as the canonical narrow proof surface for this pass.
- The fixture includes two authored host-bound states:
  - `dossier-standard`: SiteShellNavigationRecipe around a `DossierReadingRecipe` primary host.
  - `feed-compact`: SiteShellNavigationRecipe around a `FeedListingRecipe` primary host under compact/long-label pressure.
- Added narrowly shared SiteShellNavigationRecipe hooks in `css/components.css`:
  - `.site-shell-navigation`
  - `.site-shell-topbar`
  - `.site-shell-brand`
  - `.site-shell-nav`
  - `.site-shell-breadcrumb`
  - `.site-shell-local-nav`
  - `.site-shell-route-shortcuts`
  - `.site-shell-host`
  - `.site-shell-primary-host`
- Added stable fixture selectors:
  - `data-recipe="site-shell-navigation"`
  - `data-fixture-state="dossier-standard|feed-compact"`
  - `data-proof-level="host-bound"`
  - `data-primary-family="DossierReadingRecipe|FeedListingRecipe"`
  - `data-shell-role="persistent-utility|utility-nav|breadcrumb|local-section-nav|primary-host-slot|route-shortcuts|brand-context"`
- Synced current status in:
  - `docs/recipe-family-map-2026-05-15.md`
  - `docs/generation-playbook-2026-05-15.md`
  - `docs/acceptance-qa-framework-2026-05-15.md`
  - `docs/design-system-operator-index-2026-05-15.md`

## Verification Evidence

- Static selector audit passed:
  - fixture states: `dossier-standard`, `feed-compact`;
  - primary host frames: 2;
  - shell frames marked primary: 0;
  - each fixture state declares exactly one primary host family;
  - shell roles are present and queryable through `data-shell-role`.
- `git diff --check` passed.
- OpenClaw host-browser navigation to local `file://` / `127.0.0.1` was blocked by policy, so viewport evidence used snap Chromium headless with a copied QA mirror under `/root/snap/chromium/current/homm2-shell-qa`.
- Chromium CDP mobile sanity at `390 x 844`:
  - viewport: `390 x 844`;
  - `scrollWidth=390`, `clientWidth=390`;
  - state count: 2;
  - shell primary count: 0;
  - first primary host family: `DossierReadingRecipe`;
  - first primary host top: `529px`, visible in first viewport;
  - compact support summaries visible: 2.
- Chromium CDP short desktop sanity at `1024 x 640`:
  - viewport: `1024 x 640`;
  - `scrollWidth=1009`, `clientWidth=1009`;
  - state count: 2;
  - shell primary count: 0;
  - first primary host family: `DossierReadingRecipe`;
  - first primary host top: `486px`, visible in first viewport.
- Screenshot artifacts were generated for local inspection under ignored QA output:
  - `tmp/site-shell-navigation-pass/site-shell-mobile-390x844.png`
  - `tmp/site-shell-navigation-pass/site-shell-short-desktop-1024x640.png`

## Remaining Gaps

- This is not broad generated-site readiness.
- This does not prove shell-heavy pages where persistent headers, breadcrumbs, account/status strips or route navigation approach primary first-screen weight.
- This does not prove the MenuScreenRecipe-primary exception where navigation/menu behavior may own the first viewport.
- This does not cover promo-heavy, utility/dashboard, ecommerce-like, search-heavy, form-heavy, regulated or safety-critical screens.
- This does not reopen or expand hero/dossier/feed broad readiness work; it only adds a narrow shell support proof around dossier/feed host states.


