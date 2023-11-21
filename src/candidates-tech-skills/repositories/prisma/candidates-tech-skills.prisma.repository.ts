import { CandidatesPrismaRepository } from "src/candidates/repositories/prisma/candidates.prisma.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";

export class CandidatesTechSkillPrismaRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly techSkillsRepository: TechnologySkillsPrismaRepository,
    private readonly candidatesRepository: CandidatesPrismaRepository,
  ) {}
}
