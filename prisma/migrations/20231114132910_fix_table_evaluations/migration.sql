/*
  Warnings:

  - You are about to drop the column `applicationsApplicationId` on the `evaluations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_applicationsApplicationId_fkey";

-- DropForeignKey
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_recruitersRecruiterId_fkey";

-- AlterTable
ALTER TABLE "evaluations" DROP COLUMN "applicationsApplicationId";

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_recruitersRecruiterId_fkey" FOREIGN KEY ("recruitersRecruiterId") REFERENCES "Recruiters"("recruiterId") ON DELETE RESTRICT ON UPDATE CASCADE;
