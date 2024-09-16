import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'usersLifeTrackerApp' })

export class UsersLifeTrackerApp {
  @Prop({
    required: true,
    trim: true
  })
  userName: string;

  @Prop({
    required: true,
    trim: true
  })
  password: string;

  @Prop({
    required: true,
    trim: true
  })
  id: string;

  @Prop({
    required: true,
    trim: true,
    type: [{
      mes: { type: String, required: true },
      egresos: [{
        title: { type: String, require: true },
        priceEgreso: { type: String, require: true },
        id: { type: String, required: true }
      }],
      ingresos: [{
        title: { type: String, require: true },
        priceIngreso: { type: String, require: true },
        id: { type: String, required: true }
      }]

    }]
  })
  finanzasTracker: Array<{
    mes: string,
    egresos: Array<{
      title: string,
      priceEgreso: string,
      id: string
    }>,
    ingresos: Array<{
      title: string,
      priceIngreso: string,
      id: string
    }>
  }> = [];

  @Prop({
    required: true,
    trim: true,
    type: [{
      mes: { type: String, required: true },
      deporte: [{
        title: { type: String, require: true },
        tiempo: { type: String, require: true },
        id: { type: String, required: true },
        calorias: { type: String, require: true },
        fecha: { type: String, require: true }
      }]
    }]
  })
  saludTracker: Array<{
    mes: string,
    deporte: Array<{
      title: string,
      tiempo: string,
      fecha: string,
      calorias: string,
      id: string
    }>

  }>;

  @Prop({
    required: true,
    trim: true,
    type: [{
      title: { type: String, require: true },
      id: { type: String, require: true }
    }]
  })
  notas: Array<{
    title: string,
    id: string
  }>;

}

export const usersSchema = SchemaFactory.createForClass(UsersLifeTrackerApp);