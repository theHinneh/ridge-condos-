/** @format */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DinningComponent } from './components/pages/dinning/dinning.component';
import { GoogleMapComponent } from './components/pages/google-map/google-map.component';
import { LeisureComponent } from './components/pages/leisure/leisure.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { ReservationFormComponent } from './components/pages/reservation-form/reservation-form.component';
import { RoomAvailabilityComponent } from './components/pages/room-availability/room-availability.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { TheFacilitiesComponent } from './components/pages/the-facilities/the-facilities.component';
import { AuthGuardService as AuthGuard } from './components/services/auth-guard.service';
import { AuthService } from './components/services/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'facilities', component: TheFacilitiesComponent },
  { path: 'reservation', component: ReservationFormComponent },
  { path: 'leisure', component: LeisureComponent },
  { path: 'dinning', component: DinningComponent },
  { path: 'location', component: GoogleMapComponent },
  { path: 'room-availability', component: RoomAvailabilityComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class AppRoutingModule {}
