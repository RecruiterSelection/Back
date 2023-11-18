import { JobTypes } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  requirements: string;

  @IsNotEmpty()
  @IsString()
  responsibilities: string;

  @IsNotEmpty()
  @IsString()
  benefits: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsEnum(JobTypes)
  jobType: JobTypes;
}
