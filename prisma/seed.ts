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
  await prisma.vehicleTypes.createMany({
    data: [
      { name: "Vehiculo epacioso", seats: 5 , luggage:"25 lts", isActive: true },
      { name: "Vehiculo de lujo", seats: 3 , luggage:"25 lts", isActive: true },
      { name: "Vehiculo economico", seats: 4 , luggage:"10 lts", isActive: true },
    ],
    skipDuplicates: true,
  });
  await prisma.serviceType.createMany({
    data: [
      { vehicleTypesId: 1, feeBase: 120 },
      { vehicleTypesId: 2, feeBase: 150 },
      { vehicleTypesId: 3, feeBase: 80 },
    ],
    skipDuplicates: true,
  });
  await prisma.vehicles.createMany({
    data: [
      {
        name: 'Vehiculo generico 1',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235486',
        isAvailable: true,
        isActive: true,
      },
      {
        name: 'Vehiculo generico 2',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987456',
        isAvailable: true,
        isActive: true,
      },
      {
        name: 'Vehiculo generico 3',
        driverID: 3,
        vehicleTypeID: 3,
        plates: '192846',
        isAvailable: true,
        isActive: true,
      },
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
