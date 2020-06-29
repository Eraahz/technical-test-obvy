import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Injectable()
export class SearchService {
  baseUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms;
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + term)
  }
}