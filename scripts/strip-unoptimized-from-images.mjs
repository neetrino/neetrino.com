/**
 * Removes `unoptimized` from next/image props except for animated GIF sources.
 * Run: node scripts/strip-unoptimized-from-images.mjs
 *
 * Do not match GIF by import lines — only by `src={...}` in the same Image block.
 */
import fs from "node:fs";
import path from "node:path";

const CWD = process.cwd();
const ROOTS = ["app", "components"].map((r) => path.join(CWD, r));
const SKIP_DIR = new Set(["node_modules", ".git", ".next"]);

function isGifImageBlock(lines, unoptimizedIndex) {
  const window = lines.slice(Math.max(0, unoptimizedIndex - 25), unoptimizedIndex + 12).join("\n");
  if (window.includes("src={imgEricaAnderson1}")) return true;
  if (window.includes("src={FIGMA_ASSETS.imgEricaAnderson1}")) return true;
  if (window.includes("src={FIGMA_ASSETS.img1}")) return true;
  return false;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "unoptimized") {
      if (isGifImageBlock(lines, i)) {
        out.push(line);
      }
      continue;
    }
    out.push(line);
  }
  const next = out.join("\n");
  if (next !== content) {
    fs.writeFileSync(filePath, next, "utf8");
    console.log("updated:", path.relative(CWD, filePath));
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const base = path.basename(dir);
  if (SKIP_DIR.has(base)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full);
    else if (name.endsWith(".tsx") && !name.includes(".full.")) processFile(full);
  }
}

for (const root of ROOTS) walk(root);
