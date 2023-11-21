import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";
import { UsersModule } from "./users/users.module";
import { RecruitersModule } from "./recruiters/recruiters.module";
import { CandidatesModule } from "./candidates/candidates.module";
import { JobsModule } from "./jobs/jobs.module";
import { ApplicationsModule } from "./applications/applications.module";
import { EvaluationsModule } from "./evaluations/evaluations.module";
import { AuthModule } from "./auth/auth.module";
import { TechnologySkillsModule } from './technology-skills/technology-skills.module';
import { CandidatesTechSkillsModule } from './candidates-tech-skills/candidates-tech-skills.module';

@Module({
  imports: [
    UsersModule,
    RecruitersModule,
    CandidatesModule,
    JobsModule,
    ApplicationsModule,
    EvaluationsModule,
    AuthModule,
    TechnologySkillsModule,
    CandidatesTechSkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
