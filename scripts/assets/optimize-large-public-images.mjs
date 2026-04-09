/**
 * Downscale / recompress `.webp` files in `public/` over MAX_BYTES (default 300KB).
 * Overwrites in place. Skips non-webp, SVG, fonts, GIF.
 *
 * Usage: node scripts/assets/optimize-large-public-images.mjs
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const MAX_BYTES = 300 * 1024;
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 72;

async function walkWebp(dir, out) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walkWebp(full, out);
    } else if (e.isFile() && e.name.toLowerCase().endsWith(".webp")) {
      out.push(full);
    }
  }
}

async function optimizeWebp(filePath) {
  const st = await fs.stat(filePath);
  if (st.size <= MAX_BYTES) return null;

  const buf = await fs.readFile(filePath);
  let pipeline = sharp(buf).rotate();
  const meta = await pipeline.metadata();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const tmpPath = `${filePath}.tmp`;
  await pipeline.webp({ quality: WEBP_QUALITY, effort: 5, alphaQuality: 85 }).toFile(tmpPath);
  const newSt = await fs.stat(tmpPath);
  await fs.rename(tmpPath, filePath);

  return {
    file: path.relative(PROJECT_ROOT, filePath),
    before: st.size,
    after: newSt.size,
  };
}

async function main() {
  const files = [];
  await walkWebp(PUBLIC_DIR, files);

  const results = [];
  for (const f of files) {
    try {
      const r = await optimizeWebp(f);
      if (r) {
        results.push(r);
        console.log(`OK ${r.file}: ${(r.before / 1024).toFixed(1)} KB → ${(r.after / 1024).toFixed(1)} KB`);
      }
    } catch (err) {
      console.warn(`Skip ${path.relative(PROJECT_ROOT, f)}:`, err.message ?? err);
    }
  }

  const totalBefore = results.reduce((s, r) => s + r.before, 0);
  const totalAfter = results.reduce((s, r) => s + r.after, 0);
  console.log(`\nWebP files optimized: ${results.length}`);
  if (results.length) {
    console.log(`Total: ${(totalBefore / 1024).toFixed(1)} KB → ${(totalAfter / 1024).toFixed(1)} KB`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
