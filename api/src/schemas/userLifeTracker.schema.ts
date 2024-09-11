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

}

export const usersSchema = SchemaFactory.createForClass(UsersLifeTrackerApp);