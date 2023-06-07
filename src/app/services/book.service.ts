import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Book, BookResults, Item, itemToBook } from '../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API = 'https://www.googleapis.com/books/v1/volumes'
  constructor(
    private httpClient: HttpClient
  ) { }

  search(input: string): Observable<Book[]> {
    const params = new HttpParams().append('q',input)
    return this.httpClient.get<BookResults>(this.API, { params }).pipe(
      map((response) => response.items ? response.items.map(item => itemToBook(item)) : [])
    )
  }
}
