# HoMM2 Solarpunk v1.1 Pass 01 - Evidence / Drift Check

Date: 2026-06-01 11:18-11:21 UTC
Repo: `/root/.openclaw/workspace/homm2-design-system-sandbox`
Ledger: `docs/night-runs/2026-06-01-v1-1-hardening.md`

## Scope

- Inspect `reference.html`, `solarpunk.html`, `index.html`, `fairy-journeys.html`
- Inspect relevant shared CSS ownership
- Capture fresh desktop/mobile/narrow screenshots and metrics
- Rank remaining v1.1 issues
- Confirm or adjust pass order
- No implementation except docs

## Drift Check

- Scheduled ledger entry recorded HEAD `5bba1a7`
- Current pass started from HEAD `106cbff` (`docs: schedule v1.1 hardening run`)
- This is acceptable drift for a docs/evidence pass; no unexpected tracked code changes were present
- Working tree at pass start contained only the previously-declared unrelated untracked files:
  - `.openclaw/`
  - root mirrored playbook files
  - prior critique docs

## Files Inspected

HTML:

- `reference.html`
- `solarpunk.html`
- `index.html`
- `fairy-journeys.html`

CSS:

- `css/solarpunk.css`
- `css/reference.css`
- `css/components.css`
- `css/fairy-journeys.css`
- `css/tokens.css`

Supporting evidence:

- `docs/SOLARPUNK_INDEPENDENT_CRITIC_PASS_0001.md`
- `docs/solarpunk-pass-01-evidence-critique-2026-05-31.md`

## Screenshot Evidence

Captured with `node tools/visual-capture.js`.

Reference:

- `tmp/night-runs/2026-06-01-pass-01/reference/desktop-1440x900.png`
- `tmp/night-runs/2026-06-01-pass-01/reference/mobile-390x844.png`
- `tmp/night-runs/2026-06-01-pass-01/reference/narrow-360x740.png`
- `tmp/night-runs/2026-06-01-pass-01/reference/metrics.json`

Solarpunk proof:

- `tmp/night-runs/2026-06-01-pass-01/solarpunk/desktop-1440x900.png`
- `tmp/night-runs/2026-06-01-pass-01/solarpunk/mobile-390x844.png`
- `tmp/night-runs/2026-06-01-pass-01/solarpunk/narrow-360x740.png`
- `tmp/night-runs/2026-06-01-pass-01/solarpunk/metrics.json`

Index:

- `tmp/night-runs/2026-06-01-pass-01/index/desktop-1440x900.png`
- `tmp/night-runs/2026-06-01-pass-01/index/mobile-390x844.png`
- `tmp/night-runs/2026-06-01-pass-01/index/narrow-360x740.png`
- `tmp/night-runs/2026-06-01-pass-01/index/metrics.json`

Fairy Journeys:

- `tmp/night-runs/2026-06-01-pass-01/fairy/desktop-1440x900.png`
- `tmp/night-runs/2026-06-01-pass-01/fairy/mobile-390x844.png`
- `tmp/night-runs/2026-06-01-pass-01/fairy/narrow-360x740.png`
- `tmp/night-runs/2026-06-01-pass-01/fairy/metrics.json`

## Metrics Summary

Across all four surfaces:

- No horizontal document overflow was detected at `1440x900`, `390x844`, or `360x740`
- No capture selector offenders were reported in the saved metrics
- The remaining mobile issues are hierarchy/density/alignment issues, not width overflow

Key first-screen readings:

- `reference.html` now opens with a true component proof board instead of prose-first operator cards
- `solarpunk.html` now reads materially lighter and more legible on mobile than the 2026-05-31 critique described
- `index.html` remains visually darker and closer to the older archive/citadel mood than the solarpunk proof
- `fairy-journeys.html` still spends too much first-screen height on ceremonial framing and long copy before route/state context becomes efficient on mobile

## Current Verdict

Verdict: partial portable system

Why:

- The system is no longer just a green skin
- `reference.html` and `solarpunk.html` now show reusable component grammar more clearly
- Applied surfaces still lag the proof, especially `index.html` and the mobile first screen of `fairy-journeys.html`
- Solarpunk is visible, but consistency across proof vs applied pages is not yet tight enough for a stable v1.1 baseline

