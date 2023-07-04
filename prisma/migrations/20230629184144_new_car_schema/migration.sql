/*
  Warnings:

  - You are about to drop the column `name` on the `Vehicles` table. All the data in the column will be lost.
  - Added the required column `feeBase` to the `VehicleTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `line` to the `Vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mark` to the `Vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VehicleTypes" ADD COLUMN     "feeBase" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Vehicles" DROP COLUMN "name",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "line" TEXT NOT NULL,
ADD COLUMN     "mark" TEXT NOT NULL,
ADD COLUMN     "model" INTEGER NOT NULL;
