import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateRecruiterDto } from "./dto/create-recruiter.dto";
import { UpdateRecruiterDto } from "./dto/update-recruiter.dto";
import { RecruitersPrismaRepository } from "./repositories/prisma/recruiters.prisma.repository";
import { UsersPrismaRepository } from "src/users/repositories/prisma/users.prisma.repository";

@Injectable()
export class RecruitersService {
  constructor(
    private readonly repository: RecruitersPrismaRepository,
    private readonly usersRepository: UsersPrismaRepository,
  ) {}

  async create(id: number, createRecruiterDto: CreateRecruiterDto) {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    if (user.role !== "RECRUITER") {
      throw new BadRequestException(`User with ID ${id} is not a recruiter.`);
    }

    return this.repository.create(id, createRecruiterDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const recruiter = await this.repository.findOne(id);

    if (!recruiter) {
      throw new NotFoundException(`Recruiter not found`);
    }

    return recruiter;
  }

  async update(id: number, updateRecruiterDto: UpdateRecruiterDto) {
    return await this.repository.update(id, updateRecruiterDto);
  }

  async remove(id: number) {
    const recruiter = await this.repository.findOne(id);

    if (!recruiter) {
      throw new NotFoundException(`User not found`);
    }

    return this.repository.remove(id);
  }
}
