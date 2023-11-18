import { IsNotEmpty, IsString } from "class-validator";

export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty()
  coverLetter: string;

  @IsNotEmpty()
  @IsString()
  resume: string;
}
