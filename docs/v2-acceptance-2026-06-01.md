# V2 Acceptance Boundary - 2026-06-01

## Verdict

V2 is the recommended HoMM2 x Solarpunk design-system path for new work.

V1 and V1.1 remain useful research evidence, but they are no longer the canonical implementation layer.

## What V2 Fixes

- **Contrast:** V2 avoids the V1 failure mode where light text could land on light vellum or pale solar backgrounds.
- **Mobile navigation:** V2 uses a compact topbar and shorter route labels instead of large stacked command blocks.
- **Graphic strength:** V2 uses bounded asset roles (`solar-civic-gate`, `solar-badge`, `water-lens`, `vellum-grain`) instead of relying only on weak CSS scenery.
- **Content budget:** V2 proves Russian and English labels on narrow screens, including command text and status rows.
- **System portability:** V2 has a gateway, primitive board, applied dossier, launch page, dense control board, ANT School production example, compact service/booking example, and real article/dossier site. It is not only a hero proof.

## Canonical V2 Surfaces

- `index.html` - public gateway that points to the current V2 path and marks V1 as archive.
- `v2/index.html` - mobile-first gateway.
- `v2/reference.html` - primitive board and material-role proof.
- `v2/dossier.html` - applied dossier proof.
- `v2/trial.html` - launch/product page recipe.
- `v2/control.html` - operational board recipe.
- `v2/ant-school.html` - new-topic production example.
- `v2/canopy-clinic.html` - compact service/booking recipe.
- `starters/v2-site-starter/index.html` - copyable V2 landing starter.
- `sites/ant-school-landing-v2/index.html` - first real-site proof built from the V2 starter path.
- `sites/product-map-field-note/index.html` - production dossier/article proof for an ANT-adjacent field note.
- `css/v2.css` - compatibility entrypoint for the split V2 styling layer.
- `css/v2.tokens.css`, `css/v2.shell.css`, `css/v2.components.css`, `css/v2.reference.css`, `css/v2.recipes.css`, `css/v2.responsive.css` - authoring layers.
- `assets/v2/*` - bounded reusable asset motifs.
- `assets/v2/threshold-ant-guild.svg`, `assets/v2/badge-product-map.svg`, `assets/v2/instrument-readiness-lens.svg` - first asset-pass motifs.
- `docs/v2-starter-kit-2026-06-01.md` - production recipes and content budgets.
- `docs/v2-asset-production-kit-2026-06-02.md` - non-HTML asset roles, generation briefs, formats, optimization, and visual QA.

## Archive Boundary

The following pages must not be treated as current canonical system surfaces:

- `v1-archive.html`
- `solarpunk.html`
- `fairy-journeys.html`
- older V1/V1.1 night-run reports

They can be used for comparison, archaeology, and pressure checks. New implementation should start from V2 unless a pass explicitly says otherwise.

## Required Gates For Future V2 Work

- `node tools/regression-smoke.js`
- visual capture on changed V2 pages at desktop, mobile, and narrow mobile
- no horizontal overflow
- compact nav remains under the V2 topbar budget
- no clipped or awkward RU/EN labels
- production-like pages do not show proof/debug labels as first-viewport UI
- production-like pages do not expose proof/trial/reference vocabulary in customer-facing copy
- production-like mobile navigation uses short page routes and does not depend on horizontal scrolling for core actions
- Solarpunk appears as civic state, water focus, solar hardware, or living feedback, not as green decoration alone
- new PNG/WebP/SVG assets follow the V2 asset production kit and are tested in their actual page slots

## Demo Chrome vs Production Chrome

Technical labels are part of the design-system proof layer, not a permanent product requirement.

- Reference/proof pages may show content-budget chips to demonstrate RU/EN fit.
- Real product/service pages should convert those labels into actual product statuses or hide them.
- Sandbox navigation is allowed to link between proof pages, but a real product should expose only its own core routes.
- `v2-production-page` is the current class for this separation.
- Customer-facing copy should use product nouns such as signal, route, desk, map, result, status, readiness, launch, and queue.

## Latest Added Surface

**V2 slice 06 - control board** adds a dense operational page with route filters, queue rows, summary metrics, water-lens inspection, and a separate command rail.

This improves the acceptance status from one launch page to two different applied shapes: presentation/product and operational/tool.

## Latest Boundary Pass

**V2 slice 09 - production vocabulary and CSS boundary.**

This pass removes visible demo/proof vocabulary from production-like pages and adds `docs/v2-css-boundary-2026-06-01.md` as the extraction map for splitting `css/v2.css` after one more stable production recipe.

## Latest Service Recipe

**V2 slice 10 - Canopy Clinic service recipe.**

This pass adds a lighter service/booking page with product-local navigation, compact first screen, care route, visit signal, and booking ledger. It is the first V2 recipe meant to test a local service flow rather than a school, launch page, dossier, or control board.

## Latest CSS Split

**V2 slice 11 - physical CSS split.**

This pass keeps `css/v2.css` as the stable page-facing URL and moves authoring into six ordered files: tokens, shell, shared components, reference-only layer, page recipes, and responsive contracts.

## Latest Asset Boundary

**V2 asset production kit.**

This pass defines the controlled production path for non-HTML visual elements: threshold assets, surface textures, object UI motifs, water-lens instruments, page-recipe hero details, naming, format rules, optimization gates, and a first asset backlog.

## Latest Article / Dossier Site

**Product Map Field Note.**

This pass adds a real production dossier/article page under `sites/product-map-field-note/`. It checks the reading-heavy recipe outside the sandbox path with short production navigation, a field-note article body, product-map route rows, readiness lens, and one action ledger.
