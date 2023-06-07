import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { EMPTY, Observable, catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap, throwError } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Book } from 'src/app/models/book.interface';

const DELAY = 1000
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  searchBar = new FormControl()
  errorMessage: string = ''

  constructor(
    private bookService: BookService
  ) { }

  booksFound$ = this.searchBar.valueChanges.pipe(
    filter((input) => input.length >= 3),
    debounceTime(DELAY),
    distinctUntilChanged(),
    tap(() => console.log("começa a fazer requisição")),
    switchMap<string, Observable<Book[]>>((typedValue) => {
      const bookList = this.bookService.search(typedValue)
      return bookList
    })
  )

  totalBooksFound$ = this.booksFound$.pipe(
    map((books) => books.length)
  )

}



