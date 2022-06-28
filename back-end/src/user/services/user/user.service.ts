import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/user/dto/user.dto';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return this.userModel.find();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ id });
    }

    async findUser(loginInfo: LoginUserDto): Promise<User> {
        const { email, password } = loginInfo;
        const user = await this.userModel.findOne({ email });
        console.log(user);

        if (!user) {
            throw new NotFoundException('No Such User!!');
        }
        console.log('password', password);
        console.log('user.password', user.password);

        if (password !== user.password) {
            throw new BadRequestException('Invalid credentials');
        }
        return user;
    }

    async create(createUserDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
}
