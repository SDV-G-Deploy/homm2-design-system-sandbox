# Fairy Journeys Bounded Prompt - 2026-05-16

## Purpose

Reusable handoff prompt for a future single-pass Fairy Journeys applied-page polish run.

This is intentionally narrow. It is not a general prompt kit for the whole HOMM2 system and it does not change proof status on its own.

## Use When

- the target is `fairy-journeys.html` only;
- the goal is one bounded applied-page polish step;
- current docs already describe `fairy-journeys.html` as applied smoke, not canonical proof;
- the pass should stay below broad redesign and should not expand fixture claims.

## Do Not Use When

- the work needs new canonical fixture proof;
- the pass would promote page-local behavior into shared hooks without fixture evidence;
- the task is broad design exploration rather than one bounded polish fix;
- the issue requires manual visual review with no clear bounded change.

## Prompt Template

```text
Project: /root/.openclaw/workspace/homm2-design-system-sandbox

Task: Run one bounded Fairy Journeys applied-page polish pass.

Required context:
- Read README.md
- Read docs/design-system-operator-index-2026-05-15.md
- Read docs/new-session-handoff-2026-05-16.md
- Read docs/fairy-journeys-task-list-reconciliation-2026-05-16.md
- Read only the specific Fairy Journeys pass artifacts needed for this step

Rules:
- Treat `fairy-journeys.html` as an applied smoke page, not canonical proof.
- Do not promote Fairy Journeys behavior into system claims without fixture evidence.
- Keep changes page-local unless a cited normative doc already owns the shared rule.
- Do exactly one bounded step.
- Stop if the tree is dirty, the next step is ambiguous, verification fails, or manual visual review is required.

Workflow:
1. Inspect repo state and latest relevant Fairy Journeys artifacts.
2. Pick one small evidence-backed issue in `fairy-journeys.html`, `css/fairy-journeys.css`, or a directly related doc.
3. Write/update one durable artifact early if the step is nontrivial.
4. Implement only that step.
5. Run the smallest meaningful verification gate.
6. If clean and verified, commit and push.
7. Record what changed, what was verified, and what remains open.

Preferred verification:
- `git diff --check`
- `node --check tools/regression-smoke.js` when JS/doc wiring changed
- `node tools/regression-smoke.js` when layout behavior may have moved
- targeted source sanity or doc grep when the pass is documentation-only

Suggested starting point:
- Re-open Task 5 from docs/fairy-journeys-task-list-reconciliation-2026-05-16.md before inventing a new Fairy Journeys objective.
```

## Operator Notes

- Use the reconciliation note to avoid re-solving already handled Task 1-4 work.
- If the pass touches proof wording, re-check README, the operator index, and the handoff doc together.
- If the pass touches layout behavior, prefer the existing regression smoke before any broader browser/manual sweep.

## Boundaries Preserved

- `fairy-journeys.html` remains an applied smoke surface.
- Indexed FeedListing row proof remains recorded at `fixtures/feed-listing-recipe.html`.
- This handoff artifact is for bounded execution, not for claiming broader readiness.
