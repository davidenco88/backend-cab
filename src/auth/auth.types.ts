import { Request } from 'express';

import { UserWithRoles } from '../api/users/users.type';

export type PayloadType = {
  id: number;
  email: string;
  iat?: number;
};

export interface AuthRequest extends Request {
  user?: UserWithRoles;
}
