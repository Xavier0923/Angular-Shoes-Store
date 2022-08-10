import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
    @Prop() // 商品名稱
    name: string;

    @Prop() // 副標
    subLable: string;

    @Prop() // 單價
    unitPrice: number;

    @Prop() // 商品圖片
    img: Buffer;

    @Prop() // 數量
    quantity: number;

    @Prop() // 購買人
    Purchaser: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
