import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CandidatesTechSkillsService } from "./candidates-tech-skills.service";
import { UpdateCandidatesTechSkillDto } from "./dto/update-candidates-tech-skill.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Candidates Tech Skills")
@Controller("candidates-tech-skills")
export class CandidatesTechSkillsController {
  constructor(
    private readonly candidatesTechSkillsService: CandidatesTechSkillsService,
  ) {}

  @ApiResponse({
    status: 404,
    description: "If Candidate or Tech Skill is not found.",
  })
  @Post(":candidateId/:skillId")
  create(
    @Param("candidateId") candidateId: number,
    @Param("skillId") skillId: number,
  ) {
    return this.candidatesTechSkillsService.create(candidateId, skillId);
  }

  @Get()
  findAll() {
    return this.candidatesTechSkillsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.candidatesTechSkillsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCandidatesTechSkillDto: UpdateCandidatesTechSkillDto,
  ) {
    return this.candidatesTechSkillsService.update(
      +id,
      updateCandidatesTechSkillDto,
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.candidatesTechSkillsService.remove(+id);
  }
}
