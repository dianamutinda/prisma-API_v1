-- CreateTable
CREATE TABLE "products_table" (
    "prodId" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_cost" BIGINT NOT NULL,
    "onoffer" BOOLEAN NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("prodId")
);
