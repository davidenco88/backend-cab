import { PrismaClient } from "@prisma/client";
import { usersCreateData , updateUser } from './users.type';
import { hashPassword } from '../../auth/utils/bcrypt'

const prisma = new PrismaClient();

export async function createUser(input: usersCreateData) {

  const hashedPassword = await hashPassword(input.password);

  const data = {
    ...input,
    password: hashedPassword
  }
  const user = await prisma.users.create({
    data
  })

  return user;

}

export async function getAllUser() {
  const users = await prisma.users.findMany();
  return users;
}

export async function getUserById(id: number) {
  const user = await prisma.users.findUnique({
    where: {
      id,
    }
  })
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
  })
  return updateUser;
}

export async function updateUser(
  id: number,
  data: updateUser
  ) {
console.log(id)
console.log(data)
  const updateUser = await prisma.users.update({
    where: {
      id,
    },
    data
  })
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
