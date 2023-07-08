import { Request, Response, NextFunction } from 'express';
import {
  createTrip,
  getAlltrips,
  getTripById,
  updateTrip,
  deleteTrip,
} from './trips.service'
import sgMail from '@sendgrid/mail';
import { sendMailSendGrid } from '../../auth/utils/validationMail';
import { CreateTripType, tripsEmailCreatedData, CreateTripTypeCalculated } from './trips.type';

export async function createTripHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const rawData: CreateTripType = req.body;

  // DISTANCE CALCULATION
  function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const radians = Math.PI / 180;
    const dLat = (lat2 - lat1) * radians;
    const dLon = (lon2 - lon1) * radians;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * radians) *
        Math.cos(lat2 * radians) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const calculatedDistance = 6371 * c; // Radio de la Tierra en kilómetros

    return calculatedDistance;
  }
  const lat1 = parseFloat(rawData.pickUpLatitude);
  const lon1 = parseFloat(rawData.pickUpLongitude);
  const lat2 = parseFloat(rawData.dropOffLatitude);
  const lon2 = parseFloat(rawData.dropOffLongitude);
  //distance se entrega en KM
  const distance = calculateDistance(lat1, lon1, lat2, lon2);

  // totalPrice CALCULATION
  const calculatedPrice = rawData.selectedVehicle.VehicleTypes.feeBase * distance;


  const data: CreateTripTypeCalculated = {
    pickUpLatitude: rawData.pickUpLatitude,
    pickUpLongitude: rawData.pickUpLongitude,
    dropOffLatitude: rawData.dropOffLatitude,
    dropOffLongitude: rawData.dropOffLongitude,
    pickUpAddress: rawData.pickUpAddress,
    dropOffAddress: rawData.dropOffAddress,
    clientID: rawData.clientID,
    vehicleID: rawData.selectedVehicle.id,
    travelDistance: distance,
    totalPrice: calculatedPrice,
    pickUpDate: new Date(rawData.pickUpDate),
    isActive: true,
}

  try {
    const trip = await createTrip(data);

    return res.status(201).json(trip);
  } catch (error) {
    return next(error);
  }
}

export async function getAllTripHandler(req: Request, res: Response) {
  const trips = await getAlltrips();
  return res.json(trips);
}

export async function getTripByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);

  try {
    const trip = await getTripById(integerId);

    if (!trip) {
      return res.status(404).json({ message: 'trip not found' });
    }

    return res.json(trip);
  } catch (error) {
    return next(error);
  }
}
export async function deleteTripHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);


  try {
    const trip = await deleteTrip(integerId);
    return res.json(trip);
  } catch (error) {
    return next(error);
  }
}

export async function updateTripByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);
  const data = req.body;

  try {
    const trip = await updateTrip(integerId, data);
    return res.json(trip);
  } catch (error) {
    return next(error);
  }
}

export async function createTripEmailHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: tripsEmailCreatedData = req.body;

  if (Object.keys(data).length === 0) {
    return res
      .status(400)
      .json({ message: 'Missing required information in the request body' });
  }

  try {
    const url = `${process.env.FRONT_END_URL}/driver-travels/`;
    const dataMail = {
      to: String(data.toEmail),
      from: 'CAB <david.sarriav@gmail.com>', // Use the email address or domain you verified above
      subject: 'New trip scheduled from RICA CAB',
      templateId: 'd-0cad497e97f0412fb7bdba7cde87e8e8',
      dynamicTemplateData: {
        url,
      },
    };



    sendMailSendGrid(dataMail);

    return res.status(200).json(dataMail);
  } catch (error) {
    return next(error);
  }
}
