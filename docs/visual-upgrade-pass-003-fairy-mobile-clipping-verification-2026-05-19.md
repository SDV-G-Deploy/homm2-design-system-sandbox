# HOMM2 Visual Upgrade Pass 003 - Fairy Mobile Clipping Verification - 2026-05-19

## Scope

Verify the Pass 002 Critic finding that `fairy-journeys.html` might have mobile visual clipping despite passing document-level overflow smoke.

This pass is verification-only. No CSS, HTML, recipe contracts, dependencies, Figma, GitHub, deploy, or YourInsideQuest files were changed.

## Why This Pass Exists

Pass 002 found mobile screenshots that visually looked clipped at the right edge. Existing smoke still reported `overflow=0`, so this pass checked element-level bounds instead of relying on raw screenshot appearance.

## Method

Local preview:

```bash
python3 -m http.server 4185 --bind 127.0.0.1
```

Element bounds were measured through Chromium CDP at:

- `390x844`
- `360x740`

Checked representative containers and text carriers:

- `.fairy-shell`
- `.fairy-board`
- `.fairy-first-screen`
- `.fairy-article-hero`
- `.fairy-hero-stage`
- `.fairy-hero-copy`
- `.fairy-hero-copy h1`
- `.fairy-hero-copy .lead`
- `.fairy-hero-actions`
- `.fairy-hero-actions .btn`
- `.fairy-hero-route`
- `.fairy-hero-copy .hero-meta-strip`
- `.fairy-hero-copy .hero-meta-cell`
- `#field-dossier`
- `.fairy-dossier`
- `.fairy-dossier-shell`
- `.fairy-reading`
- `.fairy-reading .dossier-head h3`
- `.fairy-dossier-body`
- `.fairy-dossier-body p`
- `#route-feed`
- `.fairy-feed`
- `.fairy-feed-main`
- `.fairy-feed-row`
- `.fairy-feed-row h3`

The check flagged:

- any element whose left edge crossed the viewport;
- any element whose right edge crossed the viewport;
- any element whose `scrollWidth` exceeded `clientWidth` by more than 1px.

## Result

No element-level clipping was confirmed.

At `390x844`:

- document `scrollWidth=375`, `clientWidth=375`
- offenders: `[]`
- hero lead: right edge `346` inside `375`
- hero actions: right edge `346` inside `375`
- dossier body: right edge `338` inside `375`
- feed rows: right edge `342` inside `375`

At `360x740`:

- document `scrollWidth=345`, `clientWidth=345`
- offenders: `[]`
- hero lead: right edge `316` inside `345`
- hero actions: right edge `316` inside `345`
- dossier body: right edge `308` inside `345`
- feed rows: right edge `312` inside `345`

## Interpretation

The Pass 002 P1 finding is downgraded:

- from: likely mobile clipping risk;
- to: raw screenshot / section-capture artifact, not a confirmed CSS defect.

No narrow CSS fix is justified.

The remaining valid process finding is that raw `chromium --screenshot` and URL-hash screenshots can mislead visual review. Future playbook passes should prefer CDP viewport metrics or a reusable screenshot helper when making claims about mobile clipping.

## Verification

The project remained unchanged except for this report and prior playbook reports.

Commands:

```bash
git diff --check
HOMM2_SMOKE_PORT=4299 HOMM2_CDP_PORT=9439 node tools/regression-smoke.js
```

Expected acceptance:

- no diff whitespace errors;
- HOMM2 regression smoke remains green;
- no CSS changes made for an unconfirmed visual defect.

## Verdict

**Pass 003 closes the mobile clipping suspicion as not confirmed.**

Next useful playbook step:

- either build a reusable CDP screenshot/bounds helper under `tools/`;
- or run a new Critic pass on a different surface where visual hierarchy, not screenshot mechanics, is the main risk.

