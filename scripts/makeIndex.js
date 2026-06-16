import * as fs from "fs";
import Handlebars from "handlebars";

const jsonPath = "./fonts/Bullhorn-Glyphicons.json";
const tsPath = "./fonts/Bullhorn-Glyphicons.ts";
const htmlTemplatePath = "./templates/demo.hbs";
const htmlOutputPath = "./fonts/index.html";
const outputSourceFilename = "index.ts";

const snakeToCamel = (str) =>
  str
    .split("-")
    .map((it) => it[0].toUpperCase() + it.slice(1))
    .join("");

/**
 * Build the root index.ts (named export per icon id), in the given order.
 */
function generateIndexFile(ids) {
  return ids.map((id) => `export const ${snakeToCamel(id)} = '${id}';`).join("\n");
}

/**
 * Re-render the demo page with glyphs in the given order. fantasticon renders
 * the html template from `assets` (raw glob order); we re-render it here from
 * the pinned, alphabetized codepoints map so the demo matches the css/json.
 */
function regenerateHtml(orderedAssets) {
  const template = Handlebars.compile(fs.readFileSync(htmlTemplatePath, "utf8"));
  const html = template({
    name: "Bullhorn-Glyphicons",
    assets: orderedAssets,
    tag: "i",
    prefix: "bhi",
    styles: fs.readFileSync("./fonts/Bullhorn-Glyphicons.css", "utf8"),
  });
  fs.writeFileSync(htmlOutputPath, html);
}

/**
 * fantasticon's .ts generator keys its enum/unions off `assets` (glob order),
 * so the file comes out unsorted. Reorder its four blocks to the given id
 * order, reusing fantasticon's own PascalCase keys so naming is untouched.
 */
function reorderTs(ids, codepoints) {
  let ts = fs.readFileSync(tsPath, "utf8");

  // Recover id -> PascalCase key from the enum block (`  Key = 'id',`).
  const idToKey = {};
  for (const line of ts.split("\n")) {
    const m = line.match(/^\s*(\w+)\s*=\s*'([^']+)',/);
    if (m) idToKey[m[2]] = m[1];
  }

  const order = ids.filter((id) => idToKey[id]);
  const idUnion = order.map((id) => `  | '${id}'`).join("\n") + ";";
  const keyUnion = order.map((id) => `  | '${idToKey[id]}'`).join("\n") + ";";
  const enumBody = order.map((id) => `  ${idToKey[id]} = '${id}',`).join("\n");
  const constBody = order
    .map((id) => `  [BullhornGlyphicons.${idToKey[id]}]: '${codepoints[id]}',`)
    .join("\n");

  ts = ts
    .replace(/(type BullhornGlyphiconsId =\n)[\s\S]*?;/, `$1${idUnion}`)
    .replace(/(type BullhornGlyphiconsKey =\n)[\s\S]*?;/, `$1${keyUnion}`)
    .replace(/(enum BullhornGlyphicons \{\n)[\s\S]*?(\n\})/, `$1${enumBody}$2`)
    .replace(/(CODEPOINTS[^\n]*\{\n)[\s\S]*?(\n\};)/, `$1${constBody}$2`);

  fs.writeFileSync(tsPath, ts);
}

/**
 * Conform every text artifact to one ordering authority: the pinned codepoints
 * map (already alphabetized in .fantasticonrc.js, which drives the css/json).
 */
const task = () => {
  const codepoints = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const ids = Object.keys(codepoints).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  fs.writeFileSync(outputSourceFilename, generateIndexFile(ids));

  const orderedAssets = {};
  for (const id of ids) orderedAssets[id] = codepoints[id];
  regenerateHtml(orderedAssets);

  reorderTs(ids, codepoints);
};

task();
