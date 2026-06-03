# V2 Site Kit Wrap - 2026-06-03

## Verdict

V2 Site Kit is now a coherent repo-native production kit for quickly creating
small pages in one solar-civic fantasy interface.

It is not a no-code generator, npm package, framework binding, or public
component library. Its current value is practical internal speed:

1. pick a known page shape;
2. copy a template;
3. replace nouns, rows, states, assets, and calls to action;
4. keep promoted V2 helpers;
5. run smoke, visual capture, deploy, and live checks.

## Completed Template Set

| Template | First proof | Use |
| --- | --- | --- |
| Product / landing | `sites/canal-signal-desk/` | Offer, product, service, campaign |
| Report / proof | `sites/aqueduct-audit-note/` | Audit, case study, field note, result page |
| Dashboard / status board | `sites/harbor-readiness-board/` | Queue, readiness board, operational surface |
| Catalog / object list | `sites/civic-tool-registry/` | Objects, tools, routes, assets, offer lists |
| Civic route / map-like page | `sites/sunwell-route-map/` | Route, field kit, location/status narrative |

All five templates are under `starters/v2-site-starter/templates/`.

## What Is Stable

- Direction: **solar-civic fantasy interface**.
- V2 form: frames, ledgers, plaques, bevels, route rows, state badges, final
  writ/closure surfaces.
- V2 condition: water readings, gate state, civic handoff, route readiness,
  archive/replacement rules, living system feedback.
- Shared entry: `css/v2.css`.
- Promoted helper inventory: `v2/components.html`.
- Copyable starter path: `starters/v2-site-starter/`.
- Asset lane: `docs/v2-asset-production-kit-2026-06-02.md` and `v2/assets.html`.
- Verification lane: `node tools/regression-smoke.js` plus focused
  `node tools/visual-capture.js`.

## Evidence Of Stability

The last four template additions reused existing shared CSS. The fifth pass
completed the initial set and the full smoke harness passed:

- `git diff --check`
- `node --check tools/regression-smoke.js`
- focused visual captures on changed templates and live proofs
- full regression smoke: 42 targets across 3 viewports
- GitHub Pages deploys
- live HTTP 200 checks

This means V2 can already create varied same-family sites without reopening CSS
architecture, package scaffolding, or visual direction.

## What Still Needs Care

- Template copy still needs manual path adjustment.
- Content judgment is still human: nouns, states, row order, and CTA wording
  decide whether a page feels real or generic.
- Asset selection is bounded but manual. The system has slots and fallbacks, not
  automatic image generation.
- No formal generator exists. A prompt-to-site or JSON-to-page layer would be a
  new product surface, not a small cleanup.
- Some recipe CSS remains active and larger than shared components. That is
  acceptable while applied surfaces continue teaching the system.

## Package Decision

Do not add npm, framework bindings, web components, build tooling, versioning,
or release flow from this checkpoint.

The package gate remains closed because Site Kit has proven that copying the
starter and templates is still more valuable than installing an external
library. Reopen package work only after a named consumer shows repeated pain
that template-copy cannot solve.

## Potential

The practical promise is:

> We can make different small sites in a shared, recognizable V2 style by
> starting from five page shapes and replacing content, state rows, accents, and
> bounded assets.

This is strongest for:

- focused landing pages;
- reports and audit notes;
- compact operational boards;
- registries and catalogs;
- route/status narratives.

It is weaker for:

- large apps with deep interaction;
- arbitrary brand systems;
- pages that need bespoke illustration as the main value;
- fully automated site generation without human content judgment.

## Recommended Next Lane

Pause feature expansion here and do one of three bounded lanes next:

1. **Wrap / documentation cleanup** - make README and starter docs easier to
   enter from zero.
2. **Asset polish** - improve one or two reusable visual slots used across the
   five templates.
3. **Generator spike** - only as a throwaway experiment: can a short structured
   brief fill one template safely without reducing quality?

Default recommendation: documentation cleanup first, then one asset polish pass.
