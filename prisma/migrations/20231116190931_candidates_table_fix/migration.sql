/*
  Warnings:

  - The `skills` column on the `candidateProfiles` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "candidateProfiles" DROP COLUMN "skills",
ADD COLUMN     "skills" TEXT[];
