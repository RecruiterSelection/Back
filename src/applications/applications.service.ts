import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateApplicationDto } from "./dto/create-application.dto";
import { UpdateApplicationDto } from "./dto/update-application.dto";
import { ApllicationsPrismaRepository } from "./repositories/prisma/applications.prisma.repository";
import { CandidatesPrismaRepository } from "src/candidates/repositories/prisma/candidates.prisma.repository";
import { JobsPrismaRepository } from "src/jobs/repositories/prisma/jobs.prisma.repository";

@Injectable()
export class ApplicationsService {
  constructor(
    private readonly repository: ApllicationsPrismaRepository,
    private readonly candidatesRepository: CandidatesPrismaRepository,
    private readonly jobsRepository: JobsPrismaRepository,
  ) {}

  async create(
    candidateId: number,
    jobId: number,
    createApplicationDto: CreateApplicationDto,
  ) {
    const candidate = await this.candidatesRepository.findOne(candidateId);
    const job = await this.jobsRepository.findOne(jobId);
    const findAlreadyApplied = await this.findAlreadyApplied(
      candidateId,
      jobId,
    );

    if (!candidate) {
      throw new NotFoundException("Candidate not found");
    }
    if (!job) {
      throw new NotFoundException("Job not found");
    }

    if (findAlreadyApplied) {
      throw new ConflictException("Candidate already applied for this job.");
    }

    return await this.repository.create(
      candidateId,
      jobId,
      createApplicationDto,
    );
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const application = await this.repository.findOne(id);

    if (!application) {
      throw new NotFoundException("Application not found");
    }
    return application;
  }

  async update(id: number, updateApplicationDto: UpdateApplicationDto) {
    const application = await this.repository.findOne(id);
    if (!application) {
      throw new NotFoundException("Application not found");
    }
    return await this.repository.update(id, updateApplicationDto);
  }

  async remove(id: number) {
    const application = await this.repository.findOne(id);
    if (!application) {
      throw new NotFoundException("Application not found");
    }
    return await this.repository.remove(id);
  }

  async findAlreadyApplied(candidateId: number, jobId: number) {
    const application = await this.repository.findAlreadyApplied(
      candidateId,
      jobId,
    );
    return application;
  }
}
