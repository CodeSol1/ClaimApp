import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private _http: HttpClient) { }

  apiurl: string = "https://localhost:44309";




  getAllPolicies(): Observable<Policy[]> {
    return this._http.get<Policy[]>(this.apiurl + '/api/Policy')

  }

  addPolicy(addPolicyRequest: Policy): Observable<Policy> {
    // console.log(addPolicyRequest);
    // console.log("Inside service " + addPolicyRequest);
    return this._http.post<Policy>(this.apiurl + '/api/Policy', addPolicyRequest);
  }
  getPolicy(id: any): Observable<Policy> {
    return this._http.get<Policy>(this.apiurl + '/api/Policy/' + id);
  }
  getuserpoliyc(id: any): Observable<Policy[]> {
    return this._http.get<Policy[]>("https://localhost:44377/api/policyholders/" + id);
  }

  updatePolicy(id: any, updatePolicy: Policy): Observable<Policy> {
    return this._http.put<Policy>(this.apiurl + '/api/Policy/' + id, updatePolicy);

  }

  deletePolicy(id: number): Observable<Policy> {
    return this._http.delete<Policy>(this.apiurl + '/api/Policy/' + id);
  }

}
