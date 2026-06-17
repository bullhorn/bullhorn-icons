/**
 * Assigns codepoints to any new icons.
 *
 * Scans `icons/` for SVGs that aren't yet in the `codepoints` map in
 * `.fantasticonrc.js`, gives each the next free codepoint (current max + 1,
 * counting up), and rewrites the map alphabetically so the new entries land in
 * their correct A->Z position. Existing entries keep their numbers untouched -
 * new icons always take numbers above the current max, never mid-sequence, so
 * the glyph->codepoint mapping of shipped icons never changes.
 *
 * Runs as the first half of `npm start` (before the build).
 */
const fs = require("fs");
const path = require("path");

const CONFIG = path.resolve("./.fantasticonrc.js");
const ICONS_DIR = path.resolve("./icons");

const byName = (a, b) => a.localeCompare(b, undefined, { sensitivity: "base" });

const { codepoints } = require(CONFIG);

const ids = fs
  .readdirSync(ICONS_DIR)
  .filter((f) => f.endsWith(".svg"))
  .map((f) => path.basename(f, ".svg"));

const newIds = ids.filter((id) => !(id in codepoints)).sort(byName);

if (newIds.length === 0) {
  console.log("No new icons found - the codepoint map is already up to date.");
  process.exit(0);
}

let next = Math.max(...Object.values(codepoints)) + 1;
const assigned = {};
for (const id of newIds) assigned[id] = next++;

const merged = { ...codepoints, ...assigned };
const body = Object.keys(merged)
  .sort(byName)
  .map((id) => `    ${JSON.stringify(id)}: ${merged[id]},`)
  .join("\n");

const src = fs.readFileSync(CONFIG, "utf8");
const updated = src.replace(/(codepoints: sortByKey\(\{\n)[\s\S]*?(\n  \}\),)/, `$1${body}$2`);

if (updated === src) {
  console.error("Could not find the codepoints map in .fantasticonrc.js - aborting.");
  process.exit(1);
}

fs.writeFileSync(CONFIG, updated);

console.log(`Added ${newIds.length} new icon(s):`);
for (const id of newIds) console.log(`  ${id} -> ${assigned[id]}`);
console.log("");
