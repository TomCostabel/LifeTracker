import { PartialType } from '@nestjs/mapped-types';
import { CreateSaludTrackerDto } from './create-salud-tracker.dto';

export class UpdateSaludTrackerDto extends PartialType(CreateSaludTrackerDto) {}
