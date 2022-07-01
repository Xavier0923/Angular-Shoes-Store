import { Login } from '../../dto/login.dto';
import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Param,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/services/user/user.service';
import { SerializedUser } from 'src/user/schema/user.schema';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('login')
    async login(@Body() loginInfo: Login) {
        const user = await this.userService.login(loginInfo);
        return new SerializedUser(user);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @ApiBody({ type: UserDto })
    @Post()
    async Register(@Body() userDto: UserDto) {
        const user = await this.userService.create(userDto);
        return new SerializedUser(user);
    }
}
