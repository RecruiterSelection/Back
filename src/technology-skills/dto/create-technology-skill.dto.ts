import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTechnologySkillDto {
  @ApiProperty({
    description: "Name of the technology",
  })
  @IsString()
  name: string;
}
