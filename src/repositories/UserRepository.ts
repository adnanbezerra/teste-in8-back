import { Users } from '@prisma/client';
import { client } from '../database/prisma';
import { LoginInfo, NewUser } from '../types/UserTypes';

async function createNewAccount(newUser: NewUser) {
  return await client.users.create({ data: newUser });
}

async function getUserFromDatabase(loginInfo: LoginInfo): Promise<Users> {
  return await client.users.findFirst({
    where: { email: loginInfo.email },
  });
}

export const userRepository = {
  createNewAccount,
  getUserFromDatabase,
};
