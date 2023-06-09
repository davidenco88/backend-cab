import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createRol(
  name :  string,

) {
  const rol = await prisma.rol.create({
    data:{
      name,
      isActive: true
    }
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
  name :  string,
  isActive: boolean
  ) {
    const data = {
      name,
      isActive
    };
  const updateRol = await prisma.rol.update({
    where: {
      id,
    },
    data
  })
  return updateRol;
}
