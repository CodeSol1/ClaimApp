import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  /**
   *
   */
  constructor(private _authservice: AuthService, private _router: Router) {


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("inside gaurd");
    if (this._authservice.isUserAuthenticated() == true)
      return true;
    else {
      this._router.navigate(["login"]);
      return false;
    }
  }

}
