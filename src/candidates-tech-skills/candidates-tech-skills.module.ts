import { Module } from "@nestjs/common";
import { CandidatesTechSkillsService } from "./candidates-tech-skills.service";
import { CandidatesTechSkillsController } from "./candidates-tech-skills.controller";
import { CandidatesPrismaRepository } from "src/candidates/repositories/prisma/candidates.prisma.repository";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";
import { CandidatesTechSkillPrismaRepository } from "./repositories/prisma/candidates-tech-skills.prisma.repository";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [CandidatesTechSkillsController],
  providers: [
    CandidatesTechSkillsService,
    CandidatesPrismaRepository,
    TechnologySkillsPrismaRepository,
    CandidatesTechSkillPrismaRepository,
    PrismaService,
  ],
})
export class CandidatesTechSkillsModule {}
