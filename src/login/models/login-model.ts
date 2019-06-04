import { IsNotEmpty, IsEmail } from 'class-validator';

export class LoginModel {
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    public password: string;
}
