import { Module } from '@nestjs/common';
import { AreaController } from './area.controller';
import { AreaSchema } from '../schemas/area.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Area', schema: AreaSchema }]),
  ],
  controllers: [AreaController],
})
export class AreaModule {}
