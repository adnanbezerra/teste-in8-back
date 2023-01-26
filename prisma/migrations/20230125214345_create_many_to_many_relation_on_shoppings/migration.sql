-- CreateTable
CREATE TABLE "ProductsOnShoppings" (
    "productId" INTEGER NOT NULL,
    "shoppingId" INTEGER NOT NULL,

    CONSTRAINT "ProductsOnShoppings_pkey" PRIMARY KEY ("productId","shoppingId")
);

-- AddForeignKey
ALTER TABLE "ProductsOnShoppings" ADD CONSTRAINT "ProductsOnShoppings_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnShoppings" ADD CONSTRAINT "ProductsOnShoppings_shoppingId_fkey" FOREIGN KEY ("shoppingId") REFERENCES "Shoppings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
