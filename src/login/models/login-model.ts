import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginModel {
    @IsEmail()
    @ApiModelProperty()
    public email: string;

    @IsNotEmpty()
    @ApiModelProperty()
    public password: string;
}
