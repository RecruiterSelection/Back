import { IsNotEmpty } from "@nestjs/class-validator";
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateCandidateDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  education: string;

  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(50)
  @MinLength(1, {
    each: true,
    message: `Too short. Minimal length is $value characters`,
  })
  @MaxLength(50, {
    each: true,
    message: "Too long. Maximal length is $value characters",
  })
  skills: string[];

  @IsString()
  @IsNotEmpty()
  experience: string;

  @IsString()
  @IsNotEmpty()
  references: string;
}
