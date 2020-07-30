import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private client:HttpClient) {}

  GetBooks(){
    return this.client.get("https://localhost:44334/api/books");
  }

  GetBookById(id:number){
    return this.client.get("https://localhost:44334/api/books/"+id);
  }

  AddBook(book:any){
    return this.client.post("https://localhost:44334/api/books", book);
  }

  EditBook(id:number, book:any){
    return this.client.put("https://localhost:44334/api/books/"+id, book);
  }

  DeleteBook(id:number){
    return this.client.delete("https://localhost:44334/api/books/"+id);
  }
}
