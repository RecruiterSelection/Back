import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersPrismaRepository } from "./repositories/prisma/users.prisma.repository";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersPrismaRepository],
})
export class UsersModule {}
