import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateEvaluationDto } from "./dto/create-evaluation.dto";
import { UpdateEvaluationDto } from "./dto/update-evaluation.dto";
import { EvaluationsPrismaRepository } from "./repositories/prisma/evaluations.prisma.repository";
import { RecruitersPrismaRepository } from "src/recruiters/repositories/prisma/recruiters.prisma.repository";
import { ApllicationsPrismaRepository } from "src/applications/repositories/prisma/applications.prisma.repository";

@Injectable()
export class EvaluationsService {
  constructor(
    private readonly repository: EvaluationsPrismaRepository,
    private readonly recruitersRepository: RecruitersPrismaRepository,
    private readonly applicationsRepository: ApllicationsPrismaRepository,
  ) {}

  async create(
    recruiterId: number,
    applicationId: number,
    createEvaluationDto: CreateEvaluationDto,
  ) {
    const recruiter = await this.recruitersRepository.findOne(recruiterId);
    const application =
      await this.applicationsRepository.findOne(applicationId);
    const previouEvaluation = await this.repository.findPreviousEvaluations(
      recruiterId,
      applicationId,
    );

    if (!recruiter) {
      throw new NotFoundException("Recruiter for this evaluation not found");
    }
    if (!application) {
      throw new NotFoundException("Application for this evaluation not found");
    }
    if (previouEvaluation) {
      throw new ConflictException(
        "This application has already been evaluated.",
      );
    }

    return await this.repository.create(
      recruiter.recruiterId,
      application.applicationId,
      {
        ...createEvaluationDto,
      },
    );
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const evaluation = await this.repository.findOne(id);
    if (!evaluation) {
      throw new NotFoundException("Evaluation not found");
    }
    return evaluation;
  }

  async update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    const evaluation = await this.repository.findOne(id);
    if (!evaluation) {
      throw new NotFoundException("Evaluation not found");
    }
    return this.repository.update(id, updateEvaluationDto);
  }

  async remove(id: number) {
    const evaluation = await this.repository.findOne(id);

    if (!evaluation) {
      throw new NotFoundException("Evaluation not found");
    }
    return this.repository.remove(id);
  }
}
