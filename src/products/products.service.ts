import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository.js';
import { Product } from './product.entity.js';

@Injectable()
export class ProductsService {


    constructor(private readonly productsRepository: ProductsRepository) {}


    findAll() {
        return this.productsRepository.findAll();
    }

    update(id: string, data: Partial<Product>) {
        return this.productsRepository.update(id, data);
    }
}
