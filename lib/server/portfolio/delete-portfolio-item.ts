import "server-only";
import { sortPortfolioItemsBySlot } from "@/lib/portfolio/portfolio-slot";
import { reassignPortfolioSlotsTwoPhase } from "@/lib/server/portfolio/reorder-portfolio-slots";
import { getPrisma } from "@/lib/server/db";

/**
 * Hard-deletes one portfolio row and compacts `slot` for all remaining rows (no gaps), in one transaction.
 */
export async function deletePortfolioItemWithSlotCompaction(
  itemId: string,
): Promise<{ storageKey: string } | null> {
  const prisma = getPrisma();
  const row = await prisma.portfolioItem.findUnique({ where: { id: itemId } });
  if (!row) {
    return null;
  }

  await prisma.$transaction(async (tx) => {
    await tx.portfolioItem.delete({ where: { id: itemId } });
    const remaining = await tx.portfolioItem.findMany({
      select: { id: true, slot: true },
    });
    const orderedIds = sortPortfolioItemsBySlot(remaining).map((r) => r.id);
    if (orderedIds.length > 0) {
      await reassignPortfolioSlotsTwoPhase(tx, orderedIds);
    }
  });

  return { storageKey: row.key };
}
