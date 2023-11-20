import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class SigninUserDto {
  @ApiProperty({ description: "User login e-mail." })
  @IsEmail()
  email: string;

  @ApiProperty({ description: "Insert user password." })
  @IsString()
  password: string;
}
