import { IsNotEmpty } from 'class-validator';

export class UpdateWorkspace {
    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    public nameURL: string;

    @IsNotEmpty()
    public removed: boolean;
}
