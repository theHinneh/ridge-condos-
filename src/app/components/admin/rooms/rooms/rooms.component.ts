/** @format */

import { Component, OnInit } from '@angular/core';
import { NewRoom } from './form.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class AdminRoomsComponent implements OnInit {
  title = 'Rooms';
  modalLaunch = 'Add Room';
  modalTitle = 'New Room';

  public roomForm: NewRoom;

  constructor() {
    this.roomForm = new NewRoom();
  }

  ngOnInit() {}
}
