import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidatesTechSkillsService } from './candidates-tech-skills.service';
import { CreateCandidatesTechSkillDto } from './dto/create-candidates-tech-skill.dto';
import { UpdateCandidatesTechSkillDto } from './dto/update-candidates-tech-skill.dto';

@Controller('candidates-tech-skills')
export class CandidatesTechSkillsController {
  constructor(private readonly candidatesTechSkillsService: CandidatesTechSkillsService) {}

  @Post()
  create(@Body() createCandidatesTechSkillDto: CreateCandidatesTechSkillDto) {
    return this.candidatesTechSkillsService.create(createCandidatesTechSkillDto);
  }

  @Get()
  findAll() {
    return this.candidatesTechSkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidatesTechSkillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidatesTechSkillDto: UpdateCandidatesTechSkillDto) {
    return this.candidatesTechSkillsService.update(+id, updateCandidatesTechSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatesTechSkillsService.remove(+id);
  }
}
