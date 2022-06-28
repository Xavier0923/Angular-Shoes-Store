import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/user/dto/user.dto';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
    async findAll(): Promise<User[]> {
        return await this.userModel.find().lean();
    }

    async findOne(id: string): Promise<User> {
        return await this.userModel.findOne({ _id: id }).lean();
    }

    async findUser(loginInfo: LoginUserDto): Promise<User> {
        const { email, password } = loginInfo;
        const user = await this.userModel.findOne({ email }).lean();
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
        const { name, email } = createUserDto;
        const checkIsHaveName = await this.userModel.findOne({ name: name });
        if (checkIsHaveName) {
            throw new BadRequestException('This Name Is Already Registered!!');
        }
        const checkIsHaveEmail = await this.userModel.findOne({ email: email });
        if (checkIsHaveEmail) {
            throw new BadRequestException('This Email Is Already Registered!!');
        }
        const createdUser = new this.userModel(createUserDto);
        return (await createdUser.save()).toObject();
    }
}
