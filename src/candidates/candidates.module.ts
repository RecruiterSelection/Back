import { Module } from "@nestjs/common";
import { CandidatesService } from "./candidates.service";
import { CandidatesController } from "./candidates.controller";
import { CandidatesPrismaRepository } from "./repositories/prisma/candidates.prisma.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersPrismaRepository } from "src/users/repositories/prisma/users.prisma.repository";
import { TechnologySkillsPrismaRepository } from "src/technology-skills/repositories/prisma/technology-skills.prisma.repository";
import { TechnologySkillsModule } from "src/technology-skills/technology-skills.module";

@Module({
  controllers: [CandidatesController],
  providers: [
    CandidatesService,
    CandidatesPrismaRepository,
    PrismaService,
    UsersPrismaRepository,
    TechnologySkillsPrismaRepository,
  ],
  imports: [TechnologySkillsModule],
  exports: [CandidatesPrismaRepository],
})
export class CandidatesModule {}
