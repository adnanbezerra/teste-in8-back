import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/jwt';
import { NextFunction, Request, Response } from 'express';
import { unauthorizedError } from '../utils/errorUtils';

export async function ValidateToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) {
      throw unauthorizedError('No token!');
    }

    const data: any = jwt.verify(token, JWT_SECRET);

    if (data) {
      res.locals.id = data.id;
      next();
    } else {
      throw unauthorizedError('Invalid token!');
    }
  } catch (error) {
    throw unauthorizedError('Invalid token!');
  }
}
