import { PrismaClient } from "@prisma/client";
import { vehiclesCreateData , createVehicle } from './vehicles.type';

const prisma = new PrismaClient();

export async function createVehicle(data: createVehicle
) {
  const vehicle = await prisma.vehicles.create({
    data
  })

  return vehicle;

}

export async function getAllVehicles() {
  const vehicles = await prisma.vehicles.findMany();
  return vehicles;
}
export async function getAllVehiclesStatus() {

  const vehiclesByStatus = await prisma.vehicles.findMany({
    include: {
      Users:true,
      VehicleTypes: {
        include: {
          ServiceType: true
        }
      }
    }
  })
  return vehiclesByStatus;
}
export async function getVehicleById(id: number) {
  const vehicle = await prisma.vehicles.findUnique({
    where: {
      id,
    }
  })
  return vehicle;
}

export async function deleteVehicle(id: number) {
  const updateVehicle = await prisma.vehicles.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  })
  return updateVehicle;
}

export async function updateVehicle(
  id: number,
  data: vehiclesCreateData
  ) {

  const updatevehicle = await prisma.vehicles.update({
    where: {
      id,
    },
    data
  })
  return updatevehicle;
}
