import { Router } from "express";
import {
  createVehicleHandler,
  getAllVehicleHandler,
  getVehicleByIdHandler,
  updateVehicleByIdHandler,
  deleteVehicleHandler,
} from './vehicles.controller'

const vehicleRouter = Router();

// /api/users --> POST
vehicleRouter.post('/', createVehicleHandler);

// /api/users --> GET
vehicleRouter.get('/', getAllVehicleHandler);

// /api/users/:id --> GET
vehicleRouter.get('/:id', getVehicleByIdHandler);

// /api/users --> PATHC
vehicleRouter.patch('/', updateVehicleByIdHandler);

// /api/users --> DELETE
vehicleRouter.delete('/:id', deleteVehicleHandler);


export default vehicleRouter;
