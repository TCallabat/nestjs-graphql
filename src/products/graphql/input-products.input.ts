import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field()
  readonly name: string;

  @Field(() => Float)
  readonly price: number;

  @Field({nullable:true})
  readonly description?: string;

  @Field()
  readonly categorie: string;
}
