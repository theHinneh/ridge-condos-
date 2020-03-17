/** @format */

import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  backGround = "url(/assets/images/front.jpeg)";
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    AOS.init();
  }
}
