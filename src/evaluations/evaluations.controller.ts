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
import { EvaluationsService } from "./evaluations.service";
import { CreateEvaluationDto } from "./dto/create-evaluation.dto";
import { UpdateEvaluationDto } from "./dto/update-evaluation.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("evaluations")
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post(":recruiterId/:applicationId")
  create(
    @Body() createEvaluationDto: CreateEvaluationDto,
    @Param("recruiterId") recruiterId: number,
    @Param("applicationId") applicationId: number,
  ) {
    return this.evaluationsService.create(
      recruiterId,
      applicationId,
      createEvaluationDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.evaluationsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.evaluationsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEvaluationDto: UpdateEvaluationDto,
  ) {
    return this.evaluationsService.update(+id, updateEvaluationDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.evaluationsService.remove(+id);
  }
}
