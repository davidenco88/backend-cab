import { Request } from 'express';

import { usersCreateData } from '../api/users/users.type';

export type PayloadType = {
  id: number;
  email: string;
  iat?: number;
};

export interface AuthRequest extends Request {
  user?: usersCreateData;
}
