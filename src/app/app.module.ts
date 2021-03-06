/** @format */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForTheCondosComponent } from './components/facilities/facilities.component';
import { CheckInComponent } from './components/features/check-in/check-in.component';
import { CoverComponent } from './components/features/cover/cover.component';
import { FooterComponent } from './components/features/footer/footer.component';
import { HeaderComponent } from './components/features/header/header.component';
import { ModalModule } from './components/features/modal/modal.module';
import { RoomsCorouselComponent } from './components/features/rooms-corousel/rooms-corousel.component';
import { HomeComponent } from './components/home/home.component';
import { LoungeComponent } from './components/lounge/lounge.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DinningComponent } from './components/pages/dinning/dinning.component';
import { GoogleMapComponent } from './components/pages/google-map/google-map.component';
import { LeisureComponent } from './components/pages/leisure/leisure.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { ReservationFormComponent } from './components/pages/reservation-form/reservation-form.component';
import { RoomAvailabilityComponent } from './components/pages/room-availability/room-availability.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { TheFacilitiesComponent } from './components/pages/the-facilities/the-facilities.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AuthGuardService } from './components/services/auth-guard.service';
import { AuthService } from './components/services/auth.service';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    HomeComponent,
    CheckInComponent,
    SliderComponent,
    LoungeComponent,
    ForTheCondosComponent,
    ReservationComponent,
    FooterComponent,
    AboutUsComponent,
    RoomsComponent,
    ContactComponent,
    TheFacilitiesComponent,
    ReservationFormComponent,
    RoomsCorouselComponent,
    OffersComponent,
    LeisureComponent,
    DinningComponent,
    GoogleMapComponent,
    RoomAvailabilityComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
