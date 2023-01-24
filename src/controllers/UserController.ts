import { Request, Response } from 'express';
import { userService } from '../services/UserService';
import { LoginInfo, NewUser } from '../types/UserTypes';

export async function postSignIn(req: Request, res: Response) {
  const newAccountInfo: LoginInfo = req.body;

  const token = await userService.loginToUser(newAccountInfo);

  res.status(200).send(token);
}

export async function postSignUp(req: Request, res: Response) {
  const loginInfo: NewUser = req.body;

  await userService.createNewAccount(loginInfo);

  res.sendStatus(201);
}
