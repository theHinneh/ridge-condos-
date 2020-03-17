/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"]
})
export class RoomsComponent implements OnInit {
  backGround = "url(/assets/images/presidential.jpeg)";

  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
