import { PrismaClient } from "@prisma/client";
import { tripStatesCreateData } from './tripStates.type';

const prisma = new PrismaClient();

export async function createTripState(data: tripStatesCreateData
) {
  const tripState = await prisma.tripState.create({
    data
  })

  return tripState;

}

export async function getAlltripStates() {
  const tripStates = await prisma.tripState.findMany();
  return tripStates;
}

export async function getTripStateById(id: number) {
  const tripState = await prisma.tripState.findUnique({
    where: {
      id,
    }
  })
  return tripState;
}

export async function deleteTripState(id: number) {
  const updatetripState = await prisma.tripState.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  })
  return updatetripState;
}

export async function updateTripState(
  id: number,
  data: tripStatesCreateData
  ) {

  const updatetripState = await prisma.tripState.update({
    where: {
      id,
    },
    data
  })
  return updatetripState;
}
