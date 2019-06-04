import { BaseFilter } from '../../shared/filters/base-filter';
import { ApiModelProperty } from '@nestjs/swagger';

export class WorkspaceFilter extends BaseFilter {
    @ApiModelProperty({ in: 'query', required: false })
    public name: string;

    @ApiModelProperty({ in: 'query', required: false })
    public nameURL: string;

    @ApiModelProperty({ in: 'query', required: false })
    public removed: boolean;
}
