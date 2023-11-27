import { Injectable } from "@nestjs/common";
import { JobSkillEntity } from "src/job-skills/entities/job-skill.entity";
import { JobsPrismaRepository } from "src/jobs/repositories/prisma/jobs.prisma.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";

@Injectable()
export class JobSkillsPrismaRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly techSkillsRepository: TechnologySkillsPrismaRepository,
    private readonly jobsRepository: JobsPrismaRepository,
  ) {}

  async create(jobId: number, skillId: number): Promise<JobSkillEntity> {
    const skill = await this.techSkillsRepository.findOne(skillId);
    const job = await this.jobsRepository.findOne(jobId);

    return this.prisma.jobSkill.create({
      data: { jobId: job.jobId, skillId: skill.skillId },
    });
  }

  async findMany(): Promise<JobSkillEntity[]> {
    return this.prisma.jobSkill.findMany({
      include: {
        Job: {},
        Skill: {},
      },
    });
  }

  async findOne(jobSkillId: number): Promise<JobSkillEntity> {
    return this.prisma.jobSkill.findFirst({
      where: { id: jobSkillId },
      include: {
        Job: {},
        Skill: {},
      },
    });
  }

  async update() {
    return {};
  }

  async delete(jobSkillId: number): Promise<JobSkillEntity> {
    return this.prisma.jobSkill.delete({ where: { id: jobSkillId } });
  }

  async findPreviousJobSkill(
    jobId: number,
    skillId: number,
  ): Promise<JobSkillEntity> {
    return await this.prisma.jobSkill.findFirst({
      where: {
        jobId,
        skillId,
      },
    });
  }
}
