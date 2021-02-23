import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('api/users')
  showAllUsers(@Query('page') page: number) {
    return this.userService.showAll(page);
  }

  @Get('api/users/:username')
  showOneUser(@Param('username') username: string) {
    return this.userService.read(username);
  }

  @Post('auth/login')
  login(@Body() data: UserDTO) {
    return this.userService.login(data);
  }

  @Post('auth/register')
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }
}
