import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  message: string = new Date().toDateString();
  constructor() { }

  ngOnInit() {
  }

}
