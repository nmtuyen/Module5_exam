import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from './book/list-book/list-book.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {DeleteBookComponent} from './book/delete-book/delete-book.component';

const routes: Routes = [
  {
    path: 'books/list',
    component: ListBookComponent
  },
  {
    path: 'books/edit/:id',
    component: EditBookComponent
  },
  {
    path: 'books/create',
    component: CreateBookComponent
  },
  {
    path: 'books/delete/:id',
    component: DeleteBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
