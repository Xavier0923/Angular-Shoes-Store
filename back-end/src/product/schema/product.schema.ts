import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    subLable: string;

    @Prop()
    unitPrice: number;

    @Prop()
    img: Buffer;

    @Prop()
    stock: number;

    @Prop()
    status: string;

    @Prop()
    seller: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
