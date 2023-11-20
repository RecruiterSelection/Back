import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersPrismaRepository } from "./repositories/prisma/users.prisma.repository";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailService } from "src/utils/mail.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersPrismaRepository, MailService],
  exports: [UsersService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      },
    }),
  ],
})
export class UsersModule {}
