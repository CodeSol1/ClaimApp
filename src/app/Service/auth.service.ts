import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user'
import { Login } from 'src/app/models/user'
import { Claim } from '../models/user'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  url1 = "https://localhost:44306/api/user/CreateUser";

  url2 = "https://localhost:44306/api/user/LoginUser";
  url3 = "https://localhost:44398/api/claim/AddClaim";

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


}


