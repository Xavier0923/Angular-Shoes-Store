import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://wei:wei1234@shoes-store.te48f.mongodb.net/store',
        ),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
