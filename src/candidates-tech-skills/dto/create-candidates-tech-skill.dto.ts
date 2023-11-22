import { IsNumber } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCandidatesTechSkillDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: "Id of the candidate." })
  candidateId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: "Id of the tech-skill." })
  skillId: number;
}
