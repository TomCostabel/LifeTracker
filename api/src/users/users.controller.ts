import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('users')
  async create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get('userName')
  findOne(@Query('userName') userName: string) {
    return this.usersService.findOne(userName);
  }
}
