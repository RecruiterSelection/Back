import { Injectable } from "@nestjs/common";
import { CreateCandidateDto } from "src/candidates/dto/create-candidate.dto";
import { UpdateCandidateDto } from "src/candidates/dto/update-candidate.dto";
import { CandidatesEntity } from "src/candidates/entities/candidate.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CandidatesPrismaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    id: number,
    createCandidateDto: CreateCandidateDto,
  ): Promise<CandidatesEntity> {
    const user = await this.prisma.users.findFirst({ where: { id } });

    return this.prisma.candidateProfiles.create({
      data: { userId: user.id, ...createCandidateDto },
    });
  }

  async findAll(): Promise<CandidatesEntity[]> {
    return await this.prisma.candidateProfiles.findMany({
      include: { user: { select: { email: true, id: true } } },
    });
  }

  async findOne(id: number): Promise<CandidatesEntity> {
    return await this.prisma.candidateProfiles.findUnique({
      where: { profileId: id },
      include: { user: { select: { email: true, id: true } } },
    });
  }

  async update(
    id: number,
    updateRecruiterDto: UpdateCandidateDto,
  ): Promise<CandidatesEntity> {
    return await this.prisma.candidateProfiles.update({
      where: { profileId: id },
      data: updateRecruiterDto,
    });
  }

  async remove(id: number): Promise<CandidatesEntity> {
    return await this.prisma.candidateProfiles.delete({
      where: { profileId: id },
    });
  }

  async findPreviousCandidates(
    userId: number,
  ): Promise<CandidatesEntity | null> {
    return await this.prisma.candidateProfiles.findFirst({
      where: { userId: userId },
    });
  }
}
