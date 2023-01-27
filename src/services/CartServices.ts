import { cartRepository } from '../repositories/CartRepository';
import { NewCartTransaction } from '../types/CartTypes';

class CartService {
  async insertIntoCart(payload: NewCartTransaction) {
    const { productId, productProvider, userId } = payload;

    const isThereUnboughtCart = await cartRepository.getUnboughtCart(userId);

    if (isThereUnboughtCart) {
      await cartRepository.editCart(productId, productProvider, userId);
    } else {
      await cartRepository.createUnboughtCart(
        productId,
        productProvider,
        userId,
      );
    }
  }

  async buyCart(userId: number) {
    await cartRepository.buyCart(userId);
  }

  async getBoughtCarts(userId: number) {
    return await cartRepository.getBoughtCarts(userId);
  }

  async getUnboughtCart(userId: number) {
    return await cartRepository.getUnboughtCart(userId);
  }
}

export const cartServices = new CartService();
