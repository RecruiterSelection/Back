import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateApplicationDto {
  @ApiProperty({
    description: "Candidate's cover letter for the applying job.",
  })
  @IsString()
  @IsNotEmpty()
  coverLetter: string;

  @ApiProperty({
    description: "Candidate's resume.",
  })
  @IsNotEmpty()
  @IsString()
  resume: string;
}
