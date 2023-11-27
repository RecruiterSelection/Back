import { JobSkill } from "@prisma/client";

export class JobSkillEntity implements JobSkill {
  id: number;
  jobId: number;
  skillId: number;
}
