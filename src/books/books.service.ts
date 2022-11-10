import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    try {
      const createdBook = new this.bookModel(createBookDto);
      return createdBook.save();
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return this.bookModel.find().exec();
  }

  findOne(id: number) {
    return this.bookModel.find().exec();
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
