import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './apibooks.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRouting } from './app-routing';

import { registerLocaleData, DatePipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRouting,
    BrowserAnimationsModule,
  ],
  providers: [
    ApiService,
    DatePipe,
    { 
      provide: LOCALE_ID, 
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
