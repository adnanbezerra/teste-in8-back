import { Router } from 'express';
import { insertIntoCart } from '../controllers/CartController';
import { validateSchema } from '../middlewares/ValidateSchema';
import { ValidateToken } from '../middlewares/ValidateToken';
import { NewCartItemSchema } from '../schemas/NewCartItemSchema';

export const cartRouter = Router();

cartRouter.put(
  '/cart',
  ValidateToken,
  validateSchema(NewCartItemSchema),
  insertIntoCart,
);
