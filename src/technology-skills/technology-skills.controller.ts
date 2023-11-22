import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { TechnologySkillsService } from "./technology-skills.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateTechnologySkillDto } from "./dto/update-technology-skill.dto";
import { CreateTechnologySkillDto } from "./dto/create-technology-skill.dto";
import { CreateManyTechnologySkillDto } from "./dto/create-many-technology-skill.dto";

@ApiTags("Technology Skills")
@Controller("tech-skills")
export class TechnologySkillsController {
  constructor(
    private readonly technologySkillsService: TechnologySkillsService,
  ) {}

  @ApiResponse({
    status: 409,
    description: "If skill already exists in database",
  })
  @Post("")
  create(@Body() createTechnologySkillDto: CreateTechnologySkillDto) {
    return this.technologySkillsService.create(createTechnologySkillDto);
  }

  @ApiResponse({
    status: 409,
    description: "If any skill already exists in database",
  })
  @Post("many")
  createMany(
    @Body() createManyTechnologySkillDto: CreateManyTechnologySkillDto,
  ) {
    return this.technologySkillsService.createMany(
      createManyTechnologySkillDto,
    );
  }

  @ApiResponse({ status: 404, description: "If skill is not found" })
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.technologySkillsService.findOne(id);
  }

  @Get()
  findAll() {
    return this.technologySkillsService.findAll();
  }

  @Patch(":id")
  update(@Body() body: UpdateTechnologySkillDto, @Param("id") id: number) {
    return this.technologySkillsService.update(body, id);
  }

  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.technologySkillsService.remove(id);
  }
}
