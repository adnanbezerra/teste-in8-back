import jwt from 'jsonwebtoken';
import { LoginInfo, NewUser } from '../types/UserTypes';
import bcrypt from 'bcrypt';
import { conflictError, unauthorizedError } from '../utils/errorUtils';
import { Users } from '@prisma/client';
import { userRepository } from '../repositories/UserRepository';

import { SECRET_KEY, EXPIRATION } from '../utils/jwt';

async function createNewAccount(newUser: NewUser): Promise<void> {
  await checkNewEmailAvailability(newUser);

  const payload: NewUser = {
    email: newUser.email,
    password: bcrypt.hashSync(newUser.password, 10),
    username: newUser.username,
  };

  await userRepository.createNewAccount(payload);
}

async function loginToUser(loginInfo: LoginInfo): Promise<string> {
  const user = await userRepository.getUserFromDatabase(loginInfo);
  verifyLoginPassword(loginInfo, user);

  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: EXPIRATION,
  });

  return token;
}

// auxiliary functions

async function checkNewEmailAvailability(newLogin: NewUser) {
  const user = await userRepository.getUserFromDatabase(newLogin);

  if (user) throw conflictError('Email already in use!');
}

function verifyLoginPassword(
  newLogin: LoginInfo,
  userFromDatabase: Users,
): void {
  const verify = bcrypt.compareSync(
    newLogin.password,
    userFromDatabase.password,
  );

  if (!verify) throw unauthorizedError('Wrong email or password!');
}

export const userService = {
  createNewAccount,
  loginToUser,
};
