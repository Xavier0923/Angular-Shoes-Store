import { LoginUserDto } from './../../dto/login-user.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Get('/login/:email/:password')
    login(@Param('email') email: string, @Param('password') password: string) {
        return this.userService.findUser(email, password);
    }

    @ApiBody({ type: UserDto })
    @Post()
    createUser(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }
}
