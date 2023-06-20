import { Response, NextFunction } from 'express';
import { compose } from 'compose-middleware';

import { getUserByEmail } from '../api/users/users.service';
import { verifyToken } from './auth.service';
import { AuthRequest, PayloadType } from './auth.types';
import { UserWithRoles } from '../api/users/users.type';

/**
 * Attaches the user object to the request if authenticated
 * @returns RequestHandler
 */
export async function isAuthenticated(
  req: AuthRequest,
  res: Response,
  next: any
) {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Request does not have an authentication token' });
  }

  const decoded = verifyToken(token) as PayloadType;

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid authentication token' });
  }

  const user = await getUserByEmail(decoded.email);

  if (!user) {
    return res.status(401).json({ message: 'User is not active' });
  }

  req.user = user;
  return next();
}

/**
 * Checks if the user role meets the minimum requirements of the route
 * @param allowRoles Array of roles allowed to access the route
 * @returns RequestHandler
 */
export function hasRole(allowRoles: string[]) {
  return (req: AuthRequest, res: Response, next: any) => {
    const { UserByRole } = req.user as UserWithRoles;
    const userRoles = UserByRole.map((role: any) => role.Rol.name);
    const hasPermission = allowRoles.some((role) => userRoles.includes(role));

    if (!hasPermission) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    return next();
  };
}

export const middlewareRolAdmin = compose([
  isAuthenticated,
  hasRole(['Admin']),
]);

export const middlewareAllRoles = compose([
  isAuthenticated,
  hasRole(['Admin', 'Client', 'Driver']),
]);
