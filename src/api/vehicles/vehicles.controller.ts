import { Request, Response, NextFunction } from 'express';
import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  getVehiclesByDriver,
  updateVehicle,
  deleteVehicle,
  getAllAvailableVehicles,
  updateVehicleAvailavibility
} from './vehicles.service'

export async function createVehicleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const vehicle = await createVehicle(data);

    return res.json(vehicle);
  } catch (error) {
    return next(error);
  }
}

export async function getAllVehicleHandler(req: Request, res: Response) {
  const vehicles = await getAllVehicles();
  return res.json(vehicles);
}
export async function getAllAvailableVehicleHandler(req: Request, res: Response, next: NextFunction) {

  try {
    const vehicles = await getAllAvailableVehicles();

    if (vehicles.length === 0) {
      return res.status(404).json({ message: 'There is no active vehicles, try again later' });
    }

    return res.json(vehicles);
  } catch (error) {
    console.log(error);
    return next(error);
  }

}

export async function getVehicleByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);

  try {
    const vehicle = await getVehicleById(integerId);

    if (!vehicle) {
      return res.status(404).json({ message: 'vehicle not found' });
    }

    return res.json(vehicle);
  } catch (error) {
    return next(error);
  }
}

export async function getVehiclesByDriverHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);

  try {
    const vehicles = await getVehiclesByDriver(integerId);

    if (!vehicles) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    return res.json(vehicles);
  } catch (error) {
    return next(error);
  }
}

export async function deleteVehicleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);


  try {
    const vehicle = await deleteVehicle(integerId);
    return res.json(vehicle);
  } catch (error) {
    return next(error);
  }
}

export async function updateVehicleByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);
  const data = req.body;

  try {
    const vehicle = await updateVehicle(integerId, data);
    return res.json(vehicle);
  } catch (error) {
    return next(error);
  }
}

export async function updateVehicleAvailavibilityHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);
  const {available} = req.body;


  try {
    const vehicle = await updateVehicleAvailavibility(integerId, available);
    return res.json(vehicle);
  } catch (error) {
    return next(error);
  }
}
