import { UsersEntity } from "../entities/user.entities";

export abstract class UsersRepository {
  abstract findByEmail(email: string): Promise<UsersEntity>;
  abstract create(user: any): Promise<UsersEntity>;
  abstract update(user: any): Promise<UsersEntity>;
  abstract delete(user: any): Promise<void>;
  abstract findOne(id: string): Promise<UsersEntity>;
  abstract findAll(): Promise<UsersEntity[]>;
}
