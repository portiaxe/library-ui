import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegistrationModule } from './registration/registration.module';
import { BookModule } from './book/book.module';
import { BorrowerModule } from './borrower/borrower.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    DashboardModule,
    BookModule,
    BorrowerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
