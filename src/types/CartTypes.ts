import { PROVIDERS } from '@prisma/client';

export type NewCartTransaction = {
  productId: number;
  productProvider: PROVIDERS;
  userId: number;
};
