import { cartRepository } from '../repositories/CartRepository';
import { NewCartTransaction } from '../types/CartTypes';

async function insertIntoCart(payload: NewCartTransaction) {
  const { productId, productProvider, userId } = payload;

  await cartRepository.editCart(productId, productProvider, userId);
}

export const cartServices = {
  insertIntoCart,
};
