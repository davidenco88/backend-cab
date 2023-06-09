import { Request, Response } from 'express';
import {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} from './user.service'

export async function createUserHandler(req: Request, res: Response) {
  const { name, email, avatar, rol_id } = req.params;
  const intRol_id = Number(rol_id);
  const users = await createUser(name,email , avatar, intRol_id );
  return res.json(users);
  //res.send('Esta funcionalidad esta en desarrollo')
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
  const { id } = req.params;
  const integerId = Number(id);
  const user = await deleteUser(integerId);
  return res.json(user);
 // res.send('Esta funcionalidad esta en desarrollo')
}

export async function updateUserHandler(req: Request, res: Response) {
  const { id, name, email, avatar, rol_id , isActive} = req.params;
  const integerId = Number(id);
  const intRol_id = Number(rol_id);
  const booleanActive = Boolean(isActive)
  const users = await updateUser(integerId, name,email , avatar, intRol_id, booleanActive );
  return res.json(users);

 // res.send('Esta funcionalidad esta en desarrollo')
}
