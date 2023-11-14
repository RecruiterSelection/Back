import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  find(@Param("id") id: number) {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  actualization(@Param("id") id: number, @Body() body) {
    return this.userService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.userService.remove(id);
  }
}
