import supertest from "supertest";
import {getAllRol, getRolById} from "./roles.service"
import  app  from "../../app" ;

const request = supertest(app);

describe('Task Service', () => {
  describe('getAllRol', () => {
    test('should return an instance of array',async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await getAllRol();

      // Assert
      expect((result)).toBeInstanceOf(expected);
    });

    test('should return an array of Roles',async () => {
      // Arrange
      const expected = [
        {
            id: 1,
            name: "Admin",
            isActive: true
        },
        {
            id: 2,
            name: "Client",
            isActive: true
        },
        {
            id: 3,
            name: "Driver",
            isActive: true
        }
    ];

      // Act
      const result = await getAllRol();

      // Assert
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            isActive: expect.any(Boolean),
          }),
        ]),
      );
    });
  });

  describe('getRolById', () => {
    test('should return and one task object', async () => {
      // Arrange
      const taskId = 1;
      const expected = {
        id: 1,
        name: "Admin",
        isActive: true
      };

      // Act
      const result =await getRolById(taskId);

      // Assert
      expect(result).not.toBeNull();
      expect(result).toEqual(expected);
    });

    test('should return null if task is not found',async () => {
      // Arrange
      const taskId = 999;
      const expected = null;

      // Act
      const result =await getRolById(taskId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });
  });
});
