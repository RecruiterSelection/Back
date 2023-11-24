import { CandidateProfiles } from "@prisma/client";

export class CandidatesWithUserMailEntity implements CandidateProfiles {
  profileId: number;
  userId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  address: string;
  education: string;
  experience: string;
  references: string;
  created_at: Date;
  updated_at: Date;
  user: UserEntity;
}

export class UserEntity {
  email: string;
  id: number;
}
