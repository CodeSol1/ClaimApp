import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private _router: Router) { }

  toLogin() {
    
    this._router.navigate(["login"]);
  }

  toAdminDashboard() {
    
    this._router.navigate(["admindashboard"]);
  }
  
  toUserDashboard() {
   
    this._router.navigate([""]);
  }
}
