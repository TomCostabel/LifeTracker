import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaludTrackerService } from './salud-tracker.service';
import { CreateSaludTrackerDto } from './dto/create-salud-tracker.dto';
import { UpdateSaludTrackerDto } from './dto/update-salud-tracker.dto';

@Controller('salud-tracker')
export class SaludTrackerController {
  constructor(private readonly saludTrackerService: SaludTrackerService) {}

  @Post()
  create(@Body() createSaludTrackerDto: CreateSaludTrackerDto) {
    return this.saludTrackerService.create(createSaludTrackerDto);
  }

  @Get()
  findAll() {
    return this.saludTrackerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saludTrackerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaludTrackerDto: UpdateSaludTrackerDto) {
    return this.saludTrackerService.update(+id, updateSaludTrackerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saludTrackerService.remove(+id);
  }
}
