-- AlterTable
ALTER TABLE "Recruiters" ADD COLUMN     "firstAccess" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "candidateProfiles" ADD COLUMN     "firstAccess" BOOLEAN NOT NULL DEFAULT true;
