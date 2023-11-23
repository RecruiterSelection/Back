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
  Query,
} from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Jobs")
@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @ApiResponse({
    status: 404,
    description: "If the recruiter fot the job is not found.",
  })
  // @UseGuards(JwtAuthGuard)
  @Post(":id")
  create(@Body() createJobDto: CreateJobDto, @Param("id") id: number) {
    return this.jobsService.create(id, createJobDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query("page") page?: string, @Query("limit") limit?: string) {
    return this.jobsService.findAll(page, limit);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.jobsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobsService.update(+id, updateJobDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.jobsService.remove(+id);
  }
}
