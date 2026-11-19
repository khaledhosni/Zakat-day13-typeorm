import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'ecommerce_training',
      schema: 'shop',
      autoLoadEntities: true,
      synchronize: false,
      poolSize: 10,
    })
    
    ,ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
