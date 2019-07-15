import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  dateMessage: string;
  constructor() {
    setInterval(() => {
    // tslint:disable-next-line: prefer-const
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000);
   }

  ngOnInit() {
  }

}
