import jwt from 'jsonwebtoken';
import { LoginInfo, NewUser } from '../types/UserTypes';
import bcrypt from 'bcrypt';
import { conflictError, unauthorizedError } from '../utils/errorUtils';
import { userRepository } from '../repositories/UserRepository';

import { SECRET_KEY, EXPIRATION } from '../utils/jwt';

class UserService {
  async createNewAccount(newUser: NewUser): Promise<void> {
    const existingUser = await userRepository.getUserFromDatabase(newUser);
    if (existingUser) throw conflictError('Email already in use!');

    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    const payload: NewUser = {
      email: newUser.email,
      password: hashedPassword,
      username: newUser.username,
    };

    await userRepository.createNewAccount(payload);
  }

  async loginToUser(loginInfo: LoginInfo): Promise<string> {
    const user = await userRepository.getUserFromDatabase(loginInfo);
    const verify = bcrypt.compareSync(loginInfo.password, user.password);

    if (!verify) throw unauthorizedError('Wrong email or password!');

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: EXPIRATION,
    });

    return token;
  }
}

export const userService = new UserService();
