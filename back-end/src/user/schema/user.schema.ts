import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
    @Prop()
    _id: number;

    @Prop()
    name: string;

    @IsEmail()
    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    permission: string;
}

@Schema()
export class SerializedUser {
    id: number;
    name: string;
    email: string;

    @Exclude()
    password: string;

    permission: string;
    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}

export const UserSchema = SchemaFactory.createForClass(User);
