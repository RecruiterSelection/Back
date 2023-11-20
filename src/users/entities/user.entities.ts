import { Role, Users } from "@prisma/client";

export class UsersEntity implements Users {
  reset_token: string;
  id: number;
  email: string;
  passwordHash: string;
  role: Role;
  created_at: Date;
  updated_at: Date;
}
