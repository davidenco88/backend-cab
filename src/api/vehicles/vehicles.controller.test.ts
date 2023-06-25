import supertest from 'supertest';
import app from '../../app'

const request = supertest(app);

//The tests are made with the data made by the seeder

describe('Vehicles controller /api/vehicles', () => {

  describe('GET /', () => {
    test('should return a 200 response', async  () => {
      //Arrange]
      const status = 200;
      //Act
      const response = await request.get('/api/vehicles');
      //Assert
      expect(response.status).toBe(status);
    });

    // test('should return a certain data', async () => {
    //   //Arrange
    //   const data = [
    //     {
    //         "id": 1,
    //         "driverID": 3,
    //         "vehicleTypeID": 1,
    //         "name": "Vehiculo generico 1",
    //         "plates": "1235486",
    //         "isAvailable": true,
    //         "isActive": true
    //     },
    //     {
    //         "id": 2,
    //         "driverID": 3,
    //         "vehicleTypeID": 2,
    //         "name": "Vehiculo generico 2",
    //         "plates": "987456",
    //         "isAvailable": true,
    //         "isActive": true
    //     },
    //     {
    //         "id": 3,
    //         "driverID": 3,
    //         "vehicleTypeID": 3,
    //         "name": "Vehiculo generico 3",
    //         "plates": "192846",
    //         "isAvailable": true,
    //         "isActive": true
    //     }
    // ]
    //   //Act
    //   const response = await request.get('/api/vehicles');
    //   //Assert
    //   expect(response.body).toEqual(data);
    // });

  });

  describe('PATCH /:id', () => {
    test('Should update a vehicle to be unavailable', async () => {
      //Arrange
      const expectedData = {
        id: 1,
        driverID: 3,
        vehicleTypeID: 1,
        name: "Vehiculo generico 1",
        plates: "1235486",
        isAvailable: false,
        isActive: true
      }
      const status = 200;
      const dataBody = {
        isAvailable: false,
      }
      const id = 1;
      //Act
      const response = await request.patch(`/api/vehicles/${id}`).send(dataBody);
      //Assert
      expect(response.status).toBe(status);
      expect(response.body).toEqual(expectedData)
    })
  })

  describe('GET /actives' , () => {
    test('Every vehicle returned SHOULD have property isAvailable as true', async () => {
      //Arrange
      const status = 200;
      //Act
      const response = await request.get(`/api/vehicles/actives`);
      //Assert
      expect(response.status).toBe(status);
      expect(response.body.every((vehicle: { isAvailable: boolean }) => vehicle.isAvailable === true)).toBe(true)
    });
  });

  describe('PATCH as DELETE /delete/:id', () => {
    test('should set vehicle isActive and isAvailable to false', async () => {
      //Arrange
      const id = 2;
      const valuesExpected = {
        isAvailable: false,
        isActive: false
      }
      //Act
      const response = await request.patch(`/api/vehicles/delete/${id}`);
      //Assert
      expect(response.body).toEqual(expect.objectContaining(valuesExpected));
    });
  });
});
