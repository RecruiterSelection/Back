import { IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class CreateCandidateDto {
  @ApiProperty({ description: "First name" })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: "Last name" })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: "Phone number" })
  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @ApiProperty({ description: "Candidate's address" })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: "Candidate's educational background" })
  @IsString()
  @IsNotEmpty()
  education: string;

  @ApiProperty({ description: "Candidate's previous work experience" })
  @IsString()
  @IsNotEmpty()
  experience: string;

  @ApiProperty({ description: "Job references" })
  @IsString()
  @IsNotEmpty()
  references: string;
}
