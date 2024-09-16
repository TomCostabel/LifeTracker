import { Module } from '@nestjs/common';
import { FinanzasTrackerService } from './finanzas-tracker.service';
import { FinanzasTrackerController } from './finanzas-tracker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersLifeTrackerApp, usersSchema } from 'src/schemas/userLifeTracker.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UsersLifeTrackerApp.name, schema: usersSchema }])],
  controllers: [FinanzasTrackerController],
  providers: [FinanzasTrackerService]
})
export class FinanzasTrackerModule { }
