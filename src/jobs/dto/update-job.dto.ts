import { PartialType } from "@nestjs/mapped-types";
import { CreateJobDto } from "./creat-job.dto";

export class UpdateJobDto extends PartialType(CreateJobDto) {}
