import { Controller, Post, Body } from '@nestjs/common';
import { AuthProvider } from './providers/auth-provider';
import { LoginModel } from './models/login-model';
import { RegisterModel } from './models/register-model';
import { User } from '../user/interfaces/user.interface';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
    private readonly authProvider: AuthProvider;

    constructor(authProvider: AuthProvider) {
        this.authProvider = authProvider;
    }

    @Post('register')
    @ApiUseTags('Login')
    @ApiOperation({title: 'Register new user and workspace'})
    public register(@Body() register: RegisterModel): Promise<User> {
        return this.authProvider.register(register);
    }

    @Post()
    @ApiUseTags('Login')
    @ApiOperation({title: 'Login'})
    public login(@Body() login: LoginModel): Promise<string> {
        return this.authProvider.signIn(login);
    }
}
