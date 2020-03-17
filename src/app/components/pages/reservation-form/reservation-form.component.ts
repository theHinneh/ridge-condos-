/** @format */

import { Component, OnInit } from "@angular/core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-reservation-form",
  templateUrl: "./reservation-form.component.html",
  styleUrls: ["./reservation-form.component.scss"]
})
export class ReservationFormComponent implements OnInit {
  backGround = "url(/assets/images/about.jpeg)";
  faCalendar = faCalendar;
  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), "d", 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      date.equals(this.toDate) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate, input: string): NgbDate {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
