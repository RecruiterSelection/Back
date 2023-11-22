import { TechnologySkillsRepository } from "../technology-skills.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { TechnologySkillEntity } from "src/technology-skills/entities/technology-skill.entity";
import { UpdateTechnologySkillDto } from "src/technology-skills/dto/update-technology-skill.dto";
import { CreateTechnologySkillDto } from "src/technology-skills/dto/create-technology-skill.dto";
import { CreateManyTechnologySkillDto } from "src/technology-skills/dto/create-many-technology-skill.dto";

@Injectable()
export class TechnologySkillsPrismaRepository
  implements TechnologySkillsRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createTechnologySkillDto: CreateTechnologySkillDto,
  ): Promise<TechnologySkillEntity> {
    return await this.prisma.technologySkills.create({
      data: { ...createTechnologySkillDto },
    });
  }

  async createMany(
    createManyTechnologySkillDto: CreateManyTechnologySkillDto,
  ): Promise<TechnologySkillEntity[]> {
    const dataToInsert = createManyTechnologySkillDto.name.map(name => {
      return { name };
    });

    await this.prisma.technologySkills.createMany({
      data: dataToInsert,
    });

    return this.prisma.technologySkills.findMany({
      where: { name: { in: createManyTechnologySkillDto.name } },
    });
  }

  async findAll(): Promise<TechnologySkillEntity[]> {
    return await this.prisma.technologySkills.findMany();
  }

  async findOne(skillId: number): Promise<TechnologySkillEntity> {
    return await this.prisma.technologySkills.findUnique({
      where: { skillId },
    });
  }

  async update(
    updateTechnologySkillDto: UpdateTechnologySkillDto,
    skillId: number,
  ): Promise<UpdateTechnologySkillDto> {
    return this.prisma.technologySkills.update({
      data: updateTechnologySkillDto,
      where: { skillId },
    });
  }

  async remove(skillId: number): Promise<void> {
    await this.prisma.technologySkills.delete({ where: { skillId } });
  }

  async findPreviousSkill(name: string): Promise<TechnologySkillEntity> {
    const skill = await this.prisma.technologySkills.findFirst({
      where: { name },
    });

    return skill;
  }

  async findManyPreviousSkills(
    createTechnologySkillDto: CreateManyTechnologySkillDto,
  ): Promise<TechnologySkillEntity[] | null> {
    const names = createTechnologySkillDto.name;

    return await this.prisma.technologySkills.findMany({
      where: { name: { in: names } },
    });
  }
}
