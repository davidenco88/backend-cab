import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('test users.controller', () => {
  describe('test controller createUserHandler', () => {
    test('should create a user', async () => {
      const requestBody = {
        name: 'Cristian',
        lastname: 'Moreno',
        email: 'cristian@mkir.com',
        avatar: 'empty',
        isActive: false,
        password: '12345',
        rol_id: [2, 3],
      };

      const response = await request
        .post('/api/users')
        .send(requestBody)
        .set('contentType', 'application/json');

      console.log(response.body);
      expect(response.status).toBe(201);
    });
  });
});
