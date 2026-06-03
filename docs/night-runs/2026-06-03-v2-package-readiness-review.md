# V2 Package Readiness Review

Date: 2026-06-03

## Verdict

V2 is **not ready for npm/package extraction yet**.

It is ready to keep operating as a repo-native production recipe kit with a credible promoted-helper core.

The promoted helper inventory in `v2/components.html` makes the shared layer visible and testable, but the system still lacks two package-level requirements:

- a small written component API that can be used without reading page HTML;
- a real consuming project that benefits from package installation more than copying `starters/v2-site-starter/`.

## Evidence Base

Checked current head after the promoted-helper inventory pass:

- `v2/components.html`
- `css/v2.components.css`
- `docs/v2-library-decision-2026-06-02.md`
- `docs/night-runs/2026-06-03-v2-promoted-helper-inventory.md`
- `docs/night-runs/2026-06-03-v2-system-checkpoint-after-promotions.md`
- `docs/v2-starter-kit-2026-06-01.md`
- production surfaces under `sites/`
- repo package/build markers

No `package.json`, package build config, or framework package boundary exists in the repo. Current deployment remains static GitHub Pages.

## Gate Review

| Gate | Status | Evidence |
| --- | --- | --- |
| 1. 3-4 production surfaces share primitives without page-local overrides | Partial pass | Route, status, meter, signal, proof, action, and closure helpers appear across many surfaces. Workflow row and package card helpers have two production surfaces plus inventory proof, enough for repo helpers but not package API confidence. |
| 2. `css/v2.components.css` grows by promotion while recipes stop absorbing every idea | Partial pass | Shared helpers now exist and are documented, but `css/v2.recipes.css` remains the active workshop for shells, heroes, boards, note cards, signal modules, and page-specific compositions. |
| 3. Small component API can be written without invented props | Not met | Helper ownership is documented, but no props/slots/variants/events contract exists. Writing one today would still invent API decisions from CSS/HTML examples. |
| 4. Asset slots have stable names and fallback rules | Pass | Images 2.0 slots, formats, fallback expectations, and visual QA are documented in the asset production kit and visible in `v2/assets.html`. |
| 5. Verification harness can run against package examples | Partial pass | Smoke now covers 30 repo targets, including `v2/components.html`, but there are no package-distributed examples or install/import checks. |
| 6. Real consuming project benefits from package installation | Not met | The fastest reliable reuse path is still copying the starter and using docs. No external consumer has proved package installation saves more than it costs. |

## Helper Maturity

Mature repo helpers:

- `.v2-route-list`
- `.v2-status-mark`
- `.v2-state-meter-strip`
- `.v2-signal-badge`
- `.v2-production-proof`
- `.v2-proof-grid`
- `.v2-action-pair`
- `.v2-closure-ledger`
- `.v2-closure-grid`

Still young for package API:

- `.v2-workflow-rows`
- `.v2-workflow-row`
- `.v2-package-grid`
- `.v2-package-card`
- `.v2-package-card-primary`

These are valid shared repo helpers after two-surface proof, but public package APIs should wait for at least one more production pressure or a consuming-project spike.

## Why Packaging Now Is Wrong

Packaging now would force decisions the repo has not earned yet:

- prop names for route rows, workflow rows, proof cards, and package cards;
- slot rules for icons, meter assets, badges, and command pairs;
- variant taxonomy for production versus reference/proof pages;
- framework support or no-framework package shape;
- versioning and migration policy while `css/v2.recipes.css` is still active.

The current strength is speed and bounded evidence. A package would slow that down before there is a real integration payoff.

## Recommended Next Step

Do **not** create an npm package next.

Best next pass: **package API sketch without implementation**.

Write a small non-binding API sketch that maps the current helpers into possible component contracts, for example:

- `RouteList`
- `StatusMark`
- `StateMeterStrip`
- `SignalBadge`
- `ProofGrid`
- `ActionPair`
- `ClosureLedger`
- `WorkflowRows`
- `PackageGrid`

For each, record:

- required slots;
- optional slots;
- allowed variants;
- forbidden responsibilities;
- current HTML source of truth;
- whether the API is stable, draft, or blocked.

This should be documentation only. It will show whether a package API can be written from existing evidence or whether another production surface is still needed.

Follow-up completed: `docs/v2-package-api-sketch-2026-06-03.md` records the documentation-only sketch. It is not scaffolding and not an API commitment.

## Stop Rule

Do not start package scaffolding until at least these are true:

- API sketch marks most helpers stable or draft-with-evidence;
- one consuming project or copied starter reports friction that package installation would solve;
- smoke has at least one package-example target or import/build check;
- workflow/package helpers survive one more real surface or a consuming-project spike.

## Verification

Docs-only review. Checked before closeout:

- `git diff --check`
- `rg -n "V2 Package Readiness Review|Gate Review|Decision remains|Latest package-readiness" docs/night-runs/2026-06-03-v2-package-readiness-review.md docs/v2-library-decision-2026-06-02.md README.md`
