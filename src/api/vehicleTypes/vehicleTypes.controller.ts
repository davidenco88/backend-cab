import { Request, Response, NextFunction } from 'express';
import {
  createVehicleType,
  getAllVehicleTypes,
  getVehicleTypeById,
  updateVehicleType,
  deleteVehicleType,
} from './vehicleTypes.service'

export async function createVehicleTypeHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const vehicleType = await createVehicleType(data);

    return res.json(vehicleType);
  } catch (error) {
    return next(error);
  }
}

export async function getAllVehicleTypeHandler(req: Request, res: Response) {
  const vehicleTypes = await getAllVehicleTypes();
  return res.json(vehicleTypes);
}

export async function getVehicleTypeByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);

  try {
     const vehicleType = await getVehicleTypeById(integerId);

    if (!vehicleType) {
      return res.status(404).json({ message: 'vehicleType not found' });
    }

    return res.json(vehicleType);
  } catch (error) {
    return next(error);
  }
}
export async function deleteVehicleTypeHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);


  try {
    const vehicleType = await deleteVehicleType(integerId);
    return res.json(vehicleType);
  } catch (error) {
    return next(error);
  }
}

export async function updateVehicleTypeByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);
  const data = req.body;

  try {
    const vehicleType = await updateVehicleType(integerId, data);
    return res.json(vehicleType);
  } catch (error) {
    return next(error);
  }
}
