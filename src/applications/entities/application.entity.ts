import { $Enums, Applications } from "@prisma/client";

export class ApplicationEntity implements Applications {
  applicationId: number;
  jobListingsJobId: number;
  candidateProfilesProfileId: number;
  coverLetter: string;
  resume: string;
  status: $Enums.ApplicationStatus;
  created_at: Date;
  updated_at: Date;
}
