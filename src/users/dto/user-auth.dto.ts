import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class UserAuthDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  passwordHash: string;
}
