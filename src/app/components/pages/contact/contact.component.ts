/** @format */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  backGround = 'url(/assets/images/contact.jpeg)';

  constructor() {}

  ngOnInit() {}
}
