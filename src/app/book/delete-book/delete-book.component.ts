import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id = 0;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id)
      this.getBookById(this.id);
    });
  }
  // tslint:disable-next-line:typedef
  getBookById(id: number) {
    console.log(id);
    this.bookService.getBookById(id).subscribe(book => {
      // this.book = new FormGroup({
      //   title: new FormControl(book.title),
      //   author: new FormControl(book.author),
      //   description: new FormControl(book.description)
      // });
      this.book.patchValue(book);
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(id: number) {
    // @ts-ignore
    console.log(id)
    // const book1 = this.book.value;
    // tslint:disable-next-line:no-shadowed-variable
    this.bookService.deleteById(id).subscribe(() => {
      alert('xóa thành công');
      this.router.navigate(['/books/list']);
    });
  }

}
