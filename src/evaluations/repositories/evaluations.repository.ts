import { EvaluationEntity } from "../entities/evaluation.entity";

export abstract class EvaluationsRepository {
  abstract findPreviousEvaluations(
    recruiterId: number,
    applicationId: number,
  ): Promise<EvaluationEntity | null>;
}
