/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit {
  backGround = "url(/assets/images/about.jpeg)";
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
