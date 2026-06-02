# V2 State/Signal Wrapper Critic Audit - 2026-06-02

## 1. Verdict

Defer the next promotion.

The latest surfaces give useful evidence for state-meter and signal-wrapper roles, but not enough for a shared component promotion. V2 should stay a recipe kit here: keep the page-local wrappers in `css/v2.recipes.css` and only keep the already-promoted primitives in `css/v2.components.css`.

The strongest candidate is a narrow state-meter image frame, but even that is not stable enough yet. The three current uses share `assets/v2/state-meter-readiness.*`, not a consistent wrapper contract.

## 2. Top Risks Or Weak Evidence

1. **The state-meter wrapper has three shapes, not one component.**
   `sites/build-brief-desk/index.html` uses `figure.v2-brief-meter-strip` nested inside `.v2-panel.v2-brief-instrument`. `sites/agent-readiness-ledger/index.html` uses the `.v2-agent-meter picture` as the styled frame. `sites/site-charter-forge/index.html` uses `.v2-charter-meter picture`. Promoting now would either erase the semantic difference between a strip and a panel image slot, or create a component with vague optional behavior.

2. **Signal wrappers are visually related but functionally scattered.**
   `.v2-antv2-signal`, `.v2-note-instrument`, `.v2-charter-signal`, `.v2-brief-card`, and `.v2-agent-seal` all mean some form of badge, instrument, seal, or readiness summary. They do not share slot anatomy. Some carry one image plus one text pair; others carry image plus `.v2-lens-module`; others are full side cards. A shared `signal` abstraction would become a junk drawer.

3. **The already-promoted shared primitives are carrying the real reusable work.**
   `.v2-lens-module`, `.v2-status-list`, `.v2-route-list`, `.v2-status-mark`, `.v2-panel`, and `.v2-ledger` are doing the stable cross-surface jobs. The wrappers around them are still recipe composition.

4. **Site Charter Forge adds a third meter asset use, but not third wrapper evidence.**
   The site-charter note correctly says the meter wrapper still differs enough to defer. The new page mostly copies the Agent Readiness meter anatomy, while Build Brief keeps the distinct `.v2-brief-meter-strip` figure. That is evidence for an asset slot, not for a promoted component.

5. **Promotion would blur the Images 2.0 boundary.**
   `docs/v2-asset-production-kit-2026-06-02.md` says instrument visuals must pair with real metric/state content and generated imagery must not replace component grammar. A generic meter/signal wrapper would make it too easy to place the image without proving the surrounding status rows and meaning.

## 3. Evidence Table

| Surface / file | Exact classes or assets | Evidence | Critic decision |
| --- | --- | --- | --- |
| `sites/build-brief-desk/index.html` | `.v2-brief-instrument`, `.v2-brief-meter-strip`, `.v2-status-list`, `state-meter-readiness.webp/svg` | Meter is a separate `figure` strip between an instrument image and state rows. | Keep local. This is a strip slot, not the same wrapper as later pages. |
| `sites/agent-readiness-ledger/index.html` | `.v2-panel.v2-agent-meter`, `.v2-agent-meter picture`, `.v2-status-list`, `state-meter-readiness.webp/svg` | Meter image frame is the `picture` inside a panel. | Keep local. Similar to charter, but not enough to override Build Brief difference. |
| `sites/site-charter-forge/index.html` | `.v2-panel.v2-charter-meter`, `.v2-charter-meter picture`, `.v2-status-list`, `state-meter-readiness.webp/svg` | Launch meter repeats Agent Readiness structure with page-specific class names. | Defer. Useful second example for this anatomy, not a system-wide proof. |
| `sites/site-charter-forge/index.html` | `.v2-charter-signal`, `.v2-charter-signal picture`, `.v2-lens-module` | Readiness signal combines seal image and lens rows inside a page-local side card. | Do not promote. It overlaps with other signal concepts but has different anatomy. |
| `sites/build-brief-desk/index.html` | `.v2-brief-card`, `.v2-brief-seal`, `.v2-lens-module` | Hero summary card has seal plus lens module. | Do not promote. Same ingredients as charter signal, different wrapper and role. |
| `sites/agent-readiness-ledger/index.html` | `.v2-agent-seal`, `.v2-lens-module` | Hero readiness summary uses seal plus lens module. | Watch later. It is close to `.v2-brief-card`, but naming/spacing/asset treatment are still local. |
| `sites/product-map-field-note/index.html` | `.v2-note-instrument`, `.v2-note-side`, `.v2-lens-module` | One compact instrument in the hero, plus a separate side panel lens. | Do not merge into signal wrapper. This page proves divergence. |
| `sites/ant-school-landing-v2/index.html` | `.v2-antv2-signal`, `.v2-antv2-lens`, `.v2-lens-module` | Badge overlay and lens panel are separate recipe-specific compositions. | Do not promote. The signal is an overlay route badge, not a meter/readiness panel. |
| `css/v2.components.css` | `.v2-lens-module`, `.v2-status-list`, `.v2-status-mark`, `.v2-route-list` | Stable primitives already exist and have bounded meanings. | Leave as-is. These are the reusable layer. |
| `css/v2.recipes.css` | `.v2-brief-meter-strip`, `.v2-agent-meter`, `.v2-charter-meter`, `.v2-antv2-signal`, `.v2-note-instrument`, `.v2-charter-signal` | Active page-local wrappers still encode layout and role differences. | Keep in recipes. Do not flatten into shared components yet. |
| `docs/night-runs/2026-06-02-promotion-audit-v2-1.md` | State meter slot row: `.v2-brief-meter-strip` vs `.v2-agent-meter picture` | Prior audit explicitly deferred meter wrappers because roles differed. | Still true after Site Charter Forge. |
| `docs/night-runs/2026-06-02-site-charter-forge.md` | “state-meter strip appears in another page recipe, but its wrapper still differs enough to defer promotion” | Latest page author already captured the weak evidence. | Agree. Do not promote now. |
| `docs/v2-library-decision-2026-06-02.md` | “possibly a compact signal/badge pattern or state-meter wrapper after more surfaces prove a stable slot” | Decision doc frames this as a candidate, not a mandate. | Candidate remains open, not ready. |
| `docs/v2-asset-production-kit-2026-06-02.md` | `state-meter-readiness`, instrument rules, Images 2.0 slot contract | Asset slot is canonical; component wrapper is not. | Promote asset vocabulary only, not CSS wrapper. |

