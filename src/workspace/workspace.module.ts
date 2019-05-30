import { Module } from '@nestjs/common';
import { WorkspaceController } from './workspace.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkspaceSchema } from '../schemas/workspace.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Workspace', schema: WorkspaceSchema }]),
  ],
  controllers: [WorkspaceController],
})
export class WorkspaceModule {}
