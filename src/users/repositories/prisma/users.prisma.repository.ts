import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersEntity } from "src/users/entities/user.entities";
import * as bcrypt from "bcrypt";
import { Injectable } from "@nestjs/common";
import { UserResponseDto } from "src/users/dto/user-response.dto";

@Injectable()
export class UsersPrismaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UsersEntity> {
    const salt = await bcrypt.genSalt(10);
    createUserDto.passwordHash = await bcrypt.hash(
      createUserDto.passwordHash,
      salt,
    );
    console.log(createUserDto, "prisma Repository");
    return await this.prisma.users.create({ data: { ...createUserDto } });
  }

  async findAll(): Promise<UserResponseDto[]> {
    return await this.prisma.users.findMany({
      select: {
        id: true,
        email: true,
        created_at: true,
        updated_at: true,
        role: true,
        passwordHash: false,
      },
    });
  }

  async findOne(id: number): Promise<UserResponseDto> {
    return await this.prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        created_at: true,
        updated_at: true,
        role: true,
        passwordHash: false,
      },
    });
  }

  async update(id: number, body: any): Promise<UsersEntity> {
    return await this.prisma.users.update({
      where: { id },
      data: { ...body },
    });
  }

  async remove(id: number): Promise<UsersEntity> {
    return await this.prisma.users.delete({ where: { id } });
  }

  async findByEmail(email: string): Promise<UserResponseDto> {
    const user = await this.prisma.users.findFirst({
      where: { email },
      select: {
        id: true,
        email: true,
        created_at: true,
        updated_at: true,
        role: true,
        passwordHash: false,
      },
    });

    return user;
  }
}
