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
/*
describe('Roles getRolById test', () => {
  describe('GET /api/roles/:id', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200;
      //const taskId = 1;
      const expected =  {
        id: 1,
        name: "Admin",
        isActive: true
       };
      const expected2 = {
        id: 2,
        name: "Client",
        isActive: true
      };
      const expected3 = {
        id: 3,
        name: "Driver",
        isActive: true
      };

      // Act
      const res  = await request.get('/api/roles/:1');
      const res2 = await request.get('/api/roles/:2');
      const res3 = await request.get('/api/roles/:3');
      // Assert
      expect(res.status).toBe(statusCode);
      expect(res).not.toBeNull();
      expect(res.body).toEqual(expected);

      expect(res2.status).toBe(statusCode);
      expect(res2).not.toBeNull();
      expect(res2.body).toEqual(expected2);

      expect(res3.status).toBe(statusCode);
      expect(res3).not.toBeNull();
      expect(res3.body).toEqual(expected3);
    });
  });
});*/
