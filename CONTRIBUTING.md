# Contributing to Bulhorn Icons

Looking to contribute?  **Here's how you can help.**

## Getting Started

Want to build the font locally? Follow these steps:

```bash
git clone git@github.com:bullhorn/bullhorn-icons.git
cd bullhorn-icons
npm install
npm run build
```

Your fonts will be built to the ./fonts directory. Just open the `Bullhorn-Glyphicons.html` to view the demo.



## Requesting new icons

New icons are usually requested internally but can also be requeste by the [community on GitHub](../../issues). Want to request a new icon? Here are some things to keep in mind:

1. Please be nice.
2. Please do not request comprehensive sets of icons related to a very specific field.
3. Please [search](../../search?type=Issues) to see if your icon request already exists. If a request is found, please add a 👍 reaction to that one.
4. Please make requests for single icons, unless you are requesting a couple of strictly related icons (e.g., thumbs-up/thumbs-down).
5. Please and thank you if you include the following:
  - Title your [new issue](../../issues/new?title=Icon%20Request:%20icon-) `Icon request: icon-name` (e.g., `Icon request: icon-car`).
  - Include a few use cases for your requested icon. How do you plan on using it?
  - Attach a single color image or two that represent the idea you're going for.
  - Request concrete objects: it's harder to make an icon to represent happiness, it's easier to make a smiley face. ☺



## Reporting issues

We only accept issues that are icon requests, bug reports, or feature requests. Bugs must be isolated and reproducible problems that we can fix within the Font. Please read the following guidelines to ensure you are the paragon of bug reporting.

1. **Search for existing issues.** We get a lot of duplicate issues, and you'd help us out a lot by first checking if someone else has reported the same issue. Moreover, the issue may have already been resolved with a fix available.
2. **Create an isolated and reproducible test case.** Be sure the problem exists in the code with a [reduced test case](http://css-tricks.com/reduced-test-cases/) that should be included in each bug report.
3. **Include a live example.** Make use of jsFiddle, jsBin, or Codepen to share your isolated test cases.
4. **Share as much information as possible.** Include operating system and version, browser and version, version of the font, etc. where appropriate. Also include steps to reproduce the bug.



## Key branches

- `master` is the latest, deployed version (use for pull request if they only affect the docs)
- `gh-pages` is the hosted docs (not to be used for pull requests)
- `f/*` branches are the official work in progress branches for the next releases. All pull requests should be submitted against the appropriate branch


## Notes on the repo

As of v2.0.0, the fonte is now generated with the `icon-font-generator` npm package
- `fonts/` - contains all generated files. ie. font files and demo
- `icons/` - All source svgs should be added in this directory
- `templates/` - all CSS and Demo templates used to generate the font



## Pull requests

- Submit all pull requests against the appropriate `f/*` branch for easier merging
- If your PR only affect the docs, feel free to push against the `master` branch
- Try not to pollute your pull request with unintended changes--keep them simple and small
- Try to share which browsers your code has been tested in before submitting a pull request



## License

By contributing your code, you agree to license your contribution under the terms of the MIT License:
- http://opensource.org/licenses/mit-license.html



## Thanks

Thanks to Font Awesome for their wonderful CONTRIBUTING.MD doc. It was modified to create this one.