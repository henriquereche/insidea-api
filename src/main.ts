import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const development = process.env.NODE_ENV !== 'production';
  if (development) {
    dotenv.config();
  }

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
