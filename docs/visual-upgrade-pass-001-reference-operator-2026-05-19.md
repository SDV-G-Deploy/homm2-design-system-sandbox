# HOMM2 Visual Upgrade Pass 001 - Reference / Operator Mode - 2026-05-19

## Scope

Apply the OpenClaw Visual Upgrade Playbook to the HOMM2 design-system sandbox as a controlled evidence-first pilot.

Inspected surface:

- `reference.html#operator-mode`
- responsive/reference table stack behavior through the existing smoke harness

No production deploy, Figma write, GitHub write, dependency install, YourInsideQuest change, or canonical recipe-contract change was performed.

## Evidence

Primary screenshot evidence was captured through a CDP viewport path so narrow widths are measured by the browser, not by raw `chromium --screenshot` cropping behavior.

Primary screenshot directory:

`/root/snap/chromium/common/openclaw-screens/homm2-2026-05-19-visual-upgrade-pass-001-cdp/`

Captured:

- `operator-desktop-1440x900.png`
- `operator-tablet-768x1024.png`
- `operator-mobile-390x844.png`
- `operator-stress-360x740.png`
- `contracts-tablet-768x1024.png`
- `contracts-mobile-390x844.png`

Secondary/raw CLI screenshot directory:

`/root/snap/chromium/common/openclaw-screens/homm2-2026-05-19-visual-upgrade-pass-001/`

Raw CLI screenshots were useful as a fallback sanity check, but not used as the primary narrow-width evidence because old headless screenshot capture can crop a wider layout surface into a narrower PNG.

## Automated Verification

Command:

```bash
HOMM2_SMOKE_PORT=4299 HOMM2_CDP_PORT=9439 node tools/regression-smoke.js
```

Result:

- ArticleHeroRecipe, DossierReadingRecipe, FeedListingRecipe, SiteShellNavigationRecipe, Fairy Journeys, and Reference manual smoke all passed.
- Reference manual smoke:
  - desktop: `overflow=0, primaryTop=467`
  - mobile: `overflow=0, primaryTop=561`
  - narrow: `overflow=0, primaryTop=347`
- Overall: `HOMM2 regression smoke OK`

## Findings

### P0 / P1

None found.

The operator mode is readable at desktop, tablet, mobile, and 360px stress widths. The 2x2 mobile card grid remains coherent, labels do not visibly collide, and the primary operator path is understandable without relying on hidden body copy.

### P2 - Direct section screenshot capture needs a stronger lower-anchor path

Evidence:

- CDP captures for `#operator-mode` are reliable.
- Attempts to target `#responsive-contracts` did not consistently place that section at the top of the viewport, even though the smoke harness validates the table stack contract.

Impact:

- This does not prove a UI defect.
- It does mean future visual passes should use either full-page capture, a stronger CDP scroll helper, or explicit element clipping before making visual claims about lower reference sections.

Fix:

- Add a reusable screenshot helper only when another visual pass needs lower-section screenshots.
- Do not change CSS for this finding.

Acceptance check:

- A future screenshot pass can capture `#responsive-contracts` with the target heading visible in the first 120px of the PNG.

### P3 - Operator mobile density is compact but acceptable

Evidence:

- At `390x844` and `360x740`, operator cards intentionally hide body copy and present four compact command cards.
- The hierarchy remains legible: section kicker, heading, short note, then four numbered actions.

Impact:

- This is a good manual/operator compromise.
- It is not rich enough for a public product surface, but `reference.html` is a working manual, not a marketing or onboarding screen.

Fix:

- No fix recommended in this pass.
- If real use shows friction, the next narrow change would be to make the operator cards a one-column list under `380px`, not redesign the section.

Acceptance check:

- Operator mode remains above any broad manual content and the four actions are visible without horizontal scroll.

## Critic Notes

Verdict: **pass with no implementation follow-up required**.

The surface satisfies the playbook's evidence-first goal and does not justify a broad visual rewrite. The strongest outcome of this pass is methodological: HOMM2 can now use the OpenClaw Visual Upgrade loop with CDP screenshots, smoke verification, and bounded reports.

## Recommended Next Step

Run **Pass 002** only if we want to exercise the implementation side of the playbook.

Best candidate:

- `reference.html#responsive-contracts` screenshot-helper / lower-anchor evidence pass; or
- a separate Critic-only pass over `fairy-journeys.html` using the same evidence/report format.

Do not start a broad HOMM2 redesign from Pass 001.
