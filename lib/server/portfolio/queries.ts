import "server-only";
import type { PortfolioCardMediaType } from "@/lib/portfolio/portfolio-media-type";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";
import { sortPortfolioItemsBySlot } from "@/lib/portfolio/portfolio-slot";
import { getPrisma } from "@/lib/server/db";
import type { PortfolioItem } from "@/lib/generated/prisma/client";

function storedMediaType(row: PortfolioItem): PortfolioCardMediaType {
  return row.mediaType === "gif" ? "gif" : "image";
}

function toPublicCard(row: PortfolioItem): PublicPortfolioCard {
  return {
    id: row.id,
    key: row.key,
    url: row.url,
    fileName: row.fileName,
    mediaType: storedMediaType(row),
    slot: row.slot,
  };
}

export async function getActivePortfolioItemsSorted(): Promise<PublicPortfolioCard[]> {
  const prisma = getPrisma();
  const rows = await prisma.portfolioItem.findMany({
    where: { active: true },
  });
  return sortPortfolioItemsBySlot(rows).map(toPublicCard);
}

export async function getAllPortfolioItemsForAdmin(): Promise<PortfolioItem[]> {
  const prisma = getPrisma();
  const rows = await prisma.portfolioItem.findMany({});
  return sortPortfolioItemsBySlot(rows);
}
