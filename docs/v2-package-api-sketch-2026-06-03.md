# V2 Package API Sketch

Date: 2026-06-03

Status: **documentation-only sketch**. This is not a package, not an implementation plan, and not an API commitment.

## Purpose

This sketch maps the current promoted V2 helpers into possible package-level component contracts.

It exists to test whether the API can be described from evidence already in the repo. If a contract needs invented props or unclear slots, it stays draft or blocked.

## Source Of Truth

Current source of truth remains:

- HTML examples in `v2/components.html`
- shared helper CSS in `css/v2.components.css`
- responsive contracts in `css/v2.responsive.css`
- production surfaces under `sites/`
- package-readiness review in `docs/night-runs/2026-06-03-v2-package-readiness-review.md`

The copyable production path remains `starters/v2-site-starter/`.

## Stability Legend

- **Stable repo helper:** safe to reuse in repo pages; API is mostly obvious.
- **Draft API:** helper is real, but public API still needs more production pressure or consumer feedback.
- **Blocked:** do not expose as package API yet.

## Candidate Components

| Candidate | Backing helpers | API status | Reason |
| --- | --- | --- | --- |
| `RouteList` | `.v2-route-list` | Stable repo helper | Many production surfaces share ordered row anatomy. |
| `StatusMark` | `.v2-status-mark` variants | Stable repo helper | Sprite-backed mark has narrow, bounded responsibility. |
| `StateMeterStrip` | `.v2-state-meter-strip` | Stable repo helper | Asset frame and fallback behavior are stable through Images 2.0. |
| `SignalBadge` | `.v2-signal-badge` | Stable repo helper | Compact icon + label/value anatomy repeats across surfaces. |
| `ProofGrid` | `.v2-production-proof`, `.v2-proof-grid` | Stable repo helper | Section anatomy repeats broadly, but proof semantics stay page-local. |
| `ActionPair` | `.v2-action-pair`, `.v2-command` | Stable repo helper | Two-command layout is stable; command destinations remain external. |
| `ClosureLedger` | `.v2-closure-ledger`, `.v2-closure-grid` | Stable repo helper | Final ledger composition repeats, but business closure semantics stay local. |
| `WorkflowRows` | `.v2-workflow-rows`, `.v2-workflow-row` | Draft API | Two production surfaces prove the helper, but package API needs another pressure. |
| `PackageGrid` | `.v2-package-grid`, `.v2-package-card`, `.v2-package-card-primary` | Draft API | Commercial card anatomy is proven twice; package API should wait for one more commercial variant or consumer spike. |

## RouteList

Backing class: `.v2-route-list`

API status: **stable repo helper**.

Required slots:

- ordered item index;
- title;
- short detail;
- trailing state chip.

Optional slots:

- no-icon mode only; route-list owns index, not sprite marks;
- 2-4 rows depending on page.

Allowed variants:

- default sun-vellum ledger context;
- work-surface route context;
- article/dossier route context.

Forbidden responsibilities:

- deciding route meaning;
- choosing business status vocabulary;
- owning surrounding ledger, CTA, or page navigation;
- replacing `WorkflowRows` for app-like task rows with sprite icons.

Current HTML source of truth:

- `v2/components.html#route`
- `sites/build-brief-desk/index.html`
- `sites/agent-readiness-ledger/index.html`
- `sites/package-ledger/index.html`
- `sites/service-tier-ledger/index.html`

Package note:

If packaged later, prefer a data shape like `items: [{ index, title, detail, state }]`, but do not lock that until a consumer exists.

## StatusMark

Backing classes: `.v2-status-mark`, `.v2-status-mark-task`, `.v2-status-mark-scope`, `.v2-status-mark-water`, `.v2-status-mark-gate`, `.v2-status-mark-note`

API status: **stable repo helper**.

Required slots:

- variant name;
- decorative or semantic accessibility mode.

Optional slots:

- CSS custom property override for size only if visual QA proves it.

Allowed variants:

- `task`
- `scope`
- `water`
- `gate`
- `note`

Forbidden responsibilities:

- assigning severity;
- owning row layout;
- replacing text labels;
- becoming a general icon library.

Current HTML source of truth:

- `v2/components.html#route`
- `sites/client-work-queue/index.html`
- `sites/delivery-review-board/index.html`
- `sites/agent-readiness-ledger/index.html`

Package note:

A future API can expose `variant`, but should keep the sprite sheet private.

