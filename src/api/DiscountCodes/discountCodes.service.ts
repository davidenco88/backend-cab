import { PrismaClient } from "@prisma/client";
import { discountCodesCreateData } from './discountCodes.type';

const prisma = new PrismaClient();

export async function createDiscountCode(data :  discountCodesCreateData)
 {
  const discountCode = await prisma.discountCodes.create({
    data
  })

  return discountCode;

}

export async function getAllDiscountCode() {
  const discountCode = await prisma.discountCodes.findMany();
  return discountCode;
}

export async function getDiscountCodeById(id: number) {
  const discountCode = await prisma.discountCodes.findUnique({
    where: {
      id,
    }
  })
  return discountCode;
}

export async function deleteDiscountCode(id: number) {
  const updateDiscountCode = await prisma.discountCodes.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  })
  return updateDiscountCode;
}

export async function updateDiscountCode(
  id: number,
  data: discountCodesCreateData
  ) {

  const updateDiscountCode = await prisma.discountCodes.update({
    where: {
      id,
    },
    data
  })
  return updateDiscountCode;
}
