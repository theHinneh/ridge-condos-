/** @format */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/admin/booking/booking.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/admin/login/login.component';
import { LogoutComponent } from './components/admin/logout/logout.component';
import { AdminRoomsComponent } from './components/admin/rooms/rooms/rooms.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { ReservationFormComponent } from './components/pages/reservation-form/reservation-form.component';
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
  {
    path: 'admin/booking',
    component: BookingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/rooms',
    component: AdminRoomsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin/logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class AppRoutingModule {}
