/*
  Warnings:

  - You are about to drop the `ProductsOnShoppings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shoppings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductsOnShoppings" DROP CONSTRAINT "ProductsOnShoppings_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsOnShoppings" DROP CONSTRAINT "ProductsOnShoppings_shoppingId_fkey";

-- DropForeignKey
ALTER TABLE "Shoppings" DROP CONSTRAINT "Shoppings_userId_fkey";

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "isBought" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "ProductsOnShoppings";

-- DropTable
DROP TABLE "Shoppings";
