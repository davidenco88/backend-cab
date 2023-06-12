import { Request, Response, NextFunction } from 'express';
import {
  createTripState,
  getAlltripStates,
  getTripStateById,
  updateTripState,
  deleteTripState,
} from './tripStates.service'

export async function createTripStateHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const tripState = await createTripState(data);

    return res.json(tripState);
  } catch (error) {
    return next(error);
  }
}

export async function getAllTripStateHandler(req: Request, res: Response) {
  const tripStates = await getAlltripStates();
  return res.json(tripStates);
}

export async function getTripStateByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);

  try {
     const tripState = await getTripStateById(integerId);

    if (!tripState) {
      return res.status(404).json({ message: 'tripState not found' });
    }

    return res.json(tripState);
  } catch (error) {
    return next(error);
  }
}
export async function deleteTripStateHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);


  try {
    const tripState = await deleteTripState(integerId);
    return res.json(tripState);
  } catch (error) {
    return next(error);
  }
}

export async function updateTripStateByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);
  const data = req.body;

  try {
    const tripState = await updateTripState(integerId, data);
    return res.json(tripState);
  } catch (error) {
    return next(error);
  }
}
