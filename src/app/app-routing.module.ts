import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { ClaimComponent } from './claim/claim.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';
import { PloicylistComponent } from './policy/ploicylist/ploicylist.component';

import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { CanactivateGuard } from './guard/canactivate.guard';
import { AddpolicyComponent } from './admin/policy/addpolicy/addpolicy.component';
// import { CanActivateGuard } from './gaurds/can-activate.guard';





const routes: Routes = [
  {
    path: "admindashboard", component: AdminmainComponent, canActivate: [CanactivateGuard],
    children: [
      { path: "alluser", component: UserdetailsComponent, canActivate: [CanactivateGuard] },

     
    ]
  },
  { path: "addpolicy", component: AddpolicyComponent },
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "claim", component: ClaimComponent },
  { path: "policylist", component: PloicylistComponent },

  { path: "profile", component: MyprofileComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
