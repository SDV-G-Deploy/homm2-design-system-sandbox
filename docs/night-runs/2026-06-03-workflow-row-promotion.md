# Workflow Row Promotion - 2026-06-03

## Verdict

PASS - promote one narrow app-like workflow row helper:

- `.v2-workflow-rows`
- `.v2-workflow-row`

This is a component promotion, not a semantic merge. The helper owns only the repeated row layout, text stack, status-chip placement, surface treatment, and desktop/mobile row reflow.

## Evidence Surfaces

Compared production-like app surfaces:

- `sites/client-work-queue/index.html`
- `sites/delivery-review-board/index.html`

Both repeated the same anatomy:

- status sprite mark at the row lead;
- one content block with eyebrow, title, and detail text;
- one short state chip;
- mobile layout with chip below the content block;
- desktop layout with chip at the right edge;
- same dark solar-civic row material treatment.

The prior independent audit deferred Client Work Queue rows until another app-like surface repeated the same anatomy. Delivery Review Board now supplies that second pressure: shipped artifacts, visual acceptance, residual risk, and archive handoff instead of active client tasks and blockers.

## Promoted Scope

The shared helper owns:

- row-list grid gap and top spacing;
- row grid columns, gap, padding, border, radius, and background;
- lead/content/state-chip placement;
- typography for eyebrow, title, detail, and state chip;
- desktop three-column reflow for the state chip.

## Explicit Non-Scope

The helper does not own:

- task, blocker, delivery, acceptance, archive, or handoff semantics;
- row copy or state vocabulary;
- panel layout, hero layout, note cards, proof/archive grids, or command rails;
- status-mark variants;
- page-local namespaces `.v2-workqueue-*` and `.v2-delivery-*`.

Both pages keep their local row classes alongside the shared helper class so later page-specific refinements can remain local without breaking the component contract.

## Files Changed

- `css/v2.components.css` - added `.v2-workflow-rows` and `.v2-workflow-row`.
- `css/v2.recipes.css` - removed duplicated Work Queue and Delivery row layout blocks.
- `css/v2.responsive.css` - moved desktop row reflow to `.v2-workflow-row`.
- `sites/client-work-queue/index.html` - added shared helper classes beside local classes.
- `sites/delivery-review-board/index.html` - added shared helper classes beside local classes.

## Acceptance Notes

This should not be widened into a generic card/list primitive. The name `workflow-row` is intentionally narrower than `row`, `list-item`, or `state-row`. It fits dense app-like operational records with a sprite mark, text stack, and state chip.

Package Ledger cards remain page-local. This pass does not affect commercial card promotion gates.

During screenshot review, the first extracted helper was layout-correct but visually too pale on the sun-vellum ledger surface. The promoted row material was strengthened in `css/v2.components.css` so the small detail text remains readable on mobile row-focused captures.

## Verification

Passed before closeout:

- `git diff --check`: PASS
- `node --check tools/regression-smoke.js`: PASS
- `node tools/regression-smoke.js`: PASS, 28 targets across desktop/mobile/narrow
- full-page visual capture for Client Work Queue and Delivery Review Board: PASS, 0 offenders at 1440x900, 390x844, and 360x740
- row-focused visual capture for both row lists: PASS, 0 offenders at 390x844 and 360x740

Capture output:

- `tmp/workflow-row-promotion-2026-06-03/client-work-queue/`
- `tmp/workflow-row-promotion-2026-06-03/delivery-review-board/`
- `tmp/workflow-row-promotion-2026-06-03/client-work-queue-rows/`
- `tmp/workflow-row-promotion-2026-06-03/delivery-review-board-rows/`

## Next Candidate

Do not promote another row family by default. The next useful audit is either:

- a package-card audit after a second commercial surface repeats package anatomy; or
- a broader checkpoint comparing all promoted helpers against package-readiness gates.
