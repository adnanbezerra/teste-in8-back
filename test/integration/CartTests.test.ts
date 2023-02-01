import supertest from 'supertest';
import server from '../../src';
import { client } from '../../src/database/prisma';
import { getValidToken } from '../factories/UserFactory';

beforeEach(async () => {
  await client.$executeRaw`TRUNCATE TABLE "cart" CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
});

const connection = supertest(server);

describe('Cart route tests', () => {
  it('should successfully add an item into a cart', async () => {
    const token = await getValidToken();
    const payload = {
      productId: 1,
      productProvider: 'brazilian',
    };

    const result = await connection
      .put('/cart')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    expect(result.status).toEqual(500);
  });

  it('should not insert an item into a cart (invalid productProvider)', async () => {
    const token = await getValidToken();
    const payload = {
      productId: 1,
      productProvider: 'russian',
    };

    const result = await connection
      .put('/cart')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    expect(result.status).toEqual(500);
  });

  it('should return an empty unbought cart', async () => {
    const token = await getValidToken();

    const result = await connection
      .get('/unbought-cart')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body).toEqual({});
  });

  it('should return an unbought cart with an item', async () => {
    const token = await getValidToken();
    const payload = {
      productId: 1,
      productProvider: 'brazilian',
    };

    await connection
      .put('/cart')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    const result = await connection
      .get('/unbought-cart')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    expect(result.status).toEqual(200);
    expect(result.body).not.toEqual([]);
  });

  it('should return an empty bought cart', async () => {
    const token = await getValidToken();
    const payload = {
      productId: 1,
      productProvider: 'brazilian',
    };

    const result = await connection
      .get('/bought-carts')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    expect(result.body).toEqual([]);
    expect(result.status).toEqual(200);
  });

  it('should not buy a cart, there is no unbought cart in the memory', async () => {
    const token = await getValidToken();

    const result = await connection
      .post('/buy-cart')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
  });

  it('should successfully buy a cart', async () => {
    const token = await getValidToken();
    const payload = {
      productId: 1,
      productProvider: 'brazilian',
    };

    await connection
      .put('/cart')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    const result = await connection
      .post('/buy-cart')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    expect(result.status).toEqual(204);
  });

  it('should return a bought cart with an item', async () => {
    const token = await getValidToken();
    const payload = {
      productId: 1,
      productProvider: 'brazilian',
    };

    await connection
      .put('/cart')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    await connection
      .post('/buy-cart')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    const result = await connection
      .get('/bought-carts')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);

    expect(result.status).toEqual(200);
    expect(result.body).not.toEqual({});
  });
});

afterAll(async () => {
  await client.$disconnect();
});
