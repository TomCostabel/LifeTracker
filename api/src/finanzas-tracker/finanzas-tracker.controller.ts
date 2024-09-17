import { Controller, Post, Body } from '@nestjs/common';
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

  @Post('deleteIngreso')
  removeIngreso(@Body() body: { ingresoId: string, userId: string, mes: string }) {
    const { ingresoId, userId, mes } = body;
    return this.finanzasTrackerService.removeIngreso(ingresoId, userId, mes);
  }

  @Post('deleteEgreso')
  removeEgreso(@Body() body: { egresoId: string, userId: string, mes: string }) {
    const { egresoId, userId, mes } = body;
    return this.finanzasTrackerService.removeEgreso(egresoId, userId, mes);
  }
}
