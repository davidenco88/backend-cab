import { Router } from "express";
import {
  createTripHandler,
  getAllTripHandler,
  getTripByIdHandler,
  updateTripByIdHandler,
  deleteTripHandler,
} from './trips.controller'

const tripRouter = Router();

// /api/users --> POST
tripRouter.post('/', createTripHandler);

// /api/users --> GET
tripRouter.get('/', getAllTripHandler);

// /api/users/:id --> GET
tripRouter.get('/:id', getTripByIdHandler);

// /api/users --> PATHC
tripRouter.patch('/:id', updateTripByIdHandler);

// /api/users --> DELETE
tripRouter.patch('/delete/:id', deleteTripHandler);


export default tripRouter;
