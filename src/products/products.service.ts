import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { ProductInput } from './graphql/input-products.input';
import { ProductType } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async findOne(id: string): Promise<ProductType> {
    return await this.productModel.findOne({ _id: id });
  }

  async findAll(): Promise<ProductType[]> {
    return await this.productModel.find();
  }

  async create(createProductDto: ProductInput): Promise<ProductType> {
    const newProduct = new this.productModel(createProductDto);
    return await newProduct.save();
  }

  async update(id: string, product: Product): Promise<ProductType> {
    return await this.productModel.findOneAndUpdate({ _id: id }, product);
  }

  async delete(id: string): Promise<ProductType> {
    return await this.productModel.findOneAndDelete({ _id: id });
  }
}
