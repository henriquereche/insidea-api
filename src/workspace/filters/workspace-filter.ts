import { BaseFilter } from '../../shared/filters/base-filter';

export class WorkspaceFilter extends BaseFilter {
    public name: string;
    public nameURL: string;
    public removed: boolean;
}
