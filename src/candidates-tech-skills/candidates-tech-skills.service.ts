import { Injectable } from "@nestjs/common";
import { CreateCandidatesTechSkillDto } from "./dto/create-candidates-tech-skill.dto";
import { UpdateCandidatesTechSkillDto } from "./dto/update-candidates-tech-skill.dto";

@Injectable()
export class CandidatesTechSkillsService {
  create(createCandidatesTechSkillDto: CreateCandidatesTechSkillDto) {
    return "This action adds a new candidatesTechSkill";
  }

  findAll() {
    return `This action returns all candidatesTechSkills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidatesTechSkill`;
  }

  update(
    id: number,
    updateCandidatesTechSkillDto: UpdateCandidatesTechSkillDto,
  ) {
    return `This action updates a #${id} candidatesTechSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidatesTechSkill`;
  }
}
