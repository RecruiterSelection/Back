import { IsEmail, IsString } from "@nestjs/class-validator";

export class SendEmailDto {
  @IsEmail()
  to: string;

  @IsString()
  subject: string;

  @IsString()
  text: string;
}
