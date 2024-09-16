import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIngresoDto {
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
  priceIngreso: string;

  @IsNotEmpty()
  @IsString()
  newMes: string;


}
