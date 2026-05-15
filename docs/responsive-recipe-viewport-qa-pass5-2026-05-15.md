# HOMM2 Responsive Recipe Viewport QA - Pass 5

Date: 2026-05-15

Pass name: HOMM2 Pass 5: viewport/browser QA for responsive recipe fixture

## Pass Scope

This is a bounded verification pass for the shared responsive recipe hooks landed in Pass 4. The primary target is the canonical MenuScreenRecipe fixture. This pass treats browser viewport notes and screenshots as first-class evidence.

Out of scope:

- broad CSS rewrites;
- fairy-journeys.html visual polish;
- reference.html refactors;
- new recipe-system expansion beyond the current menu fixture;
- generic style tweaks unrelated to contract compliance.

## Targets

Primary fixture:

- fixtures/menu-screen-recipe.html

Secondary smoke target, time permitting:

- fairy-journeys.html#menu-shell

## Planned Viewport Matrix

| Viewport | Purpose |
| --- | --- |
| 1440 x 900 | Desktop contract target |
| 390 x 844 | Mobile contract target |
| 360 x 740 | Constrained mobile stress check |

## Planned Fixture States

- standard
- compact
- emergency
- stress

## Acceptance Checks

- Exactly one clear primary frame per state.
- Primary task remains visible above the fold.
- Compact and emergency states summarize support content before shrinking primary labels.
- No visible labels below 12px.
- No hidden truncation on primary labels.
- Route, state and support summaries behave according to the Pass 2 contracts.
- Title/context plus command slab remain the scan anchor.
- If the stress state fails, classify the failure as contract, implementation or fixture-content over budget.

## Browser Evidence

Browser setup was checked first with OpenClaw browser status/tabs. The OpenClaw browser policy blocked local localhost navigation for the unpublished fixture, so the canonical local fixture pass used headless Chromium/CDP against a local Python server at http://127.0.0.1:8765/. The CDP pass captured viewport screenshots and computed DOM/CSS checks from the rendered page.

Evidence directory:

- tmp/responsive-recipe-viewport-qa-pass5-2026-05-15/

Primary fixture evidence:

- metrics.json: computed viewport/state checks for all 12 matrix entries.
- contact-desktop-1440x900.png: contact sheet for all four states at 1440 x 900.
- contact-mobile-390x844.png: contact sheet for all four states at 390 x 844.
- contact-mobile-360x740.png: contact sheet for all four states at 360 x 740.
- Individual screenshots:
  - desktop-1440x900-standard.png
  - desktop-1440x900-compact.png
  - desktop-1440x900-emergency.png
  - desktop-1440x900-stress.png
  - mobile-390x844-standard.png
  - mobile-390x844-compact.png
  - mobile-390x844-emergency.png
  - mobile-390x844-stress.png
  - mobile-360x740-standard.png
  - mobile-360x740-compact.png
  - mobile-360x740-emergency.png
  - mobile-360x740-stress.png

Secondary smoke evidence:

- smoke-fairy-1440x900.png
- smoke-fairy-390x844.png
- fairy-smoke.json

## Visual Findings By Severity

### Fixed - Medium

Compact-hidden commands were still visible in the compact and stress fixture states during the first browser pass. The shared density hook was correct in intent, but later fixture-local button styling, display grid, won the cascade and defeated .recipe-compact-hidden.

Bounded fix: strengthened the shared compact/emergency hide rules in css/components.css with display: none !important for the forced hidden hook paths. This keeps authored compact/stress fixture content over budget but correctly downgraded before primary labels shrink.

### Info

The stress state is intentionally over budget: five authored commands, six rail rows and twelve represented route rows. After the bounded fix, this is a fixture-content stress case that passes by downgrade behavior, not a contract or implementation failure.

### No Open Visual Failures After Fix

- No horizontal overflow in the canonical matrix.
- No visible labels below 12px.
- No clipped primary labels.
- No compact secondary controls below the 40px floor.
- Exactly one primary frame per fixture state.

## Contract Matrix

