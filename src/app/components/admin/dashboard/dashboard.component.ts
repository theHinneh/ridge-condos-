import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  date = '15th September, 2020';

  // tslint:disable-next-line: no-shadowed-variable
  constructor() {

  }

  ngOnInit() {
  }

}
