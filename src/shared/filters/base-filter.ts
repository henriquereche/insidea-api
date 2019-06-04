import { IsNumberString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class BaseFilter {
    @IsNumberString()
    @ApiModelProperty({ in: 'query', required: false })
    public page: string = '1';

    @IsNumberString()
    @ApiModelProperty({ in: 'query', required: false })
    public pageSize: string = '10';

    public getFilter(): object {
        const obj = Object.assign({}, this);
        Object.keys(obj).forEach(key => {
            if (!obj[key]) { delete obj[key]; }
        });

        delete obj.page;
        delete obj.pageSize;

        return obj;
    }

    public getPage(): number {
        const page = parseInt(this.page, 10);
        return page < 1 ? 1 : page;
    }

    public getPageSize(): number {
        const pageSize = parseInt(this.pageSize, 10);
        return pageSize < 1 ? 1 : pageSize > 100 ? 100 : pageSize;
    }

    public getSkipCount(): number {
        return this.getPageSize() * (this.getPage() - 1);
    }
}
