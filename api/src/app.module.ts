import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanzasTrackerModule } from './finanzas-tracker/finanzas-tracker.module';
import { SaludTrackerModule } from './salud-tracker/salud-tracker.module';
import { NotasModule } from './notas/notas.module';

dotenv.config();
const USERNAME = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;

@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot(`mongodb+srv://${USERNAME}:${PASSWORD}@usuarios.rzpld.mongodb.net/?retryWrites=true&w=majority&appName=Usuarios`), FinanzasTrackerModule, SaludTrackerModule, NotasModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
