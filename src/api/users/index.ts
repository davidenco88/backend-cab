import { Router } from 'express';
import {
  createUserHandler,
  getAllUserHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  getAllUserInfoHandler,
} from './users.controller';
import {
  middlewareHasRol,
  middlewareRolAdmin,
} from '../../auth/auth.controller';

const userRouter = Router();

// /api/users --> POST
userRouter.post('/', createUserHandler);

// /api/users --> GET
userRouter.get('/info', middlewareRolAdmin, getAllUserInfoHandler);
userRouter.get('/', getAllUserHandler);

// /api/users/:id --> GET
userRouter.get('/:id', middlewareHasRol, getUserByIdHandler);

// /api/users --> PATHC
userRouter.patch('/:id', updateUserHandler);
// /api/users --> PATCH
userRouter.patch('/:id', middlewareHasRol, updateUserHandler);

// /api/users --> DELETE
userRouter.patch('/delete/:id', middlewareRolAdmin, deleteUserHandler);

export default userRouter;
