import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Document } from 'mongoose';
import { UserDto } from '../dto/user.dto';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    id: number;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => UserDto)
    @Prop()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ValidateNested()
    @Type(() => UserDto)
    @Prop()
    email: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => UserDto)
    @Prop()
    password: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => UserDto)
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
