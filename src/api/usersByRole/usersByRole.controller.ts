import { Request, Response, NextFunction } from 'express';
import {
  createUsersByRole,
  getAllUsersByRole,
  getUsersByRoleById,
  updateUsersByRole,
  deleteUsersByRole,
} from './usersByRole.service'

export async function createUsersByRoleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const usersByRole = await createUsersByRole(data);

    return res.json(usersByRole);
  } catch (error) {
    return next(error);
  }
}

export async function getAllUsersByRoleHandler(req: Request, res: Response) {
  const usersByRolee = await getAllUsersByRole();
  return res.json(usersByRolee);
}

export async function getUsersByRoleByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);

  try {
     const usersByRole = await getUsersByRoleById(integerId);

    if (!usersByRole) {
      return res.status(404).json({ message: 'UsersByRole not found' });
    }

    return res.json(usersByRole);
  } catch (error) {
    return next(error);
  }
}
export async function deleteUsersByRoleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);


  try {
    const usersByRole = await deleteUsersByRole(integerId);
    return res.json(usersByRole);
  } catch (error) {
    return next(error);
  }
}

export async function updateUsersByRoleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const integerId = Number(id);
  const data = req.body;

  try {
    const usersByRole = await updateUsersByRole(integerId, data);
    return res.json(usersByRole);
  } catch (error) {
    return next(error);
  }
}
