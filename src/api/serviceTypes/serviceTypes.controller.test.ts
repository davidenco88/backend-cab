import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('serviceTypes controller', () => {
  describe('GET /api/serviceTypes', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200;
      const response = [
        {
        id: 1,
        vehicleTypesId: 1,
        feeBase: 120,
        isActive: true
      },
      {
        id: 2,
        vehicleTypesId: 2,
        feeBase: 150,
        isActive: true
      },
      {
        id: 3,
        vehicleTypesId: 3,
        feeBase: 80,
        isActive: true
      }
      ];

      // Act
      const res = await request.get('/api/serviceTypes');

      // Assert
      expect(res.status).toBe(statusCode);
      expect(res.body).toEqual(response);
    });
  });
});


describe('Service types getserviceTypeById test', () => {
  describe('GET /api/serviceTypes/:id', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200;
      //const taskId = 1;
      const requestBody = {
        id:1
      }
      const expected =  {
        id: 1,
        vehicleTypesId: 1,
        feeBase: 120,
        isActive: true
    };
       const requestBody2 = {
        id:2
      }

       const expected2 = {
        id: 2,
        vehicleTypesId: 2,
        feeBase: 150,
        isActive: true
    };
      const requestBody3 = {
        id:3
      }
      const expected3 = {
        id: 3,
        vehicleTypesId: 3,
        feeBase: 80,
        isActive: true
    };

      // Act
      const res  = await request.get('/api/serviceTypes/1').send(requestBody);

      const res2 = await request.get('/api/serviceTypes/2').send(requestBody2);
      const res3 = await request.get('/api/serviceTypes/3').send(requestBody3);
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

describe('serviceTypes updateServiceTypesHandler test', () => {
  describe('Patch /api/serviceTypes/:id', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200;

      const expected =  {
        id: 1,
        vehicleTypesId: 1,
        feeBase: 120,
        isActive: true
    };

       const expected2 = {
        id: 2,
        vehicleTypesId: 2,
        feeBase: 150,
        isActive: true
    };

      const expected3 = {
        id: 3,
        vehicleTypesId: 3,
        feeBase: 80,
        isActive: true
    };

      // Act
      const res  = await request.patch('/api/serviceTypes/1').send(expected);

      const res2 = await request.patch('/api/serviceTypes/2').send(expected2);
      const res3 = await request.patch('/api/serviceTypes/3').send(expected3);
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
