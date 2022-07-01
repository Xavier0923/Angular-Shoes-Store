import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/user/dto/user.dto';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { Login } from 'src/user/dto/login.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

    // 登入
    async login(loginInfo: Login): Promise<User> {
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

    // 註冊
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

    // 忘記密碼
    // async forgetPassword(email: string): Promise<User> {}
}
