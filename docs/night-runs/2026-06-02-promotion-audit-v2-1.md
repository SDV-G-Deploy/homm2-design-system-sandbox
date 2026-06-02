# V2 Promotion Audit v2.1 - 2026-06-02

## 1. Verdict

Promote one additional pattern now: the compact sprite status mark.

The evidence is narrow but solid after the `Agent Readiness Ledger` pass:

- `sites/build-brief-desk/index.html` used page-local `.v2-brief-status-mark` plus task/gate/note variants in the output proof grid.
- `sites/agent-readiness-ledger/index.html` used page-local `.v2-agent-step-mark` plus scope/gate/note variants in the ledger proof grid.
- Both patterns point to the same sprite asset: `assets/v2/sprite-route-status.webp`.
- Both patterns have the same job: a small non-text visual marker beside a concrete production-readiness row.

Promoted shared component:

- `.v2-status-mark`
- `.v2-status-mark-task`
- `.v2-status-mark-scope`
- `.v2-status-mark-gate`
- `.v2-status-mark-note`

Do not promote hero shells, page output rails, handoff ledgers, meter panels, or asset gallery preview wrappers in this pass.

## 2. Comparison Table

| Pattern | Build Brief Desk | Agent Readiness Ledger | Decision |
| --- | --- | --- | --- |
| Sprite status mark | `.v2-brief-status-mark`, `.v2-brief-status-task`, `.v2-brief-status-gate`, `.v2-brief-status-note` | `.v2-agent-step-mark`, `.v2-agent-step-scope`, `.v2-agent-step-gate`, `.v2-agent-step-note` | Promote. Same asset, same compact row-marker role, same gate/note semantics. |
| State meter slot | `.v2-brief-meter-strip` inside a side instrument | `.v2-agent-meter picture` inside a meter panel | Defer. Same asset family, but wrapper role and panel composition differ. |
| Output/proof grid | `.v2-brief-output-grid` with object cutout and numbered rows | `.v2-agent-proof-grid` with short readiness rows | Defer. The rows are related, but grid content and surrounding section differ. |
| Handoff/CTA ending | `.v2-brief-output` with command | `.v2-agent-handoff` inside `.v2-ledger` | Defer. Page endings are still recipe-specific. |
| Hero shell | `.v2-brief-hero` | `.v2-agent-hero` | Defer. Slots differ: readiness card versus seal object. |

## 3. Safe Promotion Candidate

Current classes removed from recipe CSS:

- `.v2-brief-status-mark`
- `.v2-brief-status-task`
- `.v2-brief-status-gate`
- `.v2-brief-status-note`
- `.v2-agent-step-mark`
- `.v2-agent-step-scope`
- `.v2-agent-step-gate`
- `.v2-agent-step-note`

Shared classes added to `css/v2.components.css`:

- `.v2-status-mark`
- `.v2-status-mark-task`
- `.v2-status-mark-scope`
- `.v2-status-mark-gate`
- `.v2-status-mark-note`

Reason:

This is not a generic badge abstraction. It is a bounded Images 2.0 sprite component: one known asset, four cells, and one production role. The shared CSS keeps page recipes free to decide where the marks appear.

## 4. Deferred Candidates

- `.v2-brief-meter-strip` and `.v2-agent-meter`: defer until a third surface proves a stable state-meter wrapper.
- `.v2-brief-output-grid` and `.v2-agent-proof-grid`: defer because content density and surrounding section logic are still different.
- `.v2-brief-output` and `.v2-agent-handoff`: defer because these are page endings, not primitive components.
- Compact signal badge from the previous audit: still possible later, but the newer sprite mark has stronger shared-asset evidence.
- Hero shells and action pairs: still deferred for the same reason as the alt audit. Their slots are too page-specific.

## 5. Risks If Promoted Too Early

The main risk was creating a vague `badge` component that would absorb unrelated seals, proof chips, and gallery previews. This pass avoids that by naming the component around its exact role: `status-mark`.

Residual risk: the shared sprite contract currently assumes a four-cell horizontal sprite. If a future sprite uses different dimensions, it should become a new component or override `--v2-status-mark-size` only when the cell geometry is still identical.

## 6. Implementation And Verification

Implemented:

1. Added shared `.v2-status-mark` CSS to `css/v2.components.css`.
2. Replaced Build Brief Desk page-local mark classes with shared classes.
3. Replaced Agent Readiness Ledger page-local mark classes with shared classes.
4. Removed duplicated page-local mark CSS from `css/v2.recipes.css`.

Verification run:

- `git diff --check`: passed.
- `node tools/regression-smoke.js`: passed after clearing the known stale `4199` smoke port; 21 targets across 3 viewports, `HOMM2 regression smoke OK`.
- `node tools/visual-capture.js --target /sites/build-brief-desk/index.html#output --out tmp/promotion-v2-1-build-brief-2026-06-02 --selector body --selector .v2-brief-output --selector .v2-brief-output-grid --selector .v2-status-mark`: passed, offenders 0 on desktop/mobile/narrow.
- `node tools/visual-capture.js --target /sites/agent-readiness-ledger/index.html#ledger --out tmp/promotion-v2-1-agent-readiness-2026-06-02 --selector body --selector .v2-agent-proof --selector .v2-agent-proof-grid --selector .v2-status-mark`: passed, offenders 0 on desktop/mobile/narrow.
- Manual screenshot inspection: shared marks render correctly in Build Brief output and Agent Readiness ledger; no text overlap or marker clipping observed.
