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
    trim: true,
    type: [{
      mes: { type: String, required: true },
      egresos: [{
        title: { type: String, require: true },
        priceEgresos: { type: Number, require: true },
        id: { type: String, required: true }
      }],
      ingresos: [{
        title: { type: String, require: true },
        priceIngresos: { type: Number, require: true },
        id: { type: String, required: true }
      }]

    }]
  })
  finanzasTracker: Array<{
    mes: string,
    egresos: Array<{
      title: string,
      priceEgresos: number,
      id: string
    }>,
    ingresos: Array<{
      title: string,
      priceIngresos: number,
      id: string
    }>
  }> = [];

  // @Prop({
  //   required: true,
  //   trim: true
  // })
  // saludTracker: string;

  // @Prop({
  //   required: true,
  //   trim: true
  // })
  // notas: string;

}

export const usersSchema = SchemaFactory.createForClass(UsersLifeTrackerApp);