## StateMeterStrip

Backing class: `.v2-state-meter-strip`

API status: **stable repo helper**.

Required slots:

- `picture` or `img` source;
- meaningful `alt` when the meter conveys information;
- empty/decorative `alt` only when adjacent copy carries the state.

Optional slots:

- WebP source plus SVG fallback;
- CSS width custom property for bounded contexts.

Allowed variants:

- readiness meter only, until another meter slot exists.

Forbidden responsibilities:

- calculating readiness;
- owning signal panel copy;
- replacing metric rows;
- acting as a generic image frame.

Current HTML source of truth:

- `v2/components.html#route`
- `v2/assets.html`
- `sites/build-brief-desk/index.html`
- `sites/agent-readiness-ledger/index.html`
- `sites/site-charter-forge/index.html`

Package note:

Do not expose generic `Meter` yet. The stable thing is the bounded strip frame for named Images 2.0 assets.

## SignalBadge

Backing class: `.v2-signal-badge`

API status: **stable repo helper**.

Required slots:

- icon image;
- label;
- value line.

Optional slots:

- local wrapper class for page-specific background, border, and emphasis;
- icon size via `--v2-signal-badge-icon`.

Allowed variants:

- compact signal badge.

Forbidden responsibilities:

- owning large side signal modules;
- choosing metric meaning;
- controlling page emphasis;
- becoming a general card.

Current HTML source of truth:

- `v2/components.html#proof`
- `sites/product-map-field-note/index.html`
- `sites/workshop-schedule-ledger/index.html`
- `sites/client-work-queue/index.html`
- `sites/delivery-review-board/index.html`

Package note:

Future API could be `iconSrc`, `label`, `value`, but outer styling must remain consumer-owned.

## ProofGrid

Backing classes: `.v2-production-proof`, `.v2-proof-grid`

API status: **stable repo helper**.

Required slots:

- heading or copy block;
- exactly three proof cards for current stable grid;
- each card has label, title/value, and short note.

Optional slots:

- status mark inside a card;
- page-local section class for theme/accent.

Allowed variants:

- three-card production proof section;
- dark proof context.

Forbidden responsibilities:

- hero shell;
- proof policy;
- acceptance rules;
- semantic card meaning;
- final writ/archive layout.

Current HTML source of truth:

- `v2/components.html#proof`
- `sites/site-charter-forge/index.html`
- `sites/workshop-schedule-ledger/index.html`
- `sites/service-intake-ledger/index.html`
- `sites/offer-readiness-ledger/index.html`

Package note:

Do not support arbitrary card counts in the first API. That would invent behavior not yet proven.

## ActionPair

Backing classes: `.v2-action-pair`, `.v2-command`, `.v2-command-primary`, `.v2-command-secondary`

API status: **stable repo helper**.

Required slots:

- primary command;
- secondary command.

Optional slots:

- omit secondary only outside this helper; if it is not a pair, use plain `.v2-command`.

Allowed variants:

- primary + secondary pair;
- desktop two-column pair;
- mobile stacked pair.

Forbidden responsibilities:

- deciding destination;
- owning CTA strategy;
- owning hero shell;
- handling forms, modals, or checkout.

Current HTML source of truth:

- `v2/components.html#proof`
- `sites/site-charter-forge/index.html`
- `sites/workshop-schedule-ledger/index.html`
- `sites/service-intake-ledger/index.html`
- `sites/offer-readiness-ledger/index.html`

Package note:

Future API can accept command slots instead of link props, because some consumers may use anchors and others may use buttons.

## ClosureLedger

Backing classes: `.v2-closure-ledger`, `.v2-closure-grid`

API status: **stable repo helper**.

Required slots:

- left record/object slot;
- right status/list slot;
- final command.

Optional slots:

- page-local left-slot styling;
- archive/date/object content;
- status list or route summary.

Allowed variants:

- final ledger section;
- two-column desktop / stacked mobile layout.

Forbidden responsibilities:

- send/publish/reserve semantics;
- deciding ownership, dates, or archive policy;
- replacing proof grids;
- owning checkout or form behavior.

Current HTML source of truth:

- `v2/components.html#workflow`
- `sites/site-charter-forge/index.html`
- `sites/workshop-schedule-ledger/index.html`
- `sites/service-intake-ledger/index.html`
- `sites/offer-readiness-ledger/index.html`

Package note:

