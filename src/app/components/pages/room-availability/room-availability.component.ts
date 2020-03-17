/** @format */

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-room-availability",
  templateUrl: "./room-availability.component.html",
  styleUrls: ["./room-availability.component.scss"]
})
export class RoomAvailabilityComponent implements OnInit {
  response: any;
  loader: boolean;
  errorMessage: string;
  error: boolean;
  noRooms: boolean;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loader = true;
    this.error = false;
    this.apiService.getRooms().subscribe(
      res => {
        this.response = res;
        if (this.response.length === 0) {
          this.loader = false;
          this.errorMessage = "Sorry, no rooms available";
          this.noRooms = true;
        }
        this.loader = false;
        this.noRooms = false;
        // console.log(this.response);
      },
      error => {
        this.errorMessage = "Sorry, no rooms available";
        this.error = true;
        this.loader = false;
      }
    );
  }
}
