import { Controller, Get, Param, Put, Body, Query, ParseIntPipe } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Workspace } from './interfaces/workspace.interface';
import { UpdateWorkspace } from './models/update-workspace';
import { Area } from './interfaces/area.interface';
import { ObjectID } from 'mongodb';
import { WorkspaceFilter } from './filters/workspace-filter';
import { AreaFilter } from './filters/area-filter';

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
    public get(@Query() filter: WorkspaceFilter): Promise<Workspace[]> {
        return this.workpaceModel
            .find(filter.getFilter())
            .skip(filter.getSkipCount())
            .limit(filter.getPageSize())
            .exec();
    }

    @Get(':id')
    public getById(@Param('id') id: string): Promise<Workspace> {
        return this.workpaceModel
            .findById(id)
            .exec();
    }

    @Put(':id')
    public async put(@Param('id') id: string, @Body() model: UpdateWorkspace): Promise<Workspace> {
        return this.workpaceModel
            .findByIdAndUpdate(id, model)
            .exec();
    }

    @Get(':id/areas')
    public getAreas(@Param('id') id: string, @Query() filter: AreaFilter): Promise<Area[]> {
        return this.areaModel.find({
            ...filter.getFilter(),
            workspace_id: new ObjectID(id),
        }).skip(filter.getSkipCount())
            .limit(filter.getPageSize())
            .exec();
    }

    @Get(':id/areas/:areaId')
    public getAreaById(@Param('id') id: string, @Param('areaId') areaId: string): Promise<Area> {
        return this.areaModel.findOne({
            workspace_id: new ObjectID(id),
            _id: new ObjectID(areaId),
        }).exec();
    }
}
