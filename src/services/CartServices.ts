import { cartRepository } from '../repositories/CartRepository';
import { NewCartTransaction } from '../types/CartTypes';
import { notFoundError } from '../utils/errorUtils';

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
    const isThereUnboughtCart = await cartRepository.getUnboughtCart(userId);

    if (isThereUnboughtCart) {
      await cartRepository.buyCart(userId);
    } else {
      throw notFoundError('You need to create an unbought cart!');
    }
  }

  async getBoughtCarts(userId: number) {
    return await cartRepository.getBoughtCarts(userId);
  }

  async getUnboughtCart(userId: number) {
    return await cartRepository.getUnboughtCart(userId);
  }
}

export const cartServices = new CartService();
