import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create() {
    return 'user';
  }

  @Get()
  findAll() {
    return ['user1', 'user2', 'user3'];
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return `user${id}`;
  }

  @Patch(':id')
  actualization() {
    return 'NewUser';
  }

  @Delete(':id')
  remove() {
    return '';
  }
}
