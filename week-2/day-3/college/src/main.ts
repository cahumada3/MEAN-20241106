import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * need to install npm i class-validator class-transformer
   * this allows our app to validate users input 
   * and adding the whitelist option is used to strip out properties that do not correspond to the object's class
   * it will also eliminate relations from incoming objects
   */
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
