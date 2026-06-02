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

