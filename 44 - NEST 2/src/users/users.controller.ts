import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UsersGuard } from './users.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  register(@Body() User: UserEntity) {
    return this.usersService.register(User);
  }

  @Post('login')
  login(@Body() User: UserEntity) {
    return this.usersService.login(User);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  
  @Get('profile')
  @UseGuards(UsersGuard)
  profile(@Request() req) {
    return this.usersService.profile(req);
  }

}
