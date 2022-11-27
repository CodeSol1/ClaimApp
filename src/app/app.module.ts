import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AuthService} from './Service/auth.service'


import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { ClaimComponent } from './claim/claim.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    ClaimComponent,
    UserdetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers:  [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
