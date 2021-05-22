import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //formularios y todo lo que lleve consigo, funciones ng
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//My components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RestUserService } from './services/restUser/rest-user.service';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { ServicesComponent } from './components/services/services.component';
import { RestServiceService } from './services/restService/rest-service.service';
import { CreateHotelComponent } from './components/create-hotel/create-hotel.component';
import { RestHotelService } from './services/restHotel/rest-hotel.service';
import { HotelComponent } from './components/hotel/hotel.component';
import { ProfileHotelComponent } from './components/profile-hotel/profile-hotel.component';
import { ProfileServiceComponent } from './components/profile-service/profile-service.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ListUsersComponent,
    CreateAdminComponent,
    ServicesComponent,
    CreateHotelComponent,
    HotelComponent,
    ProfileHotelComponent,
    ProfileServiceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestUserService, RestServiceService, RestHotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
