-- CreateEnum
CREATE TYPE "TechnologySkillsEnum" AS ENUM ('JavaScript', 'Python', 'Django', 'React', 'Angular', 'Vue', 'NodeJS', 'TypeScript', 'Ruby', 'Rails', 'Java', 'SpringBoot', 'Kotlin', 'PHP', 'Laravel', 'Swift', 'ObjectiveC', 'Android', 'iOS', 'Xamarin', 'Flutter', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'SQL', 'NoSQL', 'GraphQL', 'REST', 'Sass', 'CSS', 'HTML', 'WebAssembly', 'Go', 'Rust', 'CSharp', 'DotNet', 'CPlusPlus', 'C', 'Perl', 'ShellScripting', 'MachineLearning', 'TensorFlow', 'PyTorch', 'DataScience', 'DevOps', 'CyberSecurity', 'Blockchain', 'Solidity', 'SmartContracts', 'AR', 'VR', 'GameDevelopment', 'Unity', 'UnrealEngine');

-- DropEnum
DROP TYPE "TechnologySkills";

-- CreateTable
CREATE TABLE "technologySkills" (
    "skillId" SERIAL NOT NULL,
    "name" "TechnologySkillsEnum" NOT NULL,

    CONSTRAINT "technologySkills_pkey" PRIMARY KEY ("skillId")
);

-- CreateTable
CREATE TABLE "candidateTechSkills" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "candidateTechSkills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "candidateTechSkills" ADD CONSTRAINT "candidateTechSkills_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "candidateProfiles"("profileId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidateTechSkills" ADD CONSTRAINT "candidateTechSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "technologySkills"("skillId") ON DELETE CASCADE ON UPDATE CASCADE;
