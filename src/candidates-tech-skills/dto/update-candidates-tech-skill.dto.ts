import { PartialType } from '@nestjs/swagger';
import { CreateCandidatesTechSkillDto } from './create-candidates-tech-skill.dto';

export class UpdateCandidatesTechSkillDto extends PartialType(CreateCandidatesTechSkillDto) {}
