import { Controller, Post, Body } from '@nestjs/common';
import { AuthProvider } from './providers/auth-provider';
import { LoginModel } from './models/login-model';
import { RegisterModel } from './models/register-model';
import { User } from '../user/interfaces/user.interface';

@Controller('login')
export class LoginController {
    private readonly authProvider: AuthProvider;

    constructor(authProvider: AuthProvider) {
        this.authProvider = authProvider;
    }

    @Post('register')
    public register(@Body() register: RegisterModel): Promise<User> {
        return this.authProvider.register(register);
    }

    @Post()
    public login(@Body() login: LoginModel): Promise<string> {
        return this.authProvider.signIn(login);
    }
}
