import { Module } from '@nestjs/common';
import { SaludTrackerService } from './salud-tracker.service';
import { SaludTrackerController } from './salud-tracker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersLifeTrackerApp, usersSchema } from 'src/schemas/userLifeTracker.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UsersLifeTrackerApp.name, schema: usersSchema }])],
  controllers: [SaludTrackerController],
  providers: [SaludTrackerService]
})
export class SaludTrackerModule { }
