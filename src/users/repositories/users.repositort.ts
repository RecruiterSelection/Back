import { UserAuthDto } from "../dto/user-auth.dto";
import { UserResponseDto } from "../dto/user-response.dto";
import { UsersEntity } from "../entities/user.entities";

export abstract class UsersRepository {
  abstract findByEmail(email: string): Promise<UserResponseDto>;
  abstract create(user: any): Promise<UsersEntity>;
  abstract update(user: any): Promise<UsersEntity>;
  abstract delete(user: any): Promise<void>;
  abstract findOne(id: string): Promise<UsersEntity>;
  abstract findAll(): Promise<UserResponseDto[]>;
  abstract findByEmailForAuth(): Promise<UserAuthDto>;
}
