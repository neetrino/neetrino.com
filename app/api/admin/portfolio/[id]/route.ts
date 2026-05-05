import { NextResponse } from "next/server";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import { deletePortfolioItemWithSlotCompaction } from "@/lib/server/portfolio/delete-portfolio-item";
import { revalidatePortfolioCaches } from "@/lib/server/portfolio/revalidate-public-portfolio";
import { getBlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";
import { deletePortfolioMediaFromR2 } from "@/lib/server/storage/delete-portfolio-media-from-r2";

export const runtime = "nodejs";

type OkJson = { success: true };
type ErrJson = { success: false; error: string };

type RouteContext = { params: Promise<{ id: string }> };

export async function DELETE(
  _request: Request,
  context: RouteContext,
): Promise<NextResponse<OkJson | ErrJson>> {
  try {
    await requireAdminApiSession();
  } catch (error: unknown) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    throw error;
  }

  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ success: false, error: "Missing id." }, { status: 400 });
  }

  let storageKey: string;
  try {
    const result = await deletePortfolioItemWithSlotCompaction(id);
    if (!result) {
      return NextResponse.json({ success: false, error: "Item not found." }, { status: 404 });
    }
    storageKey = result.storageKey;
  } catch (error: unknown) {
    console.error("[portfolio-delete] failed", error);
    return NextResponse.json(
      { success: false, error: "Could not delete portfolio item." },
      { status: 500 },
    );
  }

  const config = getBlogCoverR2Config();
  if (config) {
    try {
      await deletePortfolioMediaFromR2(config, storageKey);
    } catch (error: unknown) {
      console.error("[portfolio-delete] R2 cleanup failed after DB delete", error);
    }
  }

  revalidatePortfolioCaches();
  return NextResponse.json({ success: true });
}
