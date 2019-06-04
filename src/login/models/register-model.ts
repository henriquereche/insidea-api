import { IsEmail, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterModel {
    @IsEmail()
    @ApiModelProperty()
    public email: string;

    @IsString()
    @ApiModelProperty()
    public password: string;

    @IsString()
    @ApiModelProperty()
    public workspace: string;

    @IsString()
    @ApiModelProperty()
    public fullName: string;

    @IsString()
    @ApiModelProperty()
    public displayName?: string;
}