## 4. What Would Break Or Become Vague If Promoted Too Early

- A shared `.v2-state-meter` would need to cover both `figure.v2-brief-meter-strip` and `.v2-agent-meter picture` / `.v2-charter-meter picture`. That makes the element contract unclear before anyone knows whether the component owns the `picture`, the parent panel, or only the image frame.
- A generic `.v2-signal` would mix route overlays, hero seal cards, compact instruments, and readiness summaries. The name would not tell a page author whether to use it for `.v2-antv2-signal`, `.v2-note-instrument`, `.v2-charter-signal`, or `.v2-agent-seal`.
- The component layer would start encoding page composition again, which cuts against the current decision to treat V2 as a recipe kit.
- Future pages could place `state-meter-readiness` as decorative proof without adjacent `.v2-status-list` rows, weakening the Images 2.0 rule that instruments pair with real state content.
- Responsive ownership would become vague: current desktop contracts live in `css/v2.responsive.css` under `.v2-brief-board`, `.v2-agent-board`, and `.v2-charter-board`, not under a shared meter component.

## 5. Evidence That Would Make Promotion Safe Later

- At least three production surfaces using the same element contract, for example `<figure class="v2-state-meter">` with identical child expectations and no page-local frame overrides.
- A written extraction ledger entry that states whether the promoted component owns only the image frame, the label, the adjacent `.v2-status-list`, or the full panel.
- Visual captures comparing Build Brief Desk, Agent Readiness Ledger, Site Charter Forge, and one new non-agent/non-charter page at desktop, mobile, and narrow mobile.
- A fourth surface that uses the meter with a different content domain but the same anatomy, proving this is not just an agent-readiness visual repeated across related pages.
- A name narrower than `signal` or `badge`, such as `.v2-meter-strip` only if the shared role is truly just the bounded meter image frame.
- Explicit asset fallback behavior for `state-meter-readiness.webp/svg` in the component contract.

## 6. Recommended Next Pass From Critic Perspective

Do not promote in the next pass. Instead, run a deliberately constrained proof pass:

1. Add one new production-like surface that needs a real operational state meter outside the agent/brief/charter family.
2. Force it to choose one wrapper anatomy up front: either a standalone `figure` strip like `.v2-brief-meter-strip`, or a `picture` frame inside a meter panel like `.v2-agent-meter picture`.
3. Capture screenshots for all meter uses and record an extraction ledger with element, child, asset, mobile, and semantic contracts.
4. Only then consider promoting the narrow meter frame. Keep signal wrappers local unless two or three pages converge on the same image-plus-`.v2-lens-module` anatomy with the same role.
