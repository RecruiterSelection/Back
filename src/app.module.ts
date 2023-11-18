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

@Module({
  imports: [
    UsersModule,
    RecruitersModule,
    CandidatesModule,
    JobsModule,
    ApplicationsModule,
    EvaluationsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
