/** @format */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ModalModule } from '../features/modal/modal.module';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminRoomsComponent } from './rooms/rooms/rooms.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    AdminRoomsComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ModalModule
  ],
  exports: [
    SidenavComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    AdminRoomsComponent,
    BookingComponent
  ],
  providers: [JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }]
})
export class AdminModule {}
