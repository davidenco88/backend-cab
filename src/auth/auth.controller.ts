import { Response } from 'express';
import { compose } from 'compose-middleware';

import { getUserByEmail } from '../api/user/user.service';
import { verifyToken } from './auth.service';
import { AuthRequest, PayloadType } from './auth.types';
import { UserWithRoles } from '../api/user/user.types';

/**
 * Attaches the user object to the request if authenticated
 * @returns RequestHandler
 */
export function isAuthenticated() {
  return compose([
    async (req: AuthRequest, res: Response, next: any) => {
      const token = req.headers?.authorization?.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const decoded = verifyToken(token) as PayloadType;

      if (!decoded) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await getUserByEmail(decoded.email);

      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      req.user = user;

      return next();
    },
  ]);
}

/**
 * Checks if the user role meets the minimum requirements of the route
 * @param allowRoles Array of roles allowed to access the route
 * @returns RequestHandler
 */
export function hasRole(allowRoles: string[]) {
  return compose([
    isAuthenticated(),
    (req: AuthRequest, res: Response, next: any) => {
      const { roles } = req.user as UserWithRoles;
      const userRoles = roles.map(({ role }: any) => role.name);
      const hasPermission = allowRoles.some((role) => userRoles.includes(role));

      if (!hasPermission) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      return next();
    },
  ]);
}
