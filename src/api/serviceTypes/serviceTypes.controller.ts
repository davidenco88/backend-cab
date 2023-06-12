import { Request, Response, NextFunction } from 'express';
import {
  createServiceType,
  getAllServiceTypes,
  getServiceTypeById,
  updateServiceType,
  deleteServiceType,
} from './serviceTypes.service'

export async function createServiceTypeHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const serviceType = await createServiceType(data);

    return res.json(serviceType);
  } catch (error) {
    return next(error);
  }
}

export async function getAllServiceTypeHandler(req: Request, res: Response) {
  const serviceType = await getAllServiceTypes();
  return res.json(serviceType);
}

export async function getServiceTypeByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);

  try {
     const serviceType = await getServiceTypeById(integerId);

    if (!serviceType) {
      return res.status(404).json({ message: 'ServiceType not found' });
    }

    return res.json(serviceType);
  } catch (error) {
    return next(error);
  }
}
export async function deleteServiceTypeHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);


  try {
    const serviceType = await deleteServiceType(integerId);
    return res.json(serviceType);
  } catch (error) {
    return next(error);
  }
}

export async function updateServiceTypeByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);
  const data = req.body;

  try {
    const serviceType = await updateServiceType(integerId, data);
    return res.json(serviceType);
  } catch (error) {
    return next(error);
  }
}
