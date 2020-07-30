import { BookService } from './../../services/book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

export interface Book{
  id: number,
  title: string,
  description: string,
  pageCount: number,
  excerpt: string,
  publishDate: Date
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Title', 'Description', 'PageCount', 'Excerpt', 'PublishDate', 'Options'];
  dataSource: any;
  books: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private GS:GeneralService, private BS:BookService, private router:Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.GetBooks();
    this.dataSource.filterPredicate = (data:any, filter:string) => data.id.toString().trim().toLowerCase().indexOf(filter) != -1;
  }

  GetBooks(){
    this.BS.GetBooks().subscribe((data:any)=>{
      this.books = data;
      this.dataSource.data = this.books;
    });
  }

  GoToBookDetails(id:number){
    this.GS.setBookId(id)
    this.router.navigate(["/detail-book"]);
  }

  GoToAddBook(id:number){
    this.GS.setBookId(id)
    this.router.navigate(["/detail-book"]);
  }

  GoToEditBook(book:Book){
    this.GS.setBookInfo(book)
    this.router.navigate(["/edit-book"]);
  }

  GoToDeleteBook(id:number){
    this.GS.setBookId(id)
    this.router.navigate(["/detail-book"]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
