import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  author: number;

  @Prop()
  price: number;

  @Prop()
  isPublished: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
