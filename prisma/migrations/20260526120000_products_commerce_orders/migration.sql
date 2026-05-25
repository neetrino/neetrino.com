-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('ONE_TIME', 'PERMANENT');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SOLD');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'AMD',
    "type" "ProductType" NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'ACTIVE',
    "secretSlug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_secretSlug_key" ON "Product"("secretSlug");

-- CreateIndex
CREATE INDEX "Product_status_idx" ON "Product"("status");

-- CreateIndex
CREATE INDEX "Product_type_idx" ON "Product"("type");

-- CreateIndex
CREATE INDEX "Product_secretSlug_idx" ON "Product"("secretSlug");

-- Clear legacy invoice-only orders before schema change (skip if tables not created yet)
DO $$
BEGIN
  IF to_regclass('public."Payment"') IS NOT NULL THEN
    DELETE FROM "Payment";
  END IF;

  IF to_regclass('public."Order"') IS NOT NULL THEN
    DELETE FROM "Order";
  END IF;
END $$;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN IF EXISTS "description";

ALTER TABLE "Order" ADD COLUMN "productId" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Order" ADD COLUMN "productName" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Order" ADD COLUMN "paidAt" TIMESTAMP(3);
ALTER TABLE "Order" ADD COLUMN "failedAt" TIMESTAMP(3);
ALTER TABLE "Order" ADD COLUMN "cancelledAt" TIMESTAMP(3);

-- Remove placeholder defaults (no rows after delete)
ALTER TABLE "Order" ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "productName" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "Order_productId_idx" ON "Order"("productId");

-- CreateIndex
CREATE INDEX "Order_orderNumber_idx" ON "Order"("orderNumber");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
