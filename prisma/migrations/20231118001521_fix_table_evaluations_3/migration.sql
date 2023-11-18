-- DropForeignKey
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_applicationsApplicationId_fkey";

-- DropForeignKey
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_recruitersRecruiterId_fkey";

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_recruitersRecruiterId_fkey" FOREIGN KEY ("recruitersRecruiterId") REFERENCES "Recruiters"("recruiterId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_applicationsApplicationId_fkey" FOREIGN KEY ("applicationsApplicationId") REFERENCES "applications"("applicationId") ON DELETE CASCADE ON UPDATE CASCADE;
