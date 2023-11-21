import { $Enums, TechnologySkills } from "@prisma/client";

export class TechnologySkillEntity implements TechnologySkills {
  skillId: number;
  name: $Enums.TechnologySkillsEnum;
}
