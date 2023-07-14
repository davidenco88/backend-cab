import { Vehicles } from '@prisma/client';

export type vehiclesCreateData = Vehicles;

export type createVehicle = {

  id?: number;
  driverID: number;
  vehicleTypeID: number;
  name: string;
  plates: string;
  isAvailable?: boolean;
  isActive?: boolean;
}

export type testCreateVehicle = {
    id?: number;
    driverID: number;
    vehicleTypeID: number;
    image: string;
    brand: string;
    model: string;
    year: number;
    plates: string;
    isAvailable: boolean;
    isActive: boolean;
}
