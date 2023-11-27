import { Module } from "@nestjs/common";
import { JobSkillsService } from "./job-skills.service";
import { JobSkillsController } from "./job-skills.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";
import { JobsPrismaRepository } from "src/jobs/repositories/prisma/jobs.prisma.repository";
import { JobSkillsPrismaRepository } from "./repository/prisma/jobSkills.prisma.repository";

@Module({
  controllers: [JobSkillsController],
  providers: [
    JobSkillsService,
    PrismaService,
    TechnologySkillsPrismaRepository,
    JobsPrismaRepository,
    JobSkillsPrismaRepository,
  ],
})
export class JobSkillsModule {}
