import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';

dotenv.config();
const USERNAME = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;

@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot(`mongodb+srv://${USERNAME}:${PASSWORD}@usuarios.rzpld.mongodb.net/?retryWrites=true&w=majority&appName=Usuarios`)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
