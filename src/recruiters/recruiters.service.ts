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

  findAll() {
    return `This action returns all recruiters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recruiter`;
  }

  update(id: number, updateRecruiterDto: UpdateRecruiterDto) {
    return `This action updates a #${id} recruiter`;
  }

  remove(id: number) {
    return `This action removes a #${id} recruiter`;
  }
}
