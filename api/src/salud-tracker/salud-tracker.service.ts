import { Injectable } from '@nestjs/common';
import { CreateSaludTrackerDto } from './dto/create-salud-tracker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UsersLifeTrackerApp } from 'src/schemas/userLifeTracker.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SaludTrackerService {
  constructor(@InjectModel(UsersLifeTrackerApp.name) private userModal: Model<UsersLifeTrackerApp>) { }

  async create(createSaludTrackerDto: CreateSaludTrackerDto) {
    const user = await this.userModal.findOne({ id: createSaludTrackerDto.userId });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const existingMonth = user.saludTracker.find((entry) => entry.mes === createSaludTrackerDto.mes);

    const newDeporte = { title: createSaludTrackerDto.title, fecha: createSaludTrackerDto.fecha, tiempo: createSaludTrackerDto.tiempo, id: uuidv4() };

    if (existingMonth) {
      existingMonth.deporte.push(newDeporte);
    } else {
      const newEntry = {
        mes: createSaludTrackerDto.mes,
        deporte: newDeporte ? [newDeporte] : []
      };
      user.saludTracker.push(newEntry);
    }
    await user.save();
    return user;
  }

  async remove(userId: string, mes: string, deporteId: string) {
    const user = await this.userModal.findOne({ id: userId });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const existingMonth = user.saludTracker.find((entry) => entry.mes === mes);
    if (!existingMonth) {
      throw new Error('mes inexistente');
    }

    if (!existingMonth.deporte.find((e) => e.id === deporteId)) {
      throw new Error(`No se encontro actividad con el ID ${deporteId}`);
    }
    existingMonth.deporte = existingMonth.deporte.filter(e => e.id !== deporteId);

    await user.save();

    return user;
  }
}
