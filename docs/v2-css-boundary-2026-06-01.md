# V2 CSS Boundary - 2026-06-01

This note turns the current V2 monolith into an explicit extraction map. Keep `css/v2.css` as the shipping file until the sections are stable across another production recipe.

## Verdict

`css/v2.css` is acceptable as a single deployed file for the sandbox, but not as the long-term authoring shape for fast product work.

The production kit should split into shared primitives first, then page recipes.

## Current Boundaries

1. **Tokens and base**
   - `:root`, global sizing, body background, base links.
   - Future file: `v2.tokens.css`.

2. **Shell / chrome**
   - `.v2-topbar`, `.v2-brand`, `.v2-sigil`, `.v2-nav`, `.v2-production-page`.
   - Future file: `v2.shell.css`.

3. **Shared surfaces and components**
   - `.v2-hero`, `.v2-panel`, `.v2-ledger`, `.v2-command`, `.v2-lens-module`, `.v2-status-list`, `.v2-route-list`.
   - Future file: `v2.components.css`.

4. **Reference / proof board**
   - `.v2-reference-*`, `.v2-primitive-*`, proof-only board composition.
   - Future file: `v2.reference.css`.
   - Rule: never copy this layer into a production page as product UI.

5. **Page recipes**
   - `.v2-dossier-*`, `.v2-trial-*`, `.v2-control-*`, `.v2-ant-*`.
   - `.v2-clinic-*` is the compact service/booking recipe added after this boundary note.
   - Future files: `v2.recipe.dossier.css`, `v2.recipe.launch.css`, `v2.recipe.control.css`, `v2.recipe.ant-school.css`, `v2.recipe.service.css`.

## Production Copy Rule

Production-like pages must not show system-building words as customer-facing UI:

- avoid: `proof`, `trial`, `primitive board`, `reference`, `content budget`;
- use instead: `signal`, `route`, `desk`, `map`, `result`, `status`, `readiness`, `launch`, `queue`.

Internal class names can remain during the transition, but visible copy and primary navigation must use product language.

## Next Split Gate

Do the physical CSS split only after one more real product recipe ships without new shared-component churn.

Minimum gate before splitting:

- `node tools/regression-smoke.js`;
- visual capture for every V2 page that imports the split files;
- no production page depends on `.v2-reference-*` for layout;
- at least two production recipes use the same shared component classes without page-local overrides.
