import { Users } from '@prisma/client';
import { Users as UserModel, Rol as RoleModel } from '@prisma/client';

export type usersCreateData = Users;

export type User = UserModel;

export type UserWithRoles = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  isActive: boolean;
  password: string;
  UserByRole: {
    Rol: {
      id: number;
      name: string;
    };
  }[];
};

export type updateUser = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  rol_id: number;
};
