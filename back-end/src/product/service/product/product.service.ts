import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ProductDto } from 'src/product/dto/product.dto';
import { Product, ProductDocument } from 'src/product/schema/product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private productModel: Model<ProductDocument>,
    ) {}

    async findAllProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async findSellerProducts(seller: string): Promise<Product[]> {
        const products = await this.productModel.find({ seller: seller });
        return products;
    }

    async createProduct(createProductDto: ProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async updateProduct(
        id: string,
        updateProductDto: ProductDto,
    ): Promise<Product> {
        const objectId = new mongoose.Types.ObjectId(id);
        const product = await this.productModel.findOneAndUpdate(
            objectId,
            updateProductDto,
            {
                new: true,
            },
        );
        return product;
    }

    async deleteProduct(id: string): Promise<Product> {
        const product = await this.productModel.findByIdAndDelete(id);
        return product;
    }
}
