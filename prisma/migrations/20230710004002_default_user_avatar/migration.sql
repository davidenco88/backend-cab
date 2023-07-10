-- DropForeignKey
ALTER TABLE "Trips" DROP CONSTRAINT "Trips_clientID_fkey";

-- DropForeignKey
ALTER TABLE "Trips" DROP CONSTRAINT "Trips_vehicleID_fkey";

-- AlterTable
ALTER TABLE "Trips" ALTER COLUMN "pickUpLatitude" DROP NOT NULL,
ALTER COLUMN "pickUpLongitude" DROP NOT NULL,
ALTER COLUMN "totalPrice" DROP NOT NULL,
ALTER COLUMN "pickUpDate" DROP NOT NULL,
ALTER COLUMN "isActive" DROP NOT NULL,
ALTER COLUMN "clientID" DROP NOT NULL,
ALTER COLUMN "dropOffLatitude" DROP NOT NULL,
ALTER COLUMN "dropOffLongitude" DROP NOT NULL,
ALTER COLUMN "travelDistance" DROP NOT NULL,
ALTER COLUMN "vehicleID" DROP NOT NULL,
ALTER COLUMN "dropOffAddress" DROP NOT NULL,
ALTER COLUMN "pickUpAddress" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "avatar" SET DEFAULT 'https://url.zip/806f91e';

-- AddForeignKey
ALTER TABLE "Trips" ADD CONSTRAINT "Trips_clientID_fkey" FOREIGN KEY ("clientID") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trips" ADD CONSTRAINT "Trips_vehicleID_fkey" FOREIGN KEY ("vehicleID") REFERENCES "Vehicles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
