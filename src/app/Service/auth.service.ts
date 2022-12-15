import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Login, User } from 'src/app/models/user'
import { Claim } from '../models/user'
import { map } from 'rxjs';
import { CheckboxControlValueAccessor } from '@angular/forms';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  url1 = "https://localhost:44306/api/user/CreateUser";

  url2 = "https://localhost:44306/api/user/LoginUser";
  url3 = "https://localhost:44311/api/claim/AddClaim";



  registeruser(users: User) {

    return this._http.post(this.url1, users, {
      responseType: 'text',
    });
  }

  GetUser() {
    return this._http.get<any[]>("https://localhost:44306/api/user")
  }

  loginUser(login: Login) {
    return this._http.post(this.url2, login)
  }

  
  CreateClaim(claim: Claim) {

    return this._http.post(this.url3, claim)
  }


  setBearcerToken(token: any) {
    // this method should store the authentication token to local storage
    localStorage.setItem("bearerToken", token);
  }

  getBearerToken() {
    // this method should return the authentication token stored in local storage
    return localStorage.getItem("bearerToken")
  }

  // removeBearerToken() {
  //   // this method should clear the token stored in local storage
  //   localStorage.removeItem("bearerToken")
  // }
  removeBearerToken() {
    // this method should clear the token stored in local storage
    localStorage.clear()
  }

  getEmail() {
    return localStorage.getItem("email")
  }
  
  getrole() {
    return localStorage.getItem("role")
  }
  getuserid() {
    return localStorage.getItem("userid")
  }


  isUserAuthenticated(): boolean {
    // this method should validate authenticity of a user - accepts the token string 
    // and returns Promise of authenticated status of user with boolean value

    console.log("In ser" + this.getBearerToken());

    
    if (this.getBearerToken() != null) {
      return true;
    }
    else {
      return false;
    }
  }
    // CheckRole( role : number) : nmbert
    // { 
    //   return role;
            
    // }

  }








