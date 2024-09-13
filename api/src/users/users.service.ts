import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersLifeTrackerApp } from 'src/schemas/userLifeTracker.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UsersLifeTrackerApp.name) private userModal: Model<UsersLifeTrackerApp>) { }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async create(newUser: CreateUserDto) {
    const { userName } = newUser;
    try {
      const userExistente = await this.userModal.findOne({ userName: userName });
      if (userExistente) {
        throw new Error('El UserName ya esta en uso');
      }
      const hashedPassword = await this.hashPassword(newUser.password);
      const createdUser = new this.userModal({
        ...newUser,
        password: hashedPassword,
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

  async findOne(userName: string) {
    const user = this.userModal.findOne({ userName: userName });
    if (!user) {
      throw new Error('Usuario inexistente');
    }
    return user;

  }

}
