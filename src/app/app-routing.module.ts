import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { ClaimComponent } from './claim/claim.component';
import { AuthGuard } from './guard/auth.guard';
import { MypolicyComponent } from './mypolicy/mypolicy.component';
// import { MyclaimsComponent } from './myclaims/myclaims.component';
import { LoginGuard } from './guard/login.guard';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';

import { AdminmainComponent } from './Admin/adminmain/adminmain.component';
import { CanactivateGuard } from './guard/canactivate.guard';
import { AddpolicyComponent } from './Admin/policy/addpolicy/addpolicy.component';

import { EditpolicyComponent } from './Admin/policy/editpolicy/editpolicy.component';

import { PolicyholdersComponent } from './Admin/policyholders/policyholders.component';
import { UserclaimsComponent } from './Admin/userclaims/userclaims.component';
import { UserdetailsComponent } from './Admin/userdetails/userdetails.component';
import { PloicylistComponent } from './policy/ploicylist/ploicylist.component';
import { PolicydetailsComponent } from './policy/policydetails/policydetails.component';
import { ApplypolicyComponent } from './policy/applypolicy/applypolicy.component';
import { MyallclaimsComponent } from './myallclaims/myallclaims.component';







const routes: Routes = [
  {
    path: "admindashboard", component: AdminmainComponent, canActivate: [CanactivateGuard], children: [
]
  },
  { path: "userdetails", component: UserdetailsComponent, canActivate: [CanactivateGuard] },
  { path: "policyholder", component: PolicyholdersComponent, canActivate: [CanactivateGuard] },
  { path: "addpolicy", component: AddpolicyComponent, canActivate: [CanactivateGuard] },

  { path: "userclaims", component: UserclaimsComponent, canActivate: [CanactivateGuard] },

  
  { path: "myallclaim", component: MyallclaimsComponent },
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "mypolicy/claim", component: ClaimComponent, canActivate: [AuthGuard] },
  { path: "policylist", component: PloicylistComponent },
  { path: "profile", component: MyprofileComponent, },
  { path: 'PolicyList/details/:id', component: PolicydetailsComponent },
  { path: 'PolicyList/apply/:id', component: ApplypolicyComponent, canActivate: [AuthGuard] },
  { path: 'PolicyList/edit/:id', component: EditpolicyComponent },
  { path: 'mypolicy', component: MypolicyComponent, canActivate: [LoginGuard] },
  { path: "claim", component: ClaimComponent, canActivate: [AuthGuard] },
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
