import { IsEmail, IsString } from "@nestjs/class-validator";

export class CreateUserDto {
  @IsEmail()
  to: string;

  @IsString()
  subject: string;

  @IsString()
  text: string;
}
