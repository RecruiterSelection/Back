import { CreateUserDto } from "../dto/create-user.dto";
import { UserAuthDto } from "../dto/user-auth.dto";
import { UserResponseDto } from "../dto/user-response.dto";
import { UsersEntity } from "../entities/user.entities";

export abstract class UsersRepository {
  abstract findByEmail(email: string): Promise<UserResponseDto>;
  abstract create(ucreateUserDto: CreateUserDto): Promise<UsersEntity>;
  abstract update(id: number, body: any): Promise<UsersEntity>;
  abstract remove(id: number): Promise<UsersEntity>;
  abstract findOne(id: number): Promise<UserResponseDto>;
  abstract findAll(): Promise<UserResponseDto[]>;
  abstract findByEmailForAuth(email: string): Promise<UserAuthDto>;
  abstract updateToken(email: string, token: string): Promise<void>;
  abstract updatePassword(id: number, password: string): Promise<void>;
}
