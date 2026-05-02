/**
 * Keep one `PortfolioItem` by `slot`; delete all others from the DB.
 * Compacts the survivor to `grid_1_left` (dense slot model).
 * Deletes R2 objects for removed rows when key starts with `portfolio/upload/`.
 *
 * Usage:
 *   pnpm portfolio:keep-only-slot -- --dry-run
 *   pnpm portfolio:keep-only-slot
 *   pnpm portfolio:keep-only-slot -- grid_3_left
 */
import path from "node:path";
import { randomBytes } from "node:crypto";
import { config } from "dotenv";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../lib/generated/prisma/client";
import { PORTFOLIO_UPLOAD_R2_PREFIX } from "../../lib/constants/portfolio-upload.constants";
import { slotFromIndex } from "../../lib/portfolio/portfolio-slot";
import { withPgSslLibpqCompatFlag } from "../../lib/postgres-connection-string";

config({ path: [path.join(process.cwd(), ".env.local"), path.join(process.cwd(), ".env")] });

const DEFAULT_KEEP_SLOT = "grid_4_right";

type R2Config = {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucketName: string;
};

function trimEnv(value: string | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

function loadR2Config(): R2Config | null {
  const accountId = trimEnv(process.env.R2_ACCOUNT_ID) || trimEnv(process.env.CF_ACCOUNT_ID);
  const accessKeyId = trimEnv(process.env.R2_ACCESS_KEY_ID);
  const secretAccessKey = trimEnv(process.env.R2_SECRET_ACCESS_KEY);
  const bucketName = trimEnv(process.env.R2_BUCKET_NAME);
  if (!accountId || !accessKeyId || !secretAccessKey || !bucketName) {
    return null;
  }
  return { accountId, accessKeyId, secretAccessKey, bucketName };
}

function buildR2S3Client(r2: R2Config): S3Client {
  return new S3Client({
    region: "auto",
    endpoint: `https://${r2.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: r2.accessKeyId,
      secretAccessKey: r2.secretAccessKey,
    },
    requestChecksumCalculation: "WHEN_REQUIRED",
    responseChecksumValidation: "WHEN_REQUIRED",
  });
}

async function deleteUploadPrefixFromR2(r2: R2Config, objectKey: string): Promise<void> {
  if (!objectKey.startsWith(PORTFOLIO_UPLOAD_R2_PREFIX)) {
    return;
  }
  const client = buildR2S3Client(r2);
  await client.send(
    new DeleteObjectCommand({
      Bucket: r2.bucketName,
      Key: objectKey,
    }),
  );
}

function createPrisma(): PrismaClient {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required.");
  }
  const connectionString = withPgSslLibpqCompatFlag(databaseUrl);
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const positional = process.argv.slice(2).filter((a) => a !== "--dry-run" && !a.startsWith("--"));
  const keepSlot = positional[0] ?? DEFAULT_KEEP_SLOT;

  const prisma = createPrisma();
  try {
    const keeper = await prisma.portfolioItem.findUnique({ where: { slot: keepSlot } });
    if (!keeper) {
      console.error(`[keep-only-slot] No PortfolioItem with slot="${keepSlot}".`);
      process.exit(1);
    }

    const victims = await prisma.portfolioItem.findMany({
      where: { id: { not: keeper.id } },
      select: { id: true, slot: true, key: true, fileName: true },
    });

    console.log(
      JSON.stringify(
        {
          keepSlot,
          keeper: { id: keeper.id, slot: keeper.slot, key: keeper.key, active: keeper.active },
          victimCount: victims.length,
          dryRun,
        },
        null,
        2,
      ),
    );

    if (dryRun) {
      console.log("[keep-only-slot] dry-run; no changes.");
      return;
    }

    const victimKeys = victims.map((v) => v.key);
    const tmpToken = randomBytes(12).toString("hex");

    await prisma.$transaction(async (tx) => {
      if (victims.length > 0) {
        await tx.portfolioItem.deleteMany({
          where: { id: { in: victims.map((v) => v.id) } },
        });
      }
      await tx.portfolioItem.update({
        where: { id: keeper.id },
        data: { slot: `__tmp_slot_${tmpToken}_${keeper.id}_0`, active: true },
      });
      await tx.portfolioItem.update({
        where: { id: keeper.id },
        data: { slot: slotFromIndex(0), active: true },
      });
    });

    const r2 = loadR2Config();
    if (r2) {
      for (const objectKey of victimKeys) {
        await deleteUploadPrefixFromR2(r2, objectKey).catch((err: unknown) => {
          console.error("[keep-only-slot] R2 delete failed for key", objectKey, err);
        });
      }
    } else {
      console.warn("[keep-only-slot] R2 not configured; skipped R2 deletes for removed rows.");
    }

    const after = await prisma.portfolioItem.findUnique({
      where: { id: keeper.id },
      select: { id: true, slot: true, key: true, active: true, fileName: true },
    });
    console.log("[keep-only-slot] OK. Remaining row:", JSON.stringify(after, null, 2));
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e: unknown) => {
  console.error(e);
  process.exit(1);
});
