/*
  Warnings:

  - You are about to drop the column `dropDownLatitude` on the `Trips` table. All the data in the column will be lost.
  - You are about to drop the column `dropDownLongitude` on the `Trips` table. All the data in the column will be lost.
  - You are about to drop the column `travelledDistance` on the `Trips` table. All the data in the column will be lost.
  - Added the required column `clientID` to the `Trips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dropOffLatitude` to the `Trips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dropOffLongitude` to the `Trips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelDistance` to the `Trips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleID` to the `Trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trips" DROP COLUMN "dropDownLatitude",
DROP COLUMN "dropDownLongitude",
DROP COLUMN "travelledDistance",
ADD COLUMN     "clientID" INTEGER NOT NULL,
ADD COLUMN     "dropOffLatitude" TEXT NOT NULL,
ADD COLUMN     "dropOffLongitude" TEXT NOT NULL,
ADD COLUMN     "travelDistance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vehicleID" INTEGER NOT NULL,
ALTER COLUMN "totalPrice" SET DATA TYPE DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "Trips" ADD CONSTRAINT "Trips_clientID_fkey" FOREIGN KEY ("clientID") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trips" ADD CONSTRAINT "Trips_vehicleID_fkey" FOREIGN KEY ("vehicleID") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
