import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEgresoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  priceEgreso: string;

  @IsNotEmpty()
  @IsString()
  newMes: string;
}
