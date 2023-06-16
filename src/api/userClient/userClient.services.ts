import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../auth/utils/bcrypt';
import { CreateUserClient } from './userClient.types';

const prisma = new PrismaClient();

export async function createUserClient(input: CreateUserClient) {
  //Add client in Users Table
  const hashedPassword = await hashPassword(input.password);

  const user = await prisma.users.create({
    data: {
      name: input.name,
      lastname: input.lastname,
      email: input.email,
      avatar: input.avatar,
      password: hashedPassword,
    },
  });

  //Add client in UsersByRol Table
  const userByRol = await prisma.userByRole.create({
    data: {
      rolId: input.rol_id,
      usersId: user.id,
    },
  });

  const newUser = {
    ...user,
    rol_id: userByRol.rolId,
  };

  return newUser;
}
