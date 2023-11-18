/*
  Warnings:

  - A unique constraint covering the columns `[candidateProfilesProfileId]` on the table `applications` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[candidateProfilesProfileId,jobListingsJobId]` on the table `applications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "applications_candidateProfilesProfileId_key" ON "applications"("candidateProfilesProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "applications_candidateProfilesProfileId_jobListingsJobId_key" ON "applications"("candidateProfilesProfileId", "jobListingsJobId");
