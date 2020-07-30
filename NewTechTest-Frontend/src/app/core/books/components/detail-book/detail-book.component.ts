import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../books.component';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  BookId: any;
  BookInfo: Book;

  constructor(private GS:GeneralService, private BS:BookService) { }

  ngOnInit(): void {
    this.BookId = this.GS.getBookId();
    this.BS.GetBookById(this.BookId).subscribe((book:Book)=>{
      this.BookInfo = book;
    }, (error) => {
      console.log(error);
    });
  }
}
