import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
const cloudinary = require('cloudinary').v2;
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
  console.log("🚀 ~ file: vehicles.controller.ts:21 ~ data:", data)

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

export async function testcreateVehicle(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const rawBodyData = req.body;
  const body = {
    brand: rawBodyData['brand'],
    driverID: Number(rawBodyData['driverID']),
    isActive: true,
    isAvailable: true,
    model: rawBodyData['model'],
    plates: rawBodyData['plates'],
    vehicleTypeID: Number(rawBodyData['vehicleTypeID']),
    year: Number(rawBodyData['year']),
  }
  const file = req.file;
  let image = "";
  const maxSize  = 1024 * 1024 * 2;


  cloudinary.config({
    cloud_name: 'dltibnft3',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  if (req.file && file) {
    if (file.size > maxSize) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: 'File exceeds 5mb limit' });
    }

    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'vehicle-images',
        use_filename: true,
        unique_filename: true,
        width: 500,
        height: 300,
        gravity: 'center',
        crop: 'thumb',
        zoom: 0.8,
      })

      image = result.url;
      console.log("🚀 ~ file: vehicles.controller.ts:192 ~ result.url:", result.url)
      fs.unlinkSync(req.file.path);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  const data = {...body, image: image}
  console.log("🚀 ~ file: vehicles.controller.ts:201 ~ data:", data)

  try {
    const vehicle = await createVehicle(data);

    return res.json(vehicle);
  } catch (error) {
    return next(error);
  }
}
