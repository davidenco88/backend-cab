import { PrismaClient } from "@prisma/client";
import { serviceTypesCreateData } from './serviceTypes.type';

const prisma = new PrismaClient();

export async function createServiceType(data: serviceTypesCreateData
) {
  const serviceType = await prisma.serviceType.create({
    data
  })

  return serviceType;

}

export async function getAllServiceTypes() {
  const serviceTypes = await prisma.serviceType.findMany();
  return serviceTypes;
}

export async function getServiceTypeById(id: number) {
  const serviceType = await prisma.serviceType.findUnique({
    where: {
      id,
    }
  })
  return serviceType;
}

export async function deleteServiceType(id: number) {
  const updateserviceType = await prisma.serviceType.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  })
  return updateserviceType;
}

export async function updateServiceType(
  id: number,
  data: serviceTypesCreateData
  ) {

  const updateServiceType = await prisma.serviceType.update({
    where: {
      id,
    },
    data
  })
  return updateServiceType;
}
