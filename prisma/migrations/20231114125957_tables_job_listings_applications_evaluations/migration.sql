-- CreateEnum
CREATE TYPE "JobTypes" AS ENUM ('FULL_TIME', 'PART_TIME', 'FREELANCE');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'REVIEWED', 'INTERVIEWED', 'HIRED', 'REJECTED');

-- CreateTable
CREATE TABLE "jobListings" (
    "jobId" SERIAL NOT NULL,
    "recruitersRecruiterId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "benefitis" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "jobType" "JobTypes" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobListings_pkey" PRIMARY KEY ("jobId")
);

-- CreateTable
CREATE TABLE "applications" (
    "applicationId" SERIAL NOT NULL,
    "jobListingsJobId" INTEGER NOT NULL,
    "candidateProfilesProfileId" INTEGER NOT NULL,
    "coverLetter" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "evaluations" (
    "evaluationId" SERIAL NOT NULL,
    "applicationsApplicationId" INTEGER NOT NULL,
    "recruitersRecruiterId" INTEGER NOT NULL,
    "comments" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("evaluationId")
);

-- AddForeignKey
ALTER TABLE "jobListings" ADD CONSTRAINT "jobListings_recruitersRecruiterId_fkey" FOREIGN KEY ("recruitersRecruiterId") REFERENCES "Recruiters"("recruiterId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_jobListingsJobId_fkey" FOREIGN KEY ("jobListingsJobId") REFERENCES "jobListings"("jobId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_candidateProfilesProfileId_fkey" FOREIGN KEY ("candidateProfilesProfileId") REFERENCES "candidateProfiles"("profileId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_applicationsApplicationId_fkey" FOREIGN KEY ("applicationsApplicationId") REFERENCES "applications"("applicationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_recruitersRecruiterId_fkey" FOREIGN KEY ("recruitersRecruiterId") REFERENCES "Recruiters"("recruiterId") ON DELETE CASCADE ON UPDATE CASCADE;
