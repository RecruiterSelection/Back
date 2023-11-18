import { Module } from "@nestjs/common";
import { CandidatesService } from "./candidates.service";
import { CandidatesController } from "./candidates.controller";
import { CandidatesPrismaRepository } from "./repositories/prisma/candidates.prisma.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersPrismaRepository } from "src/users/repositories/prisma/users.prisma.repository";

@Module({
  controllers: [CandidatesController],
  providers: [
    CandidatesService,
    CandidatesPrismaRepository,
    PrismaService,
    UsersPrismaRepository,
  ],
  exports: [CandidatesPrismaRepository],
})
export class CandidatesModule {}
