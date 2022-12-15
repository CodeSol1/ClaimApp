// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { MainComponent } from './src/app/main/main.component'
// import { RegisterComponent } from './src/app/Auth/register/register.component';
// import { LoginComponent } from './src/app/Auth/login/login.component';
// import { ClaimComponent } from './src/app/claim/claim.component';
// import { UserdetailsComponent } from './src/app/admin/userdetails/userdetails.component';
// import { PloicylistComponent } from './src/app/policy/ploicylist/ploicylist.component';
// import { PolicydetailsComponent } from './src/app/policy/policydetails/policydetails.component';
// import { MyprofileComponent } from './src/app/profile/myprofile/myprofile.component';
// import { AdminmainComponent } from './src/app/admin/adminmain/adminmain.component';
// import { CanactivateGuard } from './src/app/guard/canactivate.guard';
// import { AddpolicyComponent } from './src/app/admin/policy/addpolicy/addpolicy.component';
// import { ApplypolicyComponent } from './src/app/policy/applypolicy/applypolicy.component';
// import { EditpolicyComponent } from './src/app/admin/policy/editpolicy/editpolicy.component';
// import { AuthGuard } from './src/app/guard/auth.guard';
// import { MypolicyComponent } from './src/app/mypolicy/mypolicy.component';
// import { MyclaimsComponent } from './src/app/myclaims/myclaims.component';
// import { LoginGuard } from './src/app/guard/login.guard';
// import { PolicyholdersComponent } from './src/app/admin/policyholders/policyholders.component';
// import { UserclaimsComponent } from './src/app/admin/userclaims/userclaims.component';
// // import { CanActivateGuard } from './gaurds/can-activate.guard';





// const routes: Routes = [
//   {
//     path: "admindashboard", component: AdminmainComponent, canActivate: [CanactivateGuard], children: [

//       { path: "userdetails", component: UserdetailsComponent, canActivate: [CanactivateGuard] },
//       { path: "userclaims", component: UserclaimsComponent },
//       { path: "policyholder", component: PolicyholdersComponent },
//       { path: "addpolicy", component: AddpolicyComponent },


//     ]
//   },


//   { path: "", component: MainComponent },
//   { path: "register", component: RegisterComponent },
//   { path: "login", component: LoginComponent },
//   { path: "mypolicy/claim", component: ClaimComponent, canActivate: [AuthGuard] },
//   { path: "policylist", component: PloicylistComponent },
//   { path: "profile", component: MyprofileComponent, },
//   { path: 'PolicyList/details/:id', component: PolicydetailsComponent },
//   { path: 'PolicyList/apply/:id', component: ApplypolicyComponent, canActivate: [AuthGuard] },
//   { path: 'PolicyList/edit/:id', component: EditpolicyComponent },
//   { path: 'mypolicy', component: MypolicyComponent, canActivate: [LoginGuard] },
//   { path: "claim", component: ClaimComponent, canActivate: [AuthGuard] },
//   { path: "myclaim", component: MyclaimsComponent, canActivate: [LoginGuard], },


// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
