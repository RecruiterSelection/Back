import { PartialType } from '@nestjs/swagger';
import { CreateTechnologySkillDto } from './create-technology-skill.dto';

export class UpdateTechnologySkillDto extends PartialType(CreateTechnologySkillDto) {}
