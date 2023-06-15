import { PrismaClient } from "@prisma/client";
import { usersByRoleCreateData } from './usersByRole.type';

const prisma = new PrismaClient();

export async function createUsersByRole(data: usersByRoleCreateData) {
  const usersByRole = await prisma.userByRole.create({
    data
  })

  return usersByRole;

}

export async function getAllUsersByRole() {
  const usersByRole = await prisma.userByRole.findMany();
  return usersByRole;
}

export async function getUsersByRoleById(id: number) {
  const usersByRole = await prisma.userByRole.findUnique({
    where: {
      id,
    }
  })
  return usersByRole;
}

export async function deleteUsersByRole(id: number) {
  const updateUsersByRole = await prisma.userByRole.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  })
  return updateUsersByRole;
}

export async function updateUsersByRole(
  id: number,
  data: usersByRoleCreateData
  ) {

  const updateUsersByRole = await prisma.userByRole.update({
    where: {
      id,
    },
    data
  })
  return updateUsersByRole;
}
