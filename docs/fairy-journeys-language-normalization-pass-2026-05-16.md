# fairy-journeys language normalization pass - 2026-05-16

## Scope

Single bounded applied-page pass for `fairy-journeys.html`.

Goal: remove the remaining accidental English chrome around the page while keeping recipe-family identifiers where they still carry system meaning.

## Files changed

- `fairy-journeys.html`

No CSS, canonical fixtures, shared tokens, or readiness claims changed in this pass.

## What changed

- Localized the document title to Russian.
- Localized the meta description to Russian.
- Renamed the breadcrumb root label from `HOMM2` to `Архив HOMM2` so the chrome reads as authored Russian UI instead of a mixed-language placeholder.
- Tightened the hero eyebrow copy from `запись похода` to `вступительная запись` for more consistent page-language tone.
- Localized the footer status note to Russian while preserving the recipe-family names as explicit system terms.

## Verification

Static text scan:

```text
rg -n "Applied|Page|journey|smoke page|record\.|record|article flow" fairy-journeys.html
# no matches
```

HTML parse sanity:

```text
python3 - <<'PY'
from html.parser import HTMLParser
HTMLParser().feed(open('fairy-journeys.html', encoding='utf-8').read())
print('html-parse-ok')
PY
html-parse-ok
```

## Outcome

The applied page now keeps its remaining user-facing chrome in Russian. Intentional English remains only inside recipe-family identifiers, where it still serves contract/reference value rather than accidental UI mixing.
