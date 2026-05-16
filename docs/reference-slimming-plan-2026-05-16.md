# Reference Slimming Plan - 2026-05-16

## Scope

Bounded slimming pass for `reference.html` and `css/reference.css`. The page remains a fast manual/operator reference. It must not become the canonical proof store; proof stays in `fixtures/` and pass reports.

## Render Inspection

Checked current local source and live reference before editing.

| Surface | Viewports | Findings |
| --- | --- | --- |
| Local source | source inspection + planned CDP smoke | `#operator-mode` is first useful section after the header. The page is large because it duplicates long proof/specimen content, especially recipe cards and legacy primitive/specimen blocks. |
| Live GitHub Pages | 1440x900, 768x1024, 390x844 | No page-level horizontal overflow. The deployed page is behind local source and does not yet include `#operator-mode`; first section is `#front-door`. |
| Existing local smoke harness | pending after edits | `tools/regression-smoke.js` includes `/reference.html#operator-mode` as a reference smoke target. |

## Section Classification

| Section | Action | Reason |
| --- | --- | --- |
| Header | Keep, minor wording | Establishes manual/operator role. Avoid proof-store language. |
| `#operator-mode` | Keep on page | First useful section and required quick path. |
| `#front-door` | Keep on page | Main operator decision table. |
| `#source-of-truth` | Compress | Replace card spread with short link-ledger to current operator index, fixtures, and pass reports. |
| `#system-layers` | Compress | Keep layer model, shorten explanation. |
| `#recipe-contract` | Keep, compact | Core boundary reminder. |
| `#responsive-contracts` | Keep on page | Operator acceptance data belongs here for fast lookup. |
| `#menu-shell-contract` | Compress/link | Keep compact menu anatomy summary; link fixture/report instead of long contract table. |
| `#art-slot-rules` | Compress/link | Keep ownership/no-text/fallback rules; link art strategy/docs instead of duplicating proof claims. |
| `#menu-misuse-prevention` | Keep compact | Useful quick do/do-not strip. |
| `#responsive-guardrails` | Keep on page | Acceptance checks are operator-facing. |
| `#foundations`, `#semantic-colors`, `#type-scale`, `#space-scale`, `#shape-radius`, `#shadow`, `#surfaces`, `#buttons`, `#artifact-navigation` | Keep token/specimen lookup | Required by brief. Do not redesign. |
| `#frame-anatomy`, `#shape-language`, `#heraldic-menu`, `#patterns`, `#pixel-motifs`, `#ornament-discipline` | Compress into one visual grammar section | These are repeated explanatory blocks. Keep the rules, remove repeated specimen grids. |
| `#art-asset-layer` | Compress/link | Keep optional slot reminder and route badge specimen; move detailed policy to docs/pass reports. |
| `#component-inventory` | Keep compact | Fast use/avoid table remains useful. |
| `#component-primitives` | Compress | Keep only compact lookup list; remove repeated sampler tiles already demonstrated elsewhere. |
| `#recipes` | Compress and link to fixtures | Long cards duplicate contracts. Keep each recipe summary, key classes, mobile rule, fixture link, proof-status link. |
| `#accessibility` | Keep compact | Operator baseline. |
| `#next-passes` | Compress | Keep remaining debt, avoid broad roadmap bloat. |

## Safe Cut

The safe bounded cut is clear because it removes repeated explanation/specimen duplication without changing shared tokens, component CSS, fixtures, applied pages, or canonical proof docs.

Planned implementation:

1. Add a compact `#proof-links` section so proof/current-status navigation is explicit.
2. Compress `#source-of-truth`, `#system-layers`, `#menu-shell-contract`, `#art-slot-rules`, visual grammar sections, `#art-asset-layer`, `#component-primitives`, `#recipes`, and `#next-passes`.
3. Preserve section IDs used by the table of contents and existing anchors.
4. Remove now-unused reference-page CSS selectors only when their markup is removed.
5. Keep visual style stable by reusing existing `manual-grid`, `manual-card`, `guardrail-strip`, `recipe-grid`, and `recipe-card` styles.

## Acceptance Checks

Required before commit:

- `git diff --check`
- `node tools/regression-smoke.js`
- Browser/CDP check local `reference.html#operator-mode` at 1440x900, 768x1024, and 390x844:
  - no page-level horizontal overflow
  - `#operator-mode` exists and is first useful section
  - reference copy says manual/operator reference, not proof
  - fixture/doc links used by the page resolve locally
- Browser/CDP check live `reference.html` at 1440x900, 768x1024, and 390x844:
  - no page-level horizontal overflow
  - note deployment lag if live still lacks local `#operator-mode`
- Static link check for local relative `.html` and `.md` targets referenced from `reference.html`.

## Stop Rules

Stop without implementation if:

- The cut requires broad information-architecture redesign.
- A removed block is the only local token/specimen lookup for a shared primitive.
- The change would promote applied-page evidence into proof claims.
- Smoke fails for reasons tied to this slimming pass and cannot be fixed within the bounded scope.

