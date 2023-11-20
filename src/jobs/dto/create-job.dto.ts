import { ApiProperty } from "@nestjs/swagger";
import { JobTypes } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateJobDto {
  @ApiProperty({
    description: "Job title",
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: "Job description",
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: "Requirements for the job",
  })
  @IsNotEmpty()
  @IsString()
  requirements: string;

  @ApiProperty({
    description: "Responsibilities concerning the job.",
  })
  @IsNotEmpty()
  @IsString()
  responsibilities: string;

  @ApiProperty({
    description: "Benefits of the job.",
  })
  @IsNotEmpty()
  @IsString()
  benefits: string;

  @ApiProperty({
    description: "Location where the job will take place.",
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    description: "Type of job.",
    enum: JobTypes,
    default: "FULL_TIME",
  })
  @IsNotEmpty()
  @IsEnum(JobTypes)
  jobType: JobTypes;
}
