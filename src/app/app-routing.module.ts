import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { ClaimComponent } from './claim/claim.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';
import { PloicylistComponent } from './policy/ploicylist/ploicylist.component';
import { PolicydetailsComponent } from './policy/policydetails/policydetails.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { CanactivateGuard } from './guard/canactivate.guard';
import { AddpolicyComponent } from './admin/policy/addpolicy/addpolicy.component';
import { ApplypolicyComponent } from './policy/applypolicy/applypolicy.component';
import { EditpolicyComponent } from './admin/policy/editpolicy/editpolicy.component';
// import { CanActivateGuard } from './gaurds/can-activate.guard';





const routes: Routes = [
  {
    path: "admindashboard", component: AdminmainComponent, canActivate: [CanactivateGuard],
    children: [
      { path: "alluser", component: UserdetailsComponent, canActivate: [CanactivateGuard] },

     
    ]
  },
  {path:"admin",component:AdminmainComponent},
  { path: "addpolicy", component: AddpolicyComponent },
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "claim", component: ClaimComponent },
  { path: "policylist", component: PloicylistComponent },
  { path: "profile", component: MyprofileComponent },
  { path:'PolicyList/details/:id',component:PolicydetailsComponent},
  {path:'PolicyList/apply/:id',component:ApplypolicyComponent},
  {path:'PolicyList/edit/:id',
  component:EditpolicyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
