/** @format */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/admin/booking/booking.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { EventsComponent } from './components/admin/events/events.component';
import { IssuesComponent } from './components/admin/issues/issues.component';
import { LoginComponent } from './components/admin/login/login.component';
import { LogoutComponent } from './components/admin/logout/logout.component';
import { RepairComponent } from './components/admin/repair/repair/repair.component';
import { AdminRoomsComponent } from './components/admin/rooms/rooms/rooms.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ReservationFormComponent } from './components/pages/reservation-form/reservation-form.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { TheFacilitiesComponent } from './components/pages/the-facilities/the-facilities.component';
import { AuthGuardService as AuthGuard } from './components/services/auth-guard.service';
import { AuthService } from './components/services/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
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
    path: 'admin/events',
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/employees',
    component: EmployeesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/repair',
    component: RepairComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/issues',
    component: IssuesComponent,
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
