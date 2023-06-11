import { PrismaClient } from "@prisma/client";
import { useresCreateData } from './users.type';

const prisma = new PrismaClient();

export async function createUser(data: useresCreateData
) {
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
  data: useresCreateData
  ) {

  const updateUser = await prisma.users.update({
    where: {
      id,
    },
    data
  })
  return updateUser;
}
