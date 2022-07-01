import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
    @Prop()
    name: string;

    @Prop()
    subLable: string;

    @Prop()
    unitPrice: number;

    @Prop()
    img: Buffer;

    @Prop()
    quantity: number;

    @Prop()
    Purchaser: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
