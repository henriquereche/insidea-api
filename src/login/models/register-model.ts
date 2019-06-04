import { IsEmail, IsString } from 'class-validator';

export class RegisterModel {
    @IsEmail()
    public email: string;

    @IsString()
    public password: string;

    @IsString()
    public workspace: string;

    @IsString()
    public fullName: string;

    @IsString()
    public displayName?: string;
}
