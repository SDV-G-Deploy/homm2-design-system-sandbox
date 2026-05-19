# HOMM2 Visual Upgrade Playbook Adaptation - 2026-05-19

## Status

Draft operational plan. No implementation changes, production deploys, Figma writes, GitHub writes, dependency installs, or OpenClaw config changes are authorized by this document.

## Purpose

Use the OpenClaw Visual Upgrade Playbook as an experiment framework for the HOMM2 design-system sandbox without weakening the existing HOMM2 proof model.

HOMM2 is a good pilot because it is already a visual system, has fixtures and smoke evidence, and is not blocked by the RIMORE / AI1GEO live-domain issues.

## Existing Source Of Truth

Do not create a parallel design system.

Normative order remains:

1. `docs/design-system-constitution-2026-05-15.md`
2. `docs/recipe-family-map-2026-05-15.md`
3. `docs/content-contracts-and-budgets-2026-05-15.md`
4. `docs/fixture-strategy-2026-05-15.md`
5. `docs/generation-playbook-2026-05-15.md`
6. `docs/acceptance-qa-framework-2026-05-15.md`
7. `docs/design-system-operator-index-2026-05-15.md`

Workspace-level HOMM2 references remain useful background:

- `../docs/DESIGN-SYSTEM-HOMM2-FOUNDATION.md`
- `../docs/DESIGN-SYSTEM-HOMM2-TOKENS.md`
- `../docs/DESIGN-SYSTEM-HOMM2-DO-DONT.md`
- `../docs/DESIGN-SYSTEM-HOMM2-YOURINSIDEQUEST-ROADMAP.md`

## Playbook Mapping

| OpenClaw Visual Upgrade layer | HOMM2 interpretation |
| --- | --- |
| Visual Growth Plan | This adaptation plus the existing operator index |
| Visual Agent Policy | Use Visual Director / Critic split from the OpenClaw policy draft |
| Design Memory | The existing constitution, tokens, Do/Don't, recipe contracts, and operator index |
| Preview Route | New experimental HTML surface or isolated fixture, not a production replacement |
| Visual QA | Chromium CLI screenshots, regression smoke, viewport matrix, and manual review notes |
| Critic Agent | Read-only review against HOMM2 invariants and screenshot evidence |
| Figma MCP | Read-only only when a specific approved file/frame exists; no Figma writes by default |

## Experiment Track

Recommended first experiment:

**HOMM2 Visual Upgrade Pass 001 - Reference / Operator Mode**

Why:

- It was already the next blocked visual-review target.
- Screenshot capture is now unblocked via snap Chromium CLI fallback.
- It exercises the playbook without risking canonical recipe claims.
- It improves the operator surface that future agents and humans use.

Scope:

- `reference.html#operator-mode`
- stacked reference tables at tablet and mobile widths
- documentation/report only unless the evidence shows one or two narrow defects worth fixing

Evidence to capture:

- desktop: `1440x900`
- tablet: `768x1024`
- mobile: `390x844`
- optional stress: `360x740`

Acceptance checks:

- no horizontal overflow;
- operator path remains readable;
- table stack behavior is coherent;
- primary operator action / decision path is visible without hunting;
- no internal proof/debug labels leak into the visual surface;
- any proposed fix names the owning recipe or explicitly stays page-local.

## Role Split

### Visual Director

Allowed:

- read HOMM2 docs and local source;
- capture local screenshots;
- write visual reports;
- make narrow page-local frontend edits if a pass is explicitly implementation-scoped;
- run local smoke checks.

Denied by default:

- changing canonical proof claims;
- broad redesigns;
- dependency installs;
- deploys;
- GitHub writes;
- Figma writes;
- YourInsideQuest production changes.

### Critic

Allowed:

- read screenshots, reports, docs, and rendered local pages;
- score against HOMM2 invariants;
- identify concrete visual defects and next-pass recommendations.

Denied:

- code edits;
- file writes except an explicitly requested review note;
- deploys, installs, GitHub writes, Figma writes, external messages.

## Figma Rule

Figma is optional for this HOMM2 pilot.

Use Figma only if a human provides a specific file/frame scope. Default mode is read-only context retrieval. Any write must target a separate AI Visual Experiments area and requires explicit approval.

## First Pass Output

Create a report named:

`docs/visual-upgrade-pass-001-reference-operator-YYYY-MM-DD.md`

The report should include:

- inspected surfaces;
- screenshot paths;
- top findings with severity;
- recommended fixes or explicit no-change conclusion;
- verification commands;
- whether a follow-up implementation pass is justified.

## Stop Rules

Stop before implementation if:

- screenshot evidence cannot be captured;
- repo is unexpectedly dirty in files owned by the pass;
- findings require changing canonical recipe contracts;
- changes would touch YourInsideQuest live behavior;
- Figma, GitHub, dependency, deploy, or external/public actions would be required.

