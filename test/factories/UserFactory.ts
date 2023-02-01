import supertest from 'supertest';
import server from '../../src';
const connection = supertest(server);

export function createUser() {
  const createAccount = {
    email: 'adnan@gmail.com',
    password: 'lelelele',
    username: 'Adena',
  };

  return createAccount;
}

export async function getValidToken() {
  const payload = createUser();
  const login = { email: payload.email, password: payload.password };

  await connection.post('/sign-up').send(payload);
  const result = await connection.post('/sign-in').send(login);

  return result.text;
}
