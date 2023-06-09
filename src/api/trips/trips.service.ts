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
export async function updateTripStatus(
  id: number,
) {

  const updatetrip = await prisma.trips.update({
    where: {
      id,
    },
    data: {
      tripStateId: 1,
      isActive: true,
    }
  })
  return updatetrip;
}

export async function getTripInfoByDriverId(id: number) {
  const trips = await prisma.trips.findMany({
    where: {
      Vehicles: {
        driverID: id,
      },
      isActive:true,
    },
    include: {
      Vehicles:{
        include: {
          VehicleTypes:true,
        }
      },
      Users: {
        select: {
          name: true,
          lastname: true,
          avatar: true,
          email: true,
        }
      },
      TripState:true,
    },
    orderBy: {
      pickUpDate: 'desc',
    },
  });

  return trips;
}

export async function getTripInfoByClientId(id: number) {
  const trips = await prisma.trips.findMany({
    where: {
      clientID: id,
      isActive: true
    },
    include: {
      TripState:true,
      Vehicles: {
        include: {
        VehicleTypes:true,
          Users: {
            select: {
              name: true,
              lastname: true,
              avatar: true,
              email: true,
            }
          },
        },
      },
    },
    orderBy: {
      pickUpDate: 'desc',
    },
  });
  return trips;
}

export async function updateTripState(
  id: number, state: number
) {

  const updatetrip = await prisma.trips.update({
    where: {
      id,
    },
    data: {
      tripStateId: state,
    }
  })
  return updatetrip;
}
