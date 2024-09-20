import { Controller, Post, Body } from '@nestjs/common';
import { SaludTrackerService } from './salud-tracker.service';
import { CreateSaludTrackerDto } from './dto/create-salud-tracker.dto';

@Controller('salud-tracker')
export class SaludTrackerController {
  constructor(private readonly saludTrackerService: SaludTrackerService) { }

  @Post()
  create(@Body() createSaludTrackerDto: CreateSaludTrackerDto) {
    return this.saludTrackerService.create(createSaludTrackerDto);
  }

  @Post('/remove')
  remove(@Body() body: { userId: string, mes: string, deporteId: string }) {
    const { userId, mes, deporteId } = body;
    return this.saludTrackerService.remove(userId, mes, deporteId);
  }
}
