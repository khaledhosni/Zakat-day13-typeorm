import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow HTML pages to call the API
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  });
    app.use(json({ limit: '4mb' }));
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
