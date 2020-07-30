import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { GeneralService } from 'src/app/services/general.service';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  Form:FormGroup;
  BookId: number;
  BookInfo:any;
  Correct:boolean = false;

  constructor(private fb:FormBuilder, private GS:GeneralService, private BS:BookService) { }

  ngOnInit() : void {

    this.BookId = this.GS.getBookInfo().id;

    this.Form = this.fb.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      pageCount: ['',[Validators.required]],
      excerpt: ['',[Validators.required]],
      publishDate: ['']
    });

    this.Form.controls.id.disable();

    this.BS.GetBookById(this.BookId).subscribe((data:any)=>{
      this.Form.controls.id.setValue(data.id);
      this.Form.controls.title.setValue(data.title);
      this.Form.controls.description.setValue(data.description);
      this.Form.controls.pageCount.setValue(data.pageCount);
      this.Form.controls.excerpt.setValue(data.excerpt);
      this.Form.controls.publishDate.setValue(data.publishDate);
    });
  }

  EditBook(){
    this.BS.EditBook(this.Form.value.id, this.Form.value).subscribe((data)=>{
      this.Correct = true;
      setTimeout(()=>{
        this.Correct = false;
      },3000);
    }, (error)=>{
      console.log(error);
    });
  }
}
