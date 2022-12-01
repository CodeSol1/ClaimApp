import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';
import { PloicylistComponent } from './policy/ploicylist/ploicylist.component';
import { PolicydetailsComponent } from './policy/policydetails/policydetails.component';
import { PolicyService } from './Service/policy.service';

import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { MyclaimsComponent } from './profile/myclaims/myclaims.component';
import { MypoliciesComponent } from './profile/mypolicies/mypolicies.component';

import { ApplypolicyComponent } from './policy/applypolicy/applypolicy.component';
import { AddpolicyComponent } from './admin/policy/addpolicy/addpolicy.component';
import { RemovepolicyComponent } from './admin/policy/removepolicy/removepolicy.component';
import { EditpolicyComponent } from './admin/policy/editpolicy/editpolicy.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
    MyclaimsComponent,
    MypoliciesComponent,
    AddpolicyComponent,
    RemovepolicyComponent,
     EditpolicyComponent,
     AdminmainComponent,
     FooterComponent,
     HeaderComponent,
     ApplypolicyComponent


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
