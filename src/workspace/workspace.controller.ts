import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Workspace } from './interfaces/workspace.interface';
import { UpdateWorkspace } from './models/update-workspace';

@Controller('workspaces')
export class WorkspaceController {
    private readonly workpaceModel: Model<Workspace>;

    constructor(@InjectModel('Workspace') workpaceModel: Model<Workspace>) {
        this.workpaceModel = workpaceModel;
    }

    @Get()
    public get(): Promise<Workspace[]> {
        return this.workpaceModel.find().exec();
    }

    @Get(':id')
    public getById(@Param('id') id: string): Promise<Workspace> {
        return this.workpaceModel.findById(id).exec();
    }

    @Put(':id')
    public put(@Param('id') id: string, @Body() model: UpdateWorkspace): Promise<Workspace> {
        return this.workpaceModel.replaceOne({ _id: id }, model).exec();
    }
}
