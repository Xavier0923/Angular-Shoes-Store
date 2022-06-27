import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Exclude()
    @Prop()
    password: string;

    @Prop()
    permission: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
