import { ApiProperty } from '@nestjs/swagger';
export class CreateLoginDto {
  @ApiProperty({
    default: 'admin',
  })
  username: string;
  @ApiProperty({
    default: 'admin123',
  })
  password: string;
  @ApiProperty({
    default: '1234',
  })
  code: string;
}
