import { PrismaClient } from '@prisma/client';
import { vehiclesCreateData, createVehicle } from './vehicles.type';

const prisma = new PrismaClient();

export async function createVehicle(data: vehiclesCreateData) {
  const vehicle = await prisma.vehicles.create({
    data,
  });

  return vehicle;
}

export async function getAllVehicles() {
  const vehicles = await prisma.vehicles.findMany();
  return vehicles;
}
export async function getAllAvailableVehicles() {
  const vehiclesByStatus = await prisma.vehicles.findMany({
    where: {
      isAvailable: true,
    },
    include: {
      Users: {
        select: {
          id: true,
          name: true,
          lastname: true,
          avatar: true,
          email: true,
        }
      },
      VehicleTypes: true,
    },
  });
  return vehiclesByStatus;
}
export async function getVehicleById(id: number) {
  const vehicle = await prisma.vehicles.findUnique({
    where: {
      id,
    },
  });
  return vehicle;
}

export async function getVehiclesByDriver(driverID: number) {
  const vehicles = await prisma.vehicles.findMany({
    where: {
      driverID,
    },
    include: {
      VehicleTypes: true,
    }
  });
  return vehicles;
}

export async function deleteVehicle(id: number) {
  const deletedVehicle = await prisma.vehicles.update({
    where: {
      id,
    },
    data: {
      isActive: false,
      isAvailable: false,
    },
  });
  return deletedVehicle;
}

export async function updateVehicle(id: number, data: vehiclesCreateData) {
  const updatevehicle = await prisma.vehicles.update({
    where: {
      id,
    },
    data,
  });
  return updatevehicle;
}

export async function updateVehicleAvailavibility(id: number, isAvailable: boolean) {
  console.log(id);
  const deletedVehicle = await prisma.vehicles.update({
    where: {
      id,
    },
    data: {
      isAvailable,
    },
  });
  return deletedVehicle;
}
