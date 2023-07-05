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
import { tripsCreateData , tripsEmailCreatedData} from './trips.type';
export async function createTripHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const trip = await createTrip(data);

    return res.json(trip);
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
  console.log(data);

  if (Object.keys(data).length === 0) {
    return res
      .status(400)
      .json({ message: 'Missing required information in the request body' });
  }

  try {

    const dataMail = {
      to: String(data.toEmail),
      from: 'CAB <david.sarriav@gmail.com>', // Use the email address or domain you verified above
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',

    };

    console.log(dataMail);
    sendMailSendGrid(dataMail);

    return res.status(200)
  } catch (error) {
    return next(error);
  }
}
