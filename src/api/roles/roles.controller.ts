import { Request, Response, NextFunction } from 'express';
import {
  createRol,
  getAllRol,
  getRolById,
  updateRol,
  deleteRol,
} from './roles.service'

export async function createRolHandler(
  req: Request,
  res: Response,
  next: NextFunction) {
    const data = req.body;

  try {
    const user = await createRol(data);

    return res.json(user);
  } catch (error) {
    return next(error);
  }

}

export async function getAllRolHandler(req: Request, res: Response) {
  const Rols = await getAllRol();
  return res.json(Rols);
}

export async function getRolByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);

  try {
     const role = await getRolById(integerId);

    if (!role) {
      return res.status(404).json({ message: 'role not found' });
    }

    return res.json(role);
  } catch (error) {
    return next(error);
  }
}
export async function deleteRolHandler( req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);


  try {
    const user = await deleteRol(integerId);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

export async function updateRolHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);
  const data = req.body;

  try {
    const user = await updateRol(integerId, data);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
}









