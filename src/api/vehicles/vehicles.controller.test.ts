import supertest from 'supertest';
import app from '../../app'

const request = supertest(app);

describe('Vehicles controller', () => {

  describe('GET /api/vehicles', () => {
    test('should return a 200 response', async  () => {
      //Arrange]
      const status = 200;
      //Act
      const response = await request.get('/api/vehicles');
      //Assert
      expect(response.status).toBe(status);
    });
  });
  test('should return a certain data', async () => {
    //Arrange
    const data = [
      {
          "id": 1,
          "driverID": 3,
          "vehicleTypeID": 1,
          "name": "Vehiculo generico 1",
          "plates": "1235486",
          "isAvailable": true,
          "isActive": true
      },
      {
          "id": 2,
          "driverID": 3,
          "vehicleTypeID": 2,
          "name": "Vehiculo generico 2",
          "plates": "987456",
          "isAvailable": true,
          "isActive": true
      },
      {
          "id": 3,
          "driverID": 3,
          "vehicleTypeID": 3,
          "name": "Vehiculo generico 3",
          "plates": "192846",
          "isAvailable": true,
          "isActive": true
      }
  ]
    //Act
    const response = await request.get('/api/vehicles');
    //Assert
    expect(response.body).toEqual(data);
  });
});
