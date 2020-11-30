import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductType } from './dto/create-product.dto';
import { ProductInput } from './graphql/input-products.input';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [ProductType])
  async findAll(): Promise<ProductType[]> {
    return await this.productsService.findAll();
  }

  @Query(() => ProductType)
  async findOne(@Args('id') id: string): Promise<ProductType> {
    return await this.productsService.findOne(id);
  }

  @Mutation(() => ProductType)
  async create(@Args('input') input: ProductInput): Promise<ProductInput> {
    return await this.productsService.create(input);
  }

  @Mutation(() => ProductType)
  async update(
    @Args('id') id: string,
    @Args('input') input: ProductInput,
  ): Promise<ProductInput> {
    return await this.productsService.update(id, input);
  }

  @Mutation(() => ProductType)
  async delete(@Args('id') id: string): Promise<ProductInput> {
    return await this.productsService.delete(id);
  }
}
