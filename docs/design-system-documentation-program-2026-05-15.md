# HOMM2 Design-System Documentation Program - 2026-05-15

## Goal

Turn the current HOMM2 sandbox from a strong visual/reference sandbox plus one stabilized responsive slice into a documentation base that can guide future site generation with much lower layout risk.

This program is not trying to prove that "any site can be generated in two prompts and never break." The goal is narrower and more useful:

- make the design system operational, not just inspirational;
- define what is invariant versus theme-adaptable;
- document recipe families, content budgets and downgrade rules;
- build enough fixtures and QA expectations that new sites can be generated faster and with predictable review points.

## Non-Goals

- No broad visual rewrite of the sandbox.
- No claim that one recipe family proves full-system stability.
- No promise of zero breakage without QA.
- No applied-site production rollout inside this documentation program.

## Why This Program Exists

Current repo strengths:

- strong art direction and material grammar;
- formalized tokens and shared components;
- one stabilized responsive recipe slice for \`MenuScreenRecipe\`;
- Pages deployment and durable public reference URLs.

Current repo weaknesses:

- recipe-family coverage is still too narrow for large editorial or portal-style sites;
- contracts are proven in one slice, not across dense content families;
- documentation is informative, but not yet shaped into a generation playbook;
- future site generation still depends too much on taste and manual correction.

## Success Criteria

This program is successful when the repo can support all of the following:

1. A human or agent can tell which parts of the style are fixed system rules and which parts are theme-level swaps.
2. A new site concept can be mapped to documented recipe families instead of improvised page-by-page.
3. Each major recipe family has documented content budgets and downgrade order.
4. Stress fixtures exist for dense, ugly, realistic content.
5. Generation prompts can target the documentation base with explicit acceptance criteria.
6. Reviewers can reject generated work using concrete contract failures rather than vague aesthetic discomfort.

## Program Shape

Run this as bounded \`codex_alt_high\` passes, supervised from main, using large-run protocol.

Default supervision rules:

- check progress around 10 minutes for tool-heavy passes;
- use about 20 minutes as the default bounded cap per pass;
- every pass must write its named artifact early;
- recover from the latest artifact/checkpoint instead of re-running from the original broad prompt.

## Pass Plan

### Pass 1. System Constitution

Goal:
Define the actual constitution of the design system: what is invariant, what is flexible, what is forbidden, and what quality bar new sites must preserve.

Artifact:
- \`docs/design-system-constitution-2026-05-15.md\`

Required output:

- core identity and north-star definition;
- invariant system principles;
- allowed thematic variation surface;
- anti-drift rules;
- prohibited failure modes;
- relationship between sandbox, fixture and future applied sites.

Out of scope:

- recipe-by-recipe implementation detail;
- new code changes;
- broad screenshot QA.

### Pass 2. Recipe Family Map

Goal:
Define the families of layouts/components needed for a larger site so the system is not one-page-demo-driven.

Artifact:
- \`docs/recipe-family-map-2026-05-15.md\`

Required output:

- named recipe families;
- what each family is for;
- which ones are production-critical first;
- which families can inherit from existing rules versus needing fresh contracts;
- dependency graph between families.

Minimum family set to evaluate:

- navigation / shell
- article hero
- article body / longform
- feed / listing
- cards / teaser blocks
- side rails / metadata stacks
- promo / featured modules
- dense utility or dashboard blocks if relevant

### Pass 3. Content Contracts And Budgets Expansion

Goal:
Extend the contract approach from \`MenuScreenRecipe\` into the highest-risk content families.

Artifact:
- \`docs/content-contracts-and-budgets-2026-05-15.md\`

Required output:

- per-family title/summary/meta/annotation budgets;
- above-the-fold obligations where applicable;
- downgrade order;
- density modes;
- truncation/summarization rules;
- accessibility text obligations.

Out of scope:

- CSS automation of every budget;
- final implementation across all families.

### Pass 4. Fixture Strategy

Goal:
Define what fixtures are required so the system can be regression-tested against real ugly content, not just idealized compositions.

Artifact:
- \`docs/fixture-strategy-2026-05-15.md\`

Required output:

- canonical fixture list;
- stress-data philosophy;
- which fixtures are documentation-only versus regression-critical;
- deployment/public-preview expectations;
- bridge smoke targets versus canonical fixtures.

Expected fixture classes:

- clean happy-path fixture
- dense editorial fixture
- long-label / long-meta stress fixture
- mobile pressure fixture
- mixed-media or promo-heavy fixture

### Pass 5. Generation Playbook

Goal:
Convert the system into an operational playbook for creating new themed sites from the documentation base.

Artifact:
- \`docs/generation-playbook-2026-05-15.md\`

Required output:

- input questions a generator must answer before writing UI;
- mapping from site type to recipe families;
- thematic swap surface;
- required prompts/checklists for generation;
- red flags that mean "do not trust first output";
- expected handoff shape between research, design and implementation.

Important constraint:

This playbook must not read like pure inspiration. It should function as an operating manual.

### Pass 6. Acceptance QA Framework

Goal:
Define how generated sites are evaluated before being accepted as on-system.

Artifact:
- \`docs/acceptance-qa-framework-2026-05-15.md\`

Required output:

- viewport matrix;
- contract failure checklist;
- visual drift checklist;
- content stress checklist;
- accessibility sanity checklist;
- fixture/test expectations;
- what qualifies as a blocker versus normal follow-up debt.

### Pass 7. Documentation Consolidation

Goal:
Turn the new documentation into a coherent entry path for humans and agents.

Artifact:
- \`docs/design-system-operator-index-2026-05-15.md\`

Required output:

- reading order;
- which documents are normative;
- which are exploratory/reference only;
- quick-start paths for "new site generation", "system maintenance" and "applied-site audit";
- repo-level README update recommendations if needed.

## Recommended Execution Order

Strong recommendation:

1. Constitution
2. Recipe family map
3. Content contracts expansion
4. Fixture strategy
5. Generation playbook
6. Acceptance QA framework
7. Consolidation

Reason:

The program should move from philosophy -> taxonomy -> constraints -> fixtures -> operation -> verification -> indexing.

If this order is inverted, the later docs tend to become vague or contradictory.

## Pass Prompt Contract

Every child run should receive:

- exact pass name;
- exact artifact path;
- required write-early behavior;
- precise in-scope / out-of-scope boundaries;
- required verification list;
- required final handoff format.

Every child should also be told:

- do not rewrite broad CSS unless the pass explicitly calls for it;
- documentation must be operational and testable, not poetic;
- name unresolved questions explicitly at the end;
- if evidence is weak, say so rather than bluffing certainty.

## Recommended First Launch

Best first bounded pass:

- **Pass 1. System Constitution**

Why first:

- it sets the invariant/flexible boundary for everything else;
- it reduces drift in later recipe and generation docs;
- it is high leverage and relatively low risk;
- it can be completed without prematurely forcing new code changes.

## After This Program

Only after these docs exist should we seriously attempt the stronger promise:

- rapidly generating new sites from the system with lower manual correction cost.

Even then, the honest model is:

- prompt + documented recipe family + contracts + fixtures + QA

not:

- prompt alone.
