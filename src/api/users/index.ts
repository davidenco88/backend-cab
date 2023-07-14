import { Router } from 'express';
import {
  createUserHandler,
  getAllUserHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  getAllUserInfoHandler,
  updateUserAvatarHandler
} from './users.controller';
import {
  middlewareHasRol,
  middlewareRolAdmin,
} from '../../auth/auth.controller';
import multer from 'multer';
const upload = multer({ dest: './temp' })

const userRouter = Router();

// /api/users --> POST
userRouter.post('/', createUserHandler);

// /api/users --> GET
userRouter.get('/info', getAllUserInfoHandler);
userRouter.get('/', getAllUserHandler);

// /api/users/:id --> GET
userRouter.get('/:id', getUserByIdHandler);

// /api/users/:id --> PATCH
userRouter.patch('/:id', updateUserHandler);

// /api/users --> DELETE
userRouter.patch('/delete/:id', deleteUserHandler);

// /api/users/:id --> PATCH
userRouter.patch('/avatar/:id', upload.single('avatar'), updateUserAvatarHandler);


export default userRouter;
