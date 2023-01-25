import { client } from '../database/prisma';

async function buyCart() {
  // TODO
}

async function editCart(
  userId: number,
  provider: 'brazilian' | 'european',
  idInTheAPI: number,
) {
  return client.cart.upsert({
    where: {
      userId,
    },
    update: {
      ProductsOnCarts: {
        create: [
          {
            product: {
              create: {
                provider,
                idInTheAPI,
              },
            },
          },
        ],
      },
    },
    create: {
      userId,
      ProductsOnCarts: {
        create: [
          {
            product: {
              create: {
                provider,
                idInTheAPI,
              },
            },
          },
        ],
      },
    },
  });
}

export const cartRepository = {
  buyCart,
  editCart,
};
