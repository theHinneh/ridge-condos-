/** @format */

import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class ForTheCondosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
