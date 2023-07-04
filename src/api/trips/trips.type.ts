import { Trips } from '@prisma/client';

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
