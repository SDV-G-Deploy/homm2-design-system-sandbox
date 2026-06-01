# 2026-06-01 Night Run: HoMM2 x Solarpunk Design System

## Objective

Improve the design quality and system consistency of the HoMM2 x Solarpunk sandbox while Serg sleeps.

Primary targets:
- reduce the oversized top navigation/header footprint, especially on mobile;
- make the design system feel less drifting and more token/component driven;
- improve visual hierarchy, spacing rhythm, and responsive behavior;
- select and test a stronger font direction with Cyrillic support and acceptable load cost;
- optimize duplicated CSS and keep reusable primitives portable;
- verify every applied change with smoke checks and screenshots.

## Repo

`/root/.openclaw/workspace/homm2-design-system-sandbox`

Public preview:
`https://sdv-g-deploy.github.io/homm2-design-system-sandbox/`

## Session

Persistent cron session:
`homm2-design-night-2026-06-01`

Cadence:
25 minutes, bounded 20-minute passes.

Default model:
`gpt-5.4`, thinking `medium` for audit/spec passes and `low` for implementation polish.

## Skills / Standards

Use:
- `homm2-solarpunk-design`
- `frontend-design-review`
- `color-system`
- `design-token`
- `typeui-fundamentals`
- `design-taste-frontend` only as anti-slop guardrails, not as a generic landing-page recipe

Direction:
**solar-civic fantasy interface**.

HoMM2 owns form:
frames, plaques, bevels, ledgers, object UI, threshold hierarchy.

Solarpunk owns condition:
solar civic infrastructure, water sensing, living-state feedback, regenerative state grammar.

Forbidden shortcut:
green gradients/backgrounds alone do not count.

## Stop Rules

Stop and mark `blocked` in this ledger if:
- tracked git state is dirty with unrelated or surprising user changes;
- smoke, diff check, or screenshot capture fails and the fix is not obvious;
- push is rejected or deploy fails with unclear next action;
- a pass would require broad rewrite beyond its 20-minute box;
- no clear next bounded step remains;
- repeated passes produce only cosmetic palette changes;
- lock is fresh from another running pass.

## Verification Gates

Minimum after any implementation pass:
- `git diff --check`
- `node tools/regression-smoke.js`
- screenshots for changed surfaces at desktop/mobile/narrow via `tools/visual-capture.js`
- inspect first viewport for header/nav footprint and text overflow

Commit/push only when verification passes and all tracked changes are attributable to the pass.

## Planned Passes

### Pass 1 — Evidence + Visual Debt Map
Artifact:
`docs/night-runs/2026-06-01-pass-01-evidence.md`

Scope:
- inspect `index.html`, `fairy-journeys.html`, `reference.html`, `solarpunk.html`, and relevant CSS;
- capture current nav/header footprint and first-screen density on desktop/mobile;
- identify top 5 design-system problems with evidence;
- propose exact pass order.

No broad implementation except tiny instrumentation fixes if needed.

### Pass 2 — Navigation / Header Compression
Artifact:
`docs/night-runs/2026-06-01-pass-02-nav.md`

Scope:
- reduce top menu height and visual competition;
- preserve orientation and page-switching;
- improve mobile first viewport;
- prefer reusable nav/header rules over page one-offs.

Acceptance:
mobile first viewport shows more content, no horizontal overflow, navigation remains readable/tappable.

### Pass 3 — Typography Direction + Font Test
Artifact:
`docs/night-runs/2026-06-01-pass-03-typography.md`

Scope:
- shortlist 2-3 font directions with Cyrillic support and design rationale;
- choose one practical direction for this sandbox;
- implement the smallest safe font/token pass;
- document fallback and performance impact.

Constraints:
- no unreadable decorative body font;
- 1-2 families maximum plus optional mono;
- `font-display: swap`;
- avoid shipping huge font payloads if a system stack or already-available font works better.

### Pass 4 — Token / Component Consistency
Artifact:
`docs/night-runs/2026-06-01-pass-04-tokens-components.md`

Scope:
- reduce duplicated raw values where a token/component primitive exists;
- strengthen `.solar-*` primitives and reference proof;
- keep applied pages using shared grammar.

Acceptance:
at least one reusable primitive or token contract improves and is demonstrated on reference + applied surface.

### Pass 5 — Optimization / Polish
Artifact:
`docs/night-runs/2026-06-01-pass-05-optimization.md`

Scope:
- trim obvious CSS duplication;
- check asset/load risk;
- fix spacing/hierarchy drift found in screenshots;
- avoid broad refactors.

Acceptance:
smoke green, screenshots clean, no new heavy asset dependency without budget note.

### Pass 6 — Independent Review + Closeout
Artifact:
`docs/night-runs/2026-06-01-closeout.md`

Scope:
- run a design review as if by an independent critic;
- compare final pages against Pass 1 evidence;
- list commits, verification, deploy status, unresolved risks;
- send concise morning report.

