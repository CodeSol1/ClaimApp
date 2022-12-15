import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthService } from './Service/auth.service'
import { FormsModule } from '@angular/forms';


import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { ReactiveFormsModule } from '@angular/forms';

import { ClaimComponent } from './claim/claim.component';
import { PolicyService } from './Service/policy.service';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { MyclaimsComponent } from './profile/myclaims/myclaims.component';
import { MypoliciesComponent } from './profile/mypolicies/mypolicies.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { MypolicyComponent } from './mypolicy/mypolicy.component';
import { UserdetailsComponent } from './Admin/userdetails/userdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { PloicylistComponent } from './policy/ploicylist/ploicylist.component';
import { PolicydetailsComponent } from './policy/policydetails/policydetails.component';
import { UserclaimsComponent } from './Admin/userclaims/userclaims.component';
import { PolicyholdersComponent } from './Admin/policyholders/policyholders.component';
import { AdminmainComponent } from './Admin/adminmain/adminmain.component';
import { EditpolicyComponent } from './Admin/policy/editpolicy/editpolicy.component';
import { AddpolicyComponent } from './Admin/policy/addpolicy/addpolicy.component';
import { ApplypolicyComponent } from './policy/applypolicy/applypolicy.component';
import { MyallclaimsComponent } from './myallclaims/myallclaims.component';



@NgModule({
  declarations: [
   
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,

    ClaimComponent,
    UserdetailsComponent,
    PloicylistComponent,
    PolicydetailsComponent,
    MyprofileComponent,
    // MyclaimsComponent,
    MypoliciesComponent,
    AddpolicyComponent,
    EditpolicyComponent,
    AdminmainComponent,
    FooterComponent,
    HeaderComponent,
    ApplypolicyComponent,
    MypolicyComponent,
    PolicyholdersComponent,
    UserclaimsComponent,
    UserdetailsComponent,
    MyallclaimsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [AuthService, PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
