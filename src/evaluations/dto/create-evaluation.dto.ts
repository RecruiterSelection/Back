import { IsNotEmpty } from "@nestjs/class-validator";
import { IsInt, IsString, Max } from "class-validator";

export class CreateEvaluationDto {
  @IsNotEmpty()
  @IsString()
  comments: string;
  @IsNotEmpty()
  @IsInt()
  @Max(10)
  rating: number;
}
