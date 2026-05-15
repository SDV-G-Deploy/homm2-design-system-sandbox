# HOMM2 Design System Operator Index - 2026-05-15

## Status / Scope

Pass 7 documentation consolidation artifact for the HOMM2 design-system documentation program.

This is an operator index, not a new theory pass. It does not reopen Pass 1-6 decisions, add fixture implementation, expand CSS/API/DOM contracts, or rewrite applied pages. Its job is to make the completed documentation set navigable for humans and agents.

The ratified operating sequence is:

1. constitution and system boundary
2. recipe-family selection
3. content budgets and downgrade rules
4. canonical fixtures and proof surfaces
5. generation gates
6. acceptance QA
7. this index

Important consolidation note:

- The earlier Pass 2 protective-layer-first sequencing was reviewed during the Pass 1-4 audit.
- The corrective sync ratified the content-first proof tranche: `ArticleHeroRecipe`, `DossierReadingRecipe`, and `FeedListingRecipe` first.
- `SideRailMetadataRecipe` remains critical support. A bounded host-bound proof now exists for dossier and feed hosts, but broad reuse is still gated by the wider fixture/QA requirements and by any future hero-host decision.
- Future readers should not treat the old sequencing question as still open unless a later pass explicitly reopens it.

## Documentation Set Overview

Use this index as the entry point before jumping into individual docs.

| Document | Role | Current operator status |
| --- | --- | --- |
| `docs/design-system-documentation-program-2026-05-15.md` | Program charter and pass plan | Normative for program shape and pass intent; partly historical after Pass 1-7 completion |
| `docs/design-system-constitution-2026-05-15.md` | System identity, invariants, boundaries and rejection rules | Normative core |
| `docs/recipe-family-map-2026-05-15.md` | Recipe taxonomy, dependency graph and family priority | Normative core after corrective sync; old protective-first notes are superseded by its ratified content-first section |
| `docs/content-contracts-and-budgets-2026-05-15.md` | Per-family budgets, density modes, downgrade order and accessibility text obligations | Normative core for covered families; operational but not fixture proof |
| `docs/fixture-strategy-2026-05-15.md` | Canonical fixture backlog, stress states and proof-surface rules | Normative operational plan; does not claim fixtures are implemented |
| `docs/generation-playbook-2026-05-15.md` | How to assemble new sites from recipe families and gates | Normative operational playbook; broad generation remains gated by fixture and QA proof |
| `docs/acceptance-qa-framework-2026-05-15.md` | Evidence classes, viewport matrix, blocker rules and QA checklists | Normative acceptance framework |
| `docs/pass-1-4-audit-2026-05-15.md` | Audit that found priority drift and side-rail proof ambiguity | Historical/reference after corrective sync; useful to understand why later docs emphasize content-first and host-bound rail proof |
| `docs/side-rail-host-bound-pass-report-2026-05-15.md` | Implementation/evidence ledger for the bounded dossier+feed SideRail host-bound proof pass | Current implementation artifact; not a replacement for the normative gates |

Related older or supporting docs remain useful but are not the Pass 7 core:

- `docs/responsive-recipe-evidence-2026-05-15.md`
- `docs/responsive-recipe-contracts-2026-05-15.md`
- `docs/responsive-recipe-implementation-mapping-2026-05-15.md`
- `docs/responsive-recipe-shared-hooks-pass4-2026-05-15.md`
- `docs/responsive-recipe-viewport-qa-pass5-2026-05-15.md`
- `docs/responsive-recipe-followup-pass6-2026-05-15.md`
- `docs/screen-recipe-contracts-2026-05-14.md`
- `docs/text-system-guidelines-2026-05.md`
- `docs/design-system-research-plan-2026-05.md`

Treat those as supporting evidence, earlier foundations, or MenuScreenRecipe-specific artifacts unless a current core doc explicitly points to them.

## Normative Core Docs

Read these in order when doing production-facing design-system work:

1. `docs/design-system-constitution-2026-05-15.md`
2. `docs/recipe-family-map-2026-05-15.md`
3. `docs/content-contracts-and-budgets-2026-05-15.md`
4. `docs/fixture-strategy-2026-05-15.md`
5. `docs/generation-playbook-2026-05-15.md`
6. `docs/acceptance-qa-framework-2026-05-15.md`

