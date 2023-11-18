import { Injectable } from "@nestjs/common";
import { CreateEvaluationDto } from "src/evaluations/dto/create-evaluation.dto";
import { UpdateEvaluationDto } from "src/evaluations/dto/update-evaluation.dto";
import { EvaluationEntity } from "src/evaluations/entities/evaluation.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EvaluationsPrismaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    recruiterId: number,
    applicationId: number,
    createEvaluationDto: CreateEvaluationDto,
  ): Promise<EvaluationEntity> {
    const recruiter = await this.prisma.recruiters.findUnique({
      where: { recruiterId },
    });
    const application = await this.prisma.applications.findUnique({
      where: { applicationId },
    });

    return await this.prisma.evaluations.create({
      data: {
        recruitersRecruiterId: recruiter.recruiterId,
        applicationsApplicationId: application.applicationId,
        ...createEvaluationDto,
      },
    });
  }

  async findAll(): Promise<EvaluationEntity[]> {
    return await this.prisma.evaluations.findMany({
      include: {
        Recruiters: {
          select: { firstName: true, lastName: true, companyName: true },
        },
        Applications: {
          select: {
            status: true,
            resume: true,
            coverLetter: true,
            created_at: true,
            updated_at: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<EvaluationEntity> {
    return await this.prisma.evaluations.findUnique({
      where: { evaluationId: id },
      include: {
        Recruiters: {
          select: { firstName: true, lastName: true, companyName: true },
        },
        Applications: {
          select: {
            status: true,
            resume: true,
            coverLetter: true,
            created_at: true,
            updated_at: true,
          },
        },
      },
    });
  }

  async update(
    id: number,
    updateEvaluationDto: UpdateEvaluationDto,
  ): Promise<EvaluationEntity> {
    return await this.prisma.evaluations.update({
      where: { evaluationId: id },
      data: updateEvaluationDto,
    });
  }

  async remove(id: number): Promise<EvaluationEntity> {
    return await this.prisma.evaluations.delete({
      where: { evaluationId: id },
    });
  }

  // async remove(id: number): Promise<EvaluationEntity> {
  //   console.log(`Deleting evaluation with id: ${id}`); // Log para depuração
  //   try {
  //     const deletedEvaluation = await this.prisma.evaluations.delete({
  //       where: { evaluationId: id },
  //     });
  //     console.log("Evaluation deleted:", deletedEvaluation); // Log do resultado
  //     return deletedEvaluation;
  //   } catch (error) {
  //     console.error("Error deleting evaluation:", error); // Log de erro
  //     throw error; // Re-lançar o erro para tratamento adequado
  //   }
  // }

  async findPreviousEvaluations(
    recruiterId: number,
    applicationId: number,
  ): Promise<EvaluationEntity | null> {
    return await this.prisma.evaluations.findFirst({
      where: {
        recruitersRecruiterId: recruiterId,
        applicationsApplicationId: applicationId,
      },
    });
  }
}
