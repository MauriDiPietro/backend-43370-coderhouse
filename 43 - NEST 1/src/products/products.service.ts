import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
products: Product[];
constructor(){
  this.products = [];
}

  create(createProduct: Product) {
    this.products.push(createProduct);
    return createProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const prod = this.products.find(p => p.id === id);
    if(!prod) return false;
    else return prod;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
