import { promises as fs } from "node:fs";
import path from "node:path";

const PROJECT_ROOT = process.cwd();
const OUTPUT_DIR = path.join(PROJECT_ROOT, "public", "figma-assets");
const FIGMA_ASSET_REGEX = /https:\/\/www\.figma\.com\/api\/mcp\/asset\/([a-f0-9-]+)/g;

const IGNORED_DIRS = new Set([".git", ".next", "node_modules", ".cursor", "public"]);

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

const CONTENT_TYPE_EXTENSION = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "image/avif": "avif",
};

async function walkTextFiles(dirPath, result) {
  const dirEntries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of dirEntries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) {
        await walkTextFiles(fullPath, result);
      }
      continue;
    }

    if (entry.isFile()) {
      const extension = path.extname(entry.name).toLowerCase();
      if (TEXT_FILE_EXTENSIONS.has(extension)) {
        result.push(fullPath);
      }
    }
  }
}

function detectExtension(contentTypeHeader) {
  if (!contentTypeHeader) return "bin";
  const contentType = contentTypeHeader.split(";")[0].trim().toLowerCase();
  return CONTENT_TYPE_EXTENSION[contentType] ?? "bin";
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const textFiles = [];
  await walkTextFiles(PROJECT_ROOT, textFiles);

  const fileContents = new Map();
  const uniqueUrls = new Set();

  for (const filePath of textFiles) {
    const content = await fs.readFile(filePath, "utf8");
    fileContents.set(filePath, content);

    for (const match of content.matchAll(FIGMA_ASSET_REGEX)) {
      uniqueUrls.add(match[0]);
    }
  }

  if (uniqueUrls.size === 0) {
    console.log("No Figma asset URLs found.");
    return;
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const urlToLocalPath = new Map();
  let downloadedCount = 0;

  for (const url of uniqueUrls) {
    const idMatch = url.match(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/([a-f0-9-]+)/);

    if (!idMatch) continue;
    const assetId = idMatch[1];

    let response;
    try {
      response = await fetch(url, {
        headers: { "User-Agent": "neetrino-localizer/1.0" },
      });
    } catch (error) {
      console.warn(`Failed to fetch ${url}: ${String(error)}`);
      continue;
    }

    if (!response.ok) {
      console.warn(`Failed to fetch ${url}: HTTP ${response.status}`);
      continue;
    }

    const extension = detectExtension(response.headers.get("content-type"));
    const fileName = `${assetId}.${extension}`;
    const outputFilePath = path.join(OUTPUT_DIR, fileName);
    const localPathForCode = `/figma-assets/${fileName}`;

    if (!(await fileExists(outputFilePath))) {
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.writeFile(outputFilePath, buffer);
      downloadedCount += 1;
      console.log(`Downloaded: ${localPathForCode}`);
    } else {
      console.log(`Already exists: ${localPathForCode}`);
    }

    urlToLocalPath.set(url, localPathForCode);
  }

  let updatedFiles = 0;

  for (const [filePath, originalContent] of fileContents.entries()) {
    let updatedContent = originalContent;

    for (const [url, localPathForCode] of urlToLocalPath.entries()) {
      updatedContent = updatedContent.split(url).join(localPathForCode);
    }

    if (updatedContent !== originalContent) {
      await fs.writeFile(filePath, updatedContent, "utf8");
      updatedFiles += 1;
      console.log(`Rewrote: ${path.relative(PROJECT_ROOT, filePath)}`);
    }
  }

  console.log("");
  console.log(`Unique Figma URLs found: ${uniqueUrls.size}`);
  console.log(`Assets downloaded now: ${downloadedCount}`);
  console.log(`Files updated: ${updatedFiles}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
