/** @format */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinning',
  templateUrl: './dinning.component.html',
  styleUrls: ['./dinning.component.scss']
})
export class DinningComponent implements OnInit {
  backGround = 'url(/assets/images/about.jpeg)';
  viewHeight = '70vh !important';
  constructor() {}

  ngOnInit() {}
}
