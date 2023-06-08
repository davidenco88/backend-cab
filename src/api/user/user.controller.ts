import { Request, Response } from 'express';
import {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} from './user.service'

export async function createUserHandler(req: Request, res: Response) {
  res.send('Esta funcionalidad esta en desarrollo')
}

export async function getAllUserHandler(req: Request, res: Response) {
  const users = await getAllUser();
  return res.json(users);
}

export async function getUserByIdHandler(req: Request, res: Response) {
  const { id } = req.params;
  const integerId = Number(id);
  const user = await getUserById(integerId);
  return res.json(user);
}

export async function deleteUserHandler(req: Request, res: Response) {
  res.send('Esta funcionalidad esta en desarrollo')
}

export async function updateUserHandler(req: Request, res: Response) {
  res.send('Esta funcionalidad esta en desarrollo')
}
