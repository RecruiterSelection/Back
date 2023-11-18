/*
  Warnings:

  - Added the required column `applicationId` to the `evaluations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "evaluations" ADD COLUMN     "applicationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "applications"("applicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
