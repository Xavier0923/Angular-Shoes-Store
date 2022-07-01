import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
    @ApiProperty({ description: '商品名稱' })
    name: string;

    @ApiProperty({ description: '副標題' })
    subLable: string;

    @ApiProperty({ description: '價格' })
    unitPrice: number;

    @ApiProperty({ description: '商品圖片' })
    img: Buffer;

    @ApiProperty({ description: '存貨數量' })
    stock: number;

    @ApiProperty({ description: '商品狀態' })
    status: string;

    @ApiProperty({ description: '販售者' })
    seller: string;
}
