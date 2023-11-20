import { IsEmail, IsEnum, IsString, IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: "User email",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "User password",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  passwordHash: string;

  @ApiProperty({
    description: "Type of user role",
    enum: Role,
    default: "CANDIDATE",
  })
  @IsEnum(Role)
  @IsOptional()
  role: Role = "CANDIDATE";
}
