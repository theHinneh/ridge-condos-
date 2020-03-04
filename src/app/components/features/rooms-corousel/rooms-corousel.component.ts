/** @format */

import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-rooms-corousel',
  templateUrl: './rooms-corousel.component.html',
  styleUrls: ['./rooms-corousel.component.scss']
})
export class RoomsCorouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
