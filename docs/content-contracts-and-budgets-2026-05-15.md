# HOMM2 Content Contracts And Budgets - 2026-05-15

## Status

Pass 3 artifact for the documentation program.

This document extends the contract method beyond MenuScreenRecipe into the highest-risk content families for larger editorial or portal-style sites. It is intentionally operational: budgets, downgrade order, density logic, and implementation ownership are explicit. It does not claim fixture proof for every family yet.

## Sources Checked

Primary:

- docs/design-system-documentation-program-2026-05-15.md
- docs/design-system-constitution-2026-05-15.md
- docs/recipe-family-map-2026-05-15.md

Proven baseline:

- docs/responsive-recipe-slice-summary-2026-05-15.md
- docs/responsive-recipe-contracts-2026-05-15.md
- docs/responsive-recipe-implementation-mapping-2026-05-15.md

Supporting:

- README.md
- docs/screen-recipe-contracts-2026-05-14.md
- docs/text-system-guidelines-2026-05.md
- docs/design-system-research-plan-2026-05.md

## Scope And Confidence

Covered families:

- ArticleHeroRecipe
- DossierReadingRecipe
- FeedListingRecipe
- TeaserCardBlockRecipe
- SideRailMetadataRecipe

Confidence is intentionally uneven:

- DossierReadingRecipe is moderately grounded because it already appears in responsive contracts and screen-recipe guidance.
- The other families are structurally grounded by the constitution, family map, text-system rules, and existing component language, but they are not fixture-proven yet.
- Where evidence is weaker, rules below should be read as working contract defaults rather than final proof.

## Inheritance Boundary

### Safe to inherit from the proven MenuScreenRecipe slice

- density modes: spacious, standard, compact, emergency
- global floors: 44px preferred primary hit target, 40px compact support hit target, 12px scan-label floor
- title bands: short up to 18 chars, standard 19-42, long 43-68, over-budget above 68
- compact-before-shrink policy
- one primary frame with bounded secondary and tertiary support
- summary/cue pattern for collapsed supporting content
- accessible full-label rule when compact visible labels shorten

### Not safe to inherit blindly

- command-count budgets
- center-mount dominance pattern
- route-index row budgets as a default listing model
- save-slot or state-strip assumptions
- first-screen logic that prioritizes a command slab over reading or scan rows

## Ownership Model

### Documentation-only rules

- character budgets
- authored item-count budgets
- copy-shortening requirements
- family-selection rules
- downgrade intent that depends on content meaning

### Likely future CSS or DOM APIs

- data-recipe-density states
- frame-rank attributes or classes
- summary strips for collapsed metadata or hidden rows
- full-label or full-text support slots for accessible names
- family-level slot hooks for hero meta, feed row meta, teaser annotations, and rail summaries
- line-clamp conventions for summaries, annotations, and repeated metadata rows

## Critical-First Focus

Critical-first in this pass:

1. ArticleHeroRecipe
2. DossierReadingRecipe
3. FeedListingRecipe
4. TeaserCardBlockRecipe
5. SideRailMetadataRecipe

Later follow-up families:

- PromoFeaturedModuleRecipe
- RouteBoardRecipe expansion beyond current contract work
- SiteShellNavigationRecipe
- RitualThresholdRecipe
- utility and dashboard families

## Shared Floors

- no horizontal overflow except intentionally scrollable documentation surfaces
- visible scan labels stay at 12px or larger
- compact support controls stay at 40px or larger
- primary actions or main tap targets stay at 44px preferred height
- no negative tracking to force fit
- compact mode hides or summarizes optional detail before shrinking copy
- emergency mode preserves the family primary task plus one orientation cue
- over-budget copy is an authoring failure first, not a CSS rescue problem first

## Family Contracts

### ArticleHeroRecipe

Status:

- critical-first
- structurally grounded
- weaker evidence than DossierReadingRecipe

Primary job:

- orient the reader to a story, record, chapter, or feature before body reading or list scanning begins

First-screen obligation:

