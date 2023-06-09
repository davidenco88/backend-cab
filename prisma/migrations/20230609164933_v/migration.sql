/*
  Warnings:

  - You are about to drop the column `rol_id` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_rol_id_fkey";

-- AlterTable
ALTER TABLE "Rol" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "rol_id",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "UserByRole" (
    "id" SERIAL NOT NULL,
    "rolId" INTEGER NOT NULL,
    "usersId" INTEGER NOT NULL,

    CONSTRAINT "UserByRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscountCodes" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "creatorID" INTEGER NOT NULL,

    CONSTRAINT "DiscountCodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" SERIAL NOT NULL,
    "dirverID" INTEGER NOT NULL,
    "vehicleTypeID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "plates" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "luggage" TEXT NOT NULL,

    CONSTRAINT "VehicleTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceType" (
    "id" SERIAL NOT NULL,
    "vehicleTypesId" INTEGER NOT NULL,
    "feeBase" INTEGER NOT NULL,

    CONSTRAINT "ServiceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trips" (
    "id" SERIAL NOT NULL,
    "pickUpLatitude" TEXT NOT NULL,
    "pickUpLongitude" TEXT NOT NULL,
    "dropDownLatitude" TEXT NOT NULL,
    "dropDownLongitude" TEXT NOT NULL,
    "travelledDistance" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "pickUpDate" TIMESTAMP(3) NOT NULL,
    "discountCodeId" INTEGER,
    "tripStateId" INTEGER,

    CONSTRAINT "Trips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripState" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TripState_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserByRole" ADD CONSTRAINT "UserByRole_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserByRole" ADD CONSTRAINT "UserByRole_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountCodes" ADD CONSTRAINT "DiscountCodes_creatorID_fkey" FOREIGN KEY ("creatorID") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_dirverID_fkey" FOREIGN KEY ("dirverID") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_vehicleTypeID_fkey" FOREIGN KEY ("vehicleTypeID") REFERENCES "VehicleTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceType" ADD CONSTRAINT "ServiceType_vehicleTypesId_fkey" FOREIGN KEY ("vehicleTypesId") REFERENCES "VehicleTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trips" ADD CONSTRAINT "Trips_discountCodeId_fkey" FOREIGN KEY ("discountCodeId") REFERENCES "DiscountCodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trips" ADD CONSTRAINT "Trips_tripStateId_fkey" FOREIGN KEY ("tripStateId") REFERENCES "TripState"("id") ON DELETE SET NULL ON UPDATE CASCADE;
