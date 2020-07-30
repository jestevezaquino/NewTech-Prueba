import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private client:HttpClient) {}

  GetBooks(){
    return this.client.get("http://booksapi.somee.com/api/books");
  }

  GetBookById(id:number){
    return this.client.get("http://booksapi.somee.com/api/books/"+id);
  }

  AddBook(book:any){
    return this.client.post("http://booksapi.somee.com/api/books", book);
  }

  EditBook(id:number, book:any){
    return this.client.put("http://booksapi.somee.com/api/books/"+id, book);
  }

  DeleteBook(id:number){
    return this.client.delete("http://booksapi.somee.com/api/books/"+id);
  }
}
