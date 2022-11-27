import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { ClaimComponent } from './claim/claim.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';




const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "claim", component: ClaimComponent },
  { path: "alluser", component: UserdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
