import { Request, Response } from 'express';
import {
  createRol,
  getAllRol,
  getRolById,
  updateRol,
  deleteRol,
} from './roles.service'

export async function createRolHandler(req: Request, res: Response) {
  const { name } = req.params;
  const Rol = await createRol(name);
  return res.json(Rol);
  //res.send('Esta funcionalidad esta en desarrollo')
}

export async function getAllRolHandler(req: Request, res: Response) {
  const Rols = await getAllRol();
  return res.json(Rols);
}

export async function getRolByIdHandler(req: Request, res: Response) {
  const { id } = req.params;
  const integerId = Number(id);
  const Rol = await getRolById(integerId);
  return res.json(Rol);
}

export async function deleteRolHandler(req: Request, res: Response) {
  const { id } = req.params;
  const integerId = Number(id);
  const Rol = await deleteRol(integerId);
  return res.json(Rol);
 // res.send('Esta funcionalidad esta en desarrollo')
}

export async function updateRolHandler(req: Request, res: Response) {
  const { id, name, isActive} = req.params;
  const integerId = Number(id);
  const booleanActive = Boolean(isActive)
  const Rol = await updateRol(integerId, name, booleanActive );
  return res.json(Rol);

 // res.send('Esta funcionalidad esta en desarrollo')
}
