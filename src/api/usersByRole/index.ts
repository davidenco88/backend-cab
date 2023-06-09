import { Router } from "express";
import {
  createUsersByRoleHandler,
  getAllUsersByRoleHandler,
  getUsersByRoleByIdHandler,
  updateUsersByRoleHandler,
  deleteUsersByRoleHandler,
} from './usersByRole.controller'

const usersByRoleRouter = Router();

// /api/usersByRoles --> POST
usersByRoleRouter.post('/', createUsersByRoleHandler);

// /api/usersByRoles --> GET
usersByRoleRouter.get('/', getAllUsersByRoleHandler);

// /api/usersByRoles/:id --> GET
usersByRoleRouter.get('/:id', getUsersByRoleByIdHandler);

// /api/usersByRoles --> PATHC
usersByRoleRouter.patch('/:id', updateUsersByRoleHandler);

// /api/usersByRoles --> DELETE
usersByRoleRouter.patch('/:id', deleteUsersByRoleHandler);


export default usersByRoleRouter;

