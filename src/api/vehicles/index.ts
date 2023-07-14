import { Router } from "express";
import {
  createVehicleHandler,
  getAllVehicleHandler,
  getVehicleByIdHandler,
  getVehiclesByDriverHandler,
  updateVehicleByIdHandler,
  deleteVehicleHandler,
  getAllAvailableVehicleHandler,
  updateVehicleAvailavibilityHandler,
  testcreateVehicle
} from './vehicles.controller'
import multer from 'multer';
const upload = multer({ dest: './temp' })

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
vehicleRouter.patch('/updateAvailability/:id', updateVehicleAvailavibilityHandler);

// /api/users --> DELETE
vehicleRouter.patch('/delete/:id', deleteVehicleHandler);

vehicleRouter.post('/testCreateVehicle', upload.single('image'), testcreateVehicle);


export default vehicleRouter;
