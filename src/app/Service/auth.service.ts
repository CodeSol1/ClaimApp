import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user'
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  url = "https://localhost:44306/api/User/CreateUser";

  registeruser(user: any) {
 
    return this._http.post(this.url, user, {
      responseType: 'text',
    });
  }

  
  
}


