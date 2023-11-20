import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from "@nestjs/common";
import { CandidatesService } from "./candidates.service";
import { CreateCandidateDto } from "./dto/create-candidate.dto";
import { UpdateCandidateDto } from "./dto/update-candidate.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Candidates")
@Controller("candidates")
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @ApiResponse({ status: 404, description: "If specific user is not found." })
  @ApiResponse({
    status: 409,
    description: "If user is already registered as candidate.",
  })
  @ApiResponse({
    status: 400,
    description: "If user with specific ID is not a candidate.",
  })
  @Post(":id")
  create(
    @Body() createCandidateDto: CreateCandidateDto,
    @Param("id") id: number,
  ) {
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

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCandidateDto: UpdateCandidateDto,
  ) {
    return this.candidatesService.update(+id, updateCandidateDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.candidatesService.remove(+id);
  }
}
