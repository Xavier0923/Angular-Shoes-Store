import { LoginUserDto } from '../../dto/loginUser.dto';
import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
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

    @Post('login')
    login(@Body() loginInfo: LoginUserDto) {
        const res = this.userService.findUser(loginInfo);
        return res;
    }

    @ApiBody({ type: UserDto })
    @Post()
    Register(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }
}
