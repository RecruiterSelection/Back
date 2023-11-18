/*
  Warnings:

  - The `skills` column on the `candidateProfiles` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TechnologySkills" AS ENUM ('JavaScript', 'Python', 'Django', 'React', 'Angular', 'Vue', 'NodeJS', 'TypeScript', 'Ruby', 'Rails', 'Java', 'SpringBoot', 'Kotlin', 'PHP', 'Laravel', 'Swift', 'ObjectiveC', 'Android', 'iOS', 'Xamarin', 'Flutter', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'SQL', 'NoSQL', 'GraphQL', 'REST', 'Sass', 'CSS', 'HTML', 'WebAssembly', 'Go', 'Rust', 'CSharp', 'DotNet', 'CPlusPlus', 'C', 'Perl', 'ShellScripting', 'MachineLearning', 'TensorFlow', 'PyTorch', 'DataScience', 'DevOps', 'CyberSecurity', 'Blockchain', 'Solidity', 'SmartContracts', 'AR', 'VR', 'GameDevelopment', 'Unity', 'UnrealEngine');

-- AlterTable
ALTER TABLE "candidateProfiles" DROP COLUMN "skills",
ADD COLUMN     "skills" "TechnologySkills"[];
