import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

const apiPrefix = 'api/v1';
const development = process.env.NODE_ENV !== 'production';

if (development) {
  dotenv.config();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix(apiPrefix);

  SwaggerModule.setup(
    'docs',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Insidea API')
        .setVersion('1.0')
        .setBasePath(apiPrefix)
        .build(),
    ),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
