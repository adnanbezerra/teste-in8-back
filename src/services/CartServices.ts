import { cartRepository } from '../repositories/CartRepository';
import { NewCartTransaction } from '../types/CartTypes';

async function insertIntoCart(payload: NewCartTransaction) {
  const { productId, productProvider, userId } = payload;

  const isThereUnboughtCart = await cartRepository.getUnboughtCart(userId);

  if (isThereUnboughtCart) {
    await cartRepository.editCart(productId, productProvider, userId);
  } else {
    await cartRepository.createUnboughtCart(productId, productProvider, userId);
  }
}

async function buyCart(userId: number) {
  await cartRepository.buyCart(userId);
}

async function getBoughtCarts(userId: number) {
  return await cartRepository.getBoughtCarts(userId);
}

async function getUnboughtCart(userId: number) {
  return await cartRepository.getUnboughtCart(userId);
}

export const cartServices = {
  insertIntoCart,
  buyCart,
  getBoughtCarts,
  getUnboughtCart,
};
