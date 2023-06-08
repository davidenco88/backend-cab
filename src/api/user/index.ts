import { Router } from "express";
import {
  createUserHandler,
  getAllUserHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
} from './user.controller'

const userRouter = Router();

// /api/users --> POST
userRouter.post('/', createUserHandler);

// /api/users --> GET
userRouter.get('/', getAllUserHandler);

// /api/users/:id --> GET
userRouter.get('/:id', getUserByIdHandler);

// /api/users --> PATHC
userRouter.patch('/', updateUserHandler);

// /api/users --> DELETE
userRouter.delete('/:id', deleteUserHandler);


export default userRouter;

