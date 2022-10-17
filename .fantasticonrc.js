module.exports = {
  name: "Bullhorn-Glyphicons",
  inputDir: "./icons", // (required)
  outputDir: "./fonts", // (required)
  fontTypes: ["ttf", "woff", "woff2"],
  assetTypes: ["ts", "css", "json", "html"],
  fontsUrl: ".",
  tag: "i",
  prefix: "bhi",
  normalize: true,
  formatOptions: {
    // Pass options directly to `svgicons2svgfont`
    json: {
      // render the JSON human readable with two spaces indentation (default is none, so minified)
      indent: 2,
    },
    ts: {
      // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
      types: ["enum", "constant", "literalId", "literalKey"],
      // render the types with `'` instead of `"` (default is `"`)
      singleQuotes: true,
    },
  },
  // Use a custom Handlebars template
  templates: {
    css: "./templates/css.hbs",
    html: "./templates/demo.hbs",
  },
  pathOptions: {
    html: "./fonts/index.html",
  },
  // pathOptions: {
  //   ts: "./dist/types/icon-types.ts",
  //   json: "./misc/icon-codepoints.json",
  // },
  // codepoints: {
  //   "chevron-left": 57344, // decimal representation of 0xe000
  //   "chevron-right": 57345,
  //   "thumbs-up": 57358,
  //   "thumbs-down": 57359,
  // },
  // Customize generated icon IDs (unavailable with `.json` config file)
  // getIconId: ({
  //   basename, // `string` - Example: 'foo';
  //   relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
  //   absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
  //   relativeFilePath, // `string` - Example: 'foo.svg'
  //   index, // `number` - Example: `0`
  // }) => [index, basename].join("_"), // '0_foo'
};
