# V2 Named Consumer Spike

Date: 2026-06-03

Status: **throwaway consumer proof**. The compared pages live under ignored `tmp/` only; no package scaffolding, build tooling, publish flow, framework binding, or production surface was added.

## Target

Named near-external consumer: **Guild Repair Desk**.

Purpose: a small service intake page for civic repair requests, water-route triage, workshop handoff, and one written next step.

This target is close enough to real usage to test consumer friction, but it is intentionally not a new canonical V2 production surface.

## Compared Builds

### Copied Starter

Throwaway path:

- `tmp/v2-named-consumer-spike-2026-06-03/starter-copy/index.html`

Source:

- copied from `starters/v2-site-starter/index.html`

Work needed:

- replace title, meta, brand, nav labels, route copy, signal copy, and CTA copy;
- rewrite CSS and asset paths for the throwaway folder depth;
- keep existing production chrome, hero anatomy, action pair, route list, signal badge, and closing ledger.

Result:

- reached a coherent repair-intake page with mostly content replacement;
- retained the starter's production-page assumptions;
- did not need a new component API;
- did not need package tooling.

### CSS Entry Import

Throwaway path:

- `tmp/v2-named-consumer-spike-2026-06-03/css-entry/index.html`
- `tmp/v2-named-consumer-spike-2026-06-03/css-entry/v2-entry.css`

Source:

- copied from `package-examples/v2-css-entry/`

Work needed:

- rewrite the CSS import path in `v2-entry.css`;
- rewrite asset paths in the HTML;
- replace fixture/demo copy;
- manually preserve or reinterpret page anatomy;
- clean proof/fixture vocabulary that the CSS entry fixture naturally carried;
- keep consumer-side knowledge of which V2 helper combinations make a good page.

Result:

- rendered correctly after path and copy cleanup;
- proved that a CSS entry can load stable helpers in a consumer-like location;
- did not reduce the consumer's need to know markup anatomy, production chrome rules, asset conventions, and page-local recipe boundaries.

## Visual Check

Both throwaway builds were captured with the normal visual tool.

Copied starter capture:

- output: `tmp/v2-named-consumer-spike-2026-06-03/capture-starter/`
- desktop 1440x900: offenders 0
- mobile 390x844: offenders 0
- narrow 360x740: offenders 0

CSS-entry capture:

- output: `tmp/v2-named-consumer-spike-2026-06-03/capture/`
- desktop 1440x900: offenders 0
- mobile 390x844: offenders 0
- narrow 360x740: offenders 0

## Verdict

The named consumer spike does **not** prove package install value.

The CSS-entry path works technically, but it does not yet beat starter-copy value. The starter carries the actual consumer leverage today:

- page chrome;
- HTML anatomy;
- production vocabulary defaults;
- helper composition;
- asset slot expectations;
- local recipe escape hatch;
- no dependency or release surface.

The CSS-entry fixture is still useful as a verification target and future package pressure, but it is not a better consumer path by itself.

## Package Gate Result

Package extraction remains **blocked**.

Current gate state:

- API sketch: present;
- promoted helper inventory: present;
- starter-copy friction: reduced;
- CSS-entry fixture: present;
- framework posture: CSS-only entry + HTML snippets for current phase;
- named consumer spike: completed;
- install value over starter-copy: **not proven**.

## Pause Recommendation

Pause package work here.

The next decision should be made after thinking, not by continuing to add scaffolding. The system has enough evidence to say:

- keep V2 repo-native for now;
- keep shipping from `starters/v2-site-starter/`;
- keep `package-examples/v2-css-entry/` as a fixture only;
- do not add npm, framework bindings, web components, versioning, or release flow yet.

## Verification

Commands run:

- `node tools/visual-capture.js --target /tmp/v2-named-consumer-spike-2026-06-03/starter-copy/index.html --out tmp/v2-named-consumer-spike-2026-06-03/capture-starter --selector body --selector .v2-hero --selector .v2-route-list --selector .v2-signal-badge`
- `node tools/visual-capture.js --target /tmp/v2-named-consumer-spike-2026-06-03/css-entry/index.html --out tmp/v2-named-consumer-spike-2026-06-03/capture --selector body --selector .v2-hero --selector .v2-route-list --selector .v2-signal-badge`
- `git diff --check`
- `rg -n "Named Consumer Spike|Guild Repair Desk|install value|Package extraction remains|Pause package work" README.md docs/v2-package-api-sketch-2026-06-03.md docs/v2-library-decision-2026-06-02.md docs/night-runs/2026-06-03-v2-named-consumer-spike.md`
- `find package-examples -name package.json -o -name dist -o -name vite.config.js -o -name webpack.config.js -o -name rollup.config.js` returned no package/build scaffolding.
