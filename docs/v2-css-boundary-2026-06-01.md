# V2 CSS Boundary - 2026-06-01

This note records the V2 CSS extraction boundary. `css/v2.css` remains the compatibility entrypoint, but authoring now happens in split files.

## Verdict

`css/v2.css` is no longer the long-term authoring file. It imports the split layers below so existing pages keep the same stylesheet URL.

The production kit is split into shared primitives first, then page recipes, with responsive rules kept in one final layer for cascade safety.

## Current Boundaries

1. **Tokens and base**
   - `:root`, global sizing, body background, base links.
   - File: `css/v2.tokens.css`.

2. **Shell / chrome**
   - `.v2-topbar`, `.v2-brand`, `.v2-sigil`, `.v2-nav`, `.v2-production-page`.
   - File: `css/v2.shell.css`.

3. **Shared surfaces and components**
   - `.v2-hero`, `.v2-panel`, `.v2-ledger`, `.v2-command`, `.v2-lens-module`, `.v2-status-list`, `.v2-route-list`.
   - File: `css/v2.components.css`.

4. **Reference / proof board**
   - `.v2-reference-*`, `.v2-primitive-*`, proof-only board composition.
   - File: `css/v2.reference.css`.
   - Rule: never copy this layer into a production page as product UI.

5. **Page recipes**
   - `.v2-dossier-*`, `.v2-trial-*`, `.v2-control-*`, `.v2-ant-*`.
   - `.v2-clinic-*` is the compact service/booking recipe added after this boundary note.
   - File: `css/v2.recipes.css`.

6. **Responsive contracts**
   - Shared and page recipe media queries.
   - File: `css/v2.responsive.css`.
   - Keep this last while the system is still stabilizing; split recipe-specific media queries later only when the recipe files stop changing.

## Production Copy Rule

Production-like pages must not show system-building words as customer-facing UI:

- avoid: `proof`, `trial`, `primitive board`, `reference`, `content budget`;
- use instead: `signal`, `route`, `desk`, `map`, `result`, `status`, `readiness`, `launch`, `queue`.

Internal class names can remain during the transition, but visible copy and primary navigation must use product language.

## Completed Split Gate

The physical split was done after the Canopy Clinic service recipe shipped without new shared-component churn.

Minimum gate for future CSS boundary changes:

- `node tools/regression-smoke.js`;
- visual capture for every V2 page that imports the split files;
- no production page depends on `.v2-reference-*` for layout;
- at least two production recipes use the same shared component classes without page-local overrides.
