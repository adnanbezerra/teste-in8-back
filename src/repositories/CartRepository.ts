import { client } from '../database/prisma';

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

async function deleteCart(userId: number) {
  return client.cart.delete({ where: { userId } });
}

export const cartRepository = {
  editCart,
  deleteCart,
};
