import { NextResponse } from "next/server";
import { z } from "zod";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import { recalculateSlotsByOrderedIds } from "@/lib/server/portfolio/reorder-portfolio-slots";
import { revalidatePortfolioCaches } from "@/lib/server/portfolio/revalidate-public-portfolio";
import { getPrisma } from "@/lib/server/db";

export const runtime = "nodejs";

const bodySchema = z.object({
  orderedIds: z.array(z.string().min(1)).min(1),
});

type OkJson = { success: true };
type ErrJson = { success: false; error: string };

export async function POST(request: Request): Promise<NextResponse<OkJson | ErrJson>> {
  try {
    await requireAdminApiSession();
  } catch (error: unknown) {
    if (error instanceof AdminUnauthorizedError) {
      return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
    }
    throw error;
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const prisma = getPrisma();
  const total = await prisma.portfolioItem.count();
  if (parsed.data.orderedIds.length !== total) {
    return NextResponse.json(
      { success: false, error: "orderedIds must include every portfolio item exactly once." },
      { status: 400 },
    );
  }

  try {
    await recalculateSlotsByOrderedIds(parsed.data.orderedIds);
    revalidatePortfolioCaches();
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Reorder failed.";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
