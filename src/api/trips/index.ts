import { Router } from "express";
import {
  createTripHandler,
  getAllTripHandler,
  getTripByIdHandler,
  updateTripByIdHandler,
  updateTripStateByIdHandler,
  deleteTripHandler,
  createTripEmailHandler,
  getAlltripsTripByClientIdHandler,
  getAlltripsTripByDriverIdHandler

} from './trips.controller'

const tripRouter = Router();

// /api/users --> POST
tripRouter.post('/', createTripHandler);
// /api/trips
tripRouter.patch('/mailtodriver', createTripEmailHandler);
// /api/users --> GET
tripRouter.get('/', getAllTripHandler);

// /api/users/:id --> GET
tripRouter.get('/:id', getTripByIdHandler);

tripRouter.get('/TripsByClient/:id', getAlltripsTripByClientIdHandler);
tripRouter.get('/TripsByDriver/:id', getAlltripsTripByDriverIdHandler);

// /api/users --> PATHC
tripRouter.patch('/:id', updateTripByIdHandler);

// /api/users --> PATHC
tripRouter.patch('/state/modify', updateTripStateByIdHandler);

// // /api/users --> DELETE
tripRouter.patch('/delete/:id', deleteTripHandler);


export default tripRouter;
