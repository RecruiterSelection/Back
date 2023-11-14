import { HttpCode, Injectable, NotFoundException } from "@nestjs/common";
import { UsersPrismaRepository } from "./repositories/prisma/users.prisma.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersPrismaRepository) {}

  async create(createUserDTO: CreateUserDto) {
    return await this.repository.create(createUserDTO);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  async update(id: number, updateUserDTO: UpdateUserDto) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException("User not Found");
    }
    return await this.repository.update(id, updateUserDTO);
  }

  @HttpCode(204)
  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException("User not Found");
    }

    this.repository.remove(id);
  }
}
