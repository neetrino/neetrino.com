/**
 * Copies currently visible portfolio card objects in R2 to `portfolio/upload/`
 * and updates (or creates) `PortfolioItem` rows. Does not delete sources.
 *
 * Usage:
 *   pnpm portfolio:migrate-upload-prefix -- --dry-run
 *   pnpm portfolio:migrate-upload-prefix
 */
import path from "node:path";
import { config } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { CopyObjectCommand, HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { PrismaClient, type PortfolioItem } from "../../lib/generated/prisma/client";
import { withPgSslLibpqCompatFlag } from "../../lib/postgres-connection-string";
import {
  PORTFOLIO_DECOR_R2_PREFIX,
  PORTFOLIO_UPLOAD_R2_PREFIX,
} from "../../lib/constants/portfolio-upload.constants";
import { buildPortfolioPublicUrl } from "../../lib/portfolio/build-portfolio-public-url";
import { getFallbackPublicPortfolioCards } from "../../lib/portfolio/fallback-public-portfolio-items";
import { getMediaTypeFromFileName } from "../../lib/portfolio/portfolio-media-type";
import { getNextPortfolioSlot, sortPortfolioItemsBySlot } from "../../lib/portfolio/portfolio-slot";

config({ path: [".env.local", ".env"] });

const ALLOWED_EXT = new Set([".png", ".webp", ".jpg", ".jpeg", ".gif"]);
const VIDEO_OR_VECTOR_EXT = /\.(mp4|webm|mov|svg)$/i;

type R2MigrationConfig = {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucketName: string;
};

function trimEnv(value: string | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

function loadR2Config(): R2MigrationConfig {
  const accountId = trimEnv(process.env.R2_ACCOUNT_ID) || trimEnv(process.env.CF_ACCOUNT_ID);
  const accessKeyId = trimEnv(process.env.R2_ACCESS_KEY_ID);
  const secretAccessKey = trimEnv(process.env.R2_SECRET_ACCESS_KEY);
  const bucketName = trimEnv(process.env.R2_BUCKET_NAME);
  if (!accountId || !accessKeyId || !secretAccessKey || !bucketName) {
    throw new Error(
      "R2_ACCOUNT_ID (or CF_ACCOUNT_ID), R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME are required.",
    );
  }
  return { accountId, accessKeyId, secretAccessKey, bucketName };
}

function getDatabaseUrl(): string {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required.");
  }
  return withPgSslLibpqCompatFlag(databaseUrl);
}

function buildS3Client(cfg: R2MigrationConfig): S3Client {
  return new S3Client({
    region: "auto",
    endpoint: `https://${cfg.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: cfg.accessKeyId,
      secretAccessKey: cfg.secretAccessKey,
    },
  });
}

function awsCopySourceHeader(bucket: string, key: string): string {
  return `${bucket}/${key.split("/").map(encodeURIComponent).join("/")}`;
}

function isS3NotFound(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }
  const name = "name" in error ? String((error as { name?: string }).name) : "";
  if (name === "NotFound" || name === "NoSuchKey") {
    return true;
  }
  const meta = (error as { $metadata?: { httpStatusCode?: number } }).$metadata;
  return meta?.httpStatusCode === 404;
}

async function headExists(client: S3Client, bucket: string, key: string): Promise<boolean> {
  try {
    await client.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
    return true;
  } catch (e) {
    if (isS3NotFound(e)) {
      return false;
    }
    throw e;
  }
}

function classifySourceKey(sourceKey: string): { ok: true } | { ok: false; reason: string } {
  if (sourceKey.startsWith(PORTFOLIO_UPLOAD_R2_PREFIX)) {
    return { ok: false, reason: "already_under_portfolio_upload" };
  }
  if (sourceKey.startsWith(PORTFOLIO_DECOR_R2_PREFIX)) {
    return { ok: false, reason: "decor_prefix" };
  }
  if (sourceKey.toLowerCase().startsWith("blog/")) {
    return { ok: false, reason: "blog_prefix" };
  }
  if (VIDEO_OR_VECTOR_EXT.test(sourceKey)) {
    return { ok: false, reason: "video_or_vector_extension" };
  }
  const base = sourceKey.split("/").pop() ?? sourceKey;
  const ext = path.extname(base).toLowerCase();
  if (!ALLOWED_EXT.has(ext)) {
    return { ok: false, reason: `unsupported_extension:${ext || "(none)"}` };
  }
  return { ok: true };
}

function initialDestFileName(sourceKey: string): string {
  const base = sourceKey.split("/").pop() ?? sourceKey;
  const ext = path.extname(base);
  const stem = path.basename(base, ext);
  const safeStem = stem.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "card";
  return `${safeStem}${ext.toLowerCase()}`;
}

async function allocateDestKey(
  client: S3Client,
  bucket: string,
  sourceKey: string,
  isDbKeyTaken: (objectKey: string) => boolean,
): Promise<string> {
  const initial = initialDestFileName(sourceKey);
  let candidate = `${PORTFOLIO_UPLOAD_R2_PREFIX}${initial}`;
  let n = 0;
  while ((await headExists(client, bucket, candidate)) || isDbKeyTaken(candidate)) {
    n += 1;
    const ext = path.extname(initial);
    const stem = path.basename(initial, ext);
    candidate = `${PORTFOLIO_UPLOAD_R2_PREFIX}${stem}-m${n}${ext}`;
    if (n > 500) {
      throw new Error(`Too many key collisions for source ${sourceKey}`);
    }
  }
  return candidate;
}

type WorkDb = { mode: "db"; row: PortfolioItem };
type WorkFallback = { mode: "fallback"; slot: string; key: string };
type WorkItem = WorkDb | WorkFallback;

async function buildWorkList(prisma: PrismaClient): Promise<WorkItem[]> {
  const active = await prisma.portfolioItem.findMany({ where: { active: true } });
  const sorted = sortPortfolioItemsBySlot(active);
  if (sorted.length > 0) {
    return sorted.map((row) => ({ mode: "db", row }));
  }
  return getFallbackPublicPortfolioCards().map((c) => ({
    mode: "fallback",
    slot: c.slot,
    key: c.key,
  }));
}

function parseDryRun(): boolean {
  return process.argv.includes("--dry-run");
}

async function main(): Promise<void> {
  const dryRun = parseDryRun();
  const r2 = loadR2Config();
  const client = buildS3Client(r2);
  const bucket = r2.bucketName;

  const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });
  const prisma = new PrismaClient({ adapter });

  const work = await buildWorkList(prisma);
  const allRows = await prisma.portfolioItem.findMany({ select: { id: true, key: true } });

  process.stdout.write(
    `${dryRun ? "[dry-run]" : "[execute]"} work items: ${work.length} bucket=${bucket}\n`,
  );

  let copied = 0;
  let skipped = 0;
  let updated = 0;
  let created = 0;
  /** Simulates appended slots during dry-run fallback creates (DB unchanged). */
  const dryRunSimulatedSlots: { slot: string }[] = [];

  for (const item of work) {
    const sourceKey = item.mode === "db" ? item.row.key : item.key;
    const rowId = item.mode === "db" ? item.row.id : null;
    const slot = item.mode === "db" ? item.row.slot : item.slot;

    const classification = classifySourceKey(sourceKey);
    if (!classification.ok) {
      process.stdout.write(
        JSON.stringify({
          sourceKey,
          rowId,
          slot,
          action: "skip",
          reason: classification.reason,
          sourceExists: null,
          targetKey: null,
          targetExists: null,
          db: "none",
        }) + "\n",
      );
      skipped += 1;
      continue;
    }

    const sourceExists = await headExists(client, bucket, sourceKey);
    if (!sourceExists) {
      process.stdout.write(
        JSON.stringify({
          sourceKey,
          rowId,
          slot,
          action: "skip",
          reason: "source_missing_in_r2",
          sourceExists: false,
          targetKey: null,
          targetExistsInR2: null,
          db: item.mode === "db" ? "would_update" : "would_create",
        }) + "\n",
      );
      skipped += 1;
      continue;
    }

    const isDbKeyTaken = (objectKey: string): boolean =>
      allRows.some((r) => r.key === objectKey && r.id !== rowId);

    const targetKey = await allocateDestKey(client, bucket, sourceKey, isDbKeyTaken);
    const destFileName = targetKey.slice(PORTFOLIO_UPLOAD_R2_PREFIX.length);
    const newUrl = buildPortfolioPublicUrl(targetKey);
    const mediaType = getMediaTypeFromFileName(destFileName);

    const dbAction: "update" | "create" = item.mode === "db" ? "update" : "create";

    const dbSlotRows = await prisma.portfolioItem.findMany({ select: { slot: true } });
    const resolvedSlot =
      item.mode === "db"
        ? item.row.slot
        : getNextPortfolioSlot(dryRun ? [...dbSlotRows, ...dryRunSimulatedSlots] : dbSlotRows);

    process.stdout.write(
      JSON.stringify({
        sourceKey,
        rowId,
        slot: item.mode === "db" ? slot : { fallbackOrderSlot: slot, resolvedSlot },
        action: dryRun ? "would_copy_and_db" : "copy_and_db",
        targetKey,
        sourceExists: true,
        targetExistsInR2: false,
        targetExistsInDbOtherRow: false,
        db: dbAction,
        newUrl,
        mediaType,
      }) + "\n",
    );

    if (dryRun) {
      if (dbAction === "update") {
        updated += 1;
      } else {
        created += 1;
        dryRunSimulatedSlots.push({ slot: resolvedSlot });
      }
      continue;
    }

    await client.send(
      new CopyObjectCommand({
        Bucket: bucket,
        Key: targetKey,
        CopySource: awsCopySourceHeader(bucket, sourceKey),
        MetadataDirective: "COPY",
      }),
    );
    copied += 1;

    if (item.mode === "db") {
      await prisma.portfolioItem.update({
        where: { id: item.row.id },
        data: {
          key: targetKey,
          url: newUrl,
          fileName: destFileName,
          mediaType,
          active: true,
        },
      });
      updated += 1;
      const idx = allRows.findIndex((r) => r.id === item.row.id);
      if (idx >= 0) {
        allRows[idx] = { id: item.row.id, key: targetKey };
      }
    } else {
      await prisma.portfolioItem.create({
        data: {
          key: targetKey,
          url: newUrl,
          fileName: destFileName,
          mediaType,
          slot: resolvedSlot,
          active: true,
        },
      });
      created += 1;
      const newRow = await prisma.portfolioItem.findFirst({
        where: { key: targetKey },
        select: { id: true, key: true },
      });
      if (newRow) {
        allRows.push(newRow);
      }
    }
  }

  await prisma.$disconnect();

  process.stdout.write(
    JSON.stringify({
      summary: true,
      dryRun,
      copied,
      skipped,
      dbUpdated: updated,
      dbCreated: created,
    }) + "\n",
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
