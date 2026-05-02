import { NextResponse } from "next/server";
import { z } from "zod";
import { AdminUnauthorizedError, requireAdminApiSession } from "@/lib/server/auth/guards";
import { revalidatePortfolioCaches } from "@/lib/server/portfolio/revalidate-public-portfolio";
import { getPrisma } from "@/lib/server/db";

export const runtime = "nodejs";

const bodySchema = z.object({
  active: z.boolean(),
});

type OkJson = { success: true };
type ErrJson = { success: false; error: string };

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(
  request: Request,
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
  try {
    await prisma.portfolioItem.update({
      where: { id },
      data: { active: parsed.data.active },
    });
  } catch {
    return NextResponse.json({ success: false, error: "Item not found." }, { status: 404 });
  }

  revalidatePortfolioCaches();
  return NextResponse.json({ success: true });
}