Normative means these docs define what future work must obey unless a later explicit pass updates them. They are not equally specific:

- The constitution owns identity, boundaries, invariants and rejection rules.
- The recipe map owns family names, jobs, status and buildout priority.
- The content contracts own budgets, density behavior and downgrade order for the covered families.
- The fixture strategy owns what can count as canonical proof.
- The generation playbook owns operator workflow and proof gates for new pages/sites.
- The QA framework owns acceptance labels, viewport expectations, blockers and follow-up debt.

When these docs appear to overlap, use the more specific newer doc for implementation detail, but do not violate the constitution's identity and boundary rules without revising it.

## Supporting Operational Docs

These docs are operational, but they support a narrower layer than the full Pass 1-6 core:

| Document family | Use when | Caveat |
| --- | --- | --- |
| Responsive recipe Pass 1-6 docs | Maintaining the proven `MenuScreenRecipe` slice, density hooks, frame-rank hooks and viewport evidence | They prove `MenuScreenRecipe`, not all recipe families |
| `docs/screen-recipe-contracts-2026-05-14.md` | Looking up earlier screen-recipe language and pre-program contract framing | Older than the Pass 1-6 core; defer to current docs on conflicts |
| `docs/text-system-guidelines-2026-05.md` | Editing copy, labels, summaries and text pressure | Supports content budgets but does not replace family contracts |
| `README.md` | Repo orientation, file structure, local preview and deployment | Should be updated to point to this operator index as the doc entry point |
| `reference.html` | Visual/manual reference and system specimens | Documentation surface only; does not define production proof |
| `fixtures/menu-screen-recipe.html` | Canonical proof for `MenuScreenRecipe` | Does not prove hero, dossier, feed, teaser or side-rail families |

## Historical / Audit / Reference Docs

These docs answer why the system evolved, but they should not be used as the current decision source when the core docs disagree:

| Document | Classification | Operator note |
| --- | --- | --- |
| `docs/pass-1-4-audit-2026-05-15.md` | Historical audit/reference | Its findings were acted on by corrective sync and later Pass 5-6 wording; keep it for rationale, not as an unresolved blocker list |
| `docs/design-system-documentation-program-2026-05-15.md` | Program charter plus partial history | Still useful for pass scope and non-goals; individual pass artifacts now carry the live rules |
| `docs/design-system-research-plan-2026-05.md` | Earlier research plan | Context for why the system exists; not the active operator path |
| `docs/deep-design-pass-2026-05-14.md` and visual-strategy docs | Research/reference | Use for evidence and visual background only |
| `docs/responsive-recipe-*` | MenuScreenRecipe proof history | Normative only for that slice unless carried forward by Pass 1-6 docs |

Do not point new operators first to audit or research docs. They are useful after the core path is understood.

## Reading Order By Workflow

### 1. New Site Generation

Minimum reading path before starting:

1. `docs/design-system-constitution-2026-05-15.md`
2. `docs/recipe-family-map-2026-05-15.md`
3. `docs/content-contracts-and-budgets-2026-05-15.md`
4. `docs/generation-playbook-2026-05-15.md`
5. `docs/acceptance-qa-framework-2026-05-15.md`

Add `docs/fixture-strategy-2026-05-15.md` before claiming any output is proof-backed or on-system.

Operator rule:

- A new site may be conceptually assembled when one primary family, legal support families, budgets, downgrade order and proof status are named.
- Broad hero/dossier/feed generation is not proof-backed until the canonical host fixtures exist and pass QA.
- Applied pages and bridge smoke targets can reveal pressure, but they do not replace canonical fixture proof.

### 2. System Maintenance / Extension

Minimum reading path before extending the system:

1. `docs/design-system-constitution-2026-05-15.md`
2. `docs/recipe-family-map-2026-05-15.md`
3. `docs/content-contracts-and-budgets-2026-05-15.md`
4. `docs/fixture-strategy-2026-05-15.md`
5. `docs/acceptance-qa-framework-2026-05-15.md`

