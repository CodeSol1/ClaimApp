import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authservice: AuthService, private _router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let role = this._authservice.getrole();
    let Role = Number(role);
    let role2 = this._authservice.getrole();
    let Role2 = Number(role2);


    if (this._authservice.isUserAuthenticated() == true && (Role == 1 || Role2 == 2))
      return true;
    else {

      alert("you are not logged in !")
      this._router.navigate([""]);
      return false;
    }
  }
  
}