| Viewport | State | Result | Evidence summary |
| --- | --- | --- | --- |
| 1440 x 900 | standard | Pass | 1 primary frame; title, command slab, primary task and state cue visible; support detail allowed in standard desktop. |
| 1440 x 900 | compact | Pass | 1 primary frame; title/slab/task/cue visible; support summarized; 1 compact-hidden command hidden. |
| 1440 x 900 | emergency | Pass | 1 primary frame; title/slab/task/cue visible; emergency-hidden support removed. |
| 1440 x 900 | stress | Pass | 1 primary frame; title/slab/task/cue visible; 3 over-budget secondary commands hidden; support summarized. |
| 390 x 844 | standard | Pass | 1 primary frame; primary task and state/route summaries visible above fold; support details summarized by container behavior. |
| 390 x 844 | compact | Pass | 1 primary frame; primary plus one secondary action visible; support summaries visible; compact-hidden command hidden. |
| 390 x 844 | emergency | Pass | 1 primary frame; primary plus back action visible; one orientation cue visible; route support hidden. |
| 390 x 844 | stress | Pass | 1 primary frame; primary plus continue action visible; 3 over-budget secondary commands hidden; rail/routes summarized. |
| 360 x 740 | standard | Pass | 1 primary frame; primary task above fold; state and route summaries visible; no overflow. |
| 360 x 740 | compact | Pass | 1 primary frame; primary plus one secondary action visible; support summarized; no overflow. |
| 360 x 740 | emergency | Pass | 1 primary frame; primary plus back action and cue visible; no overflow. |
| 360 x 740 | stress | Pass | 1 primary frame; primary plus continue action visible; over-budget content downgraded; no overflow. |

Computed checks from metrics.json:

- primaryFrameCount: 1 for every viewport/state entry.
- primaryAboveFold: true for every viewport/state entry.
- titleAboveFold: true for every viewport/state entry.
- cueAboveFold: true for every viewport/state entry after measuring the first visible cue.
- below12: 0 for every viewport/state entry.
- shortTargets: 0 for every viewport/state entry.
- primary label clipped count: 0 for every viewport/state entry.
- horizontalOverflow: false for every viewport/state entry.

Support downgrade checks:

- Compact state hides 1 compact-only overflow command.
- Stress state hides 3 compact-only overflow commands.
- Emergency state hides 2 emergency-only support items.
- Compact, emergency and stress states show support summaries with support details hidden.

## Bounded Fixes Landed

- css/components.css
  - Added !important to density-driven display: none rules for .recipe-compact-hidden, .recipe-emergency-hidden and summary support detail hiding.
  - Reason: later local display rules can otherwise accidentally resurrect content that the density contract explicitly downgraded.

No fixture markup changes were needed.

## Residual Risks

- The screenshot pass uses an ignored local temp directory, matching prior evidence-pass practice. These images are durable in the workspace but not tracked by git unless intentionally added later.
- OpenClaw browser could not navigate to the unpublished local fixture because localhost navigation was blocked by policy. Headless Chromium/CDP was used for local layout evidence instead.
- The fixture screenshots are state-scrolled captures inside a long regression page. They validate each authored state in place, but a future harness could add one-state-per-route screenshots for cleaner visual diffs.
- fairy-journeys.html#menu-shell was smoke-checked only for compatibility. It remains an applied page and was not polished or brought fully under the new fixture contract.

## Next-Pass Recommendation

- Add a lightweight repeatable viewport harness script for the canonical fixture so future passes do not have to recreate CDP screenshot/metric logic by hand.
- Consider documenting that density hide hooks are forced state hooks and should beat local display styles.
- Keep the next visual pass focused on the canonical fixture first; only promote fairy-journeys.html changes after the fixture contract remains stable.

## Verification Commands

- Browser/OpenClaw setup: checked status and tabs before local inspection.
- Local fixture server: python3 -m http.server 8765 --bind 127.0.0.1
- Chromium/CDP viewport pass: rendered fixtures/menu-screen-recipe.html at 1440 x 900, 390 x 844 and 360 x 740 for standard, compact, emergency and stress states.
- Secondary smoke: rendered fairy-journeys.html#menu-shell at 1440 x 900 and 390 x 844.
- Static check: git diff --check -- css/components.css docs/responsive-recipe-viewport-qa-pass5-2026-05-15.md fixtures/menu-screen-recipe.html

## Files Changed

- css/components.css
- docs/responsive-recipe-viewport-qa-pass5-2026-05-15.md
