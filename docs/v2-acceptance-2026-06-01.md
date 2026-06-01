# V2 Acceptance Boundary - 2026-06-01

## Verdict

V2 is the recommended HoMM2 x Solarpunk design-system path for new work.

V1 and V1.1 remain useful research evidence, but they are no longer the canonical implementation layer.

## What V2 Fixes

- **Contrast:** V2 avoids the V1 failure mode where light text could land on light vellum or pale solar backgrounds.
- **Mobile navigation:** V2 uses a compact topbar and shorter route labels instead of large stacked command blocks.
- **Graphic strength:** V2 uses bounded asset roles (`solar-civic-gate`, `solar-badge`, `water-lens`, `vellum-grain`) instead of relying only on weak CSS scenery.
- **Content budget:** V2 proves Russian and English labels on narrow screens, including command text and status rows.
- **System portability:** V2 has a gateway, primitive board, applied dossier, real page trial, and dense control-board trial. It is not only a hero proof.

## Canonical V2 Surfaces

- `index.html` - public gateway that points to the current V2 path and marks V1 as archive.
- `v2/index.html` - mobile-first gateway.
- `v2/reference.html` - primitive board and material-role proof.
- `v2/dossier.html` - applied dossier proof.
- `v2/trial.html` - real page trial.
- `v2/control.html` - operational board trial.
- `v2/ant-school.html` - new-topic production trial.
- `css/v2.css` - shared V2 styling layer.
- `assets/v2/*` - bounded reusable asset motifs.
- `docs/v2-starter-kit-2026-06-01.md` - production recipes and content budgets.

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
- production-like mobile navigation uses short page routes and does not depend on horizontal scrolling for core actions
- Solarpunk appears as civic state, water focus, solar hardware, or living feedback, not as green decoration alone

## Demo Chrome vs Production Chrome

Technical labels are part of the design-system proof layer, not a permanent product requirement.

- Reference/proof pages may show content-budget chips to demonstrate RU/EN fit.
- Real product/service pages should convert those labels into actual product statuses or hide them.
- Sandbox navigation is allowed to link between proof pages, but a real product should expose only its own core routes.
- `v2-production-page` is the current class for this separation.

## Latest Added Proof

**V2 slice 06 - control board trial** adds a dense operational page with route filters, queue rows, summary metrics, water-lens inspection, and a separate command rail.

This improves the acceptance status from one real page trial to two different applied shapes: presentation/product and operational/tool.

## Next Recommended Pass

**V2 slice 09 - product theming audit.**

Audit ANT School against the starter kit and split reusable V2 patterns from page-local styling if the class set is stable enough.
