import { Component, OnInit } from '@angular/core';
import { Book } from '../model/model';
import { BookService } from './book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();

  }

  private loadBooks(): void {
    this.bookService.getBooks()
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.router.navigateByUrl('/server-error')
        }
      )
  }

}
