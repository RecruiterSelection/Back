import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CandidatesService } from "./candidates.service";
import { CreateCandidateDto } from "./dto/create-candidate.dto";
import { UpdateCandidateDto } from "./dto/update-candidate.dto";

@Controller("candidates")
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post(":id")
  create(
    @Body() createCandidateDto: CreateCandidateDto,
    @Param("id") id: number,
  ) {
    console.log(Body, "controller");
    return this.candidatesService.create(id, createCandidateDto);
  }

  @Get()
  findAll() {
    return this.candidatesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.candidatesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCandidateDto: UpdateCandidateDto,
  ) {
    return this.candidatesService.update(+id, updateCandidateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.candidatesService.remove(+id);
  }
}