- desktop 1440 x 900: title group, one orienting summary, and the start of the next action surface below or beside it
- mobile 390 x 844: title group, one orienting summary, and a visible bridge into body or feed opening without art pushing both below fold
- hero art may support orientation but may not delay the first readable text block

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Title | long allowed, max 2 lines | standard or long max 2 lines | standard max 2 lines | short or standard max 2 lines |
| Kicker or eyebrow | 1 short label | 1 short label | 1 short label | optional |
| Summary or deck | 2 lines, target <= 140 chars | 2 lines, target <= 110 chars | 1-2 lines, target <= 80 chars | 1 line, target <= 48 chars |
| Metadata values | 4 max | 3 max | 2 max | 1 max or none |
| Annotation or caption | 1 block, target <= 90 chars | 1 block, target <= 64 chars | target <= 40 chars | none above fold |
| CTA count when present | 1 primary plus 1 quiet secondary | 1 primary plus 1 quiet secondary | 1 primary plus optional quiet secondary | 1 primary only |

Density modes:

- spacious: title, summary, compact metadata, and bounded art can coexist
- standard: title, summary, and compact metadata remain above fold; decorative caption becomes less important
- compact: title and summary remain; metadata compresses to the highest-value pair; art yields first
- emergency: title, one-line orientation summary, and one onward path into body or feed only

Downgrade order:

1. atmospheric art crops, fades, or moves
2. caption or annotation disappears
3. secondary metadata collapses into a summary strip
4. quiet secondary CTA moves below the title block or below fold
5. summary shortens to one line
6. title remains readable and dominant

Truncation and summarization rules:

- title may wrap to 2 lines but must not be ellipsized in the primary hero
- over-budget title requires editorial shortening, subtitle splitting, or eyebrow relocation
- summary may clamp visually in compact or emergency, but full summary text should remain in the first readable block below the hero
- metadata values may abbreviate visible labels in compact mode only if the full label and value remain available in expanded metadata or accessible text

Accessible full-text obligations:

- full hero title remains semantic heading text
- abbreviated metadata labels need a full accessible name
- if visible summary is clamped, the first body or deck block must contain the complete text or an equivalent full reading

Inherited versus family-specific:

- inherits density names, frame-rank model, compact-before-shrink policy, and accessible full-label strategy
- family-specific rule: hero title plus summary is the primary frame, not a command slab
- family-specific rule: art yields before text orientation does
- family-specific rule: hero must visibly hand off into DossierReadingRecipe or FeedListingRecipe

Documentation-only versus likely API:

- documentation-only: character budgets, CTA ceilings, editorial split rules for over-budget hero text
- likely API: article-hero slot hooks, hero summary slot, hero meta strip, frame-rank hooks, summary clamp state

### DossierReadingRecipe

Status:

- critical-first
- moderately grounded
- still needs fixture proof

Primary job:

- present longform reading, archive records, ledger-style comparisons, or dossier pages where the parchment reading field remains dominant

First-screen obligation:

- desktop 1440 x 900: heading, first readable paragraph or record block, and one archive or spine orientation cue are visible together
- mobile 390 x 844: heading and start of the first readable block must appear before note cards, marginalia, or expanded metadata
- no supporting rail may push the opening reading block fully below fold

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Title | long allowed, max 2 lines | standard or long max 2 lines | standard max 2 lines | short or standard max 2 lines |
| Intro or opening prose | 2 short paragraphs or 1 record block plus 1 paragraph | 1 paragraph plus 1 short support block | 1 paragraph or 1 record block | opening sentence or block starts above fold |
| Body opening length | target <= 420 chars visible | target <= 280 chars visible | target <= 180 chars visible | target <= 120 chars visible |
| Archive rail rows | 8 max | 6 max | 3 max or summary | 1 cue |
| Ledger metadata values | 5 max | 4 max | 2 max | 1 max |
| Note cards | 3 max | 2 max | 0 above fold | 0 above fold |
| Annotation or note text | target <= 80 chars | target <= 56 chars | target <= 32 chars | none above fold |

Density modes:

- spacious: primary parchment field plus one rail or spine and limited notes
- standard: primary field plus one compact orientation rail or ledger strip
- compact: reading field dominates; rail becomes summary; notes move below
- emergency: heading, opening reading block, and one archive-location cue only

Downgrade order:

