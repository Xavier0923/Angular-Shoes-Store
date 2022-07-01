import { ProductService } from './../../service/product/product.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { ProductDto } from 'src/product/dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    findAllProducts() {
        return this.productService.findAllProducts();
    }

    @Get(':seller')
    findSellerProducts(@Param('seller') seller: string) {
        return this.productService.findSellerProducts(seller);
    }

    @Post()
    createProduct(@Body() productDto: ProductDto) {
        return this.productService.createProduct(productDto);
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string, @Body() productDto: ProductDto) {
        return this.productService.updateProduct(id, productDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id);
    }
}
