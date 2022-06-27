import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { UserDto } from 'src/user/dto/user.dto';
import { User, UserDocument } from 'src/user/schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return this.userModel.find();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ id });
    }

    async findUser(email: string, password: string): Promise<boolean> {
        return this.userModel.findOne(
            { email, password },
            function (err, docs) {
                if (err) {
                    return false;
                } else if (docs) {
                    return true;
                } else {
                    return false;
                }
            },
        );
    }

    async create(createUserDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
}
