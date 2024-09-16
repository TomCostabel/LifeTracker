import { Module } from '@nestjs/common';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { UsersLifeTrackerApp, usersSchema } from 'src/schemas/userLifeTracker.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: UsersLifeTrackerApp.name, schema: usersSchema }])],
  controllers: [NotasController],
  providers: [NotasService]
})
export class NotasModule { }
