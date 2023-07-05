import { Router } from "express";
import {
  createTripHandler,
  getAllTripHandler,
  getTripByIdHandler,
  updateTripByIdHandler,
  deleteTripHandler,
  createTripEmailHandler

} from './trips.controller'

const tripRouter = Router();

// /api/users --> POST
tripRouter.post('/', createTripHandler);
// /api/trips
tripRouter.post('/mailtodriver', createTripEmailHandler);
// /api/users --> GET
tripRouter.get('/', getAllTripHandler);

// /api/users/:id --> GET
tripRouter.get('/:id', getTripByIdHandler);

// /api/users --> PATHC
tripRouter.patch('/:id', updateTripByIdHandler);

// /api/users --> DELETE
tripRouter.patch('/delete/:id', deleteTripHandler);


export default tripRouter;
