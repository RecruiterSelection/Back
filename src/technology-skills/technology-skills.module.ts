import { Module } from "@nestjs/common";
import { TechnologySkillsService } from "./technology-skills.service";
import { TechnologySkillsController } from "./technology-skills.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { TechnologySkillsPrismaRepository } from "./repositories/prisma/technology-skills.prisma.repository";

@Module({
  controllers: [TechnologySkillsController],
  providers: [
    TechnologySkillsService,
    PrismaService,
    TechnologySkillsPrismaRepository,
  ],
})
export class TechnologySkillsModule {}
