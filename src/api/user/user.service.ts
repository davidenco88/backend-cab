import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(
  name :  string,
  email : string,
  avatar: string,
) {
  const user = await prisma.users.create({
    data:{
      name,
      email,
      avatar,
      isActive: true
    }
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
  name :  string,
  email : string,
  avatar: string,
  isActive: boolean
  ) {
    const data = {
      name,
      email,
      avatar,
      isActive
    };
  const updateUser = await prisma.users.update({
    where: {
      id,
    },
    data
  })
  return updateUser;
}
