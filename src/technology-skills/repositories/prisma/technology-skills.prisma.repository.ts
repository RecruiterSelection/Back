import { TechnologySkillsEnum } from "@prisma/client";
import { TechnologySkillsRepository } from "../technology-skills.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TechnologySkillsPrismaRepository
  implements TechnologySkillsRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async createMany(): Promise<void> {
    const enumValues = Object.values(TechnologySkillsEnum);

    await this.prisma.technologySkills.createMany({
      data: enumValues.map(name => ({ name })),
      skipDuplicates: true,
    });
  }
}
