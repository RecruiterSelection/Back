import { TechnologySkills } from "@prisma/client";

export class TechnologySkillEntity implements TechnologySkills {
  skillId: number;
  name: string;
}
