import { Router } from 'express';
import {
  buyCart,
  getBoughtCarts,
  getUnboughtCart,
  insertIntoCart,
} from '../controllers/CartController';
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
cartRouter.post('/buy-cart', ValidateToken, buyCart);
cartRouter.get('/bought-carts', ValidateToken, getBoughtCarts);
cartRouter.get('/unbought-cart', ValidateToken, getUnboughtCart);
