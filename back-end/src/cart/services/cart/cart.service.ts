import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import mongoose, { Model } from 'mongoose';
import { CartDto } from 'src/cart/dto/cart.dto';
import { Cart, CartDocument } from 'src/cart/schema/cart.schema';

@Injectable()
export class CartService {
    constructor(@InjectModel('Cart') private cartModel: Model<CartDocument>) {}
    // 找出購買者的購物車的商品清單
    async findPurchaserCart(purchaser: string): Promise<Cart[]> {
        const cart = await this.cartModel.find({ purchaser: purchaser });
        return cart;
    }

    // 新增購物車的商品
    async createToCart(createToCartDto: CartDto): Promise<Cart> {
        const { name } = createToCartDto;
        const CartItem = await this.cartModel.findOne({ name }).lean();
        const createToCart = new this.cartModel(createToCartDto);
        // let createToCart: unknown;
        // if (CartItem) {
        //     CartItem.quantity++;
        //     createToCart = new this.cartModel(CartItem);
        // } else {
        //     createToCart = new this.cartModel(createToCartDto);
        // }
        return createToCart.save();
    }

    // 刪除購買者的購物車的商品
    async deleteFromCart(id: string): Promise<Cart> {
        const deleteFromCart = await this.cartModel.findByIdAndDelete(id);
        return deleteFromCart;
    }

    async updateFromCart(
        id: string,
        updateFromCartDto: CartDto,
    ): Promise<Cart> {
        const objectId = new mongoose.Types.ObjectId(id);
        const cart = await this.cartModel.findOneAndUpdate(
            objectId,
            updateFromCartDto,
            {
                new: true,
            },
        );
        return cart;
    }
}
