/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"]
})
export class OffersComponent implements OnInit {
  backGround = "url(/assets/images/presidential.jpeg)";
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
