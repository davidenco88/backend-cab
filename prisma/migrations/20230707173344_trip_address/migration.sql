/*
  Warnings:

  - Added the required column `dropOffAddress` to the `Trips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickUpAddress` to the `Trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trips" ADD COLUMN     "dropOffAddress" TEXT NOT NULL,
ADD COLUMN     "pickUpAddress" TEXT NOT NULL;
