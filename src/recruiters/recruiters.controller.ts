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
import { RecruitersService } from "./recruiters.service";
import { CreateRecruiterDto } from "./dto/create-recruiter.dto";
import { UpdateRecruiterDto } from "./dto/update-recruiter.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("recruiters")
export class RecruitersController {
  constructor(private readonly recruitersService: RecruitersService) {}

  @Post(":id")
  create(
    @Body() createRecruiterDto: CreateRecruiterDto,
    @Param("id") id: number,
  ) {
    return this.recruitersService.create(id, createRecruiterDto);
  }

  @Get()
  findAll() {
    return this.recruitersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.recruitersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateRecruiterDto: UpdateRecruiterDto,
  ) {
    return this.recruitersService.update(+id, updateRecruiterDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.recruitersService.remove(+id);
  }
}
