# V2 CSS Entry Fixture

This folder is a static package-example/import fixture.

It is not an npm package, not a build output, and not a public API commitment.

The fixture validates the smallest likely delivery shape:

- one local CSS entry file;
- that entry imports the current css/v2.css compatibility entrypoint;
- a standalone HTML page renders stable V2 helpers through that entry;
- the regression and visual harness can check the page like any other V2 surface.

Current entry:

- v2-entry.css

Current page:

- index.html

Package work remains blocked until a real consuming project or a stronger package-example story proves more value than copying starters/v2-site-starter/.
