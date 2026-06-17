# Contributing to Bullhorn Icons

## Adding a new icon

1. **Add the SVG** to `icons/` as `<lower-kebab-case-name>.svg` — `viewBox="0 0 512 512"`,
   single-color paths. The file name becomes the id everywhere (`bhi-<name>` class,
   `MyIcon` constant, demo label).
2. **Build it:** `npm install && npm start` assigns the next free codepoint and
   regenerates the fonts, CSS/TS/JSON, `index.ts`, and the demo.
3. **Verify** in `fonts/index.html`, then **commit everything the build touched**
   (`.fantasticonrc.js`, `fonts/`, `index.ts`) with a [Conventional Commit](#commit-messages),
   e.g. `feat(icon): add my-icon`, and open a PR against the active `f/*` branch.

> ⚠️ `npm start` never renumbers existing codepoints. Don't hand-edit them either —
> renumbering an icon remaps every glyph after it and silently breaks consumers on
> the old font (a breaking change).

## Commit messages

[semantic-release](https://github.com/semantic-release/semantic-release) versions
releases from [Conventional Commit](https://www.conventionalcommits.org) messages:

- `feat(icon): add <name>` — new icon → **minor**
- `fix(icon): ...` — fixing an existing glyph/brand logo → **patch**
- `feat(icon)!: ...` + `BREAKING CHANGE:` footer — remapping existing codepoints → **major**

## Key branches

- `main` — latest deployed version; PR here only for docs
- `f/*` — work-in-progress branches for upcoming releases; PR new icons here
- `gh-pages` — hosted docs (don't PR against this)
