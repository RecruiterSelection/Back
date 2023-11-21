import { ApiProperty } from "@nestjs/swagger";
import { TechnologySkillsEnum } from "@prisma/client";
import { IsEnum, IsNotEmpty } from "class-validator";

export class CreateTechnologySkillDto {
  @ApiProperty({
    description: "Name of the technology",
    enum: TechnologySkillsEnum,
  })
  @IsEnum(TechnologySkillsEnum, { each: true })
  @IsNotEmpty()
  name: TechnologySkillsEnum;
}
