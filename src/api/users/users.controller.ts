import { Request, Response, NextFunction } from 'express';
import {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} from './users.service'

export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const user = await createUser(data);

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

export async function getAllUserHandler(req: Request, res: Response) {
  const users = await getAllUser();
  return res.json(users);
}

export async function getUserByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);

  try {
     const user = await getUserById(integerId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}
export async function deleteUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);


  try {
    const user = await deleteUser(integerId);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

export async function updateUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);
  const data = req.body;
  console.log(data);
  try {
    const user = await updateUser(integerId, data);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
}
