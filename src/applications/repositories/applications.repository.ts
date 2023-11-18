import { ApplicationEntity } from "../entities/application.entity";

export abstract class ApplicationsRepository {
  abstract findAlreadyApplied(
    candidateId: number,
    jobId: number,
  ): Promise<ApplicationEntity | null>;
}