Expose as a layout contract only if packaged. Do not name business actions in the component.

## WorkflowRows

Backing classes: `.v2-workflow-rows`, `.v2-workflow-row`

API status: **draft API**.

Required slots:

- status mark;
- category label;
- title;
- detail;
- state chip.

Optional slots:

- two to many rows;
- page-local row meaning.

Allowed variants:

- task/workflow row;
- delivery/review row.

Forbidden responsibilities:

- board shell;
- filters;
- task lifecycle;
- archive policy;
- replacing ordered route lists.

Current HTML source of truth:

- `v2/components.html#workflow`
- `sites/client-work-queue/index.html`
- `sites/delivery-review-board/index.html`

Blocker before package API:

Needs either one more app-like production surface or a consuming-project spike. Current two-surface proof is enough for repo reuse, not enough for public API stability.

## PackageGrid

Backing classes: `.v2-package-grid`, `.v2-package-card`, `.v2-package-card-primary`

API status: **draft API**.

Required slots:

- eyebrow;
- offer/title;
- price or cadence line;
- short description.

Optional slots:

- one primary card;
- three-card grid only for current stable shape.

Allowed variants:

- package offers;
- service tiers.

Forbidden responsibilities:

- pricing model;
- checkout route;
- included/excluded rules;
- proof section;
- guarantee/refund policy.

Current HTML source of truth:

- `v2/components.html#package`
- `sites/package-ledger/index.html`
- `sites/service-tier-ledger/index.html`

Blocker before package API:

Needs one more commercial surface or consumer spike. The current API should not assume every offer has the same price/cadence/included-rule model.

## Explicitly Blocked Components

Do not expose these as package components yet:

| Candidate | Status | Reason |
| --- | --- | --- |
| `HeroShell` | Blocked | Hero shells still carry page-specific layout, asset placement, and first-screen hierarchy. |
| `SideSignalModule` | Blocked | Signal modules vary by asset, copy density, and page pressure. |
| `PricingShell` | Blocked | Pricing/package semantics remain page-local. |
| `WorkflowBoard` | Blocked | Board filters, columns, and lifecycle are not stable. |
| `GenericCard` | Blocked | Too vague; would erase the narrow helper boundaries. |
| `GenericRow` | Blocked | Route rows and workflow rows intentionally differ. |

## Package Preconditions

Before any npm/package scaffolding, complete these:

1. Use this sketch during at least one new applied surface or starter-copy friction pass.
2. Mark `WorkflowRows` and `PackageGrid` stable or keep them out of the first package.
3. Add at least one package-example or import/build verification target.
4. Identify a real consuming project or documented starter-copy friction.
5. Decide framework posture: CSS-only package, HTML snippets, web components, or framework bindings. **Settled for current phase:** CSS-only entry + HTML snippets; web components/framework bindings deferred.

Until then, the recommended delivery remains:

- copy `starters/v2-site-starter/`;
- use `docs/v2-starter-kit-2026-06-01.md`;
- choose helpers from `v2/components.html`;
- keep page recipes local until they repeat under production pressure.

Starter-copy friction note:

- docs/night-runs/2026-06-03-v2-starter-api-friction-pass.md documents the first friction pass.
- The starter now demonstrates RouteList, ActionPair, and SignalBadge directly in copyable HTML.
- This reduces copy friction, but does not replace the need for a real consuming project or package-example verification.

Package-example fixture note:

- package-examples/v2-css-entry/ validates a static CSS-entry import shape.
- It is not npm scaffolding, not a build output, and not a package API commitment.
- It satisfies the first verification-fixture pressure, but did not by itself settle framework posture or consuming-project value.

Framework posture note:

- docs/night-runs/2026-06-03-v2-framework-posture-decision.md records the current delivery posture.
- Current phase: CSS-only entrypoint plus HTML snippets and starter recipes.
- Web components, React, Vue, Svelte, and npm publishing are deferred until a named consumer proves install value over copying the starter.
- This closes the framework-posture blocker for planning, but V2 is still not package-ready because consuming-project value, asset delivery, draft helper scope, and release/version policy remain open.

## Verification

Docs-only pass. Check before closeout:

- `git diff --check`
- `rg -n "V2 Package API Sketch|RouteList|WorkflowRows|Explicitly Blocked Components|Package Preconditions|Framework posture" docs/v2-package-api-sketch-2026-06-03.md README.md docs/v2-library-decision-2026-06-02.md`
