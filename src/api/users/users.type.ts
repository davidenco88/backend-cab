import { Users } from '@prisma/client';

export type usersCreateData = Users;

export type updateUser = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  rol_id: number;
}

