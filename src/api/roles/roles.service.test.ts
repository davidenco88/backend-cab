import supertest from "supertest";
import {getAllRol, getRolById} from "./roles.service"
import { app } from "../../app" ;

const request = supertest(app);

describe('Task Service', () => {
  describe('getAllRol', () => {
    test('should return an instance of array', () => {
      // Arrange
      const expected = Array;

      // Act
      const result = getAllRol();

      // Assert
      expect(result).toBeInstanceOf(expected);
    });

    test('should return an array of tasks', () => {
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
      const result = getAllRol();

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
    test('should return and one task object', () => {
      // Arrange
      const taskId = 1;
      const expected = {
        id: 1,
        name: "Admin",
        isActive: true
      };

      // Act
      const result = getRolById(taskId);

      // Assert
      expect(result).not.toBeNull();
      expect(result).toEqual(expected);
    });

    test('should return null if task is not found', () => {
      // Arrange
      const taskId = 999;
      const expected = null;

      // Act
      const result = getRolById(taskId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });
  });
});
