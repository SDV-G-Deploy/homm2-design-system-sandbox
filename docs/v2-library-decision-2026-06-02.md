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

## Next Practical Pass

The best next engineering pass is not package creation. It is a **promotion audit**:

1. Compare `ant-school-landing-v2`, `product-map-field-note`, and `build-brief-desk`.
2. Identify repeated structure that can move from `.v2-antv2-*`, `.v2-note-*`, and `.v2-brief-*` into shared `.v2-*` components.
3. Move only 1-2 stable patterns.
4. Run smoke and visual capture for all touched surfaces.

After that, package readiness can be judged with better evidence.

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
