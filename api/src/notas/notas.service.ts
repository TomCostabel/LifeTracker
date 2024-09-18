import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UsersLifeTrackerApp } from 'src/schemas/userLifeTracker.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NotasService {
  constructor(@InjectModel(UsersLifeTrackerApp.name) private userModal: Model<UsersLifeTrackerApp>) { }

  async create(createNotaDto: CreateNotaDto) {
    const user = await this.userModal.findOne({ id: createNotaDto.userId });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    user.notas.push({ title: createNotaDto.title, id: uuidv4() });
    await user.save();
    return user.notas;
  }

  async removeNota(userId: string, notaId: string) {

    const user = await this.userModal.findOne({ id: userId });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    if (!user.notas.find((elm) => elm.id === notaId)) {
      throw new Error(`No se encontro nota con el id ${notaId}`);
    }

    const notasFilter = user.notas.filter((elm) => elm.id !== notaId);
    user.notas = notasFilter;
    await user.save();
    return user.notas;
  }
}
