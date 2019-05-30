import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Workspace } from './interfaces/workspace.interface';
import { UpdateWorkspace } from './models/update-workspace';
import { Area } from './interfaces/area.interface';

@Controller('workspaces')
export class WorkspaceController {
    private readonly workpaceModel: Model<Workspace>;
    private readonly areaModel: Model<Area>;

    constructor(
        @InjectModel('Workspace') workpaceModel: Model<Workspace>,
        @InjectModel('Area') areaModel: Model<Area>,
    ) {
        this.workpaceModel = workpaceModel;
        this.areaModel = areaModel;
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

    @Get(':id/areas')
    public getAreas(@Param('id') id: string): Promise<Area[]> {
        return this.areaModel.find({ workspace_id: id }).exec();
    }

    @Get(':id/areas/:areaId')
    public getAreaById(@Param('id') id: string, @Param('areaId') areaId: string): Promise<Area> {
        return this.areaModel.findOne({ workspace_id: id, _id: areaId }).exec();
    }
}
