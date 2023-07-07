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
        isActive: true,
      },
      {
        name: 'Federico',
        lastname: 'Cordoba',
        email: 'federico@mkir.com',
        avatar: 'empty',
        password: hashedPassword_2,
        isActive: true,
      },
      {
        name: 'Andres',
        lastname: 'Lopez',
        email: 'andres@mkir.com',
        avatar: 'empty',
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
      { type: "Spacious", seats: 5 , luggage:"25 lts", isActive: true,  feeBase: 120  },
      { type: "Luxury", seats: 3 , luggage:"25 lts", isActive: true,  feeBase: 150 },
      { type: "Economic", seats: 4 , luggage:"10 lts", isActive: true, feeBase: 80 },
    ],
    skipDuplicates: true,
  });
  await prisma.tripState.createMany({
    data: [
      { name: "Scheduled",  isActive: true  },
      { name: "Strated",    isActive: true },
      { name: "Finished",  isActive: true },
      { name: "Canceled",  isActive: true },
    ],
    skipDuplicates: true,
  });

  await prisma.vehicles.createMany({
    data: [
      {
        brand:"Cupra",
        model:"Formentor",
        year:2020,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235486',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Dodge",
        model:"Hornet",
        year:2023,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=dodge&modelFamily=hornet&modelRange=hornet&modelVariant=od&modelYear=2023',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235487',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Chevrolet",
        model:"Captiva",
        year:2022,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=chevrolet&modelFamily=captiva&modelRange=captiva&modelVariant=od&modelYear=2023',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235489',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Ford",
        model:"Ecosport",
        year:2022,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=ford&modelFamily=ecosport&modelRange=ecosport&modelVariant=od&modelYear=2022&paintId=pspc0016',
        driverID: 3,
        vehicleTypeID: 1,
        plates: '1235488',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"BMW",
        model:"Serie 5",
        year:2022,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=bmw&modelFamily=series-5&modelRange=m5&modelVariant=sa&modelYear=2021&paintId=pspc0016',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987456',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Mercedes",
        model:"Class-c",
        year:2018,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=mercedes&modelFamily=c-class&modelRange=c-class&modelVariant=ca&modelYear=2018',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987457',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Audi",
        model:"A5",
        year:2019,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=audi&modelFamily=a5&modelRange=a5&modelVariant=ca&modelYear=2019&powerTrain=petrol&transmission=0&bodySize=2&trim=eu&paintId=pspc0016&angle=01',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987458',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Alpha-Romeo",
        model:"mito",
        year:2019,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=alfa-romeo&modelFamily=mito&modelRange=mito&modelVariant=ha&modelYear=2018&powerTrain=fossil&transmission=0&bodySize=3&trim=0&paintId=pspc0016&angle=01',
        driverID: 3,
        vehicleTypeID: 2,
        plates: '987458',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Chevrolet",
        model:"Aveo",
        year:2016,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=chevrolet&modelFamily=aveo&modelRange=aveo&modelVariant=ha&modelYear=2016&powerTrain=petrol&transmission=0&bodySize=5&trim=eu&paintId=pspc0016&angle=01',
        driverID: 3,
        vehicleTypeID: 3,
        plates: '192847',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Renault",
        model:"Symbol",
        year:2018,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=renault&modelFamily=symbol&modelRange=symbol&modelVariant=sa&modelYear=2018&powerTrain=fossil&transmission=0&bodySize=4&trim=eu&paintId=pspc0016&angle=01',
        driverID: 3,
        vehicleTypeID: 3,
        plates: '192846',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Volskwagen",
        model:"Golf",
        year:2020,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=volkswagen&modelFamily=golf&modelRange=e-golf&modelVariant=ha&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0016&angle=01',
        driverID: 3,
        vehicleTypeID: 3,
        plates: '192848',
        isAvailable: true,
        isActive: true,
      },
      {
        brand:"Ford",
        model:"Fiesta",
        year:2020,
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=ford&modelFamily=fiesta&modelRange=fiesta&modelVariant=ha&modelYear=2022&powerTrain=fossil&transmission=0&bodySize=3&trim=eu&paintId=pspc0016&angle=01',
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