## Ledger

### 2026-06-01 00:12 UTC — Scheduled
Night run planned from main session. Current HEAD before run: `d27840a`.
Known untracked unrelated files exist in repo root/docs and must be ignored unless directly relevant.

### 2026-06-01 00:24 UTC — Pass 01 complete
Status: complete

Artifact:
- `docs/night-runs/2026-06-01-pass-01-evidence.md`

What happened:
- inspected `index.html`, `fairy-journeys.html`, `reference.html`, `solarpunk.html`
- inspected shared/page CSS for nav and header ownership
- captured desktop/mobile/narrow evidence for `index`, `solarpunk`, `fairy-journeys`, and `reference`
- produced top 5 impact-ranked issues with concrete fixes and acceptance checks

Verification:
- visual evidence captured under `tmp/night-runs/pass-01/`
- no horizontal overflow observed on captured surfaces
- no implementation edits beyond night-run docs in this pass
- `git diff --check` clean
- `node tools/regression-smoke.js` passed

Commit / push / deploy:
- commit `539858c` — `docs: add pass 01 design evidence`
- pushed to `origin/main`
- GitHub workflow runs attached to this commit: none detected at check time

Next recommendation:
- run Pass 2 as a bounded shared-shell compression pass focused on `css/components.css`, `index.html`, and `fairy-journeys.html`

### 2026-06-01 00:52 UTC — Pass 02 complete
Status: complete

Artifact:
- docs/night-runs/2026-06-01-pass-02-nav.md

What happened:
- compressed shared header/nav density in css/components.css
- moved mobile scene and site-shell nav toward compact horizontal rails
- reduced local over-sizing on fairy-journeys.html
- tightened reference.html intro and TOC density so proof appears sooner

Verification:
- visual evidence captured under tmp/night-runs/pass-02/
- git diff --check clean
- node tools/regression-smoke.js passed
- no horizontal overflow observed on changed surfaces

Commit / push / deploy:
- commit `8ba3082` — `style: compress navigation shells`
- pushed to `origin/main`
- GitHub workflow runs attached to this commit: none detected at check time

Next recommendation:
- run Pass 03 as a bounded typography direction pass, using the new compact shell as the measurement baseline

### 2026-06-01 01:15 UTC — Pass 03 complete
Status: complete

Artifact:
- `docs/night-runs/2026-06-01-pass-03-typography.md`

What happened:
- shortlisted three practical font directions with Cyrillic support and load notes
- chose a civic archive pairing: `Vollkorn` for display and `PT Serif` for body
- updated shared page font requests and typography tokens
- tightened caption/body/lead/tracking tokens to fit the denser serif texture

Verification:
- visual evidence captured under `tmp/night-runs/pass-03/`
- `git diff --check` clean
- `node tools/regression-smoke.js` passed
- no horizontal overflow observed on changed surfaces

Commit / push / deploy:
- commit `fa98b72` — `style: test typography direction`
- pushed to `origin/main`
- GitHub workflow runs attached to this commit: none detected at check time

Next recommendation:
- run Pass 04 as a bounded token/component consistency pass, keeping the new type contract fixed while cleaning shared ownership

### 2026-06-01 01:38 UTC — Pass 04 complete
Status: complete

Artifact:
- `docs/night-runs/2026-06-01-pass-04-tokens-components.md`

What happened:
- normalized shared `.solar-command-plate` variants to component-level custom properties
- normalized shared `.solar-state-row` variants to component-level custom properties
- normalized shared `.solar-route-badge` variants to component-level custom properties
- verified the same primitives across reference proof plus applied pages

Verification:
- visual evidence captured under `tmp/night-runs/pass-04/`
- `git diff --check` clean
- `node tools/regression-smoke.js` passed
- no horizontal overflow observed on changed surfaces

Commit / push / deploy:
- commit `e2eb93d` — `refactor: normalize solar primitives`
- pushed to `origin/main`
- GitHub workflow runs attached to this commit: none detected at check time

Next recommendation:
- run Pass 05 as a bounded optimization/polish pass, keeping the current shell and type direction stable while trimming remaining duplication

### 2026-06-01 02:03 UTC — Pass 05 complete
Status: complete

Artifact:
- `docs/night-runs/2026-06-01-pass-05-optimization.md`

What happened:
- reduced shared shell haze/shadow weight in `css/components.css`
- reduced shadow heaviness on key solarpunk proof surfaces
- reduced shadow depth on the fairy applied hero card
- documented remaining stylesheet/effect density as the main performance risk

Verification:
- visual evidence captured under `tmp/night-runs/pass-05/`
- `git diff --check` clean
- `node tools/regression-smoke.js` passed
- no horizontal overflow observed on changed surfaces

Commit / push / deploy:
- pending

Next recommendation:
- run Pass 06 as the independent review + closeout pass, comparing final state against Pass 01 evidence and calling out remaining cost/complexity honestly
