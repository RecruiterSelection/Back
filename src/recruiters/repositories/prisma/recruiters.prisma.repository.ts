import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateRecruiterDto } from "src/recruiters/dto/create-recruiter.dto";
import { UpdateRecruiterDto } from "src/recruiters/dto/update-recruiter.dto";
import { RecruitersEntity } from "src/recruiters/entities/recruiter.entity";

@Injectable()
export class RecruitersPrismaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    id: number,
    createRecruiterDto: CreateRecruiterDto,
  ): Promise<RecruitersEntity> {
    const user = await this.prisma.users.findUnique({ where: { id } });

    const recruiter = this.prisma.recruiters.create({
      data: { userId: user.id, ...createRecruiterDto },
    });

    await this.prisma.users.update({
      where: { id: user.id },
      data: {
        firstAccess: false,
      },
    });

    return recruiter;
  }

  async findAll(): Promise<RecruitersEntity[]> {
    return await this.prisma.recruiters.findMany({
      include: { user: { select: { email: true, id: true } } },
    });
  }

  async findOne(id: number): Promise<RecruitersEntity> {
    return await this.prisma.recruiters.findUnique({
      where: { recruiterId: id },
      include: { user: { select: { email: true, id: true } } },
    });
  }

  async update(
    id: number,
    updateRecruiterDto: UpdateRecruiterDto,
  ): Promise<RecruitersEntity> {
    return await this.prisma.recruiters.update({
      where: { recruiterId: id },
      data: updateRecruiterDto,
    });
  }

  async remove(id: number): Promise<RecruitersEntity> {
    return await this.prisma.recruiters.delete({ where: { recruiterId: id } });
  }

  async findPreviousRecruiters(userId: number): Promise<RecruitersEntity> {
    return await this.prisma.recruiters.findFirst({
      where: { userId: userId },
    });
  }
}
