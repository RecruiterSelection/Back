import { Injectable } from "@nestjs/common";
import { TechnologySkillsPrismaRepository } from "./repositories/prisma/technology-skills.prisma.repository";

@Injectable()
export class TechnologySkillsService {
  constructor(private readonly repository: TechnologySkillsPrismaRepository) {}

  async populateSkills() {
    return this.repository.createMany();
  }
}
