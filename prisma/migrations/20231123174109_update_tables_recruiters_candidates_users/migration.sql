/*
  Warnings:

  - You are about to drop the column `firstAccess` on the `Recruiters` table. All the data in the column will be lost.
  - You are about to drop the column `firstAccess` on the `candidateProfiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recruiters" DROP COLUMN "firstAccess";

-- AlterTable
ALTER TABLE "candidateProfiles" DROP COLUMN "firstAccess";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "firstAccess" BOOLEAN DEFAULT true;
