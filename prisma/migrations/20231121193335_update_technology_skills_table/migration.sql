/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `technologySkills` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "technologySkills_name_key" ON "technologySkills"("name");
