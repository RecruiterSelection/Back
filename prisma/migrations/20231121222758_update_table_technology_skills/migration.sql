/*
  Warnings:

  - Changed the type of `name` on the `technologySkills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "technologySkills" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TechnologySkillsEnum";

-- CreateIndex
CREATE UNIQUE INDEX "technologySkills_name_key" ON "technologySkills"("name");
