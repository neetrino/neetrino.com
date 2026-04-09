/**
 * Downloads Figma MCP asset-server URLs (localhost:3845/assets/…), converts every
 * raster and SVG to WebP under `public/about-us-figma/`, and rewrites referenced files.
 *
 * Requires the local asset server (same as Figma MCP) — default http://127.0.0.1:3845
 *
 * Usage:
 *   node scripts/assets/localize-about-us-mcp-assets.mjs
 *   $env:FIGMA_ASSET_BASE="http://127.0.0.1:3845"; node scripts/assets/localize-about-us-mcp-assets.mjs
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const BASE_URL = (process.env.FIGMA_ASSET_BASE ?? "http://127.0.0.1:3845").replace(/\/$/, "");
const OUT_DIR = path.join(PROJECT_ROOT, "public", "about-us-figma");
const PUBLIC_PREFIX = "/about-us-figma";

const INPUT_FILES = [
  path.join(PROJECT_ROOT, "lib", "about-us-figma-asset-urls.ts"),
  path.join(PROJECT_ROOT, "docs", "reference", "figma-exports", "get-design-context-node-335-905-RAW.tsx"),
];

const MCP_ASSET_RE =
  /https?:\/\/(?:localhost|127\.0\.0\.1):3845\/assets\/([a-f0-9]+)\.(png|svg|jpe?g)/gi;

const WEBP_OPTIONS = {
  quality: 82,
  effort: 4,
  alphaQuality: 90,
};

/** SVG rasterization DPI — balance sharpness vs file size for decorative assets. */
const SVG_DENSITY = 144;

async function fetchAsset(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "neetrino-about-us-localizer/1.0" },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

/**
 * @param {Buffer} buffer
 * @param {string} ext
 * @returns {Promise<Buffer>}
 */
async function bufferToWebp(buffer, ext) {
  const e = ext.toLowerCase();
  if (e === "svg") {
    return sharp(buffer, {
      density: SVG_DENSITY,
      limitInputPixels: false,
    })
      .webp(WEBP_OPTIONS)
      .toBuffer();
  }
  return sharp(buffer).webp(WEBP_OPTIONS).toBuffer();
}

async function main() {
  const urlToHash = new Map();
  for (const filePath of INPUT_FILES) {
    let content;
    try {
      content = await fs.readFile(filePath, "utf8");
    } catch {
      console.warn("Skip (missing):", filePath);
      continue;
    }
    let match;
    const re = new RegExp(MCP_ASSET_RE.source, "gi");
    while ((match = re.exec(content)) !== null) {
      const hash = match[1];
      const ext = match[2].toLowerCase();
      const fullUrl = `${BASE_URL}/assets/${hash}.${ext}`;
      urlToHash.set(fullUrl, { hash, ext });
    }
  }

  if (urlToHash.size === 0) {
    console.log("No localhost:3845 asset URLs found in input files.");
    return;
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  let ok = 0;
  let failed = 0;

  for (const [url, { hash, ext }] of urlToHash.entries()) {
    const outPath = path.join(OUT_DIR, `${hash}.webp`);
    const publicPath = `${PUBLIC_PREFIX}/${hash}.webp`;

    try {
      const raw = await fetchAsset(url);
      const webp = await bufferToWebp(raw, ext);
      await fs.writeFile(outPath, webp);
      console.log("OK:", publicPath, `(${ext} → webp)`);
      ok += 1;
    } catch (error) {
      console.error("FAIL:", url, String(error));
      failed += 1;
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} asset(s) failed — fix server/network and re-run.`);
    process.exit(1);
  }

  for (const filePath of INPUT_FILES) {
    let content;
    try {
      content = await fs.readFile(filePath, "utf8");
    } catch {
      continue;
    }
    let updated = content;
    const re = new RegExp(MCP_ASSET_RE.source, "gi");
    updated = updated.replace(re, (_full, h) => `${PUBLIC_PREFIX}/${h}.webp`);

    if (updated !== content) {
      await fs.writeFile(filePath, updated, "utf8");
      console.log("Rewrote:", path.relative(PROJECT_ROOT, filePath));
    }
  }

  console.log(`\nDone: ${ok} WebP file(s) in ${PUBLIC_PREFIX}/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
