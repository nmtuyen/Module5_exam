import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL);
  }
  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(API_URL + `/${id}`);
  }
  updateBook(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(API_URL + `/${id}`, book);
  }
  createNew(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book);
  }
  deleteById(id: string) {
    return this.httpClient.delete<Book>(API_URL + `/${id}`);
  }
}
