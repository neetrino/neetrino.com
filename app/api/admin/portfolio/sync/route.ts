import { NextResponse } from "next/server";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import { PORTFOLIO_UPLOAD_R2_PREFIX } from "@/lib/constants/portfolio-upload.constants";
import { buildPortfolioPublicUrl } from "@/lib/portfolio/build-portfolio-public-url";
import { getMediaTypeFromFileName } from "@/lib/portfolio/portfolio-media-type";
import { getNextPortfolioSlot } from "@/lib/portfolio/portfolio-slot";
import { getBlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";
import { listPortfolioUploadsFromR2 } from "@/lib/server/storage/list-portfolio-uploads-from-r2";
import { getAllPortfolioItemsForAdmin } from "@/lib/server/portfolio/queries";
import { revalidatePortfolioCaches } from "@/lib/server/portfolio/revalidate-public-portfolio";
import { getPrisma } from "@/lib/server/db";

export const runtime = "nodejs";

type OkJson = { success: true; imported: number };
type ErrJson = { success: false; error: string };

function fileNameFromKey(key: string): string {
  return key.replace(/\\/g, "/").split("/").pop() ?? key;
}

export async function POST(): Promise<NextResponse<OkJson | ErrJson>> {
  try {
    await requireAdminApiSession();
  } catch (error: unknown) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    throw error;
  }

  const config = getBlogCoverR2Config();
  if (!config) {
    return NextResponse.json(
      {
        success: false,
        error:
          "R2 is not configured. Set R2_ACCOUNT_ID (or CF_ACCOUNT_ID), R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME, and R2_PUBLIC_URL.",
      },
      { status: 503 },
    );
  }

  const prisma = getPrisma();
  const existingKeys = new Set(
    (await prisma.portfolioItem.findMany({ select: { key: true } })).map((r) => r.key),
  );

  const allKeys: string[] = [];
  let token: string | undefined;
  do {
    const page = await listPortfolioUploadsFromR2(config, token);
    allKeys.push(...page.keys);
    token = page.isTruncated ? page.nextContinuationToken : undefined;
  } while (token);

  let imported = 0;
  for (const key of allKeys) {
    if (!key.startsWith(PORTFOLIO_UPLOAD_R2_PREFIX)) {
      continue;
    }
    if (existingKeys.has(key)) {
      continue;
    }

    const fileName = fileNameFromKey(key);
    const mediaType = getMediaTypeFromFileName(fileName);
    const rows = await getAllPortfolioItemsForAdmin();
    const slot = getNextPortfolioSlot(rows);

    await prisma.portfolioItem.create({
      data: {
        key,
        url: buildPortfolioPublicUrl(key),
        fileName,
        mediaType,
        slot,
        active: true,
      },
    });
    existingKeys.add(key);
    imported += 1;
  }

  revalidatePortfolioCaches();
  return NextResponse.json({ success: true, imported });
}
