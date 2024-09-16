import { Injectable } from '@nestjs/common';
import { CreateSaludTrackerDto } from './dto/create-salud-tracker.dto';
import { UpdateSaludTrackerDto } from './dto/update-salud-tracker.dto';

@Injectable()
export class SaludTrackerService {
  create(createSaludTrackerDto: CreateSaludTrackerDto) {
    return 'This action adds a new saludTracker';
  }

  findAll() {
    return `This action returns all saludTracker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saludTracker`;
  }

  update(id: number, updateSaludTrackerDto: UpdateSaludTrackerDto) {
    return `This action updates a #${id} saludTracker`;
  }

  remove(id: number) {
    return `This action removes a #${id} saludTracker`;
  }
}
