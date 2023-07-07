import { Trips, VehicleTypes } from '@prisma/client';
export type tripsCreateData = Trips;

export type tripsEmailCreatedData ={
  id : Number,
  pickUpLatitude:   String,
  pickUpLongitude:   String,
  dropDownLatitude:  String,
  dropDownLongitude: String,
  totalPrice  :      Number,
  pickUpDate :       Date,
  toEmail :          String,
}

type User = {
  id: number;
  name: string;
  lastname: string;
  avatar: string;
}
type VehicleType = VehicleTypes;
type SelectedVehicle = {
  id: number;
  driverID: number;
  vehicleTypeID: number;
  image: string;
  brand: string;
  model: string;
  year: number;
  plates: string;
  isAvailable: boolean;
  isActive: boolean;
  Users: User;
  VehicleTypes: VehicleType;
}

export type CreateTripType = {
  id?: number;
  pickUpLatitude:    string;
  pickUpLongitude:   string;
  dropOffLatitude:  string;
  dropOffLongitude: string;
  pickUpAddress:    string;
  dropOffAddress:   string;
  pickUpDate: string;
  selectedVehicle:  SelectedVehicle;
}

export type CreateTripTypeCalculated = {
  id?: number;
  pickUpLatitude: string;
  pickUpLongitude: string;
  dropOffLatitude: string;
  dropOffLongitude: string;
  pickUpAddress:    string;
  dropOffAddress:   string;
  clientID: number;
  vehicleID: number;
  travelDistance: number;
  totalPrice: number;
  pickUpDate: Date;
  isActive: boolean;
}


