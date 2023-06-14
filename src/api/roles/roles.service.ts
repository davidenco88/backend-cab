import { PrismaClient } from "@prisma/client";
import { rolesCreateData } from './roles.type';

const prisma = new PrismaClient();

export async function createRol(data :  rolesCreateData)
 {
  const rol = await prisma.rol.create({
    data
  })

  return rol;

}

export async function getAllRol() {
  const rols = await prisma.rol.findMany();
  return rols;
}

export async function getRolById(id: number) {
  const rol = await prisma.rol.findUnique({
    where: {
      id,
    }
  })
  return rol;
}

export async function deleteRol(id: number) {
  const updateRol = await prisma.rol.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  })
  return updateRol;
}

export async function updateRol(
  id: number,
  data: rolesCreateData
  ) {

  const updateRol = await prisma.rol.update({
    where: {
      id,
    },
    data
  })
  return updateRol;
}
