import "server-only";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

let productionPrisma: PrismaClient | undefined;

function createPrismaClient(): PrismaClient {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required for database access.");
  }

  const adapter = new PrismaPg({
    connectionString: databaseUrl,
  });

  return new PrismaClient({ adapter });
}

/**
 * Returns a singleton Prisma client. Lazy: no DB env read until first use
 * (so Next.js can analyze routes at build time without `DATABASE_URL`).
 */
export function getPrisma(): PrismaClient {
  if (process.env.NODE_ENV !== "production") {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = createPrismaClient();
    }
    return globalForPrisma.prisma;
  }

  productionPrisma ??= createPrismaClient();
  return productionPrisma;
}