## What Improved Since Earlier Critique

1. The top of `reference.html` now proves components visually.
   - Evidence: mobile capture shows a compact proof board with `WorldFrame`, command plates, and state rows before the long operator manual.
2. The solarpunk proof now reads as daylight vellum/brass first rather than dark-castle first on mobile.
   - Evidence: `solarpunk/mobile-390x844.png` shows a bright ledger card, visible brass/water states, and a readable first-screen command stack.
3. The repo currently passes the simple overflow sanity implied by the capture metrics.
   - Evidence: all saved metrics report zero offenders and matching scroll/client widths.

## Remaining Issues Ranked

### P0 - Fairy mobile first-screen is still too tall and ceremony-heavy

Evidence:

- `fairy/mobile-390x844.png` and `fairy/narrow-360x740.png`
- `.fairy-first-screen` runs to roughly `1360px` tall on mobile/narrow captures
- Route/state context exists, but it arrives as a long stacked card rather than a compact above-the-fold system read

Impact:

- This is the clearest remaining mobile hardening target
- It slows the applied proof and leaves less room for route/state context above the fold

Recommendation:

- Keep the HoMM2 threshold drama
- Compress title/copy/effect density so one route cue, one action, and one state/risk cue sit higher

### P1 - Applied-page consistency still lags the proof system

Evidence:

- `index/mobile-390x844.png` still reads as a darker transitional board
- `fairy/mobile-390x844.png` uses the shared grammar, but remains more nocturnal and archive-heavy than `solarpunk.html`
- `reference/mobile-390x844.png` and `solarpunk/mobile-390x844.png` are now ahead of the applied surfaces

Impact:

- The system feels split between "proof/reference" and "real pages"
- v1.1 needs at least one stronger applied page match to claim portability

Recommendation:

- Move consistency work ahead of broad contract writing
- Prefer shared class adjustments over page-specific restyling where possible

### P1 - Dark effect density is still a style tax on applied screens

Evidence:

- `index.html` and `fairy-journeys.html` retain heavier shadow/overlay weight than the brighter solarpunk proof
- The problem is less about overflow and more about first-screen weight, depth stacking, and muted state separation

Impact:

- The applied pages still lean closer to "fantasy archive with solar nouns" than to a stable solar-civic baseline

Recommendation:

- Run shared effect-density cleanup after the fairy mobile compression, but before final consistency closeout

### P2 - Component contract should follow one more visual hardening pass, not lead it

Evidence:

- The proof grammar is much clearer than before, but applied pages still expose unresolved questions around compact mobile hierarchy and brightness ratios

Impact:

- Writing the contract too early risks documenting transitional behavior instead of the intended stable baseline

Recommendation:

- Keep the component contract pass, but place it after one more applied/system hardening round

## Confirmed / Adjusted Pass Order

Recommended next order:

1. Pass 02 - Fairy Mobile Hero Compression
2. Pass 03 - Effect Density Hardening
3. Pass 04 - Reference / Applied Consistency Polish
4. Pass 05 - Component Contract Spec
5. Pass 06 - Closeout + Deploy Check

Adjustment from the original plan:

- Swap consistency polish ahead of the component contract
- Rationale: the contract should describe the hardened applied baseline, not the current split between proof and applied pages

## CSS Ownership Notes

- `css/solarpunk.css` owns the solarpunk proof, reference-solarized treatment, and many promoted shared visual primitives such as `.solar-world-frame`, `.solar-hero-card`, `.solar-proof-grid`, and state-token styling
- `css/components.css` still owns core shell/navigation/archive primitives used by both `index.html` and `fairy-journeys.html`
- `css/fairy-journeys.css` owns the first-screen layout and local applied-page density decisions for the fairy page
- `css/reference.css` owns operator/manual layout structures such as `.operator-grid` and `.matrix-table`

## Next Recommendation

Proceed with Pass 02 exactly as planned, but keep the target narrow:

- compress `fairy-journeys.html` mobile hero height
- expose route/state context earlier
- avoid copy rewrite or broad page redesign

If Pass 02 succeeds cleanly, then the next highest-value system move is shared effect-density cleanup before writing the component contract.
