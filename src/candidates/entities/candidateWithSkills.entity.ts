class TechnologySkill {
  skillId: number;
  name: string;
}

export class CandidateTechSkillEntity {
  id: number;
  candidateId: number;
  skillId: number;
  TechnologySkill: TechnologySkill;
}
