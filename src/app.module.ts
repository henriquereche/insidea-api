import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkspaceModule } from './workspace/workspace.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI,
      }),
    }),
    WorkspaceModule,
    UserModule,
    LoginModule,
  ],
  providers: [AppService],
})
export class AppModule {}
