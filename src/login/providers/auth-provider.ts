import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginModel } from '../models/login-model';
import { User } from '../../user/interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterModel } from '../models/register-model';
import { Workspace } from '../../workspace/interfaces/workspace.interface';
import { Area } from '../../workspace/interfaces/area.interface';
import { SHA512 } from 'crypto-js';

@Injectable()
export class AuthProvider {
    private readonly jwtService: JwtService;
    private readonly userModel: Model<User>;
    private readonly workspaceModel: Model<Workspace>;
    private readonly areaModel: Model<Area>;

    constructor(
        @InjectModel('User') userModel: Model<User>,
        @InjectModel('Workspace') workspaceModel: Model<Workspace>,
        @InjectModel('Area') areaModel: Model<Area>,
        jwtService: JwtService,
    ) {
        this.userModel = userModel;
        this.workspaceModel = workspaceModel;
        this.areaModel = areaModel;
        this.jwtService = jwtService;
    }

    public async register(register: RegisterModel): Promise<User> {
        const workspace = await this.workspaceModel.create({
            name: register.workspace,
            nameURL: register.workspace,
            removed: false,
        } as Workspace);

        const area = await this.areaModel.create({
            name: register.workspace,
            removed: false,
            workspace_id: workspace.id,
        } as Area);

        const user = await this.userModel.create({
            email: register.email,
            password: SHA512(register.password),
            fullName: register.fullName,
            removed: false,
            displayName: register.displayName,
            workspace_id: workspace.id,
            areas: [area],
        } as User);

        delete user.password;
        delete user.areas;
        delete user.removed;

        return user;
    }

    public async signIn(login: LoginModel): Promise<string> {
        login.password = SHA512(login.password);
        const user = await this.userModel.findOne(login);

        if (user == null) {
            throw new UnauthorizedException();
        }

        return this.jwtService.sign({
            displayName: user.displayName,
            fullName: user.fullName,
            workspace_id: user.workspace_id,
            email: user.email,
        });
    }
}
