# V2 Library Decision - 2026-06-02

## Verdict

Do not extract V2 into an npm package or formal component library yet.

Keep V2 as a repo-native **production recipe kit** with stronger extraction gates.

The current system is stable enough for new static pages and small sites, but not mature enough for a package API. The right next step is to keep shipping from the starter, promote repeated patterns deliberately, and only package when the shared layer stops changing.

## Why Not Package Yet

### 1. Recipe CSS is still the active workshop

The shared layers are already separated:

- `css/v2.tokens.css`
- `css/v2.shell.css`
- `css/v2.components.css`
- `css/v2.reference.css`
- `css/v2.recipes.css`
- `css/v2.responsive.css`

But `css/v2.recipes.css` is still the largest and most active layer. It contains page-local families such as:

- `.v2-ant-*`
- `.v2-antv2-*`
- `.v2-clinic-*`
- `.v2-note-*`
- `.v2-brief-*`
- `.v2-control-*`

That is expected at this stage. It means the system is still learning from production surfaces.

### 2. Components exist, but APIs do not

V2 has useful primitives:

- topbar;
- brand/sigil/nav;
- hero;
- ledger;
- panel;
- route list;
- status list;
- lens module;
- command buttons;
- asset slots.

These are production-useful CSS/HTML patterns, not yet stable component APIs. A package would force premature decisions about props, slots, variants, naming, build tooling, framework support, and versioning.

### 3. Current delivery is static and intentionally simple

The repo currently deploys as static GitHub Pages:

- no dependency install;
- no build step;
- no package publish;
- no framework lock-in.

That simplicity is a strength while the visual grammar is still being shaped.

## What To Do Instead

### Keep the recipe kit as canonical

New pages should continue to start from:

- `starters/v2-site-starter/`
- `docs/v2-starter-kit-2026-06-01.md`
- `docs/v2-asset-production-kit-2026-06-02.md`
- `docs/v2-acceptance-2026-06-01.md`

The recipe kit should remain the user-facing production path.

### Promote only repeated patterns

Promote a page-local class into shared components only when it appears in at least two production surfaces and keeps the same meaning.

Candidate promotions to watch:

- compact production hero shell;
- page-local action pair;
- side instrument card;
- output rail;
- readiness lens block;
- article/work-surface route queues.

Do not promote one-off page flavor classes just because they look polished.

### Add an extraction ledger

Future passes should record possible promotions in a lightweight ledger:

~~~txt
Pattern:
Current classes:
Used in:
Shared meaning:
Mobile behavior:
Asset dependency:
Decision: keep local / promote to component / defer
~~~

This prevents the CSS from becoming a pile of attractive exceptions.

### Keep visual generation as a separate lane

The component promotion track is not the same thing as the visual asset track.

V2 should continue to grow generated or hand-produced visual elements through `docs/v2-asset-production-kit-2026-06-02.md`, especially:

- threshold assets;
- seals and badges;
- water-lens instruments;
- vellum, fiber, metal, and garden-civic textures;
- transparent object cutouts;
- bounded PNG/WebP hero details;
- compact sprite-like UI ornaments.

These assets should be produced for named slots with fallbacks and mobile checks. They should not become full-page screenshots, baked text, or uncontrolled decoration.

## Package Readiness Gates

V2 can be reconsidered for an npm/component package when all of these are true:

1. At least 3-4 production surfaces share the same primitives without page-local overrides.
2. `css/v2.components.css` grows by promotion, while `css/v2.recipes.css` stops absorbing every new idea.
3. A small component API can be written without inventing props from scratch.
4. Asset slots have stable names and fallback rules through Images 2.0.
5. The verification harness can run against package examples, not only repo pages.
6. There is a real consuming project that benefits from package installation more than copying the starter folder.

Until those gates are met, packaging creates maintenance cost without enough leverage.

## Recommended Structure For Now

Current recommended structure:

~~~txt
css/
  v2.css                  compatibility entrypoint
  v2.tokens.css           stable
  v2.shell.css            stable-ish
  v2.components.css       promotion target
  v2.reference.css        proof-only
  v2.recipes.css          active workshop
  v2.responsive.css       final cascade layer
starters/
  v2-site-starter/        copyable production seed
sites/
  */                      production proofs
docs/
  v2-*.md                 contracts and decisions
assets/v2/
  *.svg *.webp            named Images 2.0 slots
~~~

## Latest Practical Pass

After the 2026-06-03 promotions, the next engineering pass was the **promoted-helper inventory board**:

1. `v2/components.html` displays every promoted helper.
2. Each helper shows the class name, ownership boundary, one correct example, and one non-scope warning.
3. Responsive helpers have mobile-safe examples.
4. The page is part of the smoke harness and has focused visual capture.

Report: `docs/night-runs/2026-06-03-v2-promoted-helper-inventory.md`.

The package-readiness review against this visible helper inventory is complete.

Report: `docs/night-runs/2026-06-03-v2-package-readiness-review.md`.

Decision remains: do not create an npm/component package yet.

The documentation-only package API sketch is now recorded in `docs/v2-package-api-sketch-2026-06-03.md`. It maps promoted helpers to possible component contracts and marks candidates as stable repo helpers, draft APIs, or blocked. The latest system checkpoint is `docs/night-runs/2026-06-03-v2-system-checkpoint-after-promotions.md`.

Starter-copy friction was checked in `docs/night-runs/2026-06-03-v2-starter-api-friction-pass.md`.

