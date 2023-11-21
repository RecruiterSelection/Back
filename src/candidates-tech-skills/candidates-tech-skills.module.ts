import { Module } from "@nestjs/common";
import { CandidatesTechSkillsService } from "./candidates-tech-skills.service";
import { CandidatesTechSkillsController } from "./candidates-tech-skills.controller";

@Module({
  controllers: [CandidatesTechSkillsController],
  providers: [CandidatesTechSkillsService],
})
export class CandidatesTechSkillsModule {}
