/**
 * Shared helpers for R2 media upload (no AWS imports).
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const REPO_ROOT = path.resolve(__dirname, "..", "..");

export const MEDIA_EXT = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
  ".avif",
  ".ico",
]);

export const SCAN_ROOTS = ["public", "app", "components", "src"];

/** @type {Record<string, string>} */
export const EXT_TO_CONTENT_TYPE = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
};

export function shouldSkipDir(fullPath) {
  const n = fullPath.replace(/\\/g, "/");
  return (
    n.includes("/node_modules/") ||
    n.includes("/.next/") ||
    n.includes("/out/") ||
    n.includes("/rules-template/")
  );
}

/** @param {string} relPosix */
export function localRelativeToObjectKey(relPosix) {
  if (relPosix.startsWith("public/")) {
    return relPosix.slice("public/".length);
  }
  return relPosix;
}

export function toPosix(p) {
  return p.split(path.sep).join("/");
}

/** @param {string} repoRoot */
export function discoverMediaFiles(repoRoot) {
  /** @type {string[]} */
  const absFiles = [];

  function walk(dir) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (shouldSkipDir(full)) continue;
      if (e.isDirectory()) {
        walk(full);
      } else if (MEDIA_EXT.has(path.extname(e.name).toLowerCase())) {
        absFiles.push(full);
      }
    }
  }

  for (const r of SCAN_ROOTS) {
    const root = path.join(repoRoot, r);
    if (fs.existsSync(root)) walk(root);
  }

  absFiles.sort();
  return absFiles;
}

/** @param {string} repoRoot */
export function buildUploadRows(repoRoot) {
  const absFiles = discoverMediaFiles(repoRoot);
  return absFiles.map((abs) => {
    const rel = toPosix(path.relative(repoRoot, abs));
    const key = localRelativeToObjectKey(rel);
    return { abs, rel, key };
  });
}

/** @param {string} absPath */
export function contentTypeForFile(absPath) {
  const ext = path.extname(absPath).toLowerCase();
  return EXT_TO_CONTENT_TYPE[ext] ?? "application/octet-stream";
}

/**
 * @param {string} absPath
 * @returns {Promise<string>}
 */
export async function sha256File(absPath) {
  const hash = createHash("sha256");
  await pipeline(fs.createReadStream(absPath), hash);
  return hash.digest("hex");
}

/** @param {string[]} argv */
export function parseArgs(argv) {
  /** @type {{ dryRun: boolean; force: boolean; configPath: string | null; help?: boolean; cfAccountId?: string; r2AccessKeyId?: string; r2SecretAccessKey?: string; r2BucketName?: string; r2PublicUrl?: string }} */
  const o = {
    dryRun: false,
    force: false,
    configPath: null,
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") o.help = true;
    else if (a === "--dry-run") o.dryRun = true;
    else if (a === "--force") o.force = true;
    else if (a === "--config") o.configPath = argv[++i] ?? null;
    else if (a === "--cf-account-id") o.cfAccountId = argv[++i];
    else if (a === "--r2-access-key-id") o.r2AccessKeyId = argv[++i];
    else if (a === "--r2-secret-access-key") o.r2SecretAccessKey = argv[++i];
    else if (a === "--r2-bucket-name") o.r2BucketName = argv[++i];
    else if (a === "--r2-public-url") o.r2PublicUrl = argv[++i];
    else if (a.startsWith("-")) {
      throw new Error(`Unknown flag: ${a}`);
    }
  }
  return o;
}

/**
 * @param {string} configPath
 * @param {string} repoRoot
 * @returns {Record<string, string>}
 */
export function readConfigFile(configPath, repoRoot) {
  const resolved = path.isAbsolute(configPath)
    ? configPath
    : path.join(repoRoot, configPath);
  let raw;
  try {
    raw = fs.readFileSync(resolved, "utf8");
  } catch (e) {
    const hint = e instanceof Error ? e.message : String(e);
    throw new Error(`Cannot read config file: ${resolved} (${hint})`);
  }
  if (!raw.trim()) {
    throw new Error(
      `Config file is empty or whitespace-only: ${resolved}. Save valid JSON, then retry.`,
    );
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    throw new Error(
      `Invalid JSON in config file: ${resolved} (${msg}). Check trailing commas, quotes, and that the file is fully saved.`,
    );
  }
}

export function mergeCredentials(cli, fileJson) {
  const f = fileJson ?? {};
  return {
    cfAccountId: cli.cfAccountId ?? f.cfAccountId,
    r2AccessKeyId: cli.r2AccessKeyId ?? f.r2AccessKeyId,
    r2SecretAccessKey: cli.r2SecretAccessKey ?? f.r2SecretAccessKey,
    r2BucketName: cli.r2BucketName ?? f.r2BucketName,
    r2PublicUrl: cli.r2PublicUrl ?? f.r2PublicUrl,
  };
}

export function requireCredential(name, value) {
  if (!value || String(value).trim() === "") {
    throw new Error(`Missing required value: ${name}`);
  }
}

export function normalizePublicBase(url) {
  return String(url).replace(/\/+$/, "");
}

export function printHelp() {
  console.log(`R2 asset upload (no .env)

Flags:
  --dry-run              Scan only; print summary (no network)
  --force                Upload even if remote object matches SHA-256
  --config <path>        JSON with cfAccountId, r2AccessKeyId, r2SecretAccessKey, r2BucketName, r2PublicUrl
  --cf-account-id <id>
  --r2-access-key-id <id>
  --r2-secret-access-key <secret>   (avoid shell history; prefer --config)
  --r2-bucket-name <name>
  --r2-public-url <url>             Base URL for report links (no trailing slash required)

Secrets are never printed. Add r2-upload-config.local.json to .gitignore and pass --config.
`);
}

export function sanitizeErrorMessage(msg) {
  let s = String(msg);
  for (const re of [/secret[_-]?access[_-]?key[=:\s]\S+/gi, /AKIA[0-9A-Z]{16}/g]) {
    s = s.replace(re, "[redacted]");
  }
  return s;
}
