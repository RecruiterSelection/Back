import { IsString } from "class-validator";

export class CreateJobDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  requirements: string;

  @IsString()
  responsabilities: string;

  @IsString()
  benefits: string;

  @IsString()
  location: string;

  @IsString()
  jobType: string[];
}
