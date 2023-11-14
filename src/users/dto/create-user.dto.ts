import { IsEmail, IsEnum, IsString } from "@nestjs/class-validator";
import { Role } from "@prisma/client";

export class CreateUserDto {
  @IsEmail()
  email;
  @IsString()
  passwordHash;
  @IsEnum(Role)
  role;
}
