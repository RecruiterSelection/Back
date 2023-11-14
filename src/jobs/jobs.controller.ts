import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { CreateJobDto } from "./dto/creat-job.dto";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() CreateJobDto: CreateJobDto) {
    return this.jobsService.create(CreateJobDto);
  }

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(":id")
  find(@Param("id") id: number) {
    return this.jobsService.findOne(id);
  }

  @Patch(":id")
  actualization(@Param("id") id: number, @Body() body) {
    return this.jobsService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.jobsService.remove(id);
  }
}
