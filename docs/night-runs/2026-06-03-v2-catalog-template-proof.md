# V2 Catalog Template Proof - 2026-06-03

## Verdict

The fourth Site Kit template is copyable: `starters/v2-site-starter/templates/catalog-object-list/`.

It proves V2 can handle object lists and lightweight registries without adding
new shared CSS, package scaffolding, framework bindings, or a generator.

## Added Surface

- Template: `starters/v2-site-starter/templates/catalog-object-list/index.html`
- Live proof: `sites/civic-tool-registry/index.html`

The live proof turns the template into a civic repair tool registry. It tests a
different pressure from landing, report, and dashboard pages: repeated objects
must stay comparable by name, role, state, and next action.

## System Reading

The catalog uses existing promoted helpers:

- `v2-action-pair`
- `v2-signal-badge`
- `v2-state-meter-strip`
- `v2-workflow-rows`
- `v2-workflow-row`
- `v2-production-proof`
- `v2-proof-grid`
- `v2-closure-ledger`
- `v2-closure-grid`

No `catalog-card` helper was promoted in this pass. The current evidence says
the existing row and ledger anatomy is enough. A dedicated catalog helper should
wait until a second or third catalog-like surface repeats a different object
card pressure that rows cannot express cleanly.

## Acceptance Notes

- HoMM2 form remains visible through ledgers, badges, bevels, rows, state marks,
  and final writ structure.
- Solarpunk state remains behavioral: water readings, repair routes, civic tool
  state, readiness, replacement rules.
- The page is not only a palette swap; its structure is an object registry with
  explicit sorting and selection rules.
- Package pressure remains absent. The friction is still copy discipline and
  content judgment, not install mechanics.

## Verification

- `git diff --check`
- `node --check tools/regression-smoke.js`
- focused visual capture for template and live proof
- full `node tools/regression-smoke.js`
