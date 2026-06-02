# State / Signal Helper Audit - 2026-06-02

## 1. Verdict: Best Next Small Pass

Promote only the state-meter media wrapper, not the whole meter panel.

The best next implementation pass is a tiny shared helper for the repeated `state-meter-readiness` image frame used by:

- `sites/build-brief-desk/index.html`: `figure.v2-brief-meter-strip > picture > img`
- `sites/agent-readiness-ledger/index.html`: `.v2-agent-meter picture > img`
- `sites/site-charter-forge/index.html`: `.v2-charter-meter picture > img`

The shared name should stay narrow and asset-role based:

- proposed wrapper: `.v2-state-meter-strip`
- optional size hook: `--v2-state-meter-width`

Do not promote `.v2-brief-instrument`, `.v2-agent-meter`, or `.v2-charter-meter`. Those are still page-specific panel compositions: each owns heading copy, surrounding asset choices, and the relationship to `.v2-status-list`.

## 2. Top Implementation Candidates

### Candidate 1: State Meter Strip - promote now

Current classes and evidence:

| Surface | Current wrapper | Current image rule | Role |
| --- | --- | --- | --- |
| Build Brief Desk | `.v2-brief-meter-strip` | `.v2-brief-meter-strip picture, .v2-brief-meter-strip img` | framed readiness strip below the readiness lens |
| Agent Readiness Ledger | `.v2-agent-meter picture` | `.v2-agent-meter img` | framed state meter inside a meter panel |
| Site Charter Forge | `.v2-charter-meter picture` | `.v2-charter-meter img` | framed launch meter inside a meter panel |

Proposed shared classes:

- `.v2-state-meter-strip`
- `.v2-state-meter-strip picture`
- `.v2-state-meter-strip img`

Suggested shared CSS contract:

- `display: grid`
- `place-items: center`
- `padding: 8px`
- dark translucent background
- `border: 1px solid rgba(255, 225, 150, .18)`
- `border-radius: 7px`
- image width via `width: min(100%, var(--v2-state-meter-width, 280px))`
- `height: auto`

This keeps the helper about one asset slot and one repeated frame, not about metrics, dashboards, sidebars, or panels.

### Candidate 2: Compact Signal Badge - defer

Current classes and evidence:

| Surface | Current class | Shape |
| --- | --- | --- |
| Product Map Field Note | `.v2-note-instrument` | 78px badge + label/value row |
| ANT School Landing V2 | `.v2-antv2-signal` | 70px badge + label/value row |
| Site Charter Forge | `.v2-charter-signal` | larger seal block + `.v2-lens-module` |

Possible future shared name:

- `.v2-signal-badge`
- `.v2-signal-badge-icon`
- `.v2-signal-badge-body`

Do not implement this in the next pass. `.v2-note-instrument` and `.v2-antv2-signal` are close, but `.v2-charter-signal` proves the signal family still splits between compact badge rows and larger authority/seal panels. A shared name now would either exclude the charter surface or become too vague.

## 3. Suggested Smallest Implementation Diff

1. Add the shared helper to `css/v2.components.css` near `.v2-status-mark`, because both are Images 2.0 state/signaling helpers rather than layout recipes.

2. Add only this kind of contract:

   ```css
   .v2-state-meter-strip {
     --v2-state-meter-width: 280px;
     display: grid;
     place-items: center;
     padding: 8px;
     background: rgba(6, 21, 18, .28);
     border: 1px solid rgba(255, 225, 150, .18);
     border-radius: 7px;
   }

   .v2-state-meter-strip picture,
   .v2-state-meter-strip img {
     display: block;
     width: min(100%, var(--v2-state-meter-width));
     height: auto;
   }
   ```

3. Update the three HTML uses:

   - `figure class="v2-brief-meter-strip"` -> `figure class="v2-state-meter-strip v2-brief-meter-strip"`
   - `picture` inside `.v2-agent-meter` -> `picture class="v2-state-meter-strip"`
   - `picture` inside `.v2-charter-meter` -> `picture class="v2-state-meter-strip"`

4. Shrink page-local CSS without changing panel composition:

   - Keep `.v2-brief-meter-strip { margin: -2px 0 0; --v2-state-meter-width: 260px; }`
   - Remove duplicated display, padding, background, border, border-radius, picture, and img rules from `.v2-brief-meter-strip`.
   - Keep `.v2-agent-meter` and `.v2-charter-meter` layout rules.
   - Remove duplicated `.v2-agent-meter picture`, `.v2-agent-meter img`, `.v2-charter-meter picture`, and `.v2-charter-meter img` rules once the class is present.
   - If Agent and Charter should keep 280px, rely on the default variable.

5. Leave responsive CSS untouched unless screenshots show a regression. The meter strip currently has no dedicated responsive behavior; it scales by max-width.

## 4. What To Keep Deferred

Keep these local for now:

- `.v2-brief-instrument`, `.v2-agent-meter`, `.v2-charter-meter`: panel/layout recipes, not shared state components.
- `.v2-note-instrument`, `.v2-antv2-signal`, `.v2-charter-signal`: related signal grammar, but not yet one stable slot.
- `.v2-agent-proof-grid`, `.v2-charter-proof-grid`, `.v2-brief-output-grid`: proof/output rows look related, but their content density and section roles differ.
- Hero shells such as `.v2-brief-hero`, `.v2-agent-hero`, `.v2-charter-hero`, and `.v2-antv2-hero`: still page recipe territory.
- Generic names such as `.v2-meter`, `.v2-signal`, `.v2-badge`, or `.v2-indicator`: too broad for the current recipe-kit stage.

## 5. Required Verification Commands / Screenshots

For the implementation pass, run:

```bash
git diff --check
node tools/regression-smoke.js
node tools/visual-capture.js --target /sites/build-brief-desk/index.html --out tmp/state-meter-build-brief-2026-06-02 --selector body --selector .v2-brief-instrument --selector .v2-state-meter-strip
node tools/visual-capture.js --target /sites/agent-readiness-ledger/index.html --out tmp/state-meter-agent-readiness-2026-06-02 --selector body --selector .v2-agent-meter --selector .v2-state-meter-strip
node tools/visual-capture.js --target /sites/site-charter-forge/index.html --out tmp/state-meter-site-charter-2026-06-02 --selector body --selector .v2-charter-meter --selector .v2-state-meter-strip
```

Manual screenshot checks:

- Build Brief Desk: confirm the strip still sits below `instrument-readiness-lens.svg`, keeps the tighter 260px width, and does not crowd the `.v2-status-list`.
- Agent Readiness Ledger: confirm `.v2-agent-meter` keeps its grid rhythm and the state meter remains centered.
- Site Charter Forge: confirm `.v2-charter-meter` still matches Agent Readiness visually and no heading/list overlap appears at desktop, mobile, or narrow widths.

## 6. Why This Helps The Recipe Kit

This pass helps because it removes one repeated Images 2.0 micro-pattern while preserving page authorship.

The shared layer would gain a small, named state-meter slot that already has three production-like uses and one known asset dependency: `assets/v2/state-meter-readiness.svg` / `assets/v2/state-meter-readiness.webp`. Page recipes still decide where the strip appears, what copy surrounds it, whether it is a readiness lens, state meter, or launch meter, and how the section composes with `.v2-status-list`.

That keeps V2 as a recipe kit: shared CSS carries proven primitives and tiny asset wrappers, while `css/v2.recipes.css` remains the workshop for page-specific composition.
