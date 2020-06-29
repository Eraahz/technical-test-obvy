import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apibooks.service';
import { ActivatedRoute } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  states: Array<{ state: string, description: string }> = [
    {
      state: "retourne", description: "Le livre a été retourné"
    },
    {
      state: "prete", description: "Le livre a été prêté"
    }]

  datePret: string;
  name: string;
  comment: string;

  book: any;

  selectedBookOption: any;

  retrievedData = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private datePipe: DatePipe) { }

  selectChangeHandler(event: any) {
    this.selectedBookOption = event.target.value;
  }

  ngOnInit(): void {

    var id = this.route.snapshot.params['id'];

    this.apiService.SearchById(id)
      .subscribe((data: ApiService) => {
        this.book = data['items']['0'],
          localStorage.setItem('book id: ' + id, JSON.stringify(this.book))

      })

    //load data

    let bookSituationInLocalStorage = localStorage.getItem('bookSituation id: ' + id)

    if (!(bookSituationInLocalStorage === '{"state":"retourne"}' || bookSituationInLocalStorage === null)) {
      this.retrievedData = JSON.parse(bookSituationInLocalStorage)[0]
      let tDate = this.datePipe.transform(this.retrievedData['date'], 'yyyy-MM-dd');

      this.selectedBookOption = this.retrievedData['state'];
      this.datePret = tDate;
      this.name = this.retrievedData['name'];
      this.comment = this.retrievedData['comment'];
    }
    else {
      this.selectedBookOption = 'retourne';
    }
  }

  //save data

  save() {
    let id = this.route.snapshot.params['id'];

    localStorage.removeItem('bookSituation id: ' + id);

    if (this.selectedBookOption == 'retourne') {
      localStorage.setItem('bookSituation id: ' + id, JSON.stringify({ "state": this.selectedBookOption }))
    }
    else if (this.selectedBookOption == 'prete') {

      let formattedDate = formatDate(this.datePret, 'yyyy-MM-dd', 'fr-FR')

      let bookSituation = [
        {
          "state": this.selectedBookOption,
          "date": formattedDate,
          "name": this.name,
          "comment": this.comment
        }];

      localStorage.setItem('bookSituation id: ' + id, JSON.stringify(bookSituation))


    }
    alert("Les données ont bien été enregistrées!");
  }
}
