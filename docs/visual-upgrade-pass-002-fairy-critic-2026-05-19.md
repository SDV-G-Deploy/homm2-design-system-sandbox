# HOMM2 Visual Upgrade Pass 002 - Fairy Journeys Critic - 2026-05-19

## Scope

Run a Critic-only visual pass over `fairy-journeys.html` using the OpenClaw Visual Upgrade Playbook format.

This pass is read-only except for this report. It does not change CSS, HTML, canonical recipe contracts, Figma, GitHub, deployment, dependencies, or YourInsideQuest.

## Evidence

Local preview:

```bash
python3 -m http.server 4184 --bind 127.0.0.1
```

Screenshot directory:

`/root/snap/chromium/common/openclaw-screens/homm2-2026-05-19-visual-upgrade-pass-002-fairy/`

Captured:

- `fairy-hero-desktop-1440x900.png`
- `fairy-hero-mobile-390x844.png`
- `fairy-hero-stress-360x740.png`
- `fairy-dossier-desktop-1440x900.png`
- `fairy-dossier-mobile-390x844.png`
- `fairy-feed-desktop-1440x900.png`
- `fairy-feed-mobile-390x844.png`

Important evidence caveat:

- raw `chromium --screenshot` is useful for quick visual inspection, but this pass found it can produce misleading lower-anchor captures when the URL hash is wrong or when the page scroll state is not where expected.
- The first incorrect feed capture used `#journey-feed`; the actual anchor is `#route-feed`. The corrected capture was then taken.
- The visual findings below are therefore framed as critic findings, not as implementation-ready proof.

## Automated Verification

Command:

```bash
HOMM2_SMOKE_PORT=4299 HOMM2_CDP_PORT=9439 node tools/regression-smoke.js
```

Result from the current pass run:

- `HOMM2 regression smoke OK`
- Fairy Journeys applied smoke:
  - desktop: `overflow=0, primaryTop=190`
  - mobile: `overflow=0, primaryTop=195`
  - narrow: `overflow=0, primaryTop=195`
- Reference manual smoke also remained green:
  - desktop: `overflow=0, primaryTop=467`
  - mobile: `overflow=0, primaryTop=570`
  - narrow: `overflow=0, primaryTop=269`

## Critic Findings

### P1 - Mobile visual clipping risk is visible in screenshot evidence, despite smoke passing

Evidence:

- `fairy-hero-mobile-390x844.png` shows right-edge clipping in the lead/secondary action region.
- `fairy-dossier-mobile-390x844.png` shows the dossier heading and parchment text visually cut at the right edge.
- `fairy-feed-mobile-390x844.png` also captures the hero region with clipped right-edge content before reaching the feed section.
- The regression smoke reports `overflow=0`, which means document-level horizontal overflow is not enough to catch this class of visual issue.

Impact:

- This can make mobile look broken even when automated overflow checks pass.
- It also weakens the HOMM2 proof model because hidden/cropped text is exactly the kind of defect a visual upgrade playbook should catch.

Recommended fix:

- Do not start with broad redesign.
- Open a narrow implementation/verification pass to add visual clipping assertions for Fairy Journeys at `390x844` and `360x740`.
- If confirmed, fix the local mobile containers or long text carriers in `css/fairy-journeys.css`.

Acceptance check:

- At `390x844` and `360x740`, hero lead, secondary route text, dossier title, parchment body, and feed rows are not visually clipped at the right viewport edge.
- Smoke should include at least one element-level right-bound check, not only document `scrollWidth`.

### P2 - Desktop hero is strong, but the right art/support rail is too dim to carry its assigned world-building role

Evidence:

- `fairy-hero-desktop-1440x900.png` has a strong text plate and readable primary CTA.
- The castle/gate art and service-field rail are present, but visually subdued enough that the first screen is dominated almost entirely by text.

Impact:

- The page still reads more like a well-themed archive panel than a fully staged world-entry screen.
- This is not a bug, but it leaves visual potential on the table for the `Hero scene` archetype.

Recommended fix:

- In a future visual polish pass, lift the art/support rail by one step through contrast, depth, or framing.
- Keep it subordinate to the main copy and CTA; do not add more ornament globally.

Acceptance check:

- At desktop, the viewer can identify the world-entry illustration/support rail within the first 1-2 seconds without it competing with the headline.

### P2 - Lower-section screenshot process needs the CDP helper from Pass 001 before visual claims are trusted

Evidence:

- The first feed screenshots were wrong because the requested anchor was `#journey-feed`, while the page uses `#route-feed`.
- Corrected feed capture still showed unreliable scroll placement in raw CLI output.

Impact:

- Critic passes over lower sections can generate false findings if they rely only on URL hash screenshots.

Recommended fix:

- Before a Fairy implementation pass, use a CDP helper that scrolls to an element and records viewport metrics.
- Consider moving that helper into `tools/` only if a second pass needs it.

Acceptance check:

- The screenshot report records the target selector, final `scrollY`, `clientWidth`, `scrollWidth`, and target top coordinate for each captured section.

### P3 - Mobile first-screen density is high but directionally correct

Evidence:

- Mobile hero keeps brand/nav, breadcrumb, headline, lead, primary CTA and route context close to the first viewport.
- The composition is dense, but the primary action remains visible.

Impact:

- For an applied smoke page, this is acceptable.
- For a public onboarding surface, it would need a calmer first fold.

Recommended fix:

- No immediate fix in Critic-only mode.
- If Fairy Journeys becomes a product-facing template, treat mobile first-fold calmness as a separate product pass.

## Verdict

**Critic verdict: needs one narrow verification/implementation pass before further visual polish.**

The playbook worked: it caught a visual risk that the existing smoke harness does not conclusively cover. Do not do a broad redesign. The next useful move is a small mobile clipping verification pass with element-level bounds, then a targeted CSS fix only if confirmed.

## Recommended Next Pass

**Pass 003 - Fairy mobile clipping verification and narrow fix**

Scope:

- `fairy-journeys.html`
- `css/fairy-journeys.css`
- optional temporary or reusable screenshot/bounds helper

Do:

- add or run element-level mobile bounds checks;
- verify `390x844` and `360x740`;
- fix only confirmed clipped elements.

Do not:

- redesign the page;
- change canonical recipe contracts;
- touch YourInsideQuest;
- deploy or push without separate approval.
