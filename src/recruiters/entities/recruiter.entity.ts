import { Recruiters } from "@prisma/client";

export class RecruitersEntity implements Recruiters {
  recruiterId: number;
  userId: number;
  firstName: string;
  lastName: string;
  companyName: string;
  contactNumber: string;
  address: string;
  created_at: Date;
  updated_at: Date;
  firstAccess: boolean;
}
