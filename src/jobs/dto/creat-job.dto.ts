import { IsString } from "@nestjs/class-validator";
import { JobTypes } from "@prisma/client";
import { IsEnum } from "class-validator";

export class CreateJobDto {
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

  @IsEnum(JobTypes)
  jobType: string;
}
