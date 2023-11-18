import { Module } from "@nestjs/common";
import { RecruitersService } from "./recruiters.service";
import { RecruitersController } from "./recruiters.controller";
import { RecruitersPrismaRepository } from "./repositories/prisma/recruiters.prisma.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersPrismaRepository } from "src/users/repositories/prisma/users.prisma.repository";

@Module({
  controllers: [RecruitersController],
  providers: [
    RecruitersService,
    RecruitersPrismaRepository,
    PrismaService,
    UsersPrismaRepository,
  ],
  imports: [],
  exports: [RecruitersPrismaRepository],
})
export class RecruitersModule {}
