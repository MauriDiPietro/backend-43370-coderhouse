import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProduct: Product) {
    const prod = this.productsService.create(createProduct);
    if(prod) return prod
    else throw new HttpException('Error creating product', 404)
  }

  @Get()
  findAll() {
    const prods = this.productsService.findAll();
    if(prods.length) return prods;
    else throw new HttpException('No products found', 404)
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
   const prod = this.productsService.findOne(+id);
   if(!prod) throw new HttpException('No product found', 404);
   else return prod
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
