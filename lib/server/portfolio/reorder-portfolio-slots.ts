import "server-only";
import { randomBytes } from "node:crypto";
import type { Prisma } from "@/lib/generated/prisma/client";
import { slotFromIndex } from "@/lib/portfolio/portfolio-slot";
import { getPrisma } from "@/lib/server/db";

const TMP_SLOT_TOKEN_BYTES = 12;

/**
 * Two-phase slot reassignment inside a transaction to satisfy unique `slot`.
 * Step A: temporary unique slots. Step B: `grid_*` from visual order index.
 */
export async function reassignPortfolioSlotsTwoPhase(
  tx: Prisma.TransactionClient,
  orderedIds: readonly string[],
): Promise<void> {
  if (orderedIds.length === 0) {
    return;
  }
  const uniqueIds = [...new Set(orderedIds)];
  if (uniqueIds.length !== orderedIds.length) {
    throw new Error("reassignPortfolioSlotsTwoPhase: duplicate ids.");
  }

  const tmpToken = randomBytes(TMP_SLOT_TOKEN_BYTES).toString("hex");
  for (let i = 0; i < orderedIds.length; i++) {
    const rowId = orderedIds[i];
    await tx.portfolioItem.update({
      where: { id: rowId },
      data: { slot: `__tmp_slot_${tmpToken}_${rowId}_${i}` },
    });
  }
  for (let i = 0; i < orderedIds.length; i++) {
    await tx.portfolioItem.update({
      where: { id: orderedIds[i] },
      data: { slot: slotFromIndex(i) },
    });
  }
}

/**
 * Reassigns slots from ordered IDs in a single transaction (two-phase to satisfy unique `slot`).
 */
export async function recalculateSlotsByOrderedIds(orderedIds: readonly string[]): Promise<void> {
  const prisma = getPrisma();
  const uniqueIds = [...new Set(orderedIds)];
  if (uniqueIds.length !== orderedIds.length) {
    throw new Error("recalculateSlotsByOrderedIds: duplicate ids.");
  }

  const existing = await prisma.portfolioItem.findMany({
    where: { id: { in: uniqueIds } },
    select: { id: true },
  });
  if (existing.length !== uniqueIds.length) {
    throw new Error("recalculateSlotsByOrderedIds: unknown id in list.");
  }

  await prisma.$transaction(async (tx) => {
    await reassignPortfolioSlotsTwoPhase(tx, orderedIds);
  });
}
