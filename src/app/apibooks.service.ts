import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  SearchBooks(term) {
    const baseUrl  = encodeURI("https://www.googleapis.com/books/v1/volumes?q=" + term)
    return this.http.get(baseUrl);
  }

  SearchById(id){
    const baseUrl = encodeURI("https://www.googleapis.com/books/v1/volumes?q=id:" + id + "&maxResults=1");
    return this.http.get(baseUrl);
  }

  
}