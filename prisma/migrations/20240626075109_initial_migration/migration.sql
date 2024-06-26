-- CreateTable
CREATE TABLE "products_table" (
    "productId" TEXT NOT NULL,
    "productThumbnail" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" DECIMAL(65,30) NOT NULL,
    "onOffer" BOOLEAN NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("productId")
);
