import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// class Customer {
//   id: number;
//   name: string;
//   nodes: [];
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // customersObservable: Observable<Customer[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    // this.customersObservable = this.httpClient.get<Customer[]>("http://localhost:3000/surveys").pipe(tap(entities => {

    // }));
    // this.customersObservable.subscribe(res => console.log(res));


  }
}
