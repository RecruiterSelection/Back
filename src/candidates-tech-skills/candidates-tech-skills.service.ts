import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateCandidatesTechSkillDto } from "./dto/update-candidates-tech-skill.dto";
import { CandidatesTechSkillPrismaRepository } from "./repositories/prisma/candidates-tech-skills.prisma.repository";
import { CandidatesPrismaRepository } from "src/candidates/repositories/prisma/candidates.prisma.repository";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";

@Injectable()
export class CandidatesTechSkillsService {
  constructor(
    private readonly repository: CandidatesTechSkillPrismaRepository,
    private readonly candidatesRepository: CandidatesPrismaRepository,
    private readonly techSkillsRepository: TechnologySkillsPrismaRepository,
  ) {}

  async create(candidateId: number, skillId: number) {
    const candidate = await this.candidatesRepository.findOne(candidateId);
    const skill = await this.techSkillsRepository.findOne(skillId);

    if (!candidate) {
      throw new NotFoundException("Candidate not found.");
    }
    if (!skill) {
      throw new NotFoundException("Skill not found.");
    }

    return await this.repository.create(candidateId, skillId);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const candidateTechSkill = await this.repository.findOne(id);
    if (!candidateTechSkill) {
      throw new NotFoundException("Candidate tech skill not found.");
    }
    return candidateTechSkill;
  }

  async update(
    id: number,
    updateCandidatesTechSkillDto: UpdateCandidatesTechSkillDto,
  ) {
    const candidateTechSkill = await this.repository.findOne(id);
    if (!candidateTechSkill) {
      throw new NotFoundException("Candidate tech skill not found.");
    }

    return await this.repository.update(id, updateCandidatesTechSkillDto);
  }

  async remove(id: number) {
    const candidateTechSkill = await this.repository.findOne(id);
    if (!candidateTechSkill) {
      throw new NotFoundException("Candidate tech skill not found.");
    }
    await this.repository.remove(id);
  }
}
