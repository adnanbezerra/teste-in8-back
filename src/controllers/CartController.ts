import { Request, Response } from 'express';
import { cartServices } from '../services/CartServices';

export async function insertIntoCart(req: Request, res: Response) {
  const payload = {
    productId: req.body.productId,
    productProvider: req.body.provider,
    userId: res.locals.id,
  };

  await cartServices.insertIntoCart(payload);

  res.sendStatus(201);
}
