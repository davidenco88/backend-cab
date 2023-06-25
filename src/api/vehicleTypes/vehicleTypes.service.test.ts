import supertest from "supertest";
import {getAllVehicleTypes, getVehicleTypeById} from "./vehicleTypes.service"
import  app  from "../../app" ;

const request = supertest(app);

describe('Task Service', () => {
  describe('getAllVehicleTypes', () => {
    test('should return an instance of array',async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await getAllVehicleTypes();

      // Assert
      expect((result)).toBeInstanceOf(expected);
    });

    test('should return an array of Vehicle types',async () => {
      // Arrange
      const expected =[
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
      const result = await getAllVehicleTypes();

      // Assert
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            seats: expect.any(Number),
            luggage: expect.any(String),
            isActive: expect.any(Boolean),
          }),
        ]),
      );
    });
  });

  describe('getVehicleTypeById', () => {
    test('should return and one task object', async () => {
      // Arrange
      const taskId = 1;
      const expected = {
        id: 1,
        name: "Vehiculo epacioso",
        seats: 5,
        luggage: "25 lts",
        isActive: true
      };

      // Act
      const result =await getVehicleTypeById(taskId);

      // Assert
      expect(result).not.toBeNull();
      expect(result).toEqual(expected);
    });

    test('should return null if task is not found',async () => {
      // Arrange
      const taskId = 999;
      const expected = null;

      // Act
      const result =await getVehicleTypeById(taskId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });
  });
});
