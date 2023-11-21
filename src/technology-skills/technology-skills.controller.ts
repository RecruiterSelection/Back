import { Controller, Post } from "@nestjs/common";
import { TechnologySkillsService } from "./technology-skills.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Technology Skills")
@Controller("tech-skills")
export class TechnologySkillsController {
  constructor(
    private readonly technologySkillsService: TechnologySkillsService,
  ) {}

  @Post("populate")
  async populateSkills() {
    return await this.technologySkillsService.populateSkills();
  }
}
