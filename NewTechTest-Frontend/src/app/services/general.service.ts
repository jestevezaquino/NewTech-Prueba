import { Injectable } from '@angular/core';
import { Book } from '../core/books/books.component';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  BookId: any;
  BookInfo: any;

  constructor() { }

  setBookId(bookId: any){
    this.BookInfo = bookId;
  }

  getBookId(){
    return this.BookInfo;
  }

  setBookInfo(book: Book){
    this.BookInfo = book;
  }

  getBookInfo(){
    return this.BookInfo;
  }
}
