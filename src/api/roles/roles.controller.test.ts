import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('Useres controller', () => {
  describe('GET /api/roles', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200;
      const response = [
        {
          id: 1,
          name: 'Admin',
          isActive: true,
        },
        {
          id: 2,
          name: 'Client',
          isActive: true,
        },
        {
          id: 3,
          name: 'Driver',
          isActive: true,
        },
      ];

      // Act
      const res = await request.get('/api/roles');

      // Assert
      expect(res.status).toBe(statusCode);
      expect(res.body).toEqual(response);
    });
  });
});
