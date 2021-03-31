import * as fs from "fs";
import { sync as glob } from "glob";
import * as path from "path";

/** Path to find the examples */
const iconPath = path.join("./icons/");
const outputSourceFilename = "index.js";

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
 * Creates index.js file with all Icon names and metadata
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
};

task();
