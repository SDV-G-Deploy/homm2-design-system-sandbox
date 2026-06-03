# V2 Civic Route Template Proof - 2026-06-03

## Verdict

The fifth initial Site Kit template is copyable:
`starters/v2-site-starter/templates/civic-route-map/`.

It proves V2 can express route/map-like pages as ordered civic checkpoints,
state readings, and handoff records without adding GIS UI, new shared CSS,
package scaffolding, framework bindings, or a generator.

## Added Surface

- Template: `starters/v2-site-starter/templates/civic-route-map/index.html`
- Live proof: `sites/sunwell-route-map/index.html`

The live proof turns the template into a Sunwell water-route page. It tests
route pressure: a reader needs place order, water/gate state, handoff owner, and
watch rule, not a decorative map image.

## System Reading

The route template uses existing promoted helpers and recipes:

- `v2-action-pair`
- `v2-signal-badge`
- `v2-state-meter-strip`
- `v2-route-list`
- `v2-lens-module`
- `v2-status-list`
- `v2-closure-ledger`
- `v2-closure-grid`

No new route-map helper was promoted. The existing `v2-route-list` plus note
body, lens, and closure anatomy were enough for this first route/map-like page.

## Acceptance Notes

- HoMM2 form remains visible through ledgers, route plaques, bevels, seals,
  state meters, and final writ structure.
- Solarpunk state is behavioral: water readings, gate state, terrace handoff,
  dawn watch, civic record movement.
- The page is not a green skin or decorative map. The route is a sequence of
  operational checkpoints with explicit state and handoff rules.
- Package pressure remains absent. This pass completes the initial Site Kit
  template set and should be followed by a wrap checkpoint, not package work.

## Verification

- `git diff --check`
- `node --check tools/regression-smoke.js`
- focused visual capture for template and live proof
- full `node tools/regression-smoke.js`
