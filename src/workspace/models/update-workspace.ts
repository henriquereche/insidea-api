import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateWorkspace {
    @IsNotEmpty()
    @ApiModelProperty()
    public name: string;

    @IsNotEmpty()
    @ApiModelProperty()
    public nameURL: string;

    @IsNotEmpty()
    @ApiModelProperty()
    public removed: boolean;
}
