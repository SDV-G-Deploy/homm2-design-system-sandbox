# V2 System Checkpoint After Promotions - 2026-06-03

## Verdict

V2 is now a **repo-native production recipe kit with a credible shared component core**.

It is stronger than a loose sandbox: repeated primitives have been promoted only after production evidence, and the smoke harness covers the current production surface set.

It is still not ready to become an npm/component package by default. The package boundary is not yet justified by a consuming project, a documented component API, or package-level examples.

## Current Head

Latest audited head at checkpoint time:

- `afcd809 refactor: promote v2 package cards`
- Branch state before this checkpoint pass: `main == origin/main`
- Regression harness baseline: 29 targets x 3 viewports

## Promoted Shared Helpers

Current promoted helpers in `css/v2.components.css`:

| Helper | Owns | Does Not Own | Evidence |
| --- | --- | --- | --- |
| `.v2-route-list` | ordered route/queue row anatomy | page-specific route meanings | `docs/night-runs/2026-06-02-route-list-promotion.md` |
| `.v2-status-mark` | sprite-backed status mark slot | row/list semantics | `docs/night-runs/2026-06-02-promotion-audit-v2-1.md` |
| `.v2-state-meter-strip` | bounded `state-meter-readiness` asset frame | signal panel, metrics, meaning | `docs/night-runs/2026-06-02-state-meter-strip-promotion.md` |
| `.v2-signal-badge` | compact icon + label/value badge anatomy | large signal panels or emphasis styling | `docs/night-runs/2026-06-02-signal-badge-promotion.md` |
| `.v2-production-proof`, `.v2-proof-grid` | proof-section heading + three-card evidence grid | hero shells, semantic accents, copy | `docs/night-runs/2026-06-03-proof-grid-promotion.md` |
| `.v2-action-pair` | two-command action layout | command copy, anchors, hero meaning | `docs/night-runs/2026-06-03-action-pair-promotion.md` |
| `.v2-closure-ledger`, `.v2-closure-grid` | final-ledger command spacing and two-column closure anatomy | writ/reserve/send/publish semantics | `docs/night-runs/2026-06-03-closure-grid-promotion.md` |
| `.v2-workflow-rows`, `.v2-workflow-row` | app-like icon + text stack + state-chip rows | task/delivery/archive semantics | `docs/night-runs/2026-06-03-workflow-row-promotion.md` |
| `.v2-package-grid`, `.v2-package-card`, `.v2-package-card-primary` | commercial comparison-card grid, shell, text stack, price line, primary emphasis | package/tier semantics, prices, routes, included/excluded rules | `docs/night-runs/2026-06-03-package-card-promotion.md` |

## Still Page-Local

Keep these in `css/v2.recipes.css` for now:

- page shells: `.v2-pricing-shell`, `.v2-workqueue-shell`, `.v2-delivery-shell`, and older applied shells;
- hero layouts and side signal modules;
- pricing guard / route / buy section layout;
- workqueue and delivery board layout;
- note cards such as `.v2-pricing-note`, `.v2-workqueue-note`, `.v2-delivery-note`;
- archive / accept / proof panel combinations;
- page-specific asset placement beyond named slot helpers.

These are compositions, not stable primitives yet. Promoting them now would either create vague component names or absorb business semantics into CSS.

## Package Readiness Gates

Current state against the package-readiness gates in `docs/v2-library-decision-2026-06-02.md`:

1. **Shared primitives across 3-4 surfaces:** partial pass. Several primitives meet this; newer workflow/package helpers have two-surface proof, enough for repo components but not enough for public package API.
2. **`components.css` grows by promotion:** pass. Recent work moved route, proof, action, closure, workflow row, and package card helpers into components while shrinking repeated recipe blocks.
3. **Small component API without invented props:** not yet. We can describe helpers, but not a stable prop/API layer.
4. **Stable asset slots and fallback rules:** pass for Images 2.0 slots already in `docs/v2-asset-production-kit-2026-06-02.md` and `v2/assets.html`.
5. **Verification harness can run against package examples:** partial. Harness covers repo examples, but not package-distributed examples.
6. **Real consuming project benefits from installation:** not met. Current best delivery is still copyable repo-native starter/recipes.

Decision: **do not create npm package yet**.

## Healthy Direction

The system direction is healthy because:

- new pages prove pressure before abstraction;
- component names stay narrow;
- image slots remain bounded and documented;
- mobile/narrow captures are treated as first-class acceptance;
- business semantics stay in HTML/page recipes instead of shared CSS.

## Risks

Main risks now:

- README/checkpoint drift: current state moves quickly and old checkpoint links become stale;
- `css/v2.recipes.css` is still large and can hide repeated shells;
- pricing/workflow helpers now have only two-surface proof, so future variants may expose missing states;
- no formal component examples page lists the promoted helpers as a compact inventory;
- no consuming project proves package installation value.

## Best Next Pass

Best next pass: **V2 promoted-helper inventory board**.

Create or update a compact reference page section that displays every promoted helper with:

- helper name;
- ownership boundary;
- one correct example;
- one non-scope warning;
- mobile-safe example where relevant.

Recommended target: `v2/reference.html` or a new focused `v2/components.html` if that keeps the reference manual from getting too heavy.

Why this next:

- it turns promoted helpers into visible documentation, not just CSS and reports;
- it supports future package-readiness judgment;
- it will expose whether helper names and boundaries are understandable without reading night-run notes.

## Do Not Do Next By Default

Do not promote these next by default:

- pricing shell;
- hero shell;
- side signal module;
- guard/route/buy composition;
- generic card primitive;
- generic row primitive;
- npm package.

Each needs either another applied surface or a consuming-project reason.

