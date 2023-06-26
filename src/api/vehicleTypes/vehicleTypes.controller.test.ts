import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('Useres controller', () => {
  describe('GET /api/vehicleTypes', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200;
      const response = [
        {
          id: 1,
          name: "Vehiculo epacioso",
          seats: 5,
          luggage: "25 lts",
          isActive: true
      },
      {
          id: 2,
          name: "Vehiculo de lujo",
          seats: 3,
          luggage: "25 lts",
          isActive: true
      },
      {
          id: 3,
          name: "Vehiculo economico",
          seats: 4,
          luggage: "10 lts",
          isActive: true
      }
      ];

      // Act
      const res = await request.get('/api/vehicleTypes');

      // Assert
      expect(res.status).toBe(statusCode);
      expect(res.body).toEqual(response);
    });
  });
});


describe('Roles getRolById test', () => {
  describe('GET /api/vehicleTypes/:id', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200;
      //const taskId = 1;
      const requestBody = {
        id:1
      }
      const expected =  {
        id: 1,
        name: "Vehiculo epacioso",
        seats: 5,
        luggage: "25 lts",
        isActive: true
    };
       const requestBody2 = {
        id:2
      }

       const expected2 = {
        id: 2,
        name: "Vehiculo de lujo",
        seats: 3,
        luggage: "25 lts",
        isActive: true
    };
      const requestBody3 = {
        id:3
      }
      const expected3 = {
        id: 3,
        name: "Vehiculo economico",
        seats: 4,
        luggage: "10 lts",
        isActive: true
    };

      // Act
      const res  = await request.get('/api/vehicleTypes/1').send(requestBody);

      const res2 = await request.get('/api/vehicleTypes/2').send(requestBody2);
      const res3 = await request.get('/api/vehicleTypes/3').send(requestBody3);
      expect(res2.status).toBe(statusCode);
      expect(res2).not.toBeNull();
      expect(res2.body).toEqual(expected2);

      expect(res3.status).toBe(statusCode);
      expect(res3).not.toBeNull();
      expect(res3.body).toEqual(expected3);
      // Assert

      expect(res.status).toBe(statusCode);
      expect(res).not.toBeNull();
      expect(res.body).toEqual(expected);


    });
  });
});

describe('Roles updateRolHandler test', () => {
  describe('Patch /api/vehicleTypes/:id', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200;

      const expected =  {
        id: 1,
        name: "Vehiculo epacioso",
        seats: 5,
        luggage: "25 lts",
        isActive: true
    };

       const expected2 = {
        id: 2,
        name: "Vehiculo de lujo",
        seats: 3,
        luggage: "25 lts",
        isActive: true
    };

      const expected3 = {
        id: 3,
        name: "Vehiculo economico",
        seats: 4,
        luggage: "10 lts",
        isActive: true
    };

      // Act
      const res  = await request.patch('/api/vehicleTypes/1').send(expected);

      const res2 = await request.patch('/api/vehicleTypes/2').send(expected2);
      const res3 = await request.patch('/api/vehicleTypes/3').send(expected3);
      expect(res2.status).toBe(statusCode);
      expect(res2).not.toBeNull();
      expect(res2.body).toEqual(expected2);

      expect(res3.status).toBe(statusCode);
      expect(res3).not.toBeNull();
      expect(res3.body).toEqual(expected3);
      // Assert

      expect(res.status).toBe(statusCode);
      expect(res).not.toBeNull();
      expect(res.body).toEqual(expected);


    });
  });
});