1. side notes and marginalia move below the primary reading field
2. decorative side matter disappears
3. ledger metadata compresses into a short strip
4. archive rail reduces to current location plus count summary
5. opening prose remains readable at normal component scale

Truncation and summarization rules:

- title uses the shared 2-line maximum; over-budget titles require editorial shortening
- first opening paragraph should not be visually clamped mid-sentence; shorten the excerpt instead
- rail labels may clamp in compact mode, but selected or current item must expose the full label in accessible text
- metadata stacks should collapse by removing lower-priority fields, not by showing many cramped abbreviated values

Accessible full-text obligations:

- full dossier title remains semantic heading text
- current archive location and selected rail item expose full names
- if compact mode shows a shortened record excerpt, the full excerpt or opening paragraph must appear in the main reading flow

Inherited versus family-specific:

- inherits density names, global size floors, summary or cue pattern, and frame-rank model
- family-specific rule: parchment reading field is always the primary frame
- family-specific rule: supporting rails may orient but may not become co-primary
- family-specific rule: reading measure outranks side metadata preservation above fold

Documentation-only versus likely API:

- documentation-only: opening-prose budgets, note-card ceilings, field priority order for ledger collapse
- likely API: parchment-object, archive-rail summary state, ledger-strip summary slot, note-card demotion hooks

### FeedListingRecipe

Status:

- critical-first
- structurally grounded
- weaker evidence than DossierReadingRecipe

Primary job:

- support archive indexes, article or story feeds, browse results, and chapter lists where scanning and selection are the main task

First-screen obligation:

- desktop 1440 x 900: feed heading, one orienting filter or scope cue if the list is scoped, and enough visible items to establish a scan path
- mobile 390 x 844: heading and at least the first 2 items or 1 featured item plus 1 ordinary item must be visible before scrolling past the feed opening
- filter chrome must not occupy more first-screen weight than the first results

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Feed title | long allowed, max 2 lines | standard or long max 2 lines | standard max 2 lines | short or standard max 2 lines |
| Scope summary or intro | 2 lines, target <= 120 chars | 2 lines, target <= 90 chars | 1 line, target <= 56 chars | 1 line, target <= 36 chars |
| Visible result rows above fold | 5-7 | 4-5 | 2-3 | 1-2 |
| Featured items above fold | 1 optional | 0-1 | 0-1 | 0-1 |
| Filters or sort controls | 4 max | 3 max | 1-2 visible, rest summarized | summarized or below fold |
| Per-row metadata values | 3 max | 2 max | 1 max | 0-1 max |
| Per-row annotation | target <= 72 chars | target <= 48 chars | target <= 24 chars | none above fold |
| Group headers above fold | 2 max | 1 max | 0-1 max | none unless critical |

Density modes:

- spacious: feed title, scope cue, featured item if relevant, and multiple scan rows
- standard: title plus steady scan rows; filters present only if they stay secondary
- compact: first rows dominate; filters and group details collapse to summaries
- emergency: title plus one clear current result path and one supporting item

Downgrade order:

1. thumbnails and decorative imagery reduce or disappear
2. row annotations shorten or disappear
3. lower-value metadata fields collapse
4. filters or sort condense into a compact summary trigger
5. extra group headers move below the first screen
6. first result rows remain legible and scannable

Truncation and summarization rules:

- row titles may wrap to 2 lines but should not be ellipsized if they are the primary selection surface
- visible annotation text is optional support, not guaranteed copy
- metadata stacks should prefer one strong value over several abbreviated fragments
- filter summaries should state hidden count or active scope, not a vague more label

Accessible full-text obligations:

- full row titles remain available in links or semantic headings
- hidden filters and hidden result counts need programmatic labels
- row metadata abbreviations require full accessible labels when shortened

Inherited versus family-specific:

- inherits density names, frame-rank model, summary or cue pattern, and full-label accessibility rule
- family-specific rule: scan path outranks filter chrome
- family-specific rule: repeated rows stay quieter than the selected or current item
- family-specific rule: equal-strength ornate cards are forbidden as the default row treatment

Documentation-only versus likely API:

- documentation-only: visible-row budgets, group-header ceilings, and rule for when a row should graduate into teaser-card treatment
- likely API: feed-listing slot hooks, feed summary strip, hidden-filter count surface, row-rank hooks, compact row-meta slots

