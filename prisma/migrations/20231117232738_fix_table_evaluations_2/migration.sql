/*
  Warnings:

  - You are about to drop the column `ApplicationsApplicationId` on the `evaluations` table. All the data in the column will be lost.
  - Added the required column `applicationsApplicationId` to the `evaluations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_ApplicationsApplicationId_fkey";

-- AlterTable
ALTER TABLE "evaluations" DROP COLUMN "ApplicationsApplicationId",
ADD COLUMN     "applicationsApplicationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_applicationsApplicationId_fkey" FOREIGN KEY ("applicationsApplicationId") REFERENCES "applications"("applicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
