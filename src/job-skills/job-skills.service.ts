import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { JobSkillsPrismaRepository } from "./repository/prisma/jobSkills.prisma.repository";
import { JobsPrismaRepository } from "src/jobs/repositories/prisma/jobs.prisma.repository";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";
import { CandidatesPrismaRepository } from "src/candidates/repositories/prisma/candidates.prisma.repository";

@Injectable()
export class JobSkillsService {
  constructor(
    private readonly repository: JobSkillsPrismaRepository,
    private readonly techSkillsRepository: TechnologySkillsPrismaRepository,
    private readonly jobsRepository: JobsPrismaRepository,
    private readonly candidatesRepository: CandidatesPrismaRepository,
  ) {}

  async create(jobId: number, skillId: number) {
    const skill = await this.techSkillsRepository.findOne(skillId);
    const job = await this.jobsRepository.findOne(jobId);

    const alreadyRegisteredJobSkill =
      await this.repository.findPreviousJobSkill(jobId, skillId);

    if (!skill) {
      throw new NotFoundException("Skill not found.");
    }
    if (!job) {
      throw new NotFoundException("Job not found.");
    }

    if (alreadyRegisteredJobSkill) {
      throw new ConflictException(
        "Tech skill already registered for this job.",
      );
    }
    return await this.repository.create(jobId, skillId);
  }

  async findAll() {
    return await this.repository.findMany();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  // async update(id: number, updateJobSkillDto: UpdateJobSkillDto) {
  //   return `This action updates a #${id} jobSkill`;
  // }

  async remove(id: number) {
    return await this.repository.delete(id);
  }

  async matchingJobs(candidateId: number) {
    const candidate = await this.candidatesRepository.findOne(candidateId);
    if (!candidate) {
      throw new NotFoundException("Candidate not found.");
    }

    return await this.repository.matchingJobs(candidate.profileId);
  }
}
