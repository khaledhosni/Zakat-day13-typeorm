
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity.js';


@Injectable()
export class ProductsRepository {

  constructor(
    @InjectRepository(Product)
    private readonly db: Repository<Product>,
  ) {}

  // Use case 1: Get all products
  findAll() {
    return this.db.find();
  }

  // Use case 2: Update product
  async update(id: string, data: Partial<Product>) {

    const product = await this.db.findOneBy({
      productId: id,
    });

    if (!product) {
      return null;
    }

    Object.assign(product, data);

    return this.db.save(product);
  }




  async uploadPhoto(id: string, photoBase64: string) {

  const result = await this.db.update(
    { productId: id },
    { photoBase64: photoBase64 },
  );

  return (result.affected ?? 0) > 0;
}
}
