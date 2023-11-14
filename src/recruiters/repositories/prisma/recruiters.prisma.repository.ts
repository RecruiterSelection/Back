import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateRecruiterDto } from "src/recruiters/dto/create-recruiter.dto";
import { RecruitersEntity } from "src/recruiters/entities/recruiter.entity";

@Injectable()
export class RecruitersPrismaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    id: number,
    createRecruiterDto: CreateRecruiterDto,
  ): Promise<RecruitersEntity> {
    const user = await this.prisma.users.findUnique({ where: { id } });

    return this.prisma.recruiters.create({
      data: { userId: user.id, ...createRecruiterDto },
    });
  }
}
