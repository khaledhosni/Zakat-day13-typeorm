import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { Product } from './product.entity.js';
import { UploadPhotoDto } from './upload-photo.dto.js';

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

    @Post(':id/photo')
    uploadPhoto(id: string, body: UploadPhotoDto) {
        return this.productsService.uploadPhoto(id, body.photoBase64);
    }
}
