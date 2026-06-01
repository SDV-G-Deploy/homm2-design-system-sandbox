# V2 Starter Kit - HoMM2 x Solarpunk

Use this document when building a new page from the V2 system. It is the production recipe layer above the visual proofs.

## Direction

Target phrase: **solar-civic fantasy interface**.

HoMM2 owns the form: framed surfaces, plaques, bevels, ledgers, object UI, restrained ornament, and material weight.

Solarpunk owns the condition: civic infrastructure, solar hardware, water sensing, restoration state, and living feedback.

Do not solve the direction with a green palette, plant words, or atmospheric gradients alone.

## Page Modes

### 1. Reference / Proof

Use for design-system evidence, component boards, and agent handoffs.

Allowed:

- RU/EN content-budget chips;
- visible primitive labels;
- sandbox navigation between V2 proof pages;
- explanatory labels such as `Primitive board` or `Content budget proof`.

Examples:

- `v2/index.html`
- `v2/reference.html`
- `v2/dossier.html`

### 2. Production Page

Use for real product, service, venue, portfolio, article, or campaign pages.

Required:

- add `v2-production-page` to `body`;
- hide proof-only chips with `data-proof-chrome="true"`;
- use page-local navigation, not sandbox navigation;
- keep mobile nav to 2-3 short routes;
- avoid visible technical labels unless they are real product statuses;
- replace system-building words such as `proof`, `trial`, `primitive board`, `reference`, and `content budget` with product words such as `signal`, `route`, `desk`, `map`, `result`, `status`, `readiness`, `launch`, or `queue`.

Examples:

- `v2/trial.html`
- `v2/control.html`

### 3. Work Surface

Use for dashboards, boards, queues, tools, status screens, and repeated operational work.

Required:

- records and queues live on `v2-ledger` / vellum;
- inspection and metrics live on dark panels or water-lens modules;
- commands stay separate from record rows;
- filters use short labels and must fit mobile.

Example:

- `v2/control.html`

## Production Chrome Contract

Mobile production topbar:

- sigil-only brand is allowed and preferred when space is tight;
- maximum 3 visible core routes;
- no clipped words;
- no horizontal scrolling for core routes;
- no demo links such as Gate / Ref / Trial unless the product actually uses those concepts.

Desktop production topbar:

- brand text may be visible;
- page-local routes remain short;
- proof/reference links should move to footer, docs, or a hidden development route.

## Content Budgets

Use the longest likely Russian text during mobile checks.

| Surface | Budget | Rule |
| --- | --- | --- |
| Mobile nav label | 5-9 characters preferred | 2-3 labels only |
| Status chip | 1-2 words | never critical prose |
| Route row title | 1 line preferred, 2 max | detail moves to `small` |
| Metric label | 1 word preferred | value carries meaning |
| Hero title | 3-5 short lines on 390px | no clipped words |
| Button label | 1-3 words | action verb first |

## Component Inventory

### Shell

- `.v2-topbar` - sticky shell navigation.
- `.v2-brand` and `.v2-sigil` - identity mark.
- `.v2-nav` - compact route list.
- `.v2-production-page` - production chrome mode.

### Surfaces

- `.v2-hero` - dark threshold/hero surface.
- `.v2-panel` - dark inspection surface.
- `.v2-ledger` - readable sun-vellum record surface.
- `.v2-primitive-card` - proof/reference primitive card.

### Controls And State

- `.v2-command` with `.v2-command-primary` or `.v2-command-secondary`.
- `.v2-status-list` - compact state rows.
- `.v2-lens-module` - water/inspection metrics.
- `.v2-control-filters` - short operational filters.
- `.v2-route-list` - queue/list rows for work surfaces.

### Asset Roles

- `solar-civic-gate.svg` - threshold or hero asset.
- `solar-badge.svg` - route/state badge.
- `water-lens.svg` - inspection/focus instrument.
- `vellum-grain.svg` - reading surface texture.

## Page Recipes

### Product Landing

Use for a service, product, small offer, or campaign.

Structure:

1. `body.v2-production-page`
2. `.v2-topbar` with 2-3 product routes
3. `.v2-hero` or product-specific hero
4. signal/status section with real product claims
5. plan/action section on `.v2-ledger`

Reference: `v2/trial.html`.

Additional production example: `v2/ant-school.html`.

### Operational Board

Use for dashboards, control rooms, queues, and agent/operator tools.

Structure:

1. `body.v2-production-page`
2. `.v2-control-hero` summary
3. `.v2-control-board`
4. `.v2-ledger.v2-control-queue` for records
5. `.v2-panel.v2-control-instrument` for inspection
6. `.v2-control-actions` for commands

Reference: `v2/control.html`.

### Dossier / Article

Use for editorial, service explanation, case study, documentation, or reading-heavy pages.

Structure:

1. compact topbar
2. dark intro or vellum title block
3. `.v2-ledger` reading surface
4. route/status rows for metadata
5. one primary command

Reference: `v2/dossier.html`.

### Reference Board

Use only for system documentation and internal proof.

Structure:

1. sandbox navigation is allowed
2. proof labels are allowed
3. primitives are shown as separate repeated cards
4. production constraints must be linked from the page

Reference: `v2/reference.html`.

## Acceptance Gates

Before a V2 page is considered done:

- run `node tools/regression-smoke.js`;
- run `node tools/visual-capture.js` on the changed page;
- check desktop, 390px mobile, and 360px narrow mobile;
- no horizontal overflow;
- no clipped visible labels;
- production-like pages have no first-viewport proof/debug chrome;
- production-like pages have no visible proof/trial/reference vocabulary in customer-facing copy;
- mobile production nav fits without horizontal scrolling;
- first screen communicates page purpose without reading this document;
- green/blue/gold usage maps to a role: state, water, solar hardware, vellum, or command.

## Next Extraction Target

If V2 keeps growing, split `css/v2.css` into:

- tokens;
- shell/chrome;
- surfaces;
- controls/state;
- page-local recipe styles.

Do this only after another applied page proves the current class names are stable.

Current extraction map: `docs/v2-css-boundary-2026-06-01.md`.
