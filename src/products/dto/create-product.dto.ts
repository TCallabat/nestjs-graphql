import { Field, Float, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class ProductType {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field(() => Float)
  readonly price: number;

  @Field({ nullable: true })
  readonly description?: string;

  @Field()
  readonly categorie: string;
}
