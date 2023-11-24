import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateCandidateDto } from "./dto/create-candidate.dto";
import { UpdateCandidateDto } from "./dto/update-candidate.dto";
import { CandidatesPrismaRepository } from "./repositories/prisma/candidates.prisma.repository";
import { UsersPrismaRepository } from "src/users/repositories/prisma/users.prisma.repository";

@Injectable()
export class CandidatesService {
  constructor(
    private readonly repository: CandidatesPrismaRepository,
    private readonly usersRepository: UsersPrismaRepository,
  ) {}

  async create(id: number, createCandidateDto: CreateCandidateDto) {
    const user = await this.usersRepository.findOne(id);
    const alreadyRegisteredUser =
      await this.repository.findPreviousCandidates(id);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    if (user.role !== "CANDIDATE") {
      throw new BadRequestException(`User with ID ${id} is not a candidate.`);
    }

    if (alreadyRegisteredUser) {
      throw new ConflictException("User already registered as candidate.");
    }

    return await this.repository.create(id, createCandidateDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const candidate = await this.repository.findOne(id);
    if (!candidate) {
      throw new NotFoundException("Candidate not found");
    }
    return candidate;
  }

  async findCandidateWithSkills(candidateId: number) {
    const candidate =
      await this.repository.findCandidateWithSkills(candidateId);
    if (!candidate) {
      throw new NotFoundException("Candidate not found");
    }
    return candidate;
  }

  async getCandidatesWithApplications(candidateId: number) {
    const candidate =
      await this.repository.getCandidatesWithApplications(candidateId);
    if (!candidate) {
      throw new NotFoundException("Candidate not found");
    }

    return candidate;
  }

  async findCandidateByEmail(email: string) {
    const candidate = await this.repository.findCandidateByEmail(email);
    if (!candidate) {
      throw new NotFoundException("Candidate with this e-mail not found");
    }

    return candidate;
  }

  async update(id: number, updateCandidateDto: UpdateCandidateDto) {
    const candidate = await this.repository.findOne(id);

    if (!candidate) {
      throw new NotFoundException("Candidate not found");
    }
    return await this.repository.update(id, updateCandidateDto);
  }

  async remove(id: number) {
    const candidate = await this.repository.findOne(id);

    if (!candidate) {
      throw new NotFoundException("Candidate not found");
    }

    return await this.repository.remove(id);
  }
}
