import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class CreateManyTechnologySkillDto {
  @ApiProperty({
    description: "Name of the technology",
  })
  @IsArray()
  name: string[];
}
