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

export async function buyCart(req: Request, res: Response) {
  const userId = res.locals.id;

  await cartServices.buyCart(userId);

  res.sendStatus(204);
}

export async function getUnboughtCart(req: Request, res: Response) {
  const userId = res.locals.id;

  const unboughtCart = await cartServices.getUnboughtCart(userId);

  res.status(200).send(unboughtCart);
}

export async function getBoughtCarts(req: Request, res: Response) {
  const userId = res.locals.id;

  const boughtCarts = await cartServices.getBoughtCarts(userId);

  res.status(200).send(boughtCarts);
}
