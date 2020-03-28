import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [BookService],
  exports: [BookComponent]
})
export class BookModule { }
