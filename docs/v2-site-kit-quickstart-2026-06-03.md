# V2 Site Kit Quickstart - 2026-06-03

Use this when starting a new small V2 site from zero.

## Current Promise

V2 can produce different small sites in one recognizable **solar-civic fantasy
interface** by starting from five page shapes and replacing content, state rows,
accent choices, and bounded assets.

This is a repo-native Site Kit. It is not npm, a framework package, web
components, a generator, or a no-code system.

## Pick A Template

| Need | Start from |
| --- | --- |
| Offer, product, campaign, service | `starters/v2-site-starter/templates/product-landing/` |
| Audit, field note, case study, result page | `starters/v2-site-starter/templates/report-proof/` |
| Queue, readiness board, operational status | `starters/v2-site-starter/templates/dashboard-status/` |
| Object/tool/asset/route list | `starters/v2-site-starter/templates/catalog-object-list/` |
| Route, field kit, location/status narrative | `starters/v2-site-starter/templates/civic-route-map/` |

## Build Steps

1. Copy the chosen template into `sites/<site-name>/`.
2. Update stylesheet and asset paths for the new folder depth.
3. Replace nouns, route rows, state labels, facts, and CTA copy before changing
   structure.
4. Keep shared V2 helpers unless repeated production pressure proves a new
   helper is needed.
5. Use existing `assets/v2/` slots before creating new visuals.
6. Add page-local CSS only when the template cannot express the page.
7. Run verification before publishing.

## Verification

Minimum gates:

```sh
git diff --check
node --check tools/regression-smoke.js
node tools/regression-smoke.js
```

For changed pages, also run focused visual capture:

```sh
node tools/visual-capture.js \\
  --target /sites/<site-name>/index.html \\
  --out tmp/<site-name>-check \\
  --selector body \\
  --selector .v2-topbar
```

Check desktop, 390px mobile, and 360px narrow output for:

- no horizontal overflow;
- no clipped visible labels;
- readable first screen;
- short product navigation;
- no proof/trial/reference vocabulary in customer-facing copy.

## Use These References

- Current checkpoint: `docs/night-runs/2026-06-03-v2-site-kit-wrap.md`
- Site Kit direction: `docs/v2-site-kit-2026-06-03.md`
- Promoted helper inventory: `v2/components.html`
- Asset slot rules: `docs/v2-asset-production-kit-2026-06-02.md`
- Visible asset gallery: `v2/assets.html`
- Package pause checkpoint: `docs/night-runs/2026-06-03-v2-package-gate-wrap.md`

## Do Not Add From This State

- npm package;
- framework bindings;
- web components;
- build tooling;
- versioned release flow;
- generator or prompt-to-site automation.

Reopen those only after a named consumer shows repeated pain that template-copy
cannot solve.
