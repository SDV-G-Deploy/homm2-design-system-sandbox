# V2 Closeout Checkpoint - 2026-06-02

## Status

V2 is the current recommended HoMM2 x Solarpunk implementation path for new work.

The system is stable enough to build new static pages and small sites from the V2 starter/recipe kit. It should still be treated as a controlled sandbox and production recipe kit, not as an npm package or a formal component library.

## Baseline Head

- Baseline infra commit before this checkpoint: `401ebac ci: update pages actions`
- Baseline design commit: `fe0b94c feat: add product map field note`
- Baseline Pages run: `26818185487`
- Baseline deploy status: success

## Live Proofs

- V2 gateway: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/v2/
- V2 site starter: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/starters/v2-site-starter/
- ANT School landing v2: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/sites/ant-school-landing-v2/
- Product Map Field Note: https://sdv-g-deploy.github.io/homm2-design-system-sandbox/sites/product-map-field-note/

## What Is Closed

- V2 is separated from V1/V1.1 as the canonical new-work path.
- `css/v2.css` is now a compatibility entrypoint over split authoring layers:
  - `css/v2.tokens.css`
  - `css/v2.shell.css`
  - `css/v2.components.css`
  - `css/v2.reference.css`
  - `css/v2.recipes.css`
  - `css/v2.responsive.css`
- `starters/v2-site-starter/` is the current copyable plain-HTML starter.
- `docs/v2-starter-kit-2026-06-01.md` defines page modes, chrome, content budgets, components, and recipes.
- `docs/v2-asset-production-kit-2026-06-02.md` defines the controlled path for SVG/PNG/WebP visual assets, including V2 Images 2.0 Mode.
- Real production-like proofs now cover:
  - landing/school: `sites/ant-school-landing-v2/`
  - service/booking: `v2/canopy-clinic.html`
  - article/dossier: `sites/product-map-field-note/`
  - operational board: `v2/control.html`
- GitHub Pages workflow was updated to current action majors and no longer emits the Node.js 20 deprecation annotation in the latest run.

## Verification Snapshot

Last verified gates for the Product Map Field Note pass:

- `git diff --check`
- `node tools/regression-smoke.js`
  - 18 targets
  - desktop, mobile, narrow viewports
  - result: OK
- `node tools/visual-capture.js --target /sites/product-map-field-note/index.html`
  - desktop `1440x900`: offenders `0`
  - mobile `390x844`: offenders `0`
  - narrow `360x740`: offenders `0`
- Live URL returned HTTP 200 after deploy.

## Cleanliness

Sandbox repo status at checkpoint creation: clean before this document was added.

The wider workspace root has unrelated memory/skill/doc artifacts. Do not delete them as cleanup. They include working memory and local skills such as `skills/human-text/`.

## Next Recommended Pass

The best next pass is one of these, in order:

1. **Images 2.0 documentation pass:** formalize the V2 bitmap/image-assisted slot contract. Completed after this checkpoint in `docs/v2-asset-production-kit-2026-06-02.md`.
2. **New surface pass:** build one more production-like page shape from the starter, preferably a compact tool/workflow screen or case-study page.
3. **Library decision pass:** only after another asset or surface pass, decide whether V2 needs a formal component package or should remain a repo-native recipe kit.

Avoid starting an npm/component-library extraction now. The system has enough page proof, but the asset and repeated-production patterns should stabilize one step further first.
