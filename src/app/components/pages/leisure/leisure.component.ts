/** @format */

import { Component, OnInit } from '@angular/core';
import {
  faWifi,
  faBus,
  faWheelchair,
  faSwimmingPool,
  faDumbbell
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent implements OnInit {
  faWifi = faWifi;
  faBus = faBus;
  faWheelchair = faWheelchair;
  faSwimmingPool = faSwimmingPool;
  faDumbbell = faDumbbell;
  backGround = 'url(/assets/images/about.jpeg)';
  constructor() {}

  ngOnInit() {}
}
