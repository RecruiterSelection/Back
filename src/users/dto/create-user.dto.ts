import { IsEmail, IsEnum, IsString, IsNotEmpty } from "@nestjs/class-validator";
import { Role } from "@prisma/client";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ["transform"],
  })
  passwordHash: string;

  @IsEnum(Role)
  @IsOptional()
  role: string;
}
