/*
  Warnings:

  - Made the column `lastname` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
