/**
 * Recursively converts PNG files under `public/` to WebP (quality 75).
 * Does not delete originals — remove PNGs manually after verifying WebP.
 *
 * Usage:
 *   pnpm run assets:convert-png-webp
 *   node scripts/convert-images.mjs
 *   node scripts/convert-images.mjs ./public/figma-assets
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const WEBP_QUALITY = 75;

/** @param {string} dir */
async function convertPngInDir(dir) {
  let names;
  try {
    names = await fs.readdir(dir);
  } catch {
    console.warn("Skip (missing or unreadable):", dir);
    return;
  }

  for (const name of names) {
    const fullPath = path.join(dir, name);
    const st = await fs.stat(fullPath);
    if (st.isDirectory()) {
      await convertPngInDir(fullPath);
      continue;
    }
    if (!name.toLowerCase().endsWith(".png")) continue;

    const outputPath = fullPath.replace(/\.png$/i, ".webp");
    await sharp(fullPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);
    console.log("Converted:", path.relative(process.cwd(), outputPath));
  }
}

const argDir = process.argv[2];
const root = path.resolve(argDir ?? path.join(__dirname, "../public"));

console.log("Scanning for PNG → WebP:", root);
await convertPngInDir(root);
console.log("Done.");
