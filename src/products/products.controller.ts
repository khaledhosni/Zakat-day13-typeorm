import { Controller, Get, Patch } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { Product } from './product.entity.js';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}


    
    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Patch(':id')
    update(id: string, data: Partial<Product>) {
        return this.productsService.update(id, data);
    }
}
