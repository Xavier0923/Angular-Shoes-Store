import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './controller/product/product.controller';
import { ProductSchema } from './schema/product.schema';
import { ProductService } from './service/product/product.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
