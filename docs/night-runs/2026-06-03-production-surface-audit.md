# Production Surface Audit - 2026-06-03

## Status

Read-only audit pass after the Service Intake Ledger wake.

Verdict: V2 is gaining useful production-surface evidence, but the newest repeated shapes are still page recipes, not package-ready components.

## Surfaces Audited

- sites/site-charter-forge/
- sites/workshop-schedule-ledger/
- sites/service-intake-ledger/
- css/v2.components.css
- css/v2.recipes.css
- css/v2.responsive.css

## Extraction Ledger

### Compact Production Hero Shell

Pattern: two-column first-screen hero with copy, action pair, and right-side signal module.

Current classes:

- .v2-charter-hero / .v2-charter-copy / .v2-charter-actions / .v2-charter-signal
- .v2-workshop-hero / .v2-workshop-copy / .v2-workshop-actions / .v2-workshop-signal
- .v2-intake-hero / .v2-intake-copy / .v2-intake-actions / .v2-intake-signal

Used in:

- Site Charter Forge
- Workshop Schedule Ledger
- Service Intake Ledger

Shared meaning:

- First-screen route declaration.
- Primary and secondary commands.
- A bounded signal area that uses either an asset slot or an existing instrument.

Mobile behavior:

- Single-column stack below the 680px responsive boundary.
- Topbar remains compact in smoke checks.
- Signal module can grow tall on mobile; this is acceptable for production-surface pages, but it should not become a global hero primitive until tighter first-screen budgets are proven.

Asset dependency:

- Mixed. Charter uses seal/archive and object assets, Workshop uses hero-detail-workshop-table, Intake uses water-lens only.

Decision: defer. The anatomy repeats, but the signal module contents vary enough that a shared component would need premature slot rules.

### Page-Local Action Pair

Pattern: two command buttons directly under hero copy.

Current classes:

- .v2-charter-actions
- .v2-workshop-actions
- .v2-intake-actions

Used in:

- Site Charter Forge
- Workshop Schedule Ledger
- Service Intake Ledger

Shared meaning:

- Primary route commit plus secondary route inspection.
- Uses shared .v2-command styles.

Mobile behavior:

- One-column stack by default.
- Two columns at desktop with repeat(2, minmax(0, 220px)).

Asset dependency: none.

Decision: watch. This may become a narrow shared helper if one more production surface repeats the exact same grid and spacing without custom exceptions.

### Side Signal Module

Pattern: dark framed side panel with asset/instrument plus .v2-lens-module state rows.

Current classes:

- .v2-charter-signal
- .v2-workshop-signal
- .v2-intake-signal

Used in:

- Site Charter Forge
- Workshop Schedule Ledger
- Service Intake Ledger

Shared meaning:

- Context signal, not a CTA.
- Pairs material/asset proof with factual state rows.

Mobile behavior:

- Stacks under copy.
- Content height varies significantly by asset and lens rows.

Asset dependency:

- High and varied: archive seal, workshop WebP/SVG hero detail, water-lens instrument.

Decision: defer. The pattern is stable as a recipe move, but asset dependency and content height are too variable for a shared primitive.

### Proof Grid

Pattern: dark proof section with heading and three cards, each card carrying .v2-status-mark plus label, strong line, and small note.

Current classes:

- .v2-charter-proof / .v2-charter-proof-grid
- .v2-workshop-proof / .v2-workshop-proof-grid
- .v2-intake-proof / .v2-intake-proof-grid

Used in:

- Site Charter Forge
- Workshop Schedule Ledger
- Service Intake Ledger

Shared meaning:

- Evidence sequence after the main route.
- Uses promoted status sprites as compact state markers.

Mobile behavior:

- One-column cards by default.
- Three-column grid at desktop.

Asset dependency:

- Uses shared .v2-status-mark sprite classes only.

Decision: watch closely. This is the strongest next promotion candidate, but it should wait for one more surface or a targeted implementation pass because border color and semantic emphasis still differ slightly by page.

### Final Writ / Reserve Block

Pattern: vellum ledger ending with one framed note/object block, status list, and final command.

Current classes:

- .v2-charter-writ / .v2-charter-writ-grid / .v2-charter-object
- .v2-workshop-reserve / .v2-workshop-reserve-grid / .v2-workshop-date
- .v2-intake-send / .v2-intake-send-grid / .v2-intake-note

Used in:

- Site Charter Forge
- Workshop Schedule Ledger
- Service Intake Ledger

Shared meaning:

- Final route closure.
- Converts the page into one concrete record/action.

Mobile behavior:

- One-column stack by default.
- Two-column grid at desktop.

Asset dependency:

- Mixed: Charter uses object cutout; Workshop and Intake use text/date note blocks.

Decision: defer. The role repeats, but the content model is not narrow enough.

## Audit Conclusion

No component promotion should happen in this wake.

The strongest repeated candidate is the proof grid, followed by the action pair. Both are narrow enough to watch, but promoting them now would still require guessing names and slot rules from three similar surfaces rather than proving one exact, unchanged anatomy across a wider set.

The next safe implementation pass should either:

1. build one more distinct production surface that uses the same proof-grid anatomy unchanged; or
2. run a targeted proof-grid promotion pass only if the implementer first confirms identical HTML, mobile behavior, and asset dependency across four surfaces.

