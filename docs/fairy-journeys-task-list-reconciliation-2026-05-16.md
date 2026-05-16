# Fairy Journeys Task List Reconciliation - 2026-05-16

## Purpose

Reconcile `docs/fairy-journeys-codex-task-list-v2.md` against the completed Fairy Journeys applied-page passes without rewriting the original task list in place.

The original task list remains a source-audit artifact from the browser-first review. Editing it directly would blur the difference between:

- the original audit findings and priorities;
- later bounded implementation passes;
- partial follow-up fixes that did not fully close the original intent.

This note records the current mapping instead.

## Status Summary

| Task | Source intent | Current status | Evidence |
| --- | --- | --- | --- |
| 1 | Rebuild the first-screen action hierarchy | mostly addressed | `docs/fairy-journeys-first-screen-hierarchy-pass-2026-05-16.md`, `docs/fairy-journeys-hero-primary-action-pass-2026-05-16.md`, `docs/fairy-journeys-hero-support-density-pass-2026-05-16.md`, `docs/fairy-journeys-hero-art-budget-pass-2026-05-16.md` |
| 2 | Normalize language strategy across the page | addressed within applied-page scope | `docs/fairy-journeys-language-normalization-pass-2026-05-16.md` |
| 3 | Improve mobile utility-nav and micro-control readability | addressed | `docs/fairy-journeys-mobile-utility-pass-2026-05-16.md`, `docs/fairy-journeys-visual-regression-fix-pass-2026-05-16.md`, `docs/fairy-journeys-closeout-pass-2026-05-16.md` |
| 4 | Tighten hero typography against surrounding control density | addressed narrowly on mobile | `docs/fairy-journeys-hero-typography-balance-pass-2026-05-16.md`, `docs/fairy-journeys-hero-support-density-pass-2026-05-16.md`, `docs/fairy-journeys-hero-art-budget-pass-2026-05-16.md` |
| 5 | Separate launch vs commit dramaturgy | not clearly closed | no dedicated pass found |
| 6 | Make the middle route section read more like a route and less like parallel commentary | partially addressed | `docs/fairy-journeys-feed-path-pass-2026-05-16.md`, `docs/fairy-journeys-feed-summary-pass-2026-05-16.md`, `docs/feed-listing-indexed-route-row-pass-2026-05-16.md` |

## Task-by-Task Notes

### Task 1 — first-screen action hierarchy

Treat this as mostly addressed, not perfectly closed.

- The shell was demoted so it reads more like utility chrome than a competing slab.
- `Читать досье` was preserved as the one dominant hero action.
- Secondary route/handoff cues were softened.
- Narrow-screen support density and decorative art budget were also reduced in follow-up passes.

Residual caution:

- The original audit asked for stronger simplification of equal-strength first-screen groups. The later passes improved that pressure materially, but they did not produce a fresh canonical acceptance artifact saying the hierarchy question is fully closed in every intended viewport.

### Task 2 — language normalization

Treat this as addressed within the applied-page scope.

- The dedicated language pass removed the remaining accidental English chrome.
- Intentional English recipe-family names were kept only where they serve system-reference value.

Residual caution:

- This closes the user-facing page-language drift for `fairy-journeys.html`; it does not imply a global repo-wide language policy change.

### Task 3 — mobile utility-nav and micro-control readability

Treat this as addressed.

- The dedicated mobile utility pass raised type size, spacing, and plaque readability on narrow screens.
- The later regression fix added one-line nav behavior and stable compact-control handling.
- The closeout pass explicitly verified one-line mobile nav labels and stable feed step sizing.

### Task 4 — hero typography balance

Treat this as addressed narrowly, mainly for mobile rhythm.

- A dedicated typography pass reduced narrow-screen title and lead pressure.
- Follow-up density/art-budget passes further protected the primary action’s first-screen visibility.

Residual caution:

- The source task allowed either typography reduction or stronger support demotion. The implemented solution combined both, but still as an applied-page fix rather than a broader recipe proof statement.

### Task 5 — separate launch vs commit dramaturgy

Treat this as still open.

- No dedicated pass was found that explicitly distinguishes the upper start action from the lower final commitment beat.
- None of the closeout or bugcheck notes claim this narrative/CTA sequencing issue was resolved.

This is the clearest remaining item from the original audit list.

### Task 6 — middle route section clarity

Treat this as partially addressed.

- The feed-path pass added numbered step cues, a clearer current row, and quieter filter context.
- The feed-summary and indexed-route-row follow-ups reinforced the route-spine reading.

Residual caution:

- The original task also called out lore-note competition and the route/manfesto/side-note balance more broadly. The evidence shows improvement in the route/feed layer, but not a strong claim that the whole middle section is fully resolved.

## Recommended Use

- Keep `docs/fairy-journeys-codex-task-list-v2.md` as the source audit artifact.
- Use this reconciliation note when deciding what remains open versus what was already handled by bounded applied-page passes.
- If a future bounded pass resumes Fairy Journeys work, start with Task 5, then re-check whether Task 6 needs another narrow clarity pass.
