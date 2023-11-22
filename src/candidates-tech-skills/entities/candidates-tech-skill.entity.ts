import { CandidateTechSkills } from "@prisma/client";

export class CandidatesTechSkillEntity implements CandidateTechSkills {
  id: number;
  candidateId: number;
  skillId: number;
}
