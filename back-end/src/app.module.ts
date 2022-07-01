import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://wei:wei1234@shoes-store.te48f.mongodb.net/store',
        ),
        UserModule,
        ProductModule,
        CartModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
