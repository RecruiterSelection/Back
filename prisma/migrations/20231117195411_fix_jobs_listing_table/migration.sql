/*
  Warnings:

  - You are about to drop the column `benefitis` on the `jobListings` table. All the data in the column will be lost.
  - Added the required column `benefits` to the `jobListings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jobListings" DROP COLUMN "benefitis",
ADD COLUMN     "benefits" TEXT NOT NULL;
