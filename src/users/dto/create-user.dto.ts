import { IsEmail, IsEnum, IsString, IsNotEmpty } from "@nestjs/class-validator";
import { Role } from "@prisma/client";
import { IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  passwordHash: string;

  @IsEnum(Role)
  @IsOptional()
  role: Role;
}
