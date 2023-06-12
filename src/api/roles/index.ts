import { Router } from "express";
import {
  createRolHandler,
  getAllRolHandler,
  getRolByIdHandler,
  updateRolHandler,
  deleteRolHandler,
} from './roles.controller'

const RolRouter = Router();

// /api/Rols --> POST
RolRouter.post('/', createRolHandler);

// /api/Rols --> GET
RolRouter.get('/', getAllRolHandler);

// /api/Rols/:id --> GET
RolRouter.get('/:id', getRolByIdHandler);

// /api/Rols --> PATHC
RolRouter.patch('/', updateRolHandler);

// /api/Rols --> DELETE
RolRouter.patch('/:id', deleteRolHandler);


export default RolRouter;

