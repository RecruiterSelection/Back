import { $Enums, JobListings } from "@prisma/client";

export class JobEntity implements JobListings {
  jobId: number;
  recruitersRecruiterId: number;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  location: string;
  jobType: $Enums.JobTypes;
  created_at: Date;
  updated_at: Date;
}
