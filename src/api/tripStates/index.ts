import { Router } from "express";
import {
  createTripStateHandler,
  getAllTripStateHandler,
  getTripStateByIdHandler,
  updateTripStateByIdHandler,
  deleteTripStateHandler,
} from './tripStates.controller'

const tripStateRouter = Router();

// /api/users --> POST
tripStateRouter.post('/', createTripStateHandler);

// /api/users --> GET
tripStateRouter.get('/', getAllTripStateHandler);

// /api/users/:id --> GET
tripStateRouter.get('/:id', getTripStateByIdHandler);

// /api/users --> PATHC
tripStateRouter.patch('/', updateTripStateByIdHandler);

// /api/users --> DELETE
tripStateRouter.patch('/:id', deleteTripStateHandler);


export default tripStateRouter;
