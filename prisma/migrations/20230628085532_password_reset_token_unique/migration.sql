/*
  Warnings:

  - A unique constraint covering the columns `[passwordResetToken]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_passwordResetToken_key" ON "Users"("passwordResetToken");
