import {
  ConflictException,
  HttpCode,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { UsersPrismaRepository } from "./repositories/prisma/users.prisma.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { MailService } from "src/utils/mail.service";
import { randomUUID } from "crypto";

@Injectable()
export class UsersService {
  constructor(
    private readonly repository: UsersPrismaRepository,
    private readonly mailService: MailService,
  ) {}

  async create(createUserDTO: CreateUserDto) {
    const user = await this.repository.findByEmail(createUserDTO.email);
    if (user) {
      throw new ConflictException("Email already exists");
    }

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

  async findByEmail(email: string) {
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new NotFoundException("User not Found");
    }
    return user;
  }

  async findByEmailForAuth(email: string) {
    const user = await this.repository.findByEmailForAuth(email);
    if (!user) {
      throw new NotFoundException("User not Found");
    }
    return user;
  }

  async sendEmailResetPassword(email: string) {
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new NotFoundException("User with this e-mail not found");
    }

    const resetToken = randomUUID();

    await this.repository.updateToken(email, resetToken);

    const getUserName = (email: string) => {
      const regex = /^[^@]+/;
      const match = email.match(regex);
      return match ? match[0] : null;
    };

    const userName = getUserName(email);

    const resetPasswordTemplate = await this.mailService.resetPasswordTemplate(
      email,
      userName,
      resetToken,
    );

    await this.mailService.sendEmail(resetPasswordTemplate);
  }

  async resetPassword(password: string, resetToken: string) {
    const user = await this.repository.findByToken(resetToken);
    if (!user) {
      throw new NotFoundException("User with this e-mail not found");
    }
    await this.repository.updatePassword(user.id, password);
  }
}
