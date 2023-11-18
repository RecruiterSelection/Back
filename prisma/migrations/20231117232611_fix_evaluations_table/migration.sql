/*
  Warnings:

  - You are about to drop the column `applicationId` on the `evaluations` table. All the data in the column will be lost.
  - Added the required column `ApplicationsApplicationId` to the `evaluations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_applicationId_fkey";

-- AlterTable
ALTER TABLE "evaluations" DROP COLUMN "applicationId",
ADD COLUMN     "ApplicationsApplicationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_ApplicationsApplicationId_fkey" FOREIGN KEY ("ApplicationsApplicationId") REFERENCES "applications"("applicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
