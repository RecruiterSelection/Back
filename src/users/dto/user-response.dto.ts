import { Role } from "@prisma/client";
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  Min,
} from "class-validator";

export class UserResponseDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(Role)
  role: Role;

  @IsBoolean()
  firstAccess: boolean = true;

  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @IsDate()
  @IsNotEmpty()
  updated_at: Date;
}
