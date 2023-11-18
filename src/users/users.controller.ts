import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { LocalAuthGuard } from "src/auth/local-auth.guard";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.usersService.findOne(id);
  }

  @UseGuards(LocalAuthGuard)
  @Patch(":id")
  update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.usersService.remove(id);
  }
}
