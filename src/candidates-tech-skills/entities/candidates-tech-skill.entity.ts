import { CandidateTechSkills } from "@prisma/client";

export class CandidatesTechSkill implements CandidateTechSkills {
  id: number;
  candidateId: number;
  skillId: number;
}
