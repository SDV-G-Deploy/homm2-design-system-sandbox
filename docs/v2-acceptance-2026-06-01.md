# V2 Acceptance Boundary - 2026-06-01

## Verdict

V2 is the recommended HoMM2 x Solarpunk design-system path for new work.

V1 and V1.1 remain useful research evidence, but they are no longer the canonical implementation layer.

## What V2 Fixes

- **Contrast:** V2 avoids the V1 failure mode where light text could land on light vellum or pale solar backgrounds.
- **Mobile navigation:** V2 uses a compact topbar and shorter route labels instead of large stacked command blocks.
- **Graphic strength:** V2 uses bounded asset roles (`solar-civic-gate`, `solar-badge`, `water-lens`, `vellum-grain`) instead of relying only on weak CSS scenery.
- **Content budget:** V2 proves Russian and English labels on narrow screens, including command text and status rows.
- **System portability:** V2 has a gateway, primitive board, applied dossier, and real page trial. It is not only a hero proof.

## Canonical V2 Surfaces

- `index.html` - public gateway that points to the current V2 path and marks V1 as archive.
- `v2/index.html` - mobile-first gateway.
- `v2/reference.html` - primitive board and material-role proof.
- `v2/dossier.html` - applied dossier proof.
- `v2/trial.html` - real page trial.
- `css/v2.css` - shared V2 styling layer.
- `assets/v2/*` - bounded reusable asset motifs.

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
- Solarpunk appears as civic state, water focus, solar hardware, or living feedback, not as green decoration alone

## Next Recommended Pass

**V2 slice 06 - second real page trial.**

Build a second applied page with a different structure from `v2/trial.html`, then decide whether V2 is ready to become a reusable starter kit rather than a sandbox.
