/** @format */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  binding: any;
  constructor() {}

  ngOnInit() {}
  handleClick(e) {
    // console.log(this.binding);
    this.binding = !this.binding;
  }
}
