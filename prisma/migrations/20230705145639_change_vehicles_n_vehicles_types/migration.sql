/*
  Warnings:

  - You are about to drop the column `name` on the `VehicleTypes` table. All the data in the column will be lost.
  - You are about to drop the column `line` on the `Vehicles` table. All the data in the column will be lost.
  - You are about to drop the column `mark` on the `Vehicles` table. All the data in the column will be lost.
  - You are about to drop the `ServiceType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `VehicleTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `Vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServiceType" DROP CONSTRAINT "ServiceType_vehicleTypesId_fkey";

-- AlterTable
ALTER TABLE "VehicleTypes" DROP COLUMN "name",
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicles" DROP COLUMN "line",
DROP COLUMN "mark",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL,
ALTER COLUMN "model" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "ServiceType";
