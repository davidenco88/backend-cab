import { Request, Response, NextFunction } from 'express';
import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
  getAllVehiclesStatus
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
export async function getAllActiveVehicleHandler(req: Request, res: Response) {
  const vehicles = await getAllVehiclesStatus();
  return res.json(vehicles);
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
