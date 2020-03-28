import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { of, throwError } from 'rxjs';
import { Book } from '../model/model';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';fail
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let bookService: BookService;
  let router: Router;

  const books: Book[] = [{
    id: 'asdf',
    title: 'Alamat ng Gubat',
    author: 'Bob Ong',
    publisher: 'VS Print',
    code: 'CX123',
    available: true
  }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        BookService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    bookService = fixture.debugElement.injector.get(BookService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('should create', () => {
    spyOn(bookService, 'getBooks').and.returnValue(of(books));
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(bookService).toBeTruthy();
  });

  it('should redirect to error page', () => {
    const error = {status: 500};
    spyOn(bookService, 'getBooks').and.returnValue(throwError(error));
    spyOn(router, 'navigateByUrl');
    fixture.detectChanges();
    expect(bookService.getBooks).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalled();

  });
});