Add the relevant implementation/support docs:

- For `MenuScreenRecipe`, read the responsive recipe artifact chain and inspect `fixtures/menu-screen-recipe.html`, `css/tokens.css`, and `css/components.css`.
- For copy or label changes, read `docs/text-system-guidelines-2026-05.md`.
- For README, public preview or deployment changes, read `README.md` and `.github/workflows/deploy-pages.yml`.

Operator rule:

- Extend an existing family only inside its documented budget and downgrade order.
- If no family fits, document or contract the missing family before treating the page as production.
- Promote repeated local fixes into shared hooks only when the recipe contract justifies them.

### 3. Applied-Site Audit / Review

Minimum reading path before auditing an applied page:

1. `docs/design-system-constitution-2026-05-15.md`
2. `docs/generation-playbook-2026-05-15.md`
3. `docs/acceptance-qa-framework-2026-05-15.md`
4. The family-specific sections in `docs/content-contracts-and-budgets-2026-05-15.md`
5. `docs/fixture-strategy-2026-05-15.md` if the page claims proof-backed or on-system status

Operator rule:

- First identify the page's primary recipe family.
- Then check legal support composition and proof tier.
- Then apply the QA blocker checklist before writing aesthetic feedback.
- If the page only has applied or bridge evidence, classify it as conceptual, bounded-experiment or bridge-smoke, not canonical-proof-backed.

## Fast Entry Paths

### Read This First: Humans

If you are new to the repo, read in this order:

1. This index.
2. `docs/design-system-constitution-2026-05-15.md`.
3. The workflow-specific path above.

If you are only trying to understand what is currently proven, read:

1. `docs/generation-playbook-2026-05-15.md`
2. `docs/acceptance-qa-framework-2026-05-15.md`
3. The responsive recipe artifact chain for `MenuScreenRecipe`

### Read This First: Agents

Before writing or auditing HOMM2 UI, an agent must establish:

1. target workflow: generation, maintenance or audit
2. primary recipe family
3. support recipe families
4. proof tier: conceptual, bounded-experiment, bridge-smoke, unit-proof, canonical-proof-backed or accepted
5. required budgets and downgrade order
6. required fixture and QA evidence

Agents should not start from `reference.html`, a visual mood board, or an applied page. Those are evidence and pressure surfaces, not the current source of truth.

## Question-To-Doc Map

| Question | Start with | Then read |
| --- | --- | --- |
| What is this system allowed to be? | `docs/design-system-constitution-2026-05-15.md` | `docs/generation-playbook-2026-05-15.md` for operational limits |
| What must never drift? | `docs/design-system-constitution-2026-05-15.md` | `docs/acceptance-qa-framework-2026-05-15.md` blocker rules |
| Which recipe family fits this screen? | `docs/recipe-family-map-2026-05-15.md` | `docs/generation-playbook-2026-05-15.md` primary-family selection |
| What content limits apply? | `docs/content-contracts-and-budgets-2026-05-15.md` | `docs/text-system-guidelines-2026-05.md` for copy pressure |
| What should collapse or disappear first? | `docs/content-contracts-and-budgets-2026-05-15.md` | `docs/acceptance-qa-framework-2026-05-15.md` for failure checks |
| Which fixtures are required? | `docs/fixture-strategy-2026-05-15.md` | `docs/acceptance-qa-framework-2026-05-15.md` proof expectations |
| Can a generated page be accepted as on-system? | `docs/acceptance-qa-framework-2026-05-15.md` | `docs/generation-playbook-2026-05-15.md` gates |
| Is `SideRailMetadataRecipe` ready for broad reuse? | `docs/generation-playbook-2026-05-15.md` | `docs/acceptance-qa-framework-2026-05-15.md` and `docs/side-rail-host-bound-pass-report-2026-05-15.md` |
| Is the old priority-sequencing concern still open? | `docs/pass-1-4-audit-2026-05-15.md` for history | Current answer lives in `docs/recipe-family-map-2026-05-15.md`, `docs/content-contracts-and-budgets-2026-05-15.md`, `docs/fixture-strategy-2026-05-15.md`, and Pass 5-6 ratification language |
| Where is current proof strongest? | Responsive recipe artifact chain, `fixtures/menu-screen-recipe.html`, and the canonical host fixture tranche now implemented for hero/dossier/feed | `docs/generation-playbook-2026-05-15.md` proof-status section plus `docs/side-rail-host-bound-pass-report-2026-05-15.md` |