### TeaserCardBlockRecipe

Status:

- critical-first support family
- structurally grounded
- weaker evidence than feed and dossier families

Primary job:

- package repeated previews, related links, featured subgroups, or compact editorial invitations without turning every preview into a co-primary frame

First-screen obligation:

- when used above fold, teaser cards must support another primary recipe or present one clearly featured teaser plus subordinate companions
- on mobile, the first teaser must communicate destination and value without forcing paragraph-length copy
- teaser blocks must never outrank the page main task

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Card title | standard or long max 2 lines | standard max 2 lines | short or standard max 2 lines | short or standard max 2 lines |
| Card summary | 2-3 lines, target <= 140 chars | 2 lines, target <= 96 chars | 1-2 lines, target <= 60 chars | 1 line, target <= 36 chars |
| Metadata values | 3 max | 2 max | 1 max | 0-1 max |
| Annotation or badge text | target <= 28 chars | target <= 22 chars | target <= 16 chars | target <= 12 chars |
| Cards per visible block | 4 max | 3 max | 2 max | 1 featured plus count summary |
| CTA count per card | 1 primary route only | 1 primary route only | 1 primary route only | 1 primary route only |

Density modes:

- spacious: one featured teaser plus supporting companions or a restrained small grid
- standard: one steady teaser rhythm with limited metadata
- compact: titles remain, summaries shorten, metadata compresses
- emergency: title plus one orientation cue only per visible teaser

Downgrade order:

1. decorative art crops or disappears
2. badge or annotation copy shortens
3. metadata reduces to one value
4. summaries clamp to one line or disappear for secondary cards
5. only the strongest teaser remains fully expressed above fold

Truncation and summarization rules:

- teaser titles may wrap to 2 lines but should not be hard-ellipsized when the card itself is the only route into the content
- secondary teaser summaries are optional and should disappear before card labels shrink
- if several teaser cards compete with equal detail, reduce card count before reducing text size

Accessible full-text obligations:

- card links must carry full destination names
- abbreviated badges or metadata need full accessible labels
- if a visible summary is truncated, the destination page or expanded teaser state must expose the complete text

Inherited versus family-specific:

- inherits density names, frame-rank logic, and compact-before-shrink policy
- family-specific rule: teaser cards are support surfaces, not default page architecture
- family-specific rule: card count should reduce before card text shrinks
- family-specific rule: only one teaser in a block may approach primary visual weight

Documentation-only versus likely API:

- documentation-only: visible-card ceilings, featured-versus-secondary teaser count rules, summary eligibility by card rank
- likely API: teaser-card slot hooks, card-rank hooks, compact meta strip, summary clamp states, accessible full-label carriers

### SideRailMetadataRecipe

Status:

- critical-first support family
- partially grounded by existing rail or spine patterns
- still low confidence for broad reuse

Primary job:

- provide orientation, metadata, archive location, status, filters, or companion context without overtaking the main screen recipe

First-screen obligation:

- desktop 1440 x 900: rail may show current location, 1 compact metadata cluster, and a short summary of hidden context
- mobile 390 x 844: rail usually collapses into a summary strip, compact accordion, or inline metadata cue; full stacked rail is not the default
- above fold, a side rail supports orientation only if the primary reading, listing, or hero surface remains dominant

Content budgets:

| Slot | Spacious | Standard | Compact | Emergency |
| --- | --- | --- | --- | --- |
| Section label or rail title | 1 short label | 1 short label | 1 short label | optional |
| Rows visible | 6 max | 4 max | 2 max or summary | 1 cue |
| Metadata values per row | 1 value | 1 value | 1 value | 1 value |
| Label length | target <= 22 chars | target <= 18 chars | target <= 14 chars | target <= 12 chars |
| Value length | target <= 30 chars | target <= 24 chars | target <= 18 chars | target <= 14 chars |
| Annotation or helper text | target <= 56 chars | target <= 40 chars | target <= 24 chars | none |
| Action links inside rail | 2 max | 1-2 max | 0-1 max | 0 above fold |

Density modes:

