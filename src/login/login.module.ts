import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { AuthProvider } from './providers/auth-provider';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkspaceSchema } from '../schemas/workspace.schema';
import { AreaSchema } from '../schemas/area.schema';
import { UserSchema } from '../schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Workspace', schema: WorkspaceSchema },
      { name: 'Area', schema: AreaSchema },
      { name: 'User', schema: UserSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [LoginController],
  providers: [AuthProvider],
  exports: [PassportModule],
})
export class LoginModule {}
