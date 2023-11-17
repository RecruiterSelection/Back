import { Injectable } from "@nestjs/common";
import { CreateJobDto } from "src/jobs/dto/create-job.dto";
import { UpdateJobDto } from "src/jobs/dto/update-job.dto";
import { JobEntity } from "src/jobs/entities/job.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JobsPrismaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    recruiterId: number,
    createJobDto: CreateJobDto,
  ): Promise<JobEntity> {
    const recruiter = await this.prisma.recruiters.findUnique({
      where: { recruiterId },
    });

    return await this.prisma.jobListings.create({
      data: { recruitersRecruiterId: recruiter.recruiterId, ...createJobDto },
    });
  }

  async findAll(): Promise<JobEntity[]> {
    return await this.prisma.jobListings.findMany();
  }

  async findOne(id: number): Promise<JobEntity> {
    return await this.prisma.jobListings.findUnique({ where: { jobId: id } });
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<JobEntity> {
    return await this.prisma.jobListings.update({
      where: { jobId: id },
      data: updateJobDto,
    });
  }

  async remove(id: number): Promise<JobEntity> {
    return await this.prisma.jobListings.delete({ where: { jobId: id } });
  }
}
