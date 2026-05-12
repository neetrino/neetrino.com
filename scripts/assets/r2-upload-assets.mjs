/**
 * Upload local image/media assets to Cloudflare R2 (S3-compatible).
 *
 * Does NOT read .env / dotenv. Credentials come from CLI flags or --config JSON only.
 * Never logs secret values.
 *
 * Usage:
 *   pnpm assets:r2-upload -- --dry-run
 *   pnpm assets:r2-upload -- --config ./r2-upload-config.local.json
 */
import fs from "node:fs";
import path from "node:path";
import { HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {
  REPO_ROOT,
  SCAN_ROOTS,
  buildUploadRows,
  contentTypeForFile,
  mergeCredentials,
  normalizePublicBase,
  parseArgs,
  printHelp,
  readConfigFile,
  requireCredential,
  sanitizeErrorMessage,
  sha256File,
  toPosix,
} from "./r2-upload-lib.mjs";

const REPORT_PATH = path.join(REPO_ROOT, "R2_UPLOAD_REPORT.md");

/** Log upload progress every N files (plus final line). */
const UPLOAD_PROGRESS_EVERY = 25;

/**
 * @param {import("@aws-sdk/client-s3").S3Client} client
 * @param {string} bucket
 * @param {string} key
 */
async function headIntegritySha256(client, bucket, key) {
  try {
    const out = await client.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
    const meta = out.Metadata ?? {};
    return meta["integrity-sha256"] ?? null;
  } catch (e) {
    const name = e && typeof e === "object" && "name" in e ? String(e.name) : "";
    const status =
      e && typeof e === "object" && "$metadata" in e
        ? /** @type {{ $metadata?: { httpStatusCode?: number } }} */ (e).$metadata?.httpStatusCode
        : undefined;
    if (name === "NotFound" || name === "NoSuchKey" || status === 404) {
      return null;
    }
    throw e;
  }
}

function buildReportMarkdown(rows, results, uploaded, skipped, failed, generatedAtIso) {
  const md = [];
  md.push("# R2 upload report");
  md.push("");
  md.push(`Generated: ${generatedAtIso}`);
  md.push("");
  md.push("## Summary");
  md.push("");
  md.push(`| Metric | Count |`);
  md.push(`| --- | ---: |`);
  md.push(`| Total scanned | ${rows.length} |`);
  md.push(`| Uploaded | ${uploaded} |`);
  md.push(`| Skipped (unchanged SHA-256) | ${skipped} |`);
  md.push(`| Failed | ${failed} |`);
  md.push("");
  md.push("## Local path → R2 key → public URL");
  md.push("");
  md.push("| Local path | R2 object key | Public URL |");
  md.push("| --- | --- | --- |");
  for (const r of results) {
    const u = r.url.replace(/\|/g, "\\|");
    const detail = r.status === "failed" && r.detail ? ` **(${r.detail})**` : "";
    md.push(`| ${r.rel} | ${r.key} | ${u} |${detail}`);
  }
  md.push("");
  md.push("## Next steps (later migration)");
  md.push("");
  md.push("1. Add `NEXT_PUBLIC_ASSETS_URL` (or similar) pointing at your R2 public base URL.");
  md.push(
    "2. Replace `/…` references under `public/` with `${ASSETS_URL}/…` keys that match the R2 object keys above.",
  );
  md.push("3. For `next/image`, add `images.remotePatterns` for your R2 public hostname.");
  md.push(
    "4. Keep local files until production is verified; then optionally remove binaries from git.",
  );
  md.push("");
  return md.join("\n");
}

async function main() {
  const argv = process.argv;
  const cli = parseArgs(argv);
  if (cli.help) {
    printHelp();
    process.exit(0);
  }

  let fileJson = null;
  if (cli.configPath) {
    fileJson = readConfigFile(cli.configPath, REPO_ROOT);
  }

  const cred = mergeCredentials(cli, fileJson);
  const rows = buildUploadRows(REPO_ROOT);

  console.log(`Found ${rows.length} media files under: ${SCAN_ROOTS.join(", ")}`);

  if (cli.dryRun) {
    console.log("Dry run: no uploads. Mapping examples (local → R2 key):");
    for (const r of rows.slice(0, 8)) {
      console.log(`  ${r.rel} → ${r.key}`);
    }
    if (rows.length > 8) console.log(`  … and ${rows.length - 8} more`);
    process.exit(0);
  }

  requireCredential("cfAccountId", cred.cfAccountId);
  requireCredential("r2AccessKeyId", cred.r2AccessKeyId);
  requireCredential("r2SecretAccessKey", cred.r2SecretAccessKey);
  requireCredential("r2BucketName", cred.r2BucketName);
  requireCredential("r2PublicUrl", cred.r2PublicUrl);

  const endpoint = `https://${cred.cfAccountId}.r2.cloudflarestorage.com`;
  const client = new S3Client({
    region: "auto",
    endpoint,
    credentials: {
      accessKeyId: cred.r2AccessKeyId,
      secretAccessKey: cred.r2SecretAccessKey,
    },
  });

  const publicBase = normalizePublicBase(cred.r2PublicUrl);

  console.log(
    `Starting R2 upload (${rows.length} files): HEAD + SHA-256 + PUT per file; may take several minutes with no other output between progress lines.`,
  );

  /** @type {{ rel: string; key: string; url: string; status: "uploaded"|"skipped"|"failed"; detail?: string }[]} */
  const results = [];
  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < rows.length; i++) {
    const { abs, rel, key } = rows[i];
    const url = `${publicBase}/${key}`;
    try {
      const localSha = await sha256File(abs);
      if (!cli.force) {
        const remoteSha = await headIntegritySha256(client, cred.r2BucketName, key);
        if (remoteSha && remoteSha === localSha) {
          skipped += 1;
          results.push({ rel, key, url, status: "skipped" });
          continue;
        }
      }

      const contentType = contentTypeForFile(abs);
      const contentLength = fs.statSync(abs).size;
      const body = fs.createReadStream(abs);
      await client.send(
        new PutObjectCommand({
          Bucket: cred.r2BucketName,
          Key: key,
          Body: body,
          ContentLength: contentLength,
          ContentType: contentType,
          Metadata: { "integrity-sha256": localSha },
        }),
      );
      uploaded += 1;
      results.push({ rel, key, url, status: "uploaded" });
    } catch (e) {
      failed += 1;
      const msg = e instanceof Error ? e.message : String(e);
      results.push({
        rel,
        key,
        url,
        status: "failed",
        detail: sanitizeErrorMessage(msg),
      });
    }

    const done = i + 1;
    if (done % UPLOAD_PROGRESS_EVERY === 0 || done === rows.length) {
      console.log(
        `Progress: ${done}/${rows.length} (uploaded=${uploaded}, skipped=${skipped}, failed=${failed})`,
      );
    }
  }

  const reportBody = buildReportMarkdown(
    rows,
    results,
    uploaded,
    skipped,
    failed,
    new Date().toISOString(),
  );
  fs.writeFileSync(REPORT_PATH, reportBody, "utf8");
  console.log(`Report written: ${toPosix(path.relative(REPO_ROOT, REPORT_PATH))}`);
  console.log(`Uploaded: ${uploaded}, skipped: ${skipped}, failed: ${failed}`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((e) => {
  const msg = e instanceof Error ? e.message : String(e);
  console.error(sanitizeErrorMessage(msg));
  process.exit(1);
});
