import { PROVIDERS } from '@prisma/client';
import { client } from '../database/prisma';

async function editCart(
  userId: number,
  provider: PROVIDERS,
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

async function createUnboughtCart(
  userId: number,
  provider: PROVIDERS,
  idInTheAPI: number,
) {
  return client.cart.create({
    data: {
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

async function buyCart(userId: number) {
  return client.cart.update({
    where: {
      userId,
    },
    data: {
      isBought: true,
    },
  });
}

async function getUnboughtCart(userId: number) {
  return client.cart.findFirst({
    where: {
      userId,
      isBought: false,
    },
    include: {
      ProductsOnCarts: true,
    },
  });
}

async function getBoughtCarts(userId: number) {
  return client.cart.findMany({
    where: {
      userId,
      isBought: true,
    },
    include: {
      ProductsOnCarts: true,
    },
  });
}

export const cartRepository = {
  editCart,
  buyCart,
  getUnboughtCart,
  getBoughtCarts,
  createUnboughtCart,
};
