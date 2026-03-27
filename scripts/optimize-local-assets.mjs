import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const ASSET_DIR = path.join(PROJECT_ROOT, "public", "figma-assets");
const RASTER_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const TEXT_FILE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".css",
  ".md",
]);
const IGNORED_DIRS = new Set([".git", ".next", "node_modules", ".cursor", "public"]);

function toPosixPath(value) {
  return value.replaceAll("\\", "/");
}

async function listFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isFile()) files.push(path.join(dirPath, entry.name));
  }
  return files;
}

async function collectTextFiles(dirPath, output) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) {
        await collectTextFiles(fullPath, output);
      }
      continue;
    }
    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (TEXT_FILE_EXTENSIONS.has(ext)) {
        output.push(fullPath);
      }
    }
  }
}

async function optimizeRaster(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!RASTER_EXTENSIONS.has(ext)) return null;

  const sourceBuffer = await fs.readFile(filePath);
  const webpBuffer = await sharp(sourceBuffer)
    .webp({
      quality: 78,
      effort: 6,
      alphaQuality: 80,
    })
    .toBuffer();

  if (webpBuffer.length >= sourceBuffer.length) {
    return null;
  }

  const baseName = filePath.slice(0, -ext.length);
  const webpPath = `${baseName}.webp`;
  await fs.writeFile(webpPath, webpBuffer);

  return {
    originalPath: filePath,
    optimizedPath: webpPath,
    originalSize: sourceBuffer.length,
    optimizedSize: webpBuffer.length,
  };
}

async function rewriteReferences(replacements) {
  if (replacements.length === 0) return 0;

  const textFiles = [];
  await collectTextFiles(PROJECT_ROOT, textFiles);
  const replaceMap = new Map();

  for (const item of replacements) {
    const from = `/${toPosixPath(path.relative(path.join(PROJECT_ROOT, "public"), item.originalPath))}`;
    const to = `/${toPosixPath(path.relative(path.join(PROJECT_ROOT, "public"), item.optimizedPath))}`;
    replaceMap.set(from, to);
  }

  let updatedFiles = 0;

  for (const filePath of textFiles) {
    const originalContent = await fs.readFile(filePath, "utf8");
    let updatedContent = originalContent;

    for (const [from, to] of replaceMap.entries()) {
      updatedContent = updatedContent.split(from).join(to);
    }

    if (updatedContent !== originalContent) {
      await fs.writeFile(filePath, updatedContent, "utf8");
      updatedFiles += 1;
    }
  }

  return updatedFiles;
}

async function main() {
  const files = await listFiles(ASSET_DIR);
  const replacements = [];

  for (const filePath of files) {
    const result = await optimizeRaster(filePath);
    if (result) replacements.push(result);
  }

  const updatedFiles = await rewriteReferences(replacements);

  let deletedOriginals = 0;
  for (const item of replacements) {
    try {
      await fs.unlink(item.originalPath);
      deletedOriginals += 1;
    } catch {
      // keep going if file is already missing
    }
  }

  const bytesBefore = replacements.reduce((sum, item) => sum + item.originalSize, 0);
  const bytesAfter = replacements.reduce((sum, item) => sum + item.optimizedSize, 0);
  const bytesSaved = bytesBefore - bytesAfter;

  console.log(`Optimized assets: ${replacements.length}`);
  console.log(`Deleted originals: ${deletedOriginals}`);
  console.log(`Files with rewritten paths: ${updatedFiles}`);
  console.log(`Bytes before: ${bytesBefore}`);
  console.log(`Bytes after : ${bytesAfter}`);
  console.log(`Bytes saved : ${bytesSaved}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
