# V2 Framework Posture Decision

Date: 2026-06-03

Status: **decision record**. No package scaffolding, build tooling, framework binding, or publish flow was added.

## Decision

V2's current delivery posture is:

- **CSS-only entrypoint** for shared styling;
- **HTML snippets and starter recipes** for markup shape;
- **repo-native static examples** for verification;
- **no web components, React, Vue, Svelte, or npm package yet**.

The practical delivery path remains:

1. Copy `starters/v2-site-starter/` for production-like pages.
2. Choose stable helpers from `v2/components.html`.
3. Use `package-examples/v2-css-entry/` only as a static CSS-entry fixture.
4. Keep page recipes local until a pattern repeats under production pressure.

## Rationale

The current evidence supports CSS and HTML reuse, not framework abstraction.

Stable helper boundaries can be described for `RouteList`, `StatusMark`, `StateMeterStrip`, `SignalBadge`, `ProofGrid`, `ActionPair`, and `ClosureLedger`. That is enough for copyable snippets and repo-native examples.

It is not yet enough for framework components because the missing decisions would be invented rather than extracted:

- prop names and event contracts;
- slot composition rules;
- asset delivery outside this repo;
- versioning and release policy;
- consumer build assumptions;
- framework priority.

## Deferred Postures

### Web Components

Deferred. Web components could preserve framework neutrality later, but they would force shadow DOM, slot, CSS custom property, and asset-loading decisions before a real consumer proves the need.

### Framework Bindings

Deferred. React, Vue, Svelte, or similar bindings should wait for a named consuming project. Adding them now would create maintenance obligations without proof that installation beats copying the starter.

### npm Package

Deferred. The first package shape, if it ever becomes worth it, should start as a CSS-only package plus documented HTML snippets. It should not begin as a component library.

## Updated Package Gate

Framework posture is now settled for the current phase:

- current phase: CSS-only entry + HTML snippets;
- later candidate: CSS-only package first;
- later optional layer: framework/web-component bindings only after consumer proof.

This closes the framework-posture blocker from the API sketch, but it does not make V2 package-ready.

Remaining blockers before package extraction:

1. A real consuming project must prove install value over starter-copy value.
2. Asset slots need a delivery policy outside the repo path structure.
3. `WorkflowRows` and `PackageGrid` must either stabilize further or stay out of the first package.
4. Versioning and release policy must be written before any publish flow.

## Verification

Docs-only pass. Verification performed:

- `git diff --check`
- `rg -n "Framework Posture|CSS-only entry|HTML snippets|web components|framework bindings|package-examples/v2-css-entry" README.md docs/v2-package-api-sketch-2026-06-03.md docs/v2-library-decision-2026-06-02.md docs/night-runs/2026-06-03-v2-framework-posture-decision.md`

## Next Recommended Pass

Run a small consumer-value pass before any package scaffold:

- choose one real or near-real consuming target;
- compare copying `starters/v2-site-starter/` against importing `package-examples/v2-css-entry/v2-entry.css`;
- document where starter-copy hurts and where install would actually help.

If that pass does not show clear friction, keep V2 as a repo-native recipe kit.
