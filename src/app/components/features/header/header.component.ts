/** @format */

import { Component, OnInit } from '@angular/core';
import { faInbox, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  binding: any;
  faPhone = faPhone;
  faInbox = faInbox;
  constructor() {}

  ngOnInit() {}
  handleClick(e) {
    // console.log(this.binding);
    this.binding = !this.binding;
  }
}
