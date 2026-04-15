import * as fs from "fs";
import { sync as glob } from "glob";
import * as path from "path";
import Handlebars from "handlebars";

/** Path to find the examples */
const iconPath = path.join("./icons/");
const outputSourceFilename = "index.ts";
const jsonPath = "./fonts/Bullhorn-Glyphicons.json";
const htmlTemplatePath = "./templates/demo.hbs";
const htmlOutputPath = "./fonts/index.html";

const snakeToCamel = (str) =>
  str
    .split("-")
    .map((it) => it[0].toUpperCase() + it.slice(1))
    .join("");

function generateIndexFile(results) {
  return results
    .map((icon) => {
      const v = snakeToCamel(icon);
      return `export const ${v} = '${icon}';`;
    })
    .join("\n");
}

/**
 * Regenerate HTML with sorted glyphs
 */
function regenerateHtml(sortedAssets) {
  const templateContent = fs.readFileSync(htmlTemplatePath, 'utf8');
  const template = Handlebars.compile(templateContent);

  const html = template({
    name: "Bullhorn-Glyphicons",
    assets: sortedAssets,
    tag: "i",
    prefix: "bhi",
    styles: fs.readFileSync("./fonts/Bullhorn-Glyphicons.css", 'utf8'),
  });

  fs.writeFileSync(htmlOutputPath, html);
}

/**
 * Creates index.ts file with all Icon names and metadata
 */
const task = () => {
  const results = [];
  const matchedFiles = glob("**/*.svg", {
    cwd: iconPath,
  });

  for (const iconPath of matchedFiles) {
    let name = iconPath.replace("/", "-").replace(".svg", "");
    results.push(name);
  }

  const generatedIndexFile = generateIndexFile(results);
  fs.writeFileSync(outputSourceFilename, generatedIndexFile);

  // Regenerate HTML with sorted glyphs from JSON
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const sorted = {};
  const keys = Object.keys(json).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

  for (const key of keys) {
    sorted[key] = json[key];
  }

  regenerateHtml(sorted);
};

task();
