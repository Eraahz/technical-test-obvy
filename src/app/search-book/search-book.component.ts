import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apibooks.service';


@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss'],
})
export class SearchBookComponent implements OnInit {

  books: any;

  constructor(private apiService: ApiService) { };

  onSearch(term: string) {
    this.apiService.SearchBooks(term)
      .subscribe((data: ApiService) => this.books = data['items']
      )
    this.apiService.SearchBooks(term)
      .subscribe((data: ApiService) => {
        console.log(this.books);
      });
  }

  ngOnInit(): void {

  }
}