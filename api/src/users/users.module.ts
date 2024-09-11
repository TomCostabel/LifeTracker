import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersLifeTrackerApp, usersSchema } from 'src/schemas/userLifeTracker.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UsersLifeTrackerApp.name, schema: usersSchema }])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
