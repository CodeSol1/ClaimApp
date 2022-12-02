import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authservice: AuthService, private _router: Router) { }
  user = {
    role: 1
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this._authservice.isUserAuthenticated() == true && route.data[0] == this.user.role)
      return true;
    else {
      alert("you are not logged in")
      this._router.navigate(["login"]);
      return false;
    }
    return true;
  }
  
}
