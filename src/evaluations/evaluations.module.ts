import { Module } from "@nestjs/common";
import { EvaluationsService } from "./evaluations.service";
import { EvaluationsController } from "./evaluations.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { RecruitersPrismaRepository } from "src/recruiters/repositories/prisma/recruiters.prisma.repository";
import { EvaluationsPrismaRepository } from "./repositories/prisma/evaluations.prisma.repository";
import { ApllicationsPrismaRepository } from "src/applications/repositories/prisma/applications.prisma.repository";

@Module({
  controllers: [EvaluationsController],
  providers: [
    EvaluationsService,
    PrismaService,
    RecruitersPrismaRepository,
    EvaluationsPrismaRepository,
    ApllicationsPrismaRepository,
  ],
})
export class EvaluationsModule {}
