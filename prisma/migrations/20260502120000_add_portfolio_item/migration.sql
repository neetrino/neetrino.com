-- CreateTable
CREATE TABLE "PortfolioItem" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "mediaType" TEXT NOT NULL,
    "slot" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PortfolioItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioItem_key_key" ON "PortfolioItem"("key");

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioItem_slot_key" ON "PortfolioItem"("slot");

-- CreateIndex
CREATE INDEX "PortfolioItem_active_idx" ON "PortfolioItem"("active");

-- CreateIndex
CREATE INDEX "PortfolioItem_slot_idx" ON "PortfolioItem"("slot");
