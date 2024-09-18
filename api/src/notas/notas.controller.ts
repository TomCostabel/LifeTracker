import { Controller, Post, Body } from '@nestjs/common';
import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/create-nota.dto';

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) { }

  @Post()
  create(@Body() createNotaDto: CreateNotaDto) {
    return this.notasService.create(createNotaDto);
  }

  @Post('/remove')
  removeNota(@Body() body: { userId: string, notaId: string }) {
    const { userId, notaId } = body;
    return this.notasService.removeNota(userId, notaId);
  }
}
