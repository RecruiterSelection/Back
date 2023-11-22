import { Injectable } from "@nestjs/common";
import { UpdateCandidatesTechSkillDto } from "src/candidates-tech-skills/dto/update-candidates-tech-skill.dto";
import { CandidatesTechSkillEntity } from "src/candidates-tech-skills/entities/candidates-tech-skill.entity";
import { CandidatesPrismaRepository } from "src/candidates/repositories/prisma/candidates.prisma.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";

@Injectable()
export class CandidatesTechSkillPrismaRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly techSkillsRepository: TechnologySkillsPrismaRepository,
    private readonly candidatesRepository: CandidatesPrismaRepository,
  ) {}

  async create(
    candidateId: number,
    skillId: number,
  ): Promise<CandidatesTechSkillEntity> {
    const candidate = await this.candidatesRepository.findOne(candidateId);
    const skill = await this.techSkillsRepository.findOne(skillId);

    return this.prisma.candidateTechSkills.create({
      data: { candidateId: candidate.profileId, skillId: skill.skillId },
    });
  }

  async findAll(): Promise<CandidatesTechSkillEntity[]> {
    return this.prisma.candidateTechSkills.findMany({
      include: {
        Candidate: {
          select: {
            firstName: true,
            lastName: true,
            education: true,
            experience: true,
            references: true,
            address: true,
            userId: true,
          },
        },
        TechnologySkill: { select: { name: true } },
      },
    });
  }

  async findOne(id: number): Promise<CandidatesTechSkillEntity> {
    return this.prisma.candidateTechSkills.findUnique({
      where: { id },
      include: {
        Candidate: {
          select: {
            firstName: true,
            lastName: true,
            education: true,
            experience: true,
            references: true,
            address: true,
            userId: true,
          },
        },
        TechnologySkill: { select: { name: true } },
      },
    });
  }

  async update(
    id: number,
    updateCandidatesTechSkillDto: UpdateCandidatesTechSkillDto,
  ): Promise<CandidatesTechSkillEntity> {
    return this.prisma.candidateTechSkills.update({
      where: { id },
      data: updateCandidatesTechSkillDto,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.candidateTechSkills.delete({ where: { id } });
  }
}
