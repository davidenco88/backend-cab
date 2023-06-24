import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('test users.controller', () => {
  describe('test controller createUserHandler', () => {
    test('should create a user', async () => {});
  });
});
