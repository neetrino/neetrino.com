import { config } from "dotenv";
import { defineConfig } from "prisma/config";

config({ path: [".env.local", ".env"] });

/** Valid URL for `prisma generate` only; no DB connection. Set `DATABASE_URL` for migrate/seed/runtime. */
const PRISMA_GENERATE_PLACEHOLDER_DATABASE_URL =
  "postgresql://prisma_generate_placeholder:prisma_generate_placeholder@127.0.0.1:5432/prisma_generate_placeholder";

const databaseUrl = process.env.DATABASE_URL ?? PRISMA_GENERATE_PLACEHOLDER_DATABASE_URL;

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: databaseUrl,
  },
});
