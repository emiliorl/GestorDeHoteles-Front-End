import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { CreateHotelComponent } from './components/create-hotel/create-hotel.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProfileHotelComponent } from './components/profile-hotel/profile-hotel.component';
import { ProfileServiceComponent } from './components/profile-service/profile-service.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesComponent } from './components/services/services.component';
import { ListReservationComponent } from './components/list-reservation/list-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'Home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'listUsers', component: ListUsersComponent},
  {path: 'creatAdmin', component: CreateAdminComponent},
  {path: 'createHotel', component: CreateHotelComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'profileHotel', component: ProfileHotelComponent},
  {path: 'profileService', component: ProfileServiceComponent},
  {path: 'listReservation', component: ListReservationComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'createReservation', component: CreateReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