- spacious: compact vertical rail with current-location context and limited helper text
- standard: rail remains secondary, with 3-4 concise rows
- compact: rail becomes a short summary strip or 2-row stack
- emergency: one current-location or state cue only

Downgrade order:

1. helper text and annotations disappear
2. lower-priority rows collapse into count or summary text
3. action links move below the primary surface
4. visible row count drops to current location plus one key value
5. emergency keeps only one orientation cue

Truncation and summarization rules:

- row labels should be rewritten before they rely on arbitrary wrapping
- visible values may shorten in compact mode only when the full value remains available in expanded metadata or accessible text
- a rail summary should say what was hidden, for example current section plus remaining count, not only show a generic icon
- if the rail needs more than 4 rows to explain the screen above fold, the main recipe is probably underspecified

Accessible full-text obligations:

- current location and state labels must keep full names
- shortened values need programmatic full text
- compact rail summaries must announce hidden row counts or hidden sections
- icon-only status markers require text equivalents

Inherited versus family-specific:

- inherits summary-strip logic, frame-rank model, density names, and accessible full-label rule
- family-specific rule: rails demote earlier than reading, listing, or hero surfaces
- family-specific rule: mobile default is summary or cue, not full stacked rail
- family-specific rule: rail actions are support actions, not page-primary actions

Documentation-only versus likely API:

- documentation-only: row ceilings, field-priority order, rule that rails demote before primary surfaces
- likely API: rail-summary slot, hidden-row-count surface, expanded-metadata container, state-cue hooks

## Cross-Family Operational Rules

### Safe inheritance from MenuScreenRecipe

- density names
- frame rank
- compact and emergency downgrade philosophy
- summary-strip concept
- accessible full-label or full-text fallback

### Do not inherit directly

- menu command counts
- route-row counts as default feed behavior
- save-strip assumptions
- center-mount dominance

### What CSS or DOM can help with

- line clamps
- summary visibility states
- density switching
- frame-rank styling
- hiding or demoting tertiary support
- exposing visually hidden full labels

### What CSS or DOM should not be expected to solve

- over-budget titles
- narrative summaries stuffed into scan surfaces
- too many rows or cards above fold
- ambiguous primary task selection
- metadata sets with no field priority

### Misuse patterns to reject

- ArticleHeroRecipe treated as a scenic poster with no visible handoff into reading or listing
- DossierReadingRecipe fragmented into equal-weight cards instead of a dominant reading field
- FeedListingRecipe built as a wall of equal-strength ornate cards
- TeaserCardBlockRecipe promoted into page-primary architecture everywhere
- SideRailMetadataRecipe allowed to consume more first-screen attention than the main recipe

## Verification Targets For Later Fixture Passes

- article hero with over-budget title and long metadata values
- dossier reading with 3 note cards, 6 rail rows, and long archive labels
- feed listing with dense row counts, active filters, and mixed featured and non-featured items
- teaser block with 4 cards competing for emphasis
- side rail with long labels, hidden counts, and mobile summary collapse

## Unresolved Questions

- ArticleHeroRecipe: should the canonical hero always hand off into body text, or may it hand off directly into a feed or listing on archive landing pages?
- FeedListingRecipe: should featured items share the same recipe with ordinary rows, or become a documented hybrid with TeaserCardBlockRecipe?
- SideRailMetadataRecipe: when a rail contains filters, does it remain metadata support or become a separate scoped filter pattern?
- TeaserCardBlockRecipe: how often should secondary teaser summaries remain visible on mobile before scan quality degrades?
- DossierReadingRecipe: which metadata fields are truly canonical for first-screen archive orientation versus optional ledger detail?

## Pass 4 Handoff: Fixture Strategy

Pass 4 should convert the highest-risk budgets above into stress fixtures first, not broad implementation.

Priority order:

1. one hostile ArticleHeroRecipe fixture
2. one hostile DossierReadingRecipe fixture
3. one dense FeedListingRecipe fixture
4. one mixed-rank TeaserCardBlockRecipe fixture
5. one mobile-pressure SideRailMetadataRecipe fixture

The fixture job is to prove that downgrade order, hidden-count summaries, and full-text obligations survive realistic ugly content before shared CSS or DOM APIs expand.
