import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";
import { JobsPrismaRepository } from "./repositories/prisma/jobs.prisma.repository";
import { RecruitersPrismaRepository } from "src/recruiters/repositories/prisma/recruiters.prisma.repository";

@Injectable()
export class JobsService {
  constructor(
    private readonly repository: JobsPrismaRepository,
    private readonly recruitersRepository: RecruitersPrismaRepository,
  ) {}

  async create(id: number, createJobDto: CreateJobDto) {
    const recruiter = await this.recruitersRepository.findOne(id);

    if (!recruiter) {
      throw new NotFoundException("Recruiter for this job not found");
    }
    return await this.repository.create(recruiter.recruiterId, createJobDto);
  }

  async findAll(page?: string, limit?: string) {
    const { jobs, total } = await this.repository.findAll(page, limit);
    const totalPages = Math.ceil(total / parseInt(limit));
    return { jobs, total, totalPages };
  }

  async findOne(id: number) {
    const job = await this.repository.findOne(id);
    if (!job) {
      throw new NotFoundException("Job not found");
    }
    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    const job = await this.repository.findOne(id);

    if (!job) {
      throw new NotFoundException("Job not found");
    }
    return await this.repository.update(id, updateJobDto);
  }

  async remove(id: number) {
    const job = await this.repository.findOne(id);

    if (!job) {
      throw new NotFoundException("Job not found");
    }
    return await this.repository.remove(id);
  }
}
