import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FinanzasTrackerService } from './finanzas-tracker.service';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { CreateEgresoDto } from './dto/create-egreso.dto';

@Controller('finanzas-tracker')
export class FinanzasTrackerController {
  constructor(private readonly finanzasTrackerService: FinanzasTrackerService) { }

  @Post('/ingreso')
  createIngreso(@Body() CreateIngresoDto: CreateIngresoDto) {
    return this.finanzasTrackerService.createIngreso(CreateIngresoDto);
  }
  @Post('/egreso')
  createEgreso(@Body() CreateEgresoDto: CreateEgresoDto) {
    return this.finanzasTrackerService.createEgreso(CreateEgresoDto);
  }

  @Get()
  findAll() {
    return this.finanzasTrackerService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finanzasTrackerService.remove(+id);
  }
}
