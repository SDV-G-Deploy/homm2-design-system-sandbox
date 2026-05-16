# HOMM2/YIQ documentation consolidation pass - 2026-05-16

## Scope

Bounded documentation-only consolidation after:

- sandbox visual-alignment night run at `9c57cb6`;
- YIQ reconciliation run at `250e8e0`;
- YIQ 920px boundary micro-pass at `bae3f14`.

## Initial state

- sandbox repo: clean and synced at `9c57cb6`.
- YIQ repo: clean and synced at `bae3f14`.
- workspace root/docs repo: already dirty before this pass, and `docs/DESIGN-SYSTEM-HOMM2-YOURINSIDEQUEST-ROADMAP.md` is currently untracked there. Treat any existing unrelated root/workspace changes as out of scope.

## Role split to preserve

- YIQ = applied product surface.
- sandbox Fairy = applied smoke/reference pressure.
- sandbox reference = manual/operator reference.
- fixtures/pass reports = canonical proof evidence.

## Candidate stale claims

- sandbox docs still need latest visual-alignment run called out as the current closeout state.
- YIQ roadmap still mixes earlier desktop failure / 920px risk language with the completed reconciliation and 920px compact-fold state.
- external cross-project roadmap carries the same older applied-roadmap chronology and may need a short current-state note, but committing it may be blocked by pre-existing untracked/dirty workspace state.

## Edits ledger

- Updated sandbox `README.md` with the `9c57cb6` visual-alignment closeout and clarified that Fairy remains applied smoke/reference pressure.
- Updated sandbox `docs/design-system-operator-index-2026-05-15.md` to include the visual-alignment ledger in applied-page notes and current proof status.
- Updated sandbox `docs/new-session-handoff-2026-05-16.md` with the latest visual-alignment commits and current narrow next-step framing.
- Updated YIQ `README.md` with the current `bae3f14` applied status, reconciliation artifact, and 920px micro-pass artifact.
- Updated YIQ `docs/applied-roadmap.md` with a current-state block and marked older desktop/structural sections as historical context.
- Updated YIQ `docs/yiq-visual-reconciliation-2026-05-16.md` so the 920px pressure is marked mitigated, not still the active blocker.
- Updated external `docs/DESIGN-SYSTEM-HOMM2-YOURINSIDEQUEST-ROADMAP.md` with a current-state block and role split. This file was already untracked in the dirty workspace root before the pass, so root-repo commit/push must be treated separately from the clean sandbox/YIQ repos.

## Verification

- sandbox `git diff --check`: clean.
- sandbox changed paths are Markdown only; no HTML/CSS changes.
- YIQ `git diff --check`: clean.
- YIQ changed paths are Markdown only; no HTML/CSS changes.
- workspace docs target `git diff --check -- DESIGN-SYSTEM-HOMM2-YOURINSIDEQUEST-ROADMAP.md`: clean, but the workspace root had unrelated dirty state and was already ahead of origin before this pass.

## Commit plan

- Commit and push sandbox documentation updates from the clean sandbox repo.
- Commit and push YIQ documentation updates from the clean YIQ repo.
- Do not push the dirty workspace root from this pass; doing so would also publish pre-existing unrelated work. Leave the external roadmap edit visible in the working tree and report the root push as blocked by pre-existing workspace state.
