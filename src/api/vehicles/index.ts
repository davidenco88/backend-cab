import { Router } from "express";
import {
  createVehicleHandler,
  getAllVehicleHandler,
  getVehicleByIdHandler,
  getVehiclesByDriverHandler,
  updateVehicleByIdHandler,
  deleteVehicleHandler,
  getAllAvailableVehicleHandler
} from './vehicles.controller'

const vehicleRouter = Router();

// /api/users --> POSTactives
vehicleRouter.post('/', createVehicleHandler);

// /api/users --> GET
vehicleRouter.get('/', getAllVehicleHandler);

vehicleRouter.get('/availables', getAllAvailableVehicleHandler);
// /api/users/:id --> GET
vehicleRouter.get('/:id', getVehicleByIdHandler);

// /api/vehicles/driver/:id --> GET
vehicleRouter.get('/driver/:id', getVehiclesByDriverHandler);

// /api/users --> PATHC
vehicleRouter.patch('/:id', updateVehicleByIdHandler);

// /api/users --> DELETE
vehicleRouter.patch('/delete/:id', deleteVehicleHandler);


export default vehicleRouter;
