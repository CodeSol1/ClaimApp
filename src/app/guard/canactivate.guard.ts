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
  
  constructor(private _authservice: AuthService, private _router: Router) { }

  
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("inside gaurd");
   

    let role = this._authservice.getrole();
    let Role= Number(role);


    if (this._authservice.isUserAuthenticated() == true && Role==2)
      return true;
    else {
    
      alert("you are not an admin")
      this._router.navigate([""]);
      return false;
    }
    // return false;

    // route.data[0] == this.user.role
      //  && 
     
      // alert("you are not an admin")
    //   this._router.navigate(["login"]);
      
    // }
  }

}
