import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //formularios y todo lo que lleve consigo, funciones ng
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//My components
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RestUserService } from './services/restUser/rest-user.service';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
