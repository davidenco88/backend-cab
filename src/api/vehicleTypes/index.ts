import { Router } from "express";
import {
  createVehicleTypeHandler,
  getAllVehicleTypeHandler,
  getVehicleTypeByIdHandler,
  updateVehicleTypeByIdHandler,
  deleteVehicleTypeHandler,
} from './vehicleTypes.controller'

const vehicleTypeRouter = Router();

// /api/users --> POST
vehicleTypeRouter.post('/', createVehicleTypeHandler);

// /api/users --> GET
vehicleTypeRouter.get('/', getAllVehicleTypeHandler);

// /api/users/:id --> GET
vehicleTypeRouter.get('/:id', getVehicleTypeByIdHandler);

// /api/users --> PATHC
vehicleTypeRouter.patch('/', updateVehicleTypeByIdHandler);

// /api/users --> DELETE
vehicleTypeRouter.delete('/:id', deleteVehicleTypeHandler);


export default vehicleTypeRouter;
