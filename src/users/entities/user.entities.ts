import { $Enums, Users } from "@prisma/client";

export class UsersEntity implements Users {
  id: number;
  email: string;
  passwordHash: string;
  role: $Enums.Role;
  created_at: Date;
  updated_at: Date;
}
