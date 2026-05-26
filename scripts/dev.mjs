import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const DEFAULT_DEV_PORT = "3000";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

config({ path: path.join(rootDir, ".env.local") });
config({ path: path.join(rootDir, ".env") });

const port = resolveDevPortFromAppUrl(process.env.APP_URL);
const useWebpack = process.argv.includes("--webpack");
const nextBin = path.join(rootDir, "node_modules", "next", "dist", "bin", "next");
const args = [nextBin, "dev", "-p", port];

if (useWebpack) {
  args.push("--webpack");
}

const result = spawnSync(process.execPath, args, {
  cwd: rootDir,
  env: process.env,
  stdio: "inherit",
});

process.exit(result.status ?? 1);

/**
 * Dev server port is taken from APP_URL (e.g. http://localhost:3001 → 3001).
 */
function resolveDevPortFromAppUrl(appUrlRaw) {
  const appUrl = appUrlRaw?.trim();
  if (!appUrl) {
    return DEFAULT_DEV_PORT;
  }

  try {
    const url = new URL(appUrl);
    if (url.port) {
      return url.port;
    }

    const host = url.hostname.toLowerCase();
    if (host === "localhost" || host === "127.0.0.1") {
      return DEFAULT_DEV_PORT;
    }
  } catch {
    return DEFAULT_DEV_PORT;
  }

  return DEFAULT_DEV_PORT;
}
