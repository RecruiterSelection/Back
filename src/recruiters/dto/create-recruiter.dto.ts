import { IsNotEmpty, IsString, MaxLength } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRecruiterDto {
  @ApiProperty({
    description: "First name",
  })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: "Last name",
  })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: "Company where recruiter works",
  })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({
    description: "Phone number",
  })
  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @ApiProperty({
    description: "Recruiter's address",
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}
