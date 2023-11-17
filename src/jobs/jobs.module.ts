import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { JobsController } from "./jobs.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { JobsPrismaRepository } from "./repositories/prisma/jobs.prisma.repository";
import { RecruitersPrismaRepository } from "src/recruiters/repositories/prisma/recruiters.prisma.repository";

@Module({
  controllers: [JobsController],
  providers: [
    JobsService,
    PrismaService,
    JobsPrismaRepository,
    RecruitersPrismaRepository,
  ],
})
export class JobsModule {}
