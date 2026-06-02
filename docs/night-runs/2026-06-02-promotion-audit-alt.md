# V2 Promotion Audit Alt - 2026-06-02

## 1. Verdict

Promote one pattern now: the shared route/queue list CSS for `.v2-route-list`. It is already named like a shared component, documented in `docs/v2-starter-kit-2026-06-01.md`, and used with the same ordered route meaning in all three production surfaces:

- `sites/ant-school-landing-v2/index.html`: `.v2-route-list` inside the Method ledger.
- `sites/product-map-field-note/index.html`: `.v2-route-list` inside the Map route section.
- `sites/build-brief-desk/index.html`: `.v2-route-list` inside the Brief queue ledger.

Promote at most one additional pattern only after a tiny naming pass: the two-column icon/status badge used by `.v2-antv2-signal` and `.v2-note-instrument`. It has two production uses and a stable compact identity/readiness meaning, but `.v2-brief-card` is a different compound card and should not be forced into it.

Defer the compact hero shell, side instrument cards, output rail, and page action pairs. They are polished, but the evidence is still mixed by page recipe, asset slot, and responsive behavior. V2 should remain a recipe kit, not a package/library.

## 2. Comparison Table

| Pattern | `ant-school-landing-v2` | `product-map-field-note` | `build-brief-desk` | Audit read |
| --- | --- | --- | --- | --- |
| Compact dark production hero | `.v2-antv2-hero` with copy, two actions, threshold asset, and signal badge | `.v2-note-hero` with copy and compact readiness badge, no hero actions | `.v2-brief-hero` with copy, two actions, and compound readiness card | Shared first-screen intent, but content slots differ too much for a safe full promotion. |
| Hero copy block | `.v2-antv2-copy h1/p` | `.v2-note-copy h1/p` | `.v2-brief-copy h1/p` | Typography is nearly identical; promote only if paired with a hero shell contract. Too small alone. |
| Action pair | `.v2-antv2-actions` | none in hero | `.v2-brief-actions` | Two uses, same layout. Useful but not universal across the three-surface comparison. |
| Compact badge/instrument row | `.v2-antv2-signal` with `badge-product-map.svg` | `.v2-note-instrument` with `badge-product-map.svg` | no direct equivalent; `.v2-brief-card` is larger and includes `.v2-lens-module` | Good second candidate if constrained to compact icon + label/value rows. |
| Route/queue list | `.v2-route-list` for three Method steps | `.v2-route-list` for three Map route steps | `.v2-route-list` for four Brief queue steps | Strongest promotion. Same class, same semantic structure, same ordered route/status meaning. |
| Side lens/status panel | `.v2-panel.v2-antv2-lens` with instrument image | `.v2-panel.v2-note-side` with picture, text, `.v2-lens-module` | `.v2-panel.v2-brief-instrument` with text, instrument image, `.v2-status-list` | Same broad role, different slot order and asset dependency. Defer. |
| Closing CTA ledger | `.v2-ledger.v2-antv2-join` with `.v2-status-list` and command | `.v2-ledger.v2-note-use` with `.v2-status-list` and command | no equivalent; output is dark `.v2-brief-output` | Two uses, but currently a recipe ending, not a component. Defer. |
| Output rail/grid | none | none | `.v2-brief-output`, `.v2-brief-output-grid` | One production use. Defer. |

## 3. Top Safe Promotion Candidates

### Candidate 1: Route / Queue List

Current classes:

- `css/v2.recipes.css`: `.v2-route-list`, `.v2-route-list li`, `.v2-route-list li > span`, `.v2-route-list strong`, `.v2-route-list small`, `.v2-route-list em`.
- Used in `sites/ant-school-landing-v2/index.html`, `sites/product-map-field-note/index.html`, and `sites/build-brief-desk/index.html`.

Proposed shared name:

- Keep `.v2-route-list`.
- Move the CSS block from `css/v2.recipes.css` into `css/v2.components.css`.

Reason:

`.v2-route-list` already behaves as a component. It is listed in the starter kit component inventory, its HTML grammar is stable across all three surfaces, and it means ordered route/queue rows everywhere. This is a real promotion, not a new abstraction.

### Candidate 2: Compact Signal Badge

Current classes:

- `sites/ant-school-landing-v2/index.html`: `.v2-antv2-signal`.
- `sites/product-map-field-note/index.html`: `.v2-note-instrument`.

Proposed shared name:

- `.v2-signal-badge` for the outer grid.
- `.v2-signal-badge img`, `.v2-signal-badge span`, and `.v2-signal-badge strong` for the icon/label/value grammar.

Reason:

Both are compact, read-only identity/status rows with a bounded SVG asset and a label/value pair. The shared meaning is narrow enough to be useful. Do not include `.v2-brief-card` in this promotion; it is a larger readiness card with nested lens rows, not the same component.

## 4. Deferred Candidates

- `.v2-antv2-hero`, `.v2-note-hero`, `.v2-brief-hero`: defer. They share dark framed grid styling, but their slots differ: threshold image plus signal, compact badge only, and full readiness card. Promoting now would either overfit the ANT page or create a vague hero API.
- `.v2-antv2-copy`, `.v2-note-copy`, `.v2-brief-copy`: defer. The h1/p rules are almost identical, but copy typography alone is not a strong component boundary.
- `.v2-antv2-actions` and `.v2-brief-actions`: defer. Two uses, but one of the three surfaces intentionally has no hero action pair. A shared `.v2-action-pair` may be reasonable later after another production page repeats it.
- `.v2-antv2-lens`, `.v2-note-side`, `.v2-brief-instrument`: defer. They all read as side instrument panels, but asset order, image sizing, and status/list content differ.
- `.v2-brief-output` and `.v2-brief-output-grid`: defer. It is a strong work-surface ending but has one production use.
- Closing ledger recipes `.v2-antv2-join` and `.v2-note-use`: defer. They share status rows plus command, but this is currently page-ending composition around existing `.v2-ledger`, `.v2-status-list`, and `.v2-command`.

## 5. Risks If Promoted Too Early

- Shared CSS could freeze page-specific asset slots before Images 2.0 has enough evidence for stable component roles.
- A generic hero component could hide meaningful recipe differences between product landing, dossier/article, and operational board surfaces.
- Moving action pairs or side instruments too early could create a component name that only describes layout, not product meaning.
- Over-promotion would make `css/v2.components.css` absorb unfinished recipe grammar, which conflicts with the decision in `docs/v2-library-decision-2026-06-02.md` to keep `css/v2.recipes.css` as the active workshop.
- Visual regressions are likely if route/status row colors are moved without checking both dark panels and vellum ledgers.

## 6. Suggested Smallest Next Implementation Pass

Implement one promotion:

1. Move the full `.v2-route-list` CSS block from `css/v2.recipes.css` to `css/v2.components.css`.
2. Keep the class name `.v2-route-list`; do not rename HTML.
3. Leave `.v2-antv2-*`, `.v2-note-*`, and `.v2-brief-*` hero and instrument recipes untouched.
4. Add a short extraction-ledger note to the decision doc or a night-run report recording that `.v2-route-list` was promoted because it has three same-meaning production uses.

Required verification:

- Run `node tools/regression-smoke.js`.
- Run `node tools/visual-capture.js` for:
  - `sites/ant-school-landing-v2/index.html`
  - `sites/product-map-field-note/index.html`
  - `sites/build-brief-desk/index.html`
- Check desktop, 390px mobile, and 360px narrow mobile for no horizontal overflow, no clipped route labels, and unchanged first-screen purpose.

