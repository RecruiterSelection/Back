import { Module } from "@nestjs/common";
import { ApplicationsService } from "./applications.service";
import { ApplicationsController } from "./applications.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { CandidatesPrismaRepository } from "src/candidates/repositories/prisma/candidates.prisma.repository";
import { JobsPrismaRepository } from "src/jobs/repositories/prisma/jobs.prisma.repository";
import { ApllicationsPrismaRepository } from "./repositories/prisma/applications.prisma.repository";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";

@Module({
  controllers: [ApplicationsController],
  providers: [
    ApplicationsService,
    PrismaService,
    CandidatesPrismaRepository,
    JobsPrismaRepository,
    ApllicationsPrismaRepository,
    TechnologySkillsPrismaRepository,
  ],
})
export class ApplicationsModule {}
