import { IsString } from "@nestjs/class-validator";

export class CreateRecruiterDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  companyName: string;
  @IsString()
  contactNumber: string;
  @IsString()
  address: string;
}
