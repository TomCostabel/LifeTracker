import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersLifeTrackerApp } from 'src/schemas/userLifeTracker.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UsersLifeTrackerApp.name) private userModal: Model<UsersLifeTrackerApp>) { }

  async create(newUser: CreateUserDto) {
    const { userName } = newUser;
    try {
      const userExistente = await this.userModal.findOne({ userName: userName });
      if (userExistente) {
        throw new Error('El UserName ya esta en uso');
      }
      const createdUser = new this.userModal({
        ...newUser,
        id: uuidv4(),
        finanzasTracker: [],
        saludTracker: [],
        notas: []
      });
      return await createdUser.save();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

}
