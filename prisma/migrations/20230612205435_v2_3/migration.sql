-- AlterTable
ALTER TABLE "Rol" ALTER COLUMN "isActive" SET DEFAULT true;

-- AlterTable
ALTER TABLE "ServiceType" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "TripState" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Trips" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "UserByRole" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "VehicleTypes" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
