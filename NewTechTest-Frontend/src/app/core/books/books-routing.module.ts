import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'detail-book', component: DetailBookComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book', component: EditBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
