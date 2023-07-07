import { PrismaClient } from "@prisma/client";
import { tripsCreateData, CreateTripTypeCalculated } from './trips.type';

const prisma = new PrismaClient();

export async function createTrip(data: CreateTripTypeCalculated
) {
  const trip = await prisma.trips.create({
    data,
  })

  return trip;

}

export async function getAlltrips() {
  const trips = await prisma.trips.findMany();
  return trips;
}

export async function getTripById(id: number) {
  const trip = await prisma.trips.findUnique({
    where: {
      id,
    }
  })
  return trip;
}

export async function deleteTrip(id: number) {
  const updatetrip = await prisma.trips.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  })
  return updatetrip;
}

export async function updateTrip(
  id: number,
  data: tripsCreateData
  ) {

  const updatetrip = await prisma.trips.update({
    where: {
      id,
    },
    data
  })
  return updatetrip;
}
