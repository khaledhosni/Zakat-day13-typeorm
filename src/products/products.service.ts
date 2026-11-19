import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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


   async uploadPhoto(id: string, photoBase64: string) {

  if (typeof photoBase64 !== 'string') {
    throw new BadRequestException('Photo is required');
  }

  // Accept JPEG, PNG and WebP images
  const match = photoBase64.match(
    /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/,
  );

  if (!match) {
    throw new BadRequestException('Invalid Base64 image');
  }

  const imageBuffer = Buffer.from(match[2], 'base64');

  // Maximum image size: 2 MB
  if (imageBuffer.length > 2 * 1024 * 1024) {
    throw new BadRequestException('Image is too large');
  }

  if (imageBuffer.length === 0) {
    throw new BadRequestException('Image is empty');
  }

        let updated= await this.productsRepository.uploadPhoto(id, photoBase64);

        if(!updated){
            throw new NotFoundException('Product not found');
        }

         return {
    message: 'Photo uploaded successfully',
    productId: id,
  };
    }
}
