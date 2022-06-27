import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    // constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    // async findAll(): Promise<User[]> {
    //     return this.userModel.find().exec();
    // }
}
