import { Module } from "@nestjs/common";
import { ApplicationsService } from "./applications.service";
import { ApplicationsController } from "./applications.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { CandidatesPrismaRepository } from "src/candidates/repositories/prisma/candidates.prisma.repository";
import { JobsPrismaRepository } from "src/jobs/repositories/prisma/jobs.prisma.repository";
import { ApllicationsPrismaRepository } from "./repositories/prisma/applications.prisma.repository";

@Module({
  controllers: [ApplicationsController],
  providers: [
    ApplicationsService,
    PrismaService,
    CandidatesPrismaRepository,
    JobsPrismaRepository,
    ApllicationsPrismaRepository,
  ],
})
export class ApplicationsModule {}
