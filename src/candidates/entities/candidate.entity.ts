import { CandidateProfiles, TechnologySkills } from "@prisma/client";

export class CandidatesEntity implements CandidateProfiles {
  profileId: number;
  userId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  address: string;
  education: string;
  skills: TechnologySkills[];
  experience: string;
  references: string;
  firstAccess: boolean;
  created_at: Date;
  updated_at: Date;
}
