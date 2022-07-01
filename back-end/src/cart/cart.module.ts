import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CartController } from './controller/cart/cart.controller';
import { CartService } from './services/cart/cart.service';
import { CartSchema } from './schema/cart.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }]),
    ],
    controllers: [CartController],
    providers: [CartService],
})
export class CartModule {}
