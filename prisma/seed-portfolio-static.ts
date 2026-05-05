import { config } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { withPgSslLibpqCompatFlag } from "../lib/postgres-connection-string";
import { PrismaClient } from "../lib/generated/prisma/client";
import { getFallbackPublicPortfolioCards } from "../lib/portfolio/fallback-public-portfolio-items";
import { getMediaTypeFromFileName } from "../lib/portfolio/portfolio-media-type";

config({ path: [".env.local", ".env"] });

function getDatabaseUrl(): string {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required to seed portfolio items.");
  }
  return withPgSslLibpqCompatFlag(databaseUrl);
}

async function seedPortfolioStatic(): Promise<void> {
  const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });
  const prisma = new PrismaClient({ adapter });

  const count = await prisma.portfolioItem.count();
  if (count > 0) {
    await prisma.$disconnect();
    return;
  }

  const cards = getFallbackPublicPortfolioCards();
  for (const card of cards) {
    await prisma.portfolioItem.create({
      data: {
        key: card.key,
        url: card.url,
        fileName: card.fileName,
        mediaType: getMediaTypeFromFileName(card.fileName),
        slot: card.slot,
        active: true,
      },
    });
  }

  await prisma.$disconnect();
}

seedPortfolioStatic().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
