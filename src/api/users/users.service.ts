import { PrismaClient } from "@prisma/client";
import { usersCreateData , updateUser } from './users.type';

const prisma = new PrismaClient();

export async function createUser(data: usersCreateData
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
