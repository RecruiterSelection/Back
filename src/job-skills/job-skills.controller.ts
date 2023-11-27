import { Controller, Get, Post, Param, Delete, HttpCode } from "@nestjs/common";
import { JobSkillsService } from "./job-skills.service";

import { ApiTags } from "@nestjs/swagger";

@ApiTags("Job Skills")
@Controller("job-skills")
export class JobSkillsController {
  constructor(private readonly jobSkillsService: JobSkillsService) {}

  @Post(":jobId/:skillId")
  create(@Param("jobId") jobId: string, @Param("skillId") skillId: string) {
    return this.jobSkillsService.create(+jobId, +skillId);
  }

  @Get()
  findAll() {
    return this.jobSkillsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.jobSkillsService.findOne(+id);
  }

  // @Patch(":id")
  // update(
  //   @Param("id") id: string,
  //   @Body() updateJobSkillDto: UpdateJobSkillDto,
  // ) {
  //   return this.jobSkillsService.update(+id, updateJobSkillDto);
  // }

  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.jobSkillsService.remove(+id);
  }

  @Get("matching/:candidateId")
  matchingJobs(@Param("candidateId") candidateId: string) {
    return this.jobSkillsService.matchingJobs(+candidateId);
  }
}