## Update / Maintenance Guidance

When the system evolves, update docs in this order:

1. `docs/design-system-constitution-2026-05-15.md` only if identity, invariant rules, applicability boundary or proof philosophy changes.
2. `docs/recipe-family-map-2026-05-15.md` when a family is added, reclassified, reprioritized or promoted/demoted.
3. `docs/content-contracts-and-budgets-2026-05-15.md` when budgets, density behavior, downgrade order or accessibility text obligations change.
4. `docs/fixture-strategy-2026-05-15.md` when canonical fixture names, hostile states, proof classes or bridge/applied boundaries change.
5. `docs/generation-playbook-2026-05-15.md` when page archetypes, support combinations, generation gates or proof-status language change.
6. `docs/acceptance-qa-framework-2026-05-15.md` when evidence classes, viewport matrix, blocker rules or QA checklists change.
7. This index when any document role, reading order, artifact path or operator status changes.
8. `README.md` when the public repo entry path, live preview, file structure or deployment instructions change.

Maintenance rules:

- Update the most authoritative doc first, then downstream operator docs.
- Do not leave old open questions active when a later pass has resolved or superseded them.
- If a doc becomes partially historical, say so in this index instead of making every file appear equally current.
- Keep proof claims tied to fixture and QA evidence, not to applied-page appearance.

## README Update Recommendations

Recommended README changes:

1. Add a short "Documentation entry point" section near the top that links to `docs/design-system-operator-index-2026-05-15.md`.
2. In "How to read the repo", point humans and agents to this index before `reference.html` when the goal is system generation, maintenance or audit.
3. Add a "Current documentation core" list with the six normative docs: constitution, recipe map, content contracts, fixture strategy, generation playbook and acceptance QA framework.
4. Clarify that `reference.html` is a documentation/manual surface, not the source of proof for production recipes.
5. Clarify current proof status: `MenuScreenRecipe` is the proven canonical baseline; hero, dossier and feed now have tranche-1 canonical fixtures, but broader proof still depends on fuller QA evidence.

No README edit is made by this Pass 7 artifact. These are repo-level recommendations for the next maintenance pass.

## Open Questions Or Maintenance Notes

- The first regression-critical host fixture tranche now exists:
  - `fixtures/article-hero-recipe.html`
  - `fixtures/dossier-reading-recipe.html`
  - `fixtures/feed-listing-recipe.html`
- The bounded `SideRailMetadataRecipe` host-bound proof pass for dossier + feed now exists; further work should build on that artifact rather than reopen a broad host-family rewrite.
- `SideRailMetadataRecipe` remains support-only; bounded host-bound proof exists for dossier + feed, but broad readiness still depends on the larger fixture/QA gates and any future hero-host decision.
- `SiteShellNavigationRecipe` still deserves a later narrow contract pass before broad generated sites rely on persistent headers and breadcrumbs.
- Promo-heavy, utility/dashboard, ecommerce-like, search-heavy, form-heavy, regulated or safety-critical screens remain outside current proof unless a future family contract and QA pass covers them.
- Future consolidation should update this index whenever artifact names change. As of this pass, Pass 5 is `docs/generation-playbook-2026-05-15.md` and Pass 6 is `docs/acceptance-qa-framework-2026-05-15.md`.

## Verification

- Confirmed the current Pass 1-7 core artifact paths exist in `docs/`.
- Confirmed Pass 5 artifact path is `docs/generation-playbook-2026-05-15.md`.
- Confirmed Pass 6 artifact path is `docs/acceptance-qa-framework-2026-05-15.md`.
- Re-read the current core docs and the Pass 1-4 audit to distinguish live normative decisions from historical audit findings.
- Preserved the ratified content-first sequencing and proof gates.
- Did not add fixture implementation, CSS/API/DOM expansion or applied-page rewrites.
