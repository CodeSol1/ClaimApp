import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { ClaimComponent } from './claim/claim.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';
import { PloicylistComponent } from './policy/ploicylist/ploicylist.component';
import { AddpolicyComponent } from './policy/addpolicy/addpolicy.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';




const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "claim", component: ClaimComponent },
  { path: "policylist", component: PloicylistComponent },
  { path: "addpolicy", component: AddpolicyComponent },
  { path: "profile", component: MyprofileComponent },
  { path: "alluser", component: UserdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
