import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/auth/utils/bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  //Create default roles
  await prisma.rol.createMany({
    data: [{ name: 'Admin' }, { name: 'Client' }, { name: 'Driver' }],
    skipDuplicates: true,
  });

  //Create three diferents user for three diferent roles
  const defaultPasword = '12345';
  const hashedPassword_1 = await hashPassword(defaultPasword);
  const hashedPassword_2 = await hashPassword(defaultPasword);
  const hashedPassword_3 = await hashPassword(defaultPasword);

  await prisma.users.createMany({
    data: [
      {
        name: 'David',
        lastname: 'Sarria',
        email: 'david@mkir.com',
        avatar: 'empty',
        password: hashedPassword_1,
      },
      {
        name: 'Federico',
        lastname: 'Cordoba',
        email: 'federico@mkir.com',
        avatar: 'empty',
        password: hashedPassword_2,
      },
      {
        name: 'Andres',
        lastname: 'Lopez',
        email: 'andres@mkir.com',
        avatar: 'empty',
        password: hashedPassword_3,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.userByRole.createMany({
    data: [
      { usersId: 1, rolId: 1 },
      { usersId: 2, rolId: 2 },
      { usersId: 3, rolId: 3 },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => console.log('Seed successful'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
