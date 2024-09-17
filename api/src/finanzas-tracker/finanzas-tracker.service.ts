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

  async createEgreso(CreateEgresoDto: CreateEgresoDto) {
    const user = await this.userModal.findOne({ id: CreateEgresoDto.userId });

    if (!user) {
      throw new Error('Usuario no encontrado.');
    }
    const existingMonth = user.finanzasTracker.find((entry) => entry.mes === CreateEgresoDto.newMes);
    const newEgreso = { mes: CreateEgresoDto.newMes, title: CreateEgresoDto.title, priceEgreso: CreateEgresoDto.priceEgreso, id: uuidv4() };

    if (existingMonth) {
      existingMonth.egresos.push(newEgreso);
    } else {
      throw new Error('No puedes registrar un egreso de dinero sin antes tener un ingreso.');
    }
    await user.save();
    return user;
  }

  async removeIngreso(ingresoId: string, userId: string, mes: string) {

    const user = await this.userModal.findOne({ id: userId });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const existingMonth = user.finanzasTracker.find((entry) => entry.mes === mes);
    if (!existingMonth) {
      throw new Error('mes inexistente');
    }
    if (!existingMonth.ingresos.find((e) => e.id === ingresoId)) {
      throw new Error('No se encontro ingreso con este ID');
    }
    existingMonth.ingresos = existingMonth.ingresos.filter((e) => e.id !== ingresoId);
    await user.save();
    return user;
  }

  async removeEgreso(egresoId: string, userId: string, mes: string) {
    const user = await this.userModal.findOne({ id: userId });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const existingMonth = user.finanzasTracker.find((entry) => entry.mes === mes);
    if (!existingMonth) {
      throw new Error('mes inexistente');
    }
    if (!existingMonth.egresos.find((e) => e.id === egresoId)) {
      throw new Error('No se encontro egreso con este ID');
    }
    existingMonth.egresos = existingMonth.egresos.filter((e) => e.id !== egresoId);
    await user.save();
    return user;
  }
}
