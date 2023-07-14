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
        email: 'david.sarriav@gmail.com',
        avatar: 'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        password: hashedPassword_1,
        isActive: true,
      },

      {
        name: 'Federico',
        lastname: 'Cordoba',
        email: 'federicoc03@gmail.com',
        avatar: 'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        password: hashedPassword_2,
        isActive: true,
      },
      {
        name: 'Transportes',
        lastname: 'Andres Lopez',
        email: 'eomerlopez@gmail.com',
        avatar: 'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        password: hashedPassword_3,
        isActive: true,
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
      { type: "Spacious", seats: 5, luggage: "25 lts", isActive: true, feeBase: 2 },
      { type: "Luxury", seats: 3, luggage: "25 lts", isActive: true, feeBase: 3 },
      { type: "Economic", seats: 4, luggage: "10 lts", isActive: true, feeBase: 1 },
    ],
    skipDuplicates: true,
  });
  await prisma.tripState.createMany({
    data: [
      { name: "Scheduled", isActive: true },
      { name: "Started", isActive: true },
      { name: "Finished", isActive: true },
      { name: "Canceled", isActive: true },
    ],
    skipDuplicates: true,
  });

  await prisma.vehicles.createMany({
    data: [
      {
        brand: "Cupra",
        model: "Formentor",
        year: 2020,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689350864/vehicle-images/cupra-formentor_tynpkg.png',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235486',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Dodge",
        model: "Hornet",
        year: 2023,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344751/vehicle-images/dodge-hornet_ues8x1.png',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235487',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Chevrolet",
        model: "Captiva",
        year: 2022,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344751/vehicle-images/chevrolet-captiva_pdgotj.png',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235489',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Ford",
        model: "Ecosport",
        year: 2022,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689350864/vehicle-images/ford-eco-sport_hetxiv.png',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235488',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "BMW",
        model: "Serie 5",
        year: 2022,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344752/vehicle-images/bmw-5-series_ljigai.png',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987456',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Mercedes",
        model: "Class-c",
        year: 2018,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344751/vehicle-images/mercedes-e-class_mxj1ea.png',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987457',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Audi",
        model: "A5",
        year: 2019,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344751/vehicle-images/audi-a5_tjm1yj.png',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987458',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Alpha-Romeo",
        model: "mito",
        year: 2019,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344751/vehicle-images/alfa-romeo-mito_sr2fum.png',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987458',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Chevrolet",
        model: "Aveo",
        year: 2016,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344750/vehicle-images/chevrolet-aveo_nfxp4q.png',
        driverID: 3,
        vehicleTypeID: 3,
        plates: '192847',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Renault",
        model: "Symbol",
        year: 2018,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344751/vehicle-images/renault-symbol_vfjiiu.png',
        driverID: 3,
        vehicleTypeID: 3,
        plates: '192846',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Volskwagen",
        model: "Golf",
        year: 2020,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344751/vehicle-images/volkswagen-golf_ugrpun.png',
        driverID: 3,
        vehicleTypeID: 3,
        plates: '192848',
        isAvailable: true,
        isActive: true,
      },
      {
        brand: "Ford",
        model: "Fiesta",
        year: 2020,
        image: 'https://res.cloudinary.com/dltibnft3/image/upload/v1689344751/vehicle-images/ford-fiesta_qk4iwn.png',
        driverID: 3,
        vehicleTypeID: 3,
        plates: '192849',
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
