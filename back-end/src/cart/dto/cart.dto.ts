import { ApiProperty } from '@nestjs/swagger';

export class CartDto {
    @ApiProperty({ description: '商品名稱' })
    name: string;

    @ApiProperty({ description: '副標題' })
    subLable: string;

    @ApiProperty({ description: '單價' })
    unitPrice: number;

    @ApiProperty({ description: '商品圖片' })
    img: Buffer;

    @ApiProperty({ description: '購買數量' })
    quantity: number;

    @ApiProperty({ description: '購買人' })
    Purchaser: string;
}
