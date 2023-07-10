import { PrismaClient } from '@prisma/client';
import { CreateUser, updateUser, updateUserAvatar } from './users.type';
import { createHashToken, hashPassword } from '../../auth/utils/bcrypt';

const prisma = new PrismaClient();

export async function createUser(input: CreateUser) {
  //Add client in Users Table
  const hashedPassword = await hashPassword(input.password);
  const hashPasswordResetToken = await createHashToken(input.email);
  const passwordResetExpires = new Date(Date.now() + 3_600_000 * 24);

  const user = await prisma.users.create({
    data: {
      name: input.name,
      lastname: input.lastname,
      email: input.email,
      avatar: input.avatar,
      password: hashedPassword,
      passwordResetToken: hashPasswordResetToken,
      passwordResetExpires: passwordResetExpires,
    },
  });

  //Add client in UsersByRol Table
  const userRoles = input.rol_id;

  userRoles.forEach(async (rolId, index) => {
    await prisma.userByRole.create({
      data: {
        rolId,
        usersId: user.id,
      },
    });
  });

  const newUser = {
    ...user,
    rol_id: userRoles,
  };

  return newUser;
}

export async function getAllUser() {
  const users = await prisma.users.findMany();
  return users;
}

export async function getUserById(id: number) {
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return user;
}

export async function deleteUser(id: number) {
  const updateUser = await prisma.users.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });
  return updateUser;
}

export async function updateUser(id: number, data: updateUser) {
  const updateUser = await prisma.users.update({
    where: {
      id,
    },
    data,
  });
  return updateUser;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
    include: {
      UserByRole: {
        select: {
          Rol: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  return user;
}

export async function getUserByToken(passwordResetToken: string) {
  const user = await prisma.users.findUnique({
    where: {
      passwordResetToken,
    },
    include: {
      UserByRole: {
        select: {
          Rol: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  return user;
}

export async function getAllUserWithRoles() {
  const user = await prisma.users.findMany({
    include: {
      UserByRole: {
        select: {
          Rol: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return user;
}

export async function updateUserAvatar(id: number, data: updateUserAvatar) {
  const updateUser = await prisma.users.update({
    where: {
      id,
    },
    data,
    include: {
      UserByRole: {
        select: {
          Rol: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  return updateUser;
}
