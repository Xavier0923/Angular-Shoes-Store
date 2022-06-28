import { LoginUserDto } from '../../dto/loginUser.dto';
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
    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const user = await this.userService.findOne(id);
        return new SerializedUser(user);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('login')
    async login(@Body() loginInfo: LoginUserDto) {
        const user = await this.userService.findUser(loginInfo);
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
