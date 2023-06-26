import supertest from "supertest";
import {getAllServiceTypes, getServiceTypeById} from "./serviceTypes.service"
import  app  from "../../app" ;

const request = supertest(app);

describe('Task Service', () => {
  describe('getAllServiceTypes', () => {
    test('should return an instance of array',async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await getAllServiceTypes();

      // Assert
      expect((result)).toBeInstanceOf(expected);
    });

    test('should return an array of Vehicle types',async () => {
      // Arrange
      const expected =[
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
      const result = await getAllServiceTypes();

      // Assert
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            feeBase: expect.any(Number),
            vehicleTypesId: expect.any(Number),
            isActive: expect.any(Boolean),
          }),
        ]),
      );
    });
  });

  describe('getServiceTypeById', () => {
    test('should return and one task object', async () => {
      // Arrange
      const taskId = 1;
      const expected = {
        id: 1,
        vehicleTypesId: 1,
        feeBase: 120,
        isActive: true
      };

      // Act
      const result =await getServiceTypeById(taskId);

      // Assert
      expect(result).not.toBeNull();
      expect(result).toEqual(expected);
    });

    test('should return null if task is not found',async () => {
      // Arrange
      const taskId = 999;
      const expected = null;

      // Act
      const result =await getServiceTypeById(taskId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });
  });
});
