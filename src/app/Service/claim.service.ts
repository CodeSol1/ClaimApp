import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  url = "https://localhost:44311/api/claim"

  constructor(private _http: HttpClient) { }

  Getcliam() {
    return this._http.get<any[]>("https://localhost:44311/api/claim")
  }
  GetcliambyID(id:number) {
    return this._http.get<any[]>("https://localhost:44311/api/claim/" +id)
  }

  updatestatus(id: number, _claim: Claim) {
    console.log("https://localhost:44311/api/claim/" + id)
    return this._http.put("https://localhost:44311/api/claim/" + id, _claim)
  }

}
