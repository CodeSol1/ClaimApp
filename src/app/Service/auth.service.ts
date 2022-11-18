import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  url = "https://localhost:44395/api/User";

  registeruser( User: any) {
    console.log("In service" + User);
    return this._http.post(this.url, User);
  }

}
