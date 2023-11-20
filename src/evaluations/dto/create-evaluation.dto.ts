import { IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Max, Min } from "class-validator";

export class CreateEvaluationDto {
  @ApiProperty({ description: "Comments on the candidate performance." })
  @IsNotEmpty()
  @IsString()
  comments: string;

  @ApiProperty({
    description: "Rating of the candidate performance.",
    maximum: 10,
    minimum: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(10)
  rating: number;
}
