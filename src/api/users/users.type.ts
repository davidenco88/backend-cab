import { Users } from '@prisma/client';
import { Users as UserModel, Rol as RoleModel } from '@prisma/client';

export type CreateUser = {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  password: string;
  rol_id: number[];
};

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
  name?: string;
  lastname?: string;
  email?: string;
  avatar?: string;
  isActive?: boolean;
  password?: string;
  passwordResetToken?: string;
  passwordResetExpires?: string;
};
