import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser() {

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

export async function deleteUser() {

}

export async function updateUser() {

}
