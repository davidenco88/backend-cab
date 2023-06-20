import { Users } from '@prisma/client';
import { Users as UserModel, Rol as RoleModel } from '@prisma/client';

export type usersCreateData = Users;

export type User = UserModel;
export interface UserWithRoles extends UserModel {
  roles: RoleModel[];
}
export type updateUser = {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export type CreateUserClient = {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  password: string;
};
