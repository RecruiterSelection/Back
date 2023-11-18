import { CandidateProfiles } from "@prisma/client";

export class CandidatesEntity implements CandidateProfiles {
  profileId: number;
  userId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  address: string;
  education: string;
  skills: string[];
  experience: string;
  references: string;
  firstAccess: boolean;
  created_at: Date;
  updated_at: Date;
}
