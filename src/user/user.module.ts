import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkspaceSchema } from '../schemas/workspace.schema';
import { AreaSchema } from '../schemas/area.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Workspace', schema: WorkspaceSchema },
      { name: 'Area', schema: AreaSchema },
    ]),
  ],
  controllers: [UserController],
})
export class UserModule {}
