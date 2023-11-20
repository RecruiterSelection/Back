import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from "@nestjs/common";
import { ApplicationsService } from "./applications.service";
import { CreateApplicationDto } from "./dto/create-application.dto";
import { UpdateApplicationDto } from "./dto/update-application.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Applications")
@Controller("applications")
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post(":candidateId/:jobId")
  create(
    @Body() createApplicationDto: CreateApplicationDto,
    @Param("candidateId") candidateId: number,
    @Param("jobId") jobId: number,
  ) {
    return this.applicationsService.create(
      candidateId,
      jobId,
      createApplicationDto,
    );
  }

  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.applicationsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ) {
    return this.applicationsService.update(+id, updateApplicationDto);
  }

  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.applicationsService.remove(+id);
  }
}
