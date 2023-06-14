import { PrismaClient } from "@prisma/client";
import { vehicleTypesCreateData } from './vehicleTypes.type';

const prisma = new PrismaClient();

export async function createVehicleType(data: vehicleTypesCreateData
) {
  const vehicleType = await prisma.vehicleTypes.create({
    data
  })

  return vehicleType;

}

export async function getAllVehicleTypes() {
  const vehicleTypes = await prisma.vehicleTypes.findMany();
  return vehicleTypes;
}

export async function getVehicleTypeById(id: number) {
  const vehicleType = await prisma.vehicleTypes.findUnique({
    where: {
      id,
    }
  })
  return vehicleType;
}

export async function deleteVehicleType(id: number) {
  const updateVehicleType = await prisma.vehicleTypes.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  })
  return updateVehicleType;
}

export async function updateVehicleType(
  id: number,
  data: vehicleTypesCreateData
  ) {

  const updatevehicleType = await prisma.vehicleTypes.update({
    where: {
      id,
    },
    data
  })
  return updatevehicleType;
}
