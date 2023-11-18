import { Evaluations } from "@prisma/client";

export class EvaluationEntity implements Evaluations {
  evaluationId: number;
  applicationsApplicationId: number;
  recruitersRecruiterId: number;
  comments: string;
  rating: number;
  created_at: Date;
  updated_at: Date;
}
