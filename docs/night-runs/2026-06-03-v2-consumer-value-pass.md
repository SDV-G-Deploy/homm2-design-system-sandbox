# V2 Consumer Value Pass

Date: 2026-06-03

Status: **docs-only package gate review**. No npm package, build tooling, publish flow, framework binding, or new fixture was added.

## Question

Would a package install currently give more value than copying the V2 starter folder?

Short answer: **not yet**.

## Compared Paths

### Copy Starter

Current path:

1. Copy `starters/v2-site-starter/`.
2. Keep `body.v2-production-page`.
3. Replace page copy and routes.
4. Choose stable helpers from `v2/components.html`.
5. Keep page-local recipe CSS until a pattern repeats.
6. Run smoke and visual gates.

Value carried by this path:

- production-page chrome and navigation assumptions;
- starter HTML anatomy;
- helper-selection guidance;
- asset path conventions;
- production vocabulary rules;
- local recipe escape hatch;
- no dependency, build, or publish surface.

### Import CSS Entry

Current path:

1. Link or import `package-examples/v2-css-entry/v2-entry.css`.
2. Hand-write compatible HTML.
3. Resolve asset paths and page-local recipes manually.
4. Add consumer-side verification.

Value carried by this path:

- verifies the shared CSS entry can load from a separate fixture;
- proves stable helpers can render outside the main V2 pages;
- creates pressure for future asset/path decisions.

Current limitation:

The CSS entry does not carry markup, page chrome, production vocabulary, asset policy, or page-local recipe guidance. It is useful as a verification fixture, but it is not enough to beat starter-copy value.

## Verdict

The consumer-value gate is **not met**.

The strongest current consumer path remains `starters/v2-site-starter/` plus docs. A package would reduce little friction today and would introduce naming, asset delivery, versioning, and release obligations too early.

## Package Gate Update

The package readiness state after this pass:

- starter-copy friction: reduced;
- API sketch: documented;
- CSS entry fixture: present;
- framework posture: settled for current phase;
- consumer install value: **not proven**;
- package extraction: **still blocked**.

A future CSS-only package should be reconsidered only if a consumer spike shows concrete pain in at least one of these areas:

- repeated manual copying across projects;
- asset path rewrites that a package can actually solve;
- shared CSS upgrades becoming hard to apply to copied starters;
- multiple consumers needing the same stable helper snippets;
- a real deployment target requiring dependency-based delivery.

## Next Recommended Pass

Do not scaffold a package yet.

Best next pass: pick one named external or near-external consumer and run a bounded spike:

- create a throwaway consumer folder outside the main V2 surfaces;
- attempt one page via copied starter;
- attempt the same page via CSS-entry import;
- record friction in setup, asset paths, markup, upgrades, and verification;
- only then decide whether a CSS-only package has leverage.

## Verification

Docs-only pass. Verification performed:

- `git diff --check`
- `rg -n "Consumer Value|consumer-value|starter-copy|CSS entry|package extraction|still blocked" README.md docs/v2-package-api-sketch-2026-06-03.md docs/v2-library-decision-2026-06-02.md docs/night-runs/2026-06-03-v2-consumer-value-pass.md`
- `find package-examples -name package.json -o -name dist -o -name vite.config.js -o -name webpack.config.js -o -name rollup.config.js` returned no package/build scaffolding.
