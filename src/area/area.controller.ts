import { Controller, Param, Get } from '@nestjs/common';
import { Area } from './interfaces/area.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('areas')
export class AreaController {
    private readonly areaModel: Model<Area>;

    constructor(@InjectModel('Area') areaModel: Model<Area>) {
        this.areaModel = areaModel;
    }

    @Get()
    public get(): Promise<Area[]> {
        return this.areaModel.find().exec();
    }

    @Get(':id')
    public getById(@Param('id') id: string): Promise<Area> {
        return this.areaModel.findById(id).exec();
    }
}
