/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-the-facilities",
  templateUrl: "./the-facilities.component.html",
  styleUrls: ["./the-facilities.component.scss"]
})
export class TheFacilitiesComponent implements OnInit {
  backGround = "url(/assets/images/about.jpeg)";

  modalTitle = "About Facility";
  modalLaunch = "Read More";
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
