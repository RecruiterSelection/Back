import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  @Post()
  create(@Body() body) {
    return body;
  }

  @Get()
  findAll() {
    return ['job1', 'job2', 'job3'];
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return `job${id}`;
  }

  @Patch(':id')
  actualization() {
    return 'NewJob';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return id;
  }
}