The starter now points builders to the promoted helper inventory and demonstrates `RouteList`, `ActionPair`, and `SignalBadge` directly in `starters/v2-site-starter/index.html`.

This reduced starter-copy friction, but did not change the library verdict: at that point V2 still needed a consuming project, import/build verification, and a framework posture decision.

The first package-example fixture is now package-examples/v2-css-entry/.

It validates a static CSS-entry import shape through the normal smoke and visual harness, without npm scaffolding, build output, or publishing. This adds verification pressure, but does not change the no-package verdict because framework posture and consuming-project value were still open at that point.

Framework posture is now decided for the current phase.

Report: `docs/night-runs/2026-06-03-v2-framework-posture-decision.md`.

V2 should continue as CSS-only entry + HTML snippets and starter recipes. Web components, React/Vue/Svelte bindings, npm publishing, build tooling, and release flow remain deferred until a named consumer proves package installation is better than copying the starter. This closes the framework-posture planning blocker, but the no-package verdict remains because consuming-project value, asset delivery outside repo paths, draft helper scope, and versioning policy remain open.

## Promotion Results

After the independent audit in `docs/night-runs/2026-06-02-promotion-audit-alt.md`, `.v2-route-list` was promoted from `css/v2.recipes.css` to `css/v2.components.css`.

Report: `docs/night-runs/2026-06-02-route-list-promotion.md`.

After the Agent Readiness Ledger surface added a second production use for the same route/status sprite role, `.v2-status-mark` was promoted from duplicated page-local recipe CSS to `css/v2.components.css`.

Report: `docs/night-runs/2026-06-02-promotion-audit-v2-1.md`.

After the state/signal helper and critic audits, `.v2-state-meter-strip` was promoted as a narrow Images 2.0 asset-frame helper for the repeated `state-meter-readiness` slot across Build Brief Desk, Agent Readiness Ledger, and Site Charter Forge.

Report: `docs/night-runs/2026-06-02-state-meter-strip-promotion.md`.

The next promotion candidate remains narrow: possibly a compact signal/badge pattern after more surfaces prove the same slot anatomy. Hero shells, side instruments, meter panels, action pairs, output rails, and CTA ledger endings stay deferred until more surfaces prove stable slots.

After the Workshop Schedule Ledger added a third compact icon + label/value proof, `.v2-signal-badge` was promoted as a narrow helper. It shares only the compact badge anatomy; page-local classes still own background, border, icon size, and emphasis. Large signal wrappers remain deferred.

Report: `docs/night-runs/2026-06-02-signal-badge-promotion.md`.

After Offer Readiness Ledger added a fourth production-like proof section, `.v2-production-proof` and `.v2-proof-grid` were promoted as narrow proof-section helpers. They share only the heading-plus-three-card anatomy and responsive grid behavior; page-local classes still own hero shells, side signal modules, final writ blocks, and semantic accents.

Report: `docs/night-runs/2026-06-03-proof-grid-promotion.md`.

After the same four production-like surfaces repeated the two-command hero action pair, `.v2-action-pair` was promoted as a narrow layout helper. It shares only the grid, gap, and desktop two-column width for primary/secondary `.v2-command` links; page-local classes still own copy, anchors, hero shells, and signal modules.

Report: `docs/night-runs/2026-06-03-action-pair-promotion.md`.

After the same four production-like surfaces repeated the final-ledger closure layout, `.v2-closure-ledger` and `.v2-closure-grid` were promoted as narrow helpers. They share only the ending-section command spacing and the left-record/status-list grid; page-local classes still own writ/reserve/send/publish semantics, left-slot card styling, objects, dates, notes, copy, and anchors.

Report: `docs/night-runs/2026-06-03-closure-grid-promotion.md`.

After Delivery Review Board supplied a second app-like workflow surface, `.v2-workflow-rows` and `.v2-workflow-row` were promoted as narrow helpers. They share only the icon + text stack + state-chip row anatomy and desktop/mobile chip placement; page-local classes still own Work Queue and Delivery semantics, state vocabulary, surrounding boards, note cards, proof/archive panels, copy, and actions.

Report: `docs/night-runs/2026-06-03-workflow-row-promotion.md`.

After Service Tier Ledger supplied a second commercial surface, `.v2-package-grid`, `.v2-package-card`, and `.v2-package-card-primary` were promoted as narrow helpers. They share only the comparison-card grid, shell, text stack, price line styling, and primary-card emphasis; page-local classes still own package/tier semantics, prices, purchase/start routes, included/excluded rules, proof sections, and commercial copy.

Report: `docs/night-runs/2026-06-03-package-card-promotion.md`.

After the post-promotion checkpoint, `v2/components.html` was added as the compact promoted-helper inventory board. It does not promote new helpers; it makes the existing shared contract visible and testable.

Report: `docs/night-runs/2026-06-03-v2-promoted-helper-inventory.md`.

After the helper inventory existed, the package-readiness gates were reviewed again. V2 remains a repo-native production recipe kit, not an npm/package candidate, because the API, package examples, and consuming-project reason are still missing.

Report: `docs/night-runs/2026-06-03-v2-package-readiness-review.md`.

A documentation-only package API sketch now exists. It is not scaffolding and not an API commitment; it only tests whether current helper boundaries can be written without inventing package behavior.

Sketch: `docs/v2-package-api-sketch-2026-06-03.md`.
