import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty({ description: '使用者名稱' })
    name: string;

    @ApiProperty({ description: '使用者信箱' })
    email: string;

    @ApiProperty({ description: '使用者密碼' })
    password: string;

    @ApiProperty({ description: '使用者權限' })
    permission: string;
}
