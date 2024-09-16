import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersLifeTrackerApp } from 'src/schemas/userLifeTracker.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { CreateEgresoDto } from './dto/create-egreso.dto';

@Injectable()
export class FinanzasTrackerService {
  constructor(@InjectModel(UsersLifeTrackerApp.name) private userModal: Model<UsersLifeTrackerApp>) { }

  async createIngreso(CreateIngresoDto: CreateIngresoDto) {

    const user = await this.userModal.findOne({ id: CreateIngresoDto.userId });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const existingMonth = user.finanzasTracker.find((entry) => entry.mes === CreateIngresoDto.newMes);

    const newIngreso = { mes: CreateIngresoDto.newMes, title: CreateIngresoDto.title, priceIngreso: CreateIngresoDto.priceIngreso, id: uuidv4() };

    if (existingMonth) {
      existingMonth.ingresos.push(newIngreso);

    } else {
      const newEntry = {
        mes: CreateIngresoDto.newMes,
        ingresos: newIngreso ? [newIngreso] : [],
        egresos: []
      };
      user.finanzasTracker.push(newEntry);
    }
    await user.save();
    return user;
  }

  createEgreso(CreateEgresoDto: CreateEgresoDto) {
    return 'This action adds a new finanzasTracker';
  }

  findAll() {
    return 'This action returns all finanzasTracker';
  }

  remove(id: number) {
    return `This action removes a #${id} finanzasTracker`;
  }
}
