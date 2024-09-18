import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNotaDto {

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
