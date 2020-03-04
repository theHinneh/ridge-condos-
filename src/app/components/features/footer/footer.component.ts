/** @format */

import { Component, OnInit } from '@angular/core';
import {
  faAddressCard,
  faInbox,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faPhone = faPhone;
  faAddressCard = faAddressCard;
  faInbox = faInbox;
  constructor() {}

  ngOnInit() {}
}